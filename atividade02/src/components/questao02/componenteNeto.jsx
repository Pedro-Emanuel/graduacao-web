import PokemonIndex from "./pokemonContext"

const URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const Neto = () => {
    return (
        <div>
            <h1>Neto</h1>
            <PokemonIndex.Consumer>
                { ({index}) => <img src={URL + (index + 2) + ".png"} alt="Pokemon neto" width={100} /> }
            </PokemonIndex.Consumer>
        </div>
    );
}

export default Neto