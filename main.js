const prompt = require("prompt-sync")();

const sala = require("./Módulos/sala.js");
const turno = require("./Módulos/turno.js");
const curso = require("./Módulos/curso.js");
const professor = require("./Módulos/professor.js");
const aluno = require("./Módulos/aluno.js");
const materia = require("./Módulos/materia.js");
const aula = require("./Módulos/aula.js");
const aluno_aula = require("./Módulos/aluno_aula.js");

const menuPrincipal = () => {

    console.log("BEM VINDO(A) AO GERENCIAMENTO DE FACULDADE!")

    while(true) {

    console.log(`
    DIGITE PARA GERENCIAR:
    1 - Salas;
    2 - Turnos;
    3 - Cursos;
    4 - Professores;
    5 - Alunos;
    6 - Matérias;
    7 - Aulas;
    8 - Aulas de cada aluno;
    0 - Sair.
    `)
    const op = parseInt(prompt(": "));

    switch(op) {
        case 1: menuSala();
        break;
        case 2: menuTurno()
        break;
        case 3: menuCursos();
        break;
        case 4: menuProfessores();
        break;
        case 5: menuAluno();
        break;
        case 6: menuMaterias();
        break;
        case 7: menuAula();
        break;
        case 8: menuAlunoAula();
        break;
        case 0: console.log("Até logo!")
                process.exit();
        break;
        default: console.log("Opção inválida.");
        break;
    }
    }
}

const menuSala = () => {
    console.log("GERENCIAMENTO DE SALAS!")

    while(true) {
    console.log(`
    O QUE DESEJA FAZER? 
    1 - Criar;
    2 - Listar;
    3 - Atualizar;
    4 - Remover;
    0 - Sair.
    `)
    const op = parseInt(prompt(": "));

    switch(op) {
        case 1: sala.store();
        break;
        case 2: sala.index();
        break;
        case 3: sala.update();
        break;
        case 4: sala.destroy();
        break;
        case 0: return
        break;
        default: console.log("Opção inválida.");
        break;
    }
    }
}

const menuTurno = () => {
    console.log("GERENCIAMENTO DE TURNOS!")

    while(true) {
    console.log(`
    O QUE DESEJA FAZER? 
    1 - Criar;
    2 - Listar;
    3 - Atualizar;
    4 - Remover;
    0 - Sair.
    `)
    const op = parseInt(prompt(": "));

    switch(op) {
        case 1: turno.store();
        break;
        case 2: turno.index();
        break;
        case 3: turno.update();
        break;
        case 4: turno.destroy();
        break;
        case 0: return
        break;
        default: console.log("Opção inválida.");
        break;
    }
    }
}

const menuCursos = () => {
    console.log("GERENCIAMENTO DE CURSOS!")

    while(true) {
    console.log(`
    O QUE DESEJA FAZER? 
    1 - Criar;
    2 - Listar;
    3 - Atualizar;
    4 - Remover;
    0 - Sair.
    `)
    const op = parseInt(prompt(": "));

    switch(op) {
        case 1: curso.store();
        break;
        case 2: curso.index();
        break;
        case 3: curso.update();
        break;
        case 4: curso.destroy();
        break;
        case 0: return
        break;
        default: console.log("Opção inválida.");
        break;
    }
    }
}

const menuProfessores = () => {
    console.log("GERENCIAMENTO DE PROFESSORES!")

    while(true) {
    console.log(`
    O QUE DESEJA FAZER? 
    1 - Criar;
    2 - Listar;
    3 - Atualizar;
    4 - Remover;
    0 - Sair.
    `)
    const op = parseInt(prompt(": "));

    switch(op) {
        case 1: professor.store();
        break;
        case 2: professor.index();
        break;
        case 3: professor.update();
        break;
        case 4: professor.destroy();
        break;
        case 0: return
        break;
        default: console.log("Opção inválida.");
        break;
    }
    }
}

const menuAluno = () => {
    console.log("GERENCIAMENTO DE ALUNOS!")

    while(true) {
    console.log(`
    O QUE DESEJA FAZER? 
    1 - Criar;
    2 - Listar;
    3 - Atualizar;
    4 - Remover;
    0 - Sair.
    `)
    const op = parseInt(prompt(": "));

    switch(op) {
        case 1: aluno.store();
        break;
        case 2: aluno.index();
        break;
        case 3: aluno.update();
        break;
        case 4: aluno.destroy();
        break;
        case 0: return
        break;
        default: console.log("Opção inválida.");
        break;
    }
    }
}

const menuMaterias = () => {
    console.log("GERENCIAMENTO DE MATÉRIAS!")

    while(true) {
    console.log(`
    O QUE DESEJA FAZER? 
    1 - Criar;
    2 - Listar;
    3 - Atualizar;
    4 - Remover;
    0 - Sair.
    `)
    const op = parseInt(prompt(": "));

    switch(op) {
        case 1: materia.store();
        break;
        case 2: materia.index();
        break;
        case 3: materia.update();
        break;
        case 4: materia.destroy();
        break;
        case 0: return
        break;
        default: console.log("Opção inválida.");
        break;
    }
    }
}

const menuAula = () => {
    console.log("GERENCIAMENTO DE AULAS!")

    while(true) {
    console.log(`
    O QUE DESEJA FAZER? 
    1 - Criar;
    2 - Listar;
    3 - Atualizar;
    4 - Remover;
    0 - Sair.
    `)
    const op = parseInt(prompt(": "));

    switch(op) {
        case 1: aula.store();
        break;
        case 2: aula.index();
        break;
        case 3: aula.update();
        break;
        case 4: aula.destroy();
        break;
        case 0: return
        break;
        default: console.log("Opção inválida.");
        break;
    }
    }
}

const menuAlunoAula = () => {
    console.log("GERENCIAMENTO DE AULAS DE CADA ALUNO!")

    while(true) {
    console.log(`
    O QUE DESEJA FAZER? 
    1 - Criar;
    2 - Listar;
    3 - Atualizar;
    4 - Remover;
    0 - Sair.
    `)
    const op = parseInt(prompt(": "));

    switch(op) {
        case 1: aluno_aula.store();
        break;
        case 2: aluno_aula.index();
        break;
        case 3: aluno_aula.update();
        break;
        case 4: aluno_aula.destroy();
        break;
        case 0: return
        break;
        default: console.log("Opção inválida.");
        break;
    }
    }
}

menuPrincipal();