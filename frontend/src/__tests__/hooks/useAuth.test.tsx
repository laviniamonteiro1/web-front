import { renderHook } from "@testing-library/react"
import { useAuth } from "@/hooks/useAuth"
import { AuthProvider } from "@/contexts/AuthContext"
import { describe, it, expect } from "vitest"

describe("useAuth", () => {
  it("retorna o contexto corretamente quando usado dentro do AuthProvider", () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    })

    expect(result.current).toHaveProperty("currentUser")
    expect(result.current).toHaveProperty("isLoading")
    expect(result.current).toHaveProperty("login")
    expect(result.current).toHaveProperty("register")
    expect(result.current).toHaveProperty("logout")
  })
})
