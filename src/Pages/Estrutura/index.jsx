import Input from "../../components/Input";
import Button from "../../components/Button";
import { Container } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../schema/schema";
import CheckBox from "../../components/CheckBox";
import TextArea from "../../components/TextArea";
import { useHistory } from "react-router-dom";

localStorage.clear();

export default function Estrutura() {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    reValidateMode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data) => {
    data.documentacao = data.documentacao ? "Sim" : "Não";

    data.foruns = data.foruns ? "Sim" : "Não";

    data.codigo === ""
      ? delete data.codigo
      : (data.codigo = data.codigo.replace(/ /g, "⠀").split("\n"));

    data.observacoes === ""
      ? delete data.observacoes
      : (data.observacoes = data.observacoes.split("\n"));

    data.tentativa = data.tentativa.split("\n");

    data.descricao = data.descricao.split("\n");
    console.log(data);

    localStorage.setItem("@barraSucesso:pergunta", JSON.stringify(data));

    history.push("/pergunta");
  };

  return (
    <>
      <Container onSubmit={handleSubmit(onSubmitFunction)}>
        <h1>Estrutura</h1>

        <Input
          label="Atividade/entrega *"
          placeholder="S2-06"
          register={register}
          name="atividade"
          error={errors.atividade?.message}
        />

        <Input
          label="Origem da dúvida *"
          placeholder="JS, CSS, HTML, React, GIT, Linux, VS Code..."
          register={register}
          name="origem"
          error={errors.origem?.message}
        />

        <Input
          label="Assunto *"
          placeholder="DOM, classes, função, componentes, módulos..."
          register={register}
          name="assunto"
          error={errors.assunto?.message}
        />

        <div className="checkBoxContainer">
          <CheckBox
            label="Procurou na Documentação?"
            register={register}
            name="documentacao"
          />

          <CheckBox
            label="Procurou em fóruns, blogs, outros?"
            register={register}
            name="foruns"
          />
        </div>

        <TextArea
          height="15rem"
          label="O que tentei fazer: *"
          placeholder="Conte-nos a sua lógica e aquilo que tentou fazer para cumprir ela"
          register={register}
          name="tentativa"
          error={errors.tentativa?.message}
        />

        <TextArea
          height="30rem"
          label="Descrição da Dúvida: *"
          placeholder="Conte-nos a sua dificuldade"
          register={register}
          name="descricao"
          error={errors.descricao?.message}
        />

        <TextArea
          height="30rem"
          label="Bloco de código:"
          placeholder="Embora não seja obrigatório, é altamente recomendado que você nos mostre um pouco do seu código pois assim podemos à primeira vista, detectar o erro e assim ter um atendimento mais acertivo."
          register={register}
          name="codigo"
          error={errors.codigo?.message}
        />

        <TextArea
          height="15rem"
          label="Outras observações:"
          placeholder="Caso tenha mais alguma observação, conte-nos aqui."
          register={register}
          name="observacoes"
          error={errors.observacoes?.message}
        />

        <Button type="submit">Finalizar</Button>
      </Container>
    </>
  );
}
