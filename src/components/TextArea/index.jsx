import { Container, InputContainer } from "./styles";

export default function TextArea({
  height,
  label,
  register,
  name,
  error = "",
  ...rest
}) {
  return (
    <Container>
      <div>
        {label} {!!error && <span> - {error}</span>}
      </div>
      <InputContainer height={height} isErrored={!!error}>
        <textarea {...register(name)} {...rest} />
      </InputContainer>
    </Container>
  );
}
