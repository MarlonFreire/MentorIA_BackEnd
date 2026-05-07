export type AlunoProps = {
    id: string;
    nome: string;
    matricula?: string | undefined;
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
        matricula
    }

    return new Aluno(props)
}



public get id(): string {return this.props.id;}

public get nome(): string {return this.props.nome;}

public get matricula(): string | undefined {return this.props.matricula;}

}