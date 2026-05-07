import { describe, test, expect, vi } from "vitest";
import { Professor } from "../src/entities/Professor.js";


describe('Entidade Professor', () => {

    test('deve criar um professor com sucesso passando nome e disciplina', () => {
        const professor = Professor.criar("Carlos Silva", "Redacão I");

        expect(professor).toBeInstanceOf(Professor);
        expect(professor.nome).toBe("Carlos Silva");
        expect(professor.disciplina).toBe("Redacão I");
        expect(professor.id).toBeDefined();
        expect(typeof professor.id).toBe('string');
    });

    test('deve assumir a disciplina "Redação" quando nenhuma for informada', () => {

        const professor = Professor.criar("Ana Paula");
        expect(professor.nome).toBe("Ana Paula");
        expect(professor.disciplina).toBe("Redação");
    });

    test('deve lançar um erro se o nome tiver menos de 3 caracteres', () => {
        expect(() => {
            Professor.criar("Zé");
        }).toThrow(Error('O nome do professor deve ter pelo menos 3 caracteres.'));
    });

    test('deve lançar um erro se o nome for vazio', () => {
        expect(() => {
            Professor.criar("");
        }).toThrow(Error('O nome do professor deve ter pelo menos 3 caracteres.'))
    });

    test('deve lançar um erro se a disciplina for informada com menos de 3 caracteres', () => {
        expect(() => {
            Professor.criar("Carlos Silva", "LI");
        }).toThrow(Error('O nome da disciplina deve ter pelo menos 3 caracteres.'));
    });

});