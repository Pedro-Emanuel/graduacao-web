import PokemonIndex from "./pokemonContext"
import Filho from "./componenteFilho";
import {Incrementar, Decrementar} from "./controleContador";
import { useState } from "react";

const URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const Avo = () => {
    const [index, setIndex] = useState(1);

    return (
        <div>
            <PokemonIndex.Provider value={{index, setIndex}}>
                <Incrementar />
                <Decrementar />
                <h1>Avô</h1>
                <img src={URL + index + ".png"} alt="Pokemon avô" width={100} />
                <Filho />
            </PokemonIndex.Provider>
        </div>
    );
}

export default Avo