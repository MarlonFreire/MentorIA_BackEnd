export type FeedbackIAProps = {
    id: string;
    idRedacao: string;
    analise_gramatica: string;
    analise_estrutura: string;
    modeloIA: string;
}

export class FeedbackIA {

    private constructor( readonly props: FeedbackIAProps){}

    public static criar(props: FeedbackIAProps): FeedbackIA {

        if (!props.idRedacao || props.idRedacao.trim().length === 0) {
            throw new Error("O Feedback da IA deve estar obrigatoriamente vinculado ao ID de uma redação.");
        }

        if (!props.modeloIA || props.modeloIA.trim().length === 0) {
            throw new Error("É obrigatório informar qual modelo de IA gerou este feedback para fins de rastreabilidade.");
        }

        
        if (!props.analise_gramatica || props.analise_gramatica.trim().length < 20) {
            throw new Error("A análise gramatical gerada pela IA é muito curta ou inválida.");
        }

        if (!props.analise_estrutura || props.analise_estrutura.trim().length < 20) {
            throw new Error("A análise estrutural gerada pela IA é muito curta ou inválida.");
        }        

        return new FeedbackIA({
            ...props,
            id: crypto.randomUUID().toString(),
            modeloIA: "Gemini"
        })
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