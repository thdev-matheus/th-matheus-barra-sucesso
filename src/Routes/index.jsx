import { Route, Switch } from "react-router-dom";
import Estrutura from "../Pages/Estrutura";
import Home from "../Pages/Home";
import Pergunta from "../Pages/Pergunta";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/estrutura">
        <Estrutura />
      </Route>
      <Route exact path="/pergunta">
        <Pergunta />
      </Route>
    </Switch>
  );
}
