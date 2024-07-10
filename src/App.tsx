import { Provider } from "react-redux";
import { store } from "./store";
import { Player } from "./pages/Player";
import "./styles/global.css";

// a tag Provider funciona como o provider da ContextAPI. Ele é o responsável por fornecer os estados para os componentes filhos

export function App() {
  return (
    <Provider store={store}>
      <Player />
    </Provider>
  );
}
