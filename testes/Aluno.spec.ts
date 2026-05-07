import { describe, expect, test } from "vitest";
import { Aluno } from "../src/entities/Aluno.js";

describe('Testes de Entidade Aluno', ()=>{

    test('criar um aluno', () => {
        const aluno = Aluno.criar("Marlon","202601")
        
        expect(aluno).toBeInstanceOf(Aluno)
        expect(aluno.id).toBeDefined()
        expect(typeof aluno.id).toBe('string')
        expect(aluno.nome).toBe("Marlon")
        expect(aluno.matricula).toBe("202601")
    })

    /*test('deve instanciar um aluno com um ID existente (ex: vindo do banco)', ()=>{

        const idExistente = "b4a8-4321-9876"
        const aluno = Aluno.criar(id:idExistente,"Carlos","202601")
    })*/

    test("verificar se nome tem menos de 3 caracteres", () => {
        expect( ()=>{
            Aluno.criar('Ze')
        }).toThrow(Error('O nome do aluno deve ter pelo menos 3 caracteres.'))
    })

    test('verifica se o nome é vazio', () => {
        expect( () => {
            Aluno.criar("")
        }).toThrow(Error('O nome do aluno deve ter pelo menos 3 caracteres.'))
    })


})