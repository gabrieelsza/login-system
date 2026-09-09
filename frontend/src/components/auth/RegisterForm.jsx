import { FcGoogle } from "react-icons/fc"
import { Button } from "../ui/Button"
import Input from "../ui/Input"
import { FaApple } from "react-icons/fa"

const RegisterForm = ({onGoToLogin}) => {

    return (
        <div className="w-full max-w-md rounded-3xl bg-card px-7 py-9 text-card-foreground shadow-editorial sm:px-10">
            <h1 className="mt-3 font-wonk text-4xl font-black leading-none"> Bem vindo de volta! </h1>
            <p className="mt-3 text-sm text-muted-foreground"> Entre na sua conta continuar </p>
            <form className="mt-8 space-y-5">
                <div className="space-y-2">
                    <label
                        htmlFor="name"
                        className="block text-xs font-semibold uppercase tracking-[0.18em]
                    ">
                        Nome
                    </label>
                    <Input
                        id="name"
                        type="text"
                        placeholder="Nome"
                    />
                </div>
                <div className="space-y-2">
                    <label
                        htmlFor="email"
                        className="block text-xs font-semibold uppercase tracking-[0.18em]
                    ">
                        Email
                    </label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="seuemail@gmail.com"
                    />
                </div>

                <div className="space-y-2">
                    <div className="flex items-baseline justify-between gap-3">
                        <label
                            htmlFor="password"
                            className="block text-xs font-semibold uppercase tracking-[0.18em]">
                            Senha
                        </label>
                    </div>
                    <Input
                        id="password"
                        type="password"
                        placeholder="Crie sua senha"
                    />
                </div>

                <Button
                    type="button"
                    label="Cadastrar"
                    className="w-full rounded-xl bg-primary py-3.5 font-wonk text-lg font-black uppercase tracking-[0.14em] text-primary-foreground transition hover:brightness-125 focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-card outline-none"
                />
            </form>
            <div className="my-7 grid grid-cols-2 gap-3">
                <Button
                    label="Google"
                    icon={<FcGoogle />}
                    className="flex items-center justify-center gap-2 rounded-xl border border-input bg-secondary/40 py-3 text-sm font-medium transition hover:bg-accent/60"
                />
                <Button
                    label="Apple"
                    icon={<FaApple />}
                    className="flex items-center justify-center gap-2 rounded-xl border border-input bg-secondary/40 py-3 text-sm font-medium transition hover:bg-accent/60" />
            </div>
            <p className="mt-8 text-center text-sm text-muted-foreground">
                Já possui uma conta  ?
                <button
                    onClick={onGoToLogin}
                    className="font-semibold text-primary underline-offset-4 hover:underline"
                >
                    Entrar
                </button>
            </p>
        </div>
    )
}

export default RegisterForm