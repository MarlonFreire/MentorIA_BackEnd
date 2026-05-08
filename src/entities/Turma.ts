import { Aluno } from "./Aluno.js";

export type TurmaProps ={
    id: string;
    nome: string;
    serie: string;
    professorId: string;
    alunos: Aluno[]
}

export class Turma {

    private constructor(readonly props: TurmaProps){}

    public static criar(nome: string, serie: string, professorId: string): Turma{

    if (!nome || nome.length < 3) {
      throw new Error('O nome da turma deve ter pelo menos 3 caracteres.');
    }

    if (!professorId) {
        throw new Error('Toda turma precisa de um professor responsável.')
    }

        const props: TurmaProps = {
            id: crypto.randomUUID().toString(),
            nome,
            serie,
            professorId,
            alunos: []
   
        }
        return new Turma(props)
    }

    // adicionar aluno
    public adicionar_aluno(aluno:Aluno): void {

        if (this.props.alunos.includes(aluno)) {
            throw new Error('Este aluno já faz parte desta turma.')
        }
        
        this.props.alunos.push(aluno)

    }


public get id(): string {return this.props.id;}

public get nome(): string {return this.props.nome;}

public get serie(): string {return this.props.serie;}

public get professorId() { return this.props.professorId; }

public get alunos_ids() { return [...this.props.alunos]; }

}