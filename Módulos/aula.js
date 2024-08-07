const prompt = require("prompt-sync")();
const curso = require("./curso.js");
const professor = require("./professor.js");
const materia = require("./materia.js");
const sala = require("./sala.js");

const db = [];

let proxID = 1;

const model = (id = proxID++) => {

    curso.index();
    const id_curso = prompt("Digite o ID do curso: ");

    materia.index();
    const id_materia = prompt("Digite o ID da matéria: ");

    professor.index();
    const id_professor = prompt("Digite o ID do professor: ");

    sala.index();
    const id_sala = prompt("Digite o ID da sala: ");

    if(id_materia > 0 && id_curso > 0 && id_professor > 0 && id_sala > 0) {
        return {
            id,
            id_curso,
            id_materia,
            id_professor,
            id_sala
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