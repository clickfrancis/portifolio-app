import { render, screen, fireEvent } from "@testing-library/react";
import CardComponent from "./index";

const mockProps = {
  img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  titulo: "Título do Card",
  categoria: "Categoria Exemplo",
  resumo: "Este é um resumo de exemplo para o card.",
  saibaMais: "Saiba Mais",
  href: "https://www.exemplo.com",
};

describe("Card Component", () => {
  test("Renderizando CardComponent com os props", () => {
    render(<CardComponent {...mockProps} />);

    expect(screen.getByText("Título do Card")).toBeInTheDocument();

    expect(screen.getByText("Categoria Exemplo")).toBeInTheDocument();

    expect(
      screen.getByText("Este é um resumo de exemplo para o card.")
    ).toBeInTheDocument();

    const button = screen.getByText("Saiba Mais");
    expect(button).toBeInTheDocument();
  });

  test("Verificando comportandomento do botão CardComponent com os props", () => {
    render(<CardComponent {...mockProps} />);
    const openSpy = jest.spyOn(window, "open").mockImplementation(() => null);

    const button = screen.getByText("Saiba Mais");

    fireEvent.click(button);
    expect(openSpy).toHaveBeenCalledWith("https://www.exemplo.com", "_blank");

    openSpy.mockRestore();
  });
});
