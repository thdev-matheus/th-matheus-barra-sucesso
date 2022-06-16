import { Container } from "./styles";

export default function Button(
  { children, whiteSchema = false, ...rest },
  onClick
) {
  return (
    <Container type="button" {...rest}>
      {children}
    </Container>
  );
}
