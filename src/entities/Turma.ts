export type TurmaProps ={
    id: string;
    nomeTurma: string;
    serie: string;
    professorId: string;
    alunosIDs: string[];
}

export class Turma {

    private constructor(readonly props: TurmaProps){}

    public static criar(props: TurmaProps): Turma{

    if (!props.nomeTurma || props.nomeTurma.length < 3) {
      throw new Error('O nome da turma deve ter pelo menos 3 caracteres.');
    }

    if (!props.professorId) {
        throw new Error('Toda turma precisa de um professor responsável.')
    }

        return new Turma({
            ...props,
            id: crypto.randomUUID().toString()
        })
    }

    // adicionar aluno
    public adicionar_aluno(idAluno: string): void {
        
        if (this.props.alunosIDs.includes(idAluno)) {
            throw new Error('Este aluno já faz parte desta turma.')
        }
        this.props.alunosIDs.push(idAluno)

    }


public get id(): string {return this.props.id;}

public get nome_turma(): string {return this.props.nomeTurma;}

public get serie(): string {return this.props.serie;}

public get professorId() { return this.props.professorId; }

public get alunos_ids() { return [...this.props.alunosIDs]; }

}