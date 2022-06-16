import { Container } from "./styles";
import lady from "../../assets/lady.png";
import warning from "../../assets/warning.png";
import Button from "../../components/Button";

export default function Home() {
  return (
    <Container>
      <h1>/Sucesso</h1>
      <div>
        <img src={lady} alt="" />
        <div>
          <h2>Hey, Dev!</h2>
          <p>
            É importante você saber que o coach precisa entender qual exatamente
            é o desafio que você está a enfrentar para que possa se preparar
            adequadamente para te atender.
          </p>
          <p>
            Então preencha todos os campor com atenção e de uma forma bem
            detalhada, pois assim, conseguiremos estruturar o seu /pergunta de
            uma forma que o coach vai ler e entender bem em que ponto precisará
            intervir em sua dúvida.
          </p>
          <p>
            Já aconteceu muitas vezes de, ao estruturar um /pergunta, o Dev
            encontrar a resposta para a sua dúvida e dessa forma nem chegar a
            precisar do atendimento.
          </p>
          <p>
            Seja completamente sinceroa(a) e não tenha medo ou vergonha de
            informar qual a sua real dificuldade.
          </p>
        </div>
      </div>

      <Button>Estruturar seu /Perguntas</Button>

      <div>
        <div>
          <h2>Importante!</h2>
          <p>
            Se o seu atendimento dura mais do que 15 minutos, é um sinal de que
            talvez deva rever a demo ou o conteúdo do Canvas.
          </p>
          <p>Não é perda de tempo, é investimento!</p>
        </div>
        <img src={warning} alt="" />
      </div>
    </Container>
  );
}
