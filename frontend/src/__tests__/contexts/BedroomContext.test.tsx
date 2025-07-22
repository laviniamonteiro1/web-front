import { render, screen, act } from "@testing-library/react"
import { BedroomProvider, BedroomContext } from "@/contexts/BedroomContext"
import { vi } from "vitest"
import { useContext } from "react"
import { quartos as mockQuartos } from "@/mocks/BedroomMock"

vi.useFakeTimers()

const TestComponent = () => {
  const { quartos, isLoading, getQuartoById } = useContext(BedroomContext)
  const quarto = getQuartoById("0")

  return (
    <div>
      <p>Loading: {isLoading.toString()}</p>
      <p>Quartos count: {quartos.length}</p>
      <p>Quarto 0: {quarto ? quarto.title : "Não encontrado"}</p>
    </div>
  )
}

beforeEach(() => {
  vi.clearAllTimers()
})

describe("BedroomProvider", () => {
  it("define isLoading como false após carregamento", async () => {
    render(
      <BedroomProvider>
        <TestComponent />
      </BedroomProvider>
    )

    await act(async () => {
      await vi.runAllTimersAsync()
    })

    expect(screen.getByText("Loading: false")).toBeInTheDocument()
  })

  it("carrega os quartos do mock", async () => {
    render(
      <BedroomProvider>
        <TestComponent />
      </BedroomProvider>
    )

    await act(async () => {
      await vi.runAllTimersAsync()
    })

    expect(screen.getByText(`Quartos count: ${mockQuartos.length}`)).toBeInTheDocument()
  })

  it("getQuartoById retorna o quarto correto", async () => {
    render(
      <BedroomProvider>
        <TestComponent />
      </BedroomProvider>
    )

    await act(async () => {
      await vi.runAllTimersAsync()
    })

    expect(screen.getByText(`Quarto 0: ${mockQuartos[0].title}`)).toBeInTheDocument()
  })
})
