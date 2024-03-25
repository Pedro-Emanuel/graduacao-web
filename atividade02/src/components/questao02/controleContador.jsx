import PokemonIndex from "./pokemonContext";

const Incrementar = () => {
    return (
        <PokemonIndex.Consumer>
            {   ({index, setIndex}) =>
                {
                    let value = 3;

                    if (index >= 20) {
                        index = 1;
                        value = 0;
                    }

                    return (
                        <button onClick={() => setIndex(index + value)}>Incrementar Pokemon</button>
                    );
                }
            }
        </PokemonIndex.Consumer>
    );
}

const Decrementar = () => {
    return (
        <PokemonIndex.Consumer>
            {   ({index, setIndex}) =>
                {
                    let value = 3;

                    if (index <= 1) {
                        index = 20;
                        value = 0;
                    }

                    return (
                        <button onClick={() => setIndex(index - value)}>Decrementar Pokemon</button>
                    );
                }
            }
        </PokemonIndex.Consumer>
    );
}

export {Incrementar, Decrementar};