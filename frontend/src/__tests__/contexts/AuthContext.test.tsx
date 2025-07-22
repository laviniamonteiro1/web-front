import { render, screen, act } from "@testing-library/react"
import { AuthProvider, AuthContext } from "@/contexts/AuthContext"
import { vi } from "vitest"
import { useContext } from "react"
import { mockUsers } from "@/mocks/UserMock"

vi.useFakeTimers()

const TestComponent = () => {
  const { currentUser, isLoading, login, logout, register } = useContext(AuthContext)

  return (
    <div>
      <p>Loading: {isLoading.toString()}</p>
      <p>User: {currentUser ? currentUser.name : "None"}</p>
      <button data-testid="login" onClick={() => login("test@email.com", "123456")}>Login</button>
      <button
        data-testid="register"
        onClick={() => register("Novo Usuário", `new${Date.now()}@email.com`, "abc123")}
      >
        Register
      </button>
      <button data-testid="logout" onClick={() => logout()}>Logout</button>
    </div>
  )
}

beforeEach(() => {
  localStorage.clear()
  mockUsers.length = 0
  mockUsers.push({
    id: "1",
    name: "Usuário Teste",
    email: "test@email.com",
    password: "123456",
    role: "user"
  })
})

afterEach(() => {
  vi.clearAllTimers()
})

describe("AuthProvider", () => {
  it("define isLoading como false após o carregamento", async () => {
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    )

    await act(async () => {
      await vi.runAllTimersAsync()
    })

    expect(screen.getByText("Loading: false")).toBeInTheDocument()
  }, 15000)

  it("realiza login com sucesso", async () => {
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    )

    await act(async () => {
      await vi.runAllTimersAsync()
    })

    const btn = screen.getByTestId("login")
    await act(async () => {
      btn.click()
      vi.advanceTimersByTime(500)
    })

    expect(screen.getByText(/User:/)).not.toHaveTextContent("None")
  })

  it("realiza registro com sucesso", async () => {
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    )

    await act(async () => {
      await vi.runAllTimersAsync()
    })

    const btn = screen.getByTestId("register")
    await act(async () => {
      btn.click()
      vi.advanceTimersByTime(500)
    })

    expect(screen.getByText(/User: Novo Usuário/)).toBeInTheDocument()
  })

  it("realiza logout corretamente", async () => {
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    )

    await act(async () => {
      await vi.runAllTimersAsync()
    })

    const btnRegister = screen.getByTestId("register")
    await act(async () => {
      btnRegister.click()
      vi.advanceTimersByTime(500)
    })

    const btnLogout = screen.getByTestId("logout")
    await act(async () => {
      btnLogout.click()
    })

    expect(screen.getByText(/User: None/)).toBeInTheDocument()
    expect(localStorage.getItem("currentUser")).toBeNull()
  })
})
