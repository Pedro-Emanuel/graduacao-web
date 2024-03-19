import Pai from './components/atividade01/questao01/01Pai'
import * as PC from './components/atividade01/02MeuPC'
import {World, Arena, Hero, Enemy} from './components/atividade01/03Batalha'

function App() {
  return (
    <div>
      <Pai />
      <hr />
      <PC.PlacaMae nome="Asus Prime B450M Gaming/BR" preco="R$ 500,00" />
      <PC.Memoria nome="HyperX Fury 8GB" preco="R$ 300,00" />
      <PC.PlacaDeVideo nome="Gigabyte GeForce GTX 1660" preco="R$ 2.000,00" />
      <hr />
      <World>
        <Arena arena="Arena TV Cultura">
          <Hero name="Cyberchase" img="https://ondemand.spectrum.net/static/f68c12b3b41189a6cd87c003e68b9c46/2fda2/SH003618800000.jpg" />
          <Enemy name="Hacker" img="https://cms-tc.pbskids.org/global/show-icons/square-transparent/400x400_cyberchase.png" />
        </Arena>
        <Arena arena="Arena SBT">
          <Hero name="Superman" img="https://portalpopline.com.br/wp-content/uploads/2023/07/superman-legacy.jpg" />
          <Enemy name="Lex Luthor" img="https://musicaecinema.com/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-13-at-14.50.14.jpeg" />
        </Arena>
      </World>
    </div>
  );
}

export default App;
