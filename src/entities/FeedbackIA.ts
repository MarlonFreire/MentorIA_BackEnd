export type FeedbackIAProps = {
    id: string;
    idRedacao: string;
    analise_gramatica: string;
    analise_estrutura: string;
    modeloIA: string;
}

export class FeedbackIA {

    private constructor( readonly props: FeedbackIAProps){}

    public static criar(idRedacao: string, analise_gramatica: string, analise_estrutura: string): FeedbackIA {

        if (!idRedacao || idRedacao.trim().length === 0) {
            throw new Error("O Feedback da IA deve estar obrigatoriamente vinculado ao ID de uma redação.");
        }

        if (!analise_gramatica || analise_gramatica.trim().length < 20) {
            throw new Error("A análise gramatical gerada pela IA é muito curta ou inválida.");
        }

        if (!analise_estrutura || analise_estrutura.trim().length < 20) {
            throw new Error("A análise estrutural gerada pela IA é muito curta ou inválida.");
        }        

        const props: FeedbackIAProps = {
            id: crypto.randomUUID().toString(),
            idRedacao,
            analise_estrutura,
            analise_gramatica,
            modeloIA: "Gemini"
        }
        return new FeedbackIA(props)
    }

    public get id(): string {
        return this.props.id;
    }

    public get idRedacao(): string {
        return this.props.idRedacao;
    }

    public get analise_gramatica(): string {
        return this.props.analise_gramatica;
    }

    public get analise_estrutura(): string {
        return this.props.analise_estrutura;
    }

    public get modeloIA(): string {
        return this.props.modeloIA;
    }

}