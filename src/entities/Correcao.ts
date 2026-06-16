export type CorrecaoProps = {  //REVISAR ENTIDADE
    id: string;
    idProfessor: string;
    idRedacao: string;
    dataCorrecao: Date;
    normaCulta: number;
    compreensao: number;
    argumentacao: number;
    coesao: number;
    intervencao: number;
    comentarios: string;
}

export class Correcao {

    private constructor(readonly props: CorrecaoProps) {}

    public static criar(props: CorrecaoProps): Correcao {
        
        if (!props.idProfessor || props.idProfessor.trim().length === 0) {
            throw new Error("A correção deve estar obrigatoriamente vinculada a um professor.");
        }

        if (!props.idRedacao || props.idRedacao.trim().length === 0) {
            throw new Error("A correção deve estar obrigatoriamente vinculada a uma redação.");
        }

        // --- 2. Cláusulas de Guarda de Domínio (Regras de Negócio/Notas) ---
        // Função auxiliar para validar cada competência
        const validarNotaCompetencia = (nota: number, nomeCompetencia: string) => {
            // Regra baseada no modelo ENEM: notas de 0 a 200
            if (nota < 0 || nota > 200) {
                throw new Error(`A nota da competência '${nomeCompetencia}' deve estar entre 0 e 200.`);
            }
            // Opcional: Se quiser forçar que a nota seja múltipla de 40 (0, 40, 80, 120, 160, 200)
            // if (nota % 40 !== 0) {
            //     throw new Error(`A nota da competência '${nomeCompetencia}' deve ser múltipla de 40.`);
            // }
        };

        validarNotaCompetencia(props.normaCulta, "Norma Culta");
        validarNotaCompetencia(props.compreensao, "Compreensão");
        validarNotaCompetencia(props.argumentacao, "Argumentação");
        validarNotaCompetencia(props.coesao, "Coesão");
        validarNotaCompetencia(props.intervencao, "Intervenção");

        // --- 3. Instanciação ---
        return new Correcao({
            ...props,
            dataCorrecao: props.dataCorrecao ?? new Date(),
        });
    }

    // --- Comportamentos de Domínio (Modelo Rico) ---

    /**
     * Calcula e retorna a nota final do aluno somando as 5 competências.
     * Isso evita ter que salvar uma coluna "nota_total" no banco de dados,
     * pois a nota total é um dado derivado que a própria entidade sabe calcular.
     */
    public calcularNotaTotal(): number {
        return (
            this.props.normaCulta +
            this.props.compreensao +
            this.props.argumentacao +
            this.props.coesao +
            this.props.intervencao
        );
    }

    public atualizarComentarios(novosComentarios: string): void {
        if (!novosComentarios || novosComentarios.trim().length === 0) {
            throw new Error("Os comentários não podem ficar vazios ao serem atualizados.");
        }
        this.props.comentarios = novosComentarios;
    }

    get id(): string | undefined { return this.props.id; }
    get idProfessor(): string { return this.props.idProfessor; }
    get idRedacao(): string { return this.props.idRedacao; }
    get dataCorrecao(): Date | undefined { return this.props.dataCorrecao; }
    get comentarios(): string | undefined { return this.props.comentarios; }
    
    // Getters das Notas
    get normaCulta(): number { return this.props.normaCulta; }
    get compreensao(): number { return this.props.compreensao; }
    get argumentacao(): number { return this.props.argumentacao; }
    get coesao(): number { return this.props.coesao; }
    get intervencao(): number { return this.props.intervencao; }
    

}