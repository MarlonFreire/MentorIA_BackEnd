export type UsuarioProps = {
    id: string;
    email: string;
    senha: string;
    autorizacao: string;
}

export class Usuario {

    private constructor (readonly props:UsuarioProps){}

    public static criar(email: string, senha: string, autorizacao: string): Usuario{

        if (!email || !email.includes('@')) {
            throw new Error("E-mail inválido.");
        }

        if (autorizacao !== 'PROFESSOR' && autorizacao !== 'ALUNO') {
            throw new Error("Autorização inválida. O nível de acesso deve ser PROFESSOR ou ALUNO.");
        }

        if (!senha || senha.trim() === "") {
            throw new Error("A senha é obrigatória.");
        } {}

        const props: UsuarioProps = {
            id: crypto.randomUUID().toString(),
            email,
            senha,
            autorizacao,
        }
        return new Usuario(props)
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