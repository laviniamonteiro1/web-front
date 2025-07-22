import { useGoBack } from "../../hooks/useGoBack";
import { StyledButtonWrapper, StyledButton } from "./styles";

export function BackButton() {
  const goBack = useGoBack();

  return (
    <StyledButtonWrapper>
      <StyledButton onClick={goBack}>
        ← Voltar
      </StyledButton>
    </StyledButtonWrapper>
  );
}
