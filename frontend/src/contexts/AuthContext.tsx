"use client"

import { createContext, useState, useEffect, type ReactNode, useContext } from "react"
import type { UserProps } from "../types/UserType"
import  apiUser  from "../services/api/users"
export interface AuthContextType {
  currentUser: UserProps | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
}

export const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  isLoading: true,
  login: async () => {},
  register: async () => {},
  logout: () => {},
})

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<UserProps | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser")
    const token = localStorage.getItem("token")

    if (storedUser && token) {
      setCurrentUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    try {
      const response = await apiUser.login(email, password)

      if (response.access_token) {
        localStorage.setItem("token", response.access_token)
      } else {
        console.warn("Resposta de login não contém access_token:", response);
      }

      const userResponse = await apiUser.getCurrentUser(); 

      if (userResponse && userResponse.id) { 
        setCurrentUser(userResponse); 
        localStorage.setItem("currentUser", JSON.stringify(userResponse));
      } else {
        console.warn("Não foi possível obter os dados do usuário após o login:", userResponse);
      }

    } catch (e) {
      console.error(e)
      throw new Error("Falha no login. Verifique suas credenciais.")
    }
  }

  const register = async (name: string, email: string, password: string) => {
    try {
      await apiUser.register({ name, email, password, role: "user" })

      await login(email, password) 

    } catch (e) {
      console.error(e)
      throw new Error("Falha no registro. Tente novamente.")
    }
  }

  const logout = async () => {
    try {
      await apiUser.logout()
    } catch (e) {
      console.error(e)
    } finally {
      setCurrentUser(null)
      localStorage.clear()
    }
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isLoading,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth deve ser usado com AuthProvider")
  }
  return context
}