const prompt = require("prompt-sync")();
const aula = require("./aula.js");
const aluno = require("./aluno.js");

const db = [];

let proxID = 1;

const model = (id = proxID++) => {

    aula.index();
    const id_aula = prompt("Digite o ID da aula: ");

    aluno.index();
    const id_aluno = prompt("Digite o ID do(a) aluno(a): ");

    if(id_aluno > 0 && id_aula > 0) {
        return {
            id,
            id_aula,
            id_aluno
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