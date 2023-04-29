import {useEffect} from "react";
import "./App.css";
import {getAllPokemon} from "./util/pokemon.js"

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    const fetchPokemonData = async () => {
      // すべてのポケモンデータを取得
      let res = await getAllPokemon(initialURL);
      console.log(res)
    };
    fetchPokemonData();
  }, []);
}

export default App;
