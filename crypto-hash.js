const crypto = require('crypto');

const cryptoHash = (...inputs) => {
    // Exibindo as entradas originais
    console.log("Inputs originais:", inputs);

    // Convertendo cada entrada para JSON
    const jsonInputs = inputs.map(input => JSON.stringify(input));
    console.log("Inputs como JSON:", jsonInputs);

    // Ordenando os inputs JSON
    const sortedInputs = jsonInputs.sort();
    console.log("Inputs ordenados:", sortedInputs);

    // Juntando os inputs ordenados em uma única string
    const joinedInputs = sortedInputs.join(' ');
    console.log("Inputs unidos:", joinedInputs);

    // Criando o hash
    const hash = crypto.createHash('sha256');
    hash.update(joinedInputs);

    // Calculando o hash final
    const finalHash = hash.digest('hex');
    console.log("Hash gerado:", finalHash);

    return finalHash;
};

module.exports = cryptoHash;
