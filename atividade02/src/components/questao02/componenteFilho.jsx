import PokemonIndex from "./pokemonContext"
import Neto from "./componenteNeto";

const URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const Filho = () => {
    return (
        <div>
            <h1>Filho</h1>
            <PokemonIndex.Consumer>
                { ({index}) => <img src={URL + (index + 1) + ".png"} alt="Pokemon filho" width={100} /> }
            </PokemonIndex.Consumer>
            <Neto />
        </div>
    );
}

export default Filho