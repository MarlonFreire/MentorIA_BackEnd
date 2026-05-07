export type ProfessorProps = {
  id: string;
  nome: string;
  disciplina?: string

}

export class Professor {

  private constructor(readonly props: ProfessorProps) {
  }

  public static criar(nome: string, disciplina?: string): Professor {
    
    if (!nome || nome.length < 3) {
      throw new Error('O nome do professor deve ter pelo menos 3 caracteres.');
    }

    if ( disciplina && disciplina.length < 3 ) {
      throw new Error('O nome da disciplina deve ter pelo menos 3 caracteres.');
    }

    return new Professor(
      {
        id: crypto.randomUUID().toString(),
        nome: nome,
        disciplina: disciplina ? disciplina : 'Redação' 
      }
    );
  }

  // getters
  public get id(): string {return this.props.id;}

  public get nome(): string {return this.props.nome;}

  public get disciplina(): string | undefined {return this.props.disciplina;}


}
