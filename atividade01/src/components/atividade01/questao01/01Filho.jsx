const Filho = ({altura, peso}) => {
    let imc = peso / (altura * altura)
    let mensagem = "";

    if      (imc < 18.5) mensagem = "Abaixo do peso";
    else if (imc < 24.9) mensagem = "Peso normal";
    else if (imc < 29.9) mensagem = "Sobrepeso";
    else if (imc < 34.9) mensagem = "Obesidade grau 1";
    else if (imc < 39.9) mensagem = "Obesidade grau 2";
    else                 mensagem = "Obesidade grau 3";

  return (
    <div>
      <h1>IMC: {imc} ({mensagem})</h1>
    </div>
  )
}

export default Filho