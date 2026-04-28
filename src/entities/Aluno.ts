export type AlunoProps = {
    id: string;
    nome: string;
    matricula?: string;
    turmasIDs: string[];
}

export class Aluno {

private constructor(readonly props: AlunoProps){}

public static criar(props: AlunoProps): Aluno{

    if (!props.nome || props.nome.length < 3) {
      throw new Error('O nome do aluno deve ter pelo menos 3 caracteres.');
    }

    return new Aluno({
        ...props,
        id: crypto.randomUUID().toString()
    })
}


// add id da turma no aluno
public add_aluno_na_turma(idTurma: string): void{

    if (this.props.turmasIDs.includes(idTurma)) {
        throw new Error('Este aluno já faz parte desta turma.')
    }
    this.props.turmasIDs.push(idTurma)

}


public get id(): string {return this.props.id;}

public get nome(): string {return this.props.nome;}

public get disciplina(): string | undefined {return this.props.matricula;}

}