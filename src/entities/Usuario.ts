export type UsuarioProps = {
    id: string;
    email: string;
    senhaHash: string;
    autorizacao: string;
}

export class Usuario {

    private constructor (readonly props:UsuarioProps){}

    public static criar(props:UsuarioProps): Usuario{

        if (!props.email || !props.email.includes('@')) {
            throw new Error("E-mail inválido.");
        }

        if (props.autorizacao !== 'PROFESSOR' && props.autorizacao !== 'ALUNO') {
            throw new Error("Autorização inválida. O nível de acesso deve ser PROFESSOR ou ALUNO.");
        }

        if (!props.senhaHash || props.senhaHash.trim() === "") {
            throw new Error("A senha é obrigatória.");
        }

        return new Usuario({
            ...props,
            id: crypto.randomUUID().toString()
        })
    }

    public get id(): string {
        return this.props.id;
    }

    public get email(): string {
        return this.props.email;
    }

    public get autorizacao(): string {
        return this.props.autorizacao;
    }


}