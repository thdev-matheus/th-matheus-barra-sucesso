import { Container, InputContainer } from "./styles";

export default function CheckBox({ label, register, name, ...rest }) {
  return (
    <Container>
      <div>{label}</div>
      <InputContainer>
        <input type="checkbox" {...register(name)} {...rest} />
      </InputContainer>
    </Container>
  );
}
