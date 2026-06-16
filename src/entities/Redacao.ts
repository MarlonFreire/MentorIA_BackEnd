export type RedacaoProps = { // REVISAR ENTIDADE
    id: string;
    tema: string;
    texto: string;
    alunoId: string // ADD objeto professor
    turmaId: string // ADD objeto turma
    dataEnvio: Date;
    status: string;
}

export class Redacao {

    private constructor(readonly props:RedacaoProps){}

    public static criar(
        tema: string,
        texto: string,
        alunoId: string,
        turmaId: string,
        dataEnvio: Date,
        status: string  ): Redacao {

        if (!alunoId || alunoId.trim().length === 0) {
            throw new Error("A redação deve estar obrigatoriamente vinculada a um aluno.");
        }

        if (!tema || tema.trim().length < 5) {
            throw new Error("O tema informado é inválido ou muito curto.");
        }

        if (!texto || texto.trim().length < 50) {
            throw new Error("O texto da redação é muito curto para ser processado e avaliado.");
        }
        
        const dataAtual = new Date();
        if (dataEnvio > dataAtual) {
            throw new Error("A data de envio não pode ser uma data no futuro.");
        }

        const props: RedacaoProps = {
            id: crypto.randomUUID().toString(),
            tema,
            texto,
            alunoId,
            turmaId,
            dataEnvio: new Date(),
            status: "Pendente"
        }
        return new Redacao(props)
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