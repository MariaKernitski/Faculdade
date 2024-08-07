const prompt = require("prompt-sync")();

const turno = require("./turno");

const db = [];

let proxID = 1;

const model = (id = proxID++) => {
    const nome = prompt("Digite o nome do curso: ");
    const horas = prompt("Digite o total de horas do curso: ");

    turno.index();
    const id_turno = prompt("Digite o ID do turno: ");

    if(nome != "" && horas > 0 && id_turno > 0) {
        return {
            id,
            nome,
            horas,
            id_turno
        }
    }
    console.log("Dados inválidos.");
}

const store = () => {
    const novo = model();

    if(novo) {
        db.push(novo);
        console.log("Registrado com sucesso!");
    }
}

const index = () => {
    if (db.length == 0) {
        console.log("Nada registrado.");
        return false
    }
    db.forEach(el => console.log(el));
    return true;
}

const update = () => {
    if(index()) {
        const id = prompt("Digite o ID que deseja atualizar: ");

        const indice = db.findIndex(el => el.id == id);

            if(indice != -1) {
                const novo = model(id);

                    if(novo) {
                        db[indice] = novo;
                        console.log("Atualizado com sucesso!");
                    }
            }
            else {
                console.log("Registro não encontrado.");
            }
    }
}

const destroy = () => {
    if(index()) {
        const id = prompt("Digite o ID que deseja remover: ");

        const indice = db.findIndex(el => el.id == id);

        if (indice != -1) {
            db.splice(indice, 1);
            console.log("Removido com sucesso!")
        }
        else {
            console.log("Registro não encontrado.")
        }
    }
}

module.exports = {
    store,
    index,
    update,
    destroy
}