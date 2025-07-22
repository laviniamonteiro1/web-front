"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import type { Reservation } from "../types/ReservationType"
import { apiReservation } from "../services"
import { useAuth } from "./AuthContext"

interface ReservationContextType {
  reservations: Reservation[]
  isLoading: boolean
  loadReservations: () => Promise<void>
}

export const ReservationContext = createContext<ReservationContextType>({
  reservations: [],
  isLoading: true,
  loadReservations: async () => {},
})

interface ReservationProviderProps {
  children: ReactNode
}

export const ReservationProvider = ({ children }: ReservationProviderProps) => {
  const { currentUser } = useAuth()
  const [reservations, setReservations] = useState<Reservation[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const loadReservations = async () => {
    try {
      setIsLoading(true)
      const data = await apiReservation.getAll()
      setReservations(data)
    } catch (error) {
      console.error("Erro ao carregar reservas:", error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (currentUser) {
      loadReservations()
    }
  }, [currentUser])

  return (
    <ReservationContext.Provider value={{ reservations, isLoading, loadReservations }}>
      {children}
    </ReservationContext.Provider>
  )
}

export function useReservation() {
  const context = useContext(ReservationContext)
  if (!context) {
    throw new Error("useReservation deve ser usado dentro de ReservationProvider")
  }
  return context
}
