const gerar = (parametros) => {

    let cnpjs = [];

    let total = (parametros.total ? parametros.total : 1);

    do {
        let cnpj = createCnpjNumber();

        if (parametros.formatacao == "true" ? true : false) {
            cnpj = cnpj.toString().replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')
        }

        if (cnpjs.indexOf(cnpj) === -1) {
            cnpjs.push(cnpj);
            total--;
        }

    } while (total > 0);

    return cnpjs
}

const createCnpjNumber = () => {
    const lstNumbers = createListNumber()

    lstNumbers.push(calculateDigitCnpj(lstNumbers))
    return `${lstNumbers.join('')}${calculateDigitCnpj(lstNumbers)}`
}

const createListNumber = () => {
    const lstNumbers = new Array()

    for (let i = 0; i < 8; i++)
        lstNumbers.push(randomNumber())

    for (let i = 0; i < 3; i++)
        lstNumbers.push(0)

    lstNumbers.push(1)

    return lstNumbers
}

const randomNumber = () => {
    return Math.floor(Math.random() * 9)
}

const calculateRestCnpj = (sumDigit) => {
    return sumDigit % 11;
}

const calculateSumDigit = (lstNumbers) => {
    let sumDigit = 0
    let salt = 9

    for (let i = lstNumbers.length - 1; i >= 0; i--) {
        sumDigit += lstNumbers[i] * salt--
        if (salt < 2)
            salt = 9
    }

    return sumDigit
}

const calculateDigitCnpj = (lstNumbers) => {
    let digit = calculateRestCnpj(calculateSumDigit(lstNumbers))

    if (digit >= 10)
        return 0

    return digit
}
module.exports = {
    gerar
}