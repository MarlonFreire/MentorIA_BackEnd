export type ProfessorProps = {
  id: string;
  nome: string;
  disciplina?: string;

}

export class Professor {

  private constructor(readonly props: ProfessorProps) {
  }

  public static criar(props: ProfessorProps): Professor {
    
    if (!props.nome || props.nome.length < 3) {
      throw new Error('O nome do professor deve ter pelo menos 3 caracteres.');
    }

    if ( props.disciplina && props.disciplina.length < 3 ) {
      throw new Error('O nome da disciplina deve ter pelo menos 3 caracteres.');
    }

    return new Professor(
      {
        id: crypto.randomUUID().toString(),
        nome: props.nome,
        disciplina: props.disciplina ? props.disciplina : 'Redação' 
      }
    );
  }

  // getters
  public get id(): string {return this.props.id;}

  public get nome(): string {return this.props.nome;}

  public get disciplina(): string | undefined {return this.props.disciplina;}


}
