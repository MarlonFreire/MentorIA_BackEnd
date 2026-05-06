export type RedacaoProps = {
    id: string;
    tema: string;
    texto: string;
    alunoId: string
    //dataEntrega: Date;
    status: string;
}

export class Redacao {

    private constructor(readonly props:RedacaoProps){}

    public static criar(props: RedacaoProps): Redacao {

        if (!props.alunoId || props.alunoId.trim().length === 0) {
            throw new Error("A redação deve estar obrigatoriamente vinculada a um aluno.");
        }

        if (!props.tema || props.tema.trim().length < 5) {
            throw new Error("O tema informado é inválido ou muito curto.");
        }

        if (!props.texto || props.texto.trim().length < 50) {
            throw new Error("O texto da redação é muito curto para ser processado e avaliado.");
        }        

        return new Redacao({
            ...props,
            id: crypto.randomUUID().toString(),
            status: "Pendente"
        })
    }

    get id(): string {return this.props.id;}

    get tema(): string {return this.props.tema;}

    get texto(): string {return this.props.texto;}

    get alunoId(): string {return this.props.alunoId;}

    get status(): string {return this.props.status;}

    /*get dataEntrega(): Date {
        return this.props.dataEntrega;
    }*/

}