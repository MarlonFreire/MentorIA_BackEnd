import { Turma } from "./Turma.js";

export type AlunoProps = {
    id: string;
    nome: string;
    matricula?: string | undefined;
    turmas: Turma[]
}

export class Aluno {

private constructor(readonly props: AlunoProps){}

public static criar(nome: string, matricula?:string ): Aluno{

    if (!nome || nome.length < 3) {
      throw new Error('O nome do aluno deve ter pelo menos 3 caracteres.');
    }

    const props: AlunoProps = {
        id:crypto.randomUUID().toString(),
        nome,
        matricula,
        turmas: []
    }

    return new Aluno(props)
}

// add aluno em turma


public get id(): string {return this.props.id;}

public get nome(): string {return this.props.nome;}

public get matricula(): string | undefined {return this.props.matricula;}

}