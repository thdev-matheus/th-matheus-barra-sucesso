import * as yup from "yup";

export const schema = yup.object().shape({
  atividade: yup.string().required("Campo obrigatório"),
  origem: yup.string().required("Campo obrigatório"),
  assunto: yup.string().required("Campo obrigatório"),
  documentacao: yup.boolean(),
  foruns: yup.boolean(),
  tentativa: yup.string().required("Campo obrigatório"),
  descricao: yup.string().required("Campo obrigatório"),
  codigo: yup.string(),
  observacoes: yup.string(),
});
