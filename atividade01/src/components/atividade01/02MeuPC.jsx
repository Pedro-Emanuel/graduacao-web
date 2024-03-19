const PlacaMae = ({nome, preco}) => {
    return (
        <div>
            <h1>Placa Mãe: {nome} ({preco})</h1>
        </div>
    )
}

const Memoria = ({nome, preco}) => {
    return (
        <div>
            <h1>Memória: {nome} ({preco})</h1>
        </div>
    )
}

const PlacaDeVideo = ({nome, preco}) => {
    return (
        <div>
            <h1>Placa de Vídeo: {nome} ({preco})</h1>
        </div>
    )
}

export { PlacaMae, Memoria, PlacaDeVideo }