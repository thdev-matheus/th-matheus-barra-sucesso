import { BoxApresentacao, Container, ContainerPergunta } from "./styles";

export default function Pergunta() {
  const pergunta = JSON.parse(localStorage.getItem("@barraSucesso:pergunta"));
  console.log(pergunta);
  return (
    <Container>
      <h1>Conseguimos!</h1>

      <BoxApresentacao>
        <span>
          Hey, dev! Aqui está a sua pergunta formatada e prontinha para ser
          enviada.
        </span>
        <span>
          Aqui você esncontrará duas mensagens, a da pergunta e outra para
          informações adicionais, assim fica fácil saber o que colocar em cada
          campo lá no slack.
        </span>
        <span>
          Então vamos lá, basta agora copiar, colar e aguardar um ótimo
          atendimento!
        </span>
        <span>Bons estudos</span>
      </BoxApresentacao>

      <h2>Pergunta</h2>

      <ContainerPergunta>
        <div>
          {!!pergunta.atividade && (
            <p>
              <span>Atividade/entrega =&gt; </span>
              {pergunta.atividade}
            </p>
          )}
        </div>

        <div>
          {!!pergunta.origem && (
            <p>
              <span>Origem da dúvida =&gt; </span>
              {pergunta.origem}
            </p>
          )}
        </div>

        <div>
          {!!pergunta.assunto && (
            <p>
              <span>Assunto =&gt; </span>
              {pergunta.assunto}
            </p>
          )}
        </div>

        <div>
          {!!pergunta.documentacao && (
            <p>
              <span>Procurou na documentação? =&gt; </span>
              {pergunta.documentacao}
            </p>
          )}
        </div>

        <div>
          {!!pergunta.foruns && (
            <p>
              <span>Procurou em fóruns, blogs, outros? =&gt; </span>
              {pergunta.foruns}
            </p>
          )}
        </div>

        <div>
          {!!pergunta.descricao &&
            pergunta.descricao.map((par, ind) => {
              if (ind === 0) {
                return (
                  <p key={ind}>
                    <span>Descrição da Dúvida =&gt; </span>
                    {par}
                  </p>
                );
              }

              return <p key={ind}>{par}</p>;
            })}
        </div>
      </ContainerPergunta>

      {pergunta.codigo && (
        <>
          <div>
            <h2>Bloco de código</h2>
            <span>
              Ainda na pergunta você poderá clicar no ícone de adicionar bloco
              de código e colar o seu progresso por lá
            </span>
          </div>
          <ContainerPergunta>
            <div>
              {!!pergunta.codigo && (
                <p>
                  <span>Código: </span>
                </p>
              )}
              {!!pergunta.codigo &&
                pergunta.codigo.map((par, ind) => {
                  return <p key={ind}>{par}</p>;
                })}
            </div>
          </ContainerPergunta>
        </>
      )}

      <h2>Informações adicionais</h2>

      <ContainerPergunta>
        <div>
          {!!pergunta.tentativa &&
            pergunta.tentativa.map((par, ind) => {
              if (ind === 0) {
                return (
                  <p key={ind}>
                    <span>O que eu tentei =&gt; </span>
                    {par}
                  </p>
                );
              }

              return <p key={ind}>{par}</p>;
            })}
        </div>

        <div>
          {!!pergunta.observacoes &&
            pergunta.observacoes.map((par, ind) => {
              if (ind === 0) {
                return (
                  <p key={ind}>
                    <span>Outras observações =&gt; </span>
                    {par}
                  </p>
                );
              }

              return <p key={ind}>{par}</p>;
            })}
        </div>
      </ContainerPergunta>
    </Container>
  );
}
