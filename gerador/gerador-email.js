const gerar = (parametros) => {

    let emails = [];

    let total = (parametros.total ? parametros.total : 1);

    do {
        let email = `${Math.random().toString(36).substring(2, 13).toLowerCase()}@${Math.random().toString(36).substring(2, 8).toLowerCase()}.${Math.random().toString(36).substring(2, 5).toLowerCase()}`

        if (emails.indexOf(email) === -1) {
            emails.push(email);
            total--;
        }

    } while (total > 0);


    return emails
}

module.exports = {
    gerar
}