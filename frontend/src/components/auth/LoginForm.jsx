import { Button } from "../ui/Button"
import Input from "../ui/Input"

import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginForm = ({ onGoToRegister }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const response = await fetch("http://localhost:3001/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.message); // ex: "Credenciais inválidas"
                return;
            }

            // Login ok — salva o token e redireciona
            localStorage.setItem("token", data.token);
            navigate("/dashboard");

        } catch (error) {
            console.log(error)
            setError("Erro ao conectar com o servidor.");
        } finally {
            setLoading(false);
        }
    }
    return (
        <div className="w-full max-w-md rounded-3xl bg-card px-7 py-9 text-card-foreground shadow-editorial sm:px-10">
            <h1 className="mt-3 font-wonk text-4xl font-black leading-none"> Bem vindo de volta! </h1>
            <p className="mt-3 text-sm text-muted-foreground"> Entre na sua conta continuar </p>
            <form className="mt-8 space-y-5 h-auto" onSubmit={handleSubmit}>
                <div className="space-y-2">
                    <label
                        htmlFor="email"
                        className="block text-xs font-semibold uppercase tracking-[0.18em]
                    ">
                        Email
                    </label>
                    <Input
                        onChange={(e) => setEmail(e.target.value)}
                        id="email"
                        type="email"
                        placeholder="seuemail@gmail.com"
                        autocomplete="current-email"
                    />
                </div>

                <div className="space-y-2">
                    <div className="flex items-baseline justify-between gap-3">
                        <label
                            htmlFor="password"
                            className="block text-xs font-semibold uppercase tracking-[0.18em]">
                            Senha
                        </label>
                        <p className="font-wonk text-xs italic underline-offset-4 hover:text-primary">
                            Esqueci minha senha
                        </p>
                    </div>
                    <Input
                        onChange={(e) => setPassword(e.target.value)}
                        id="password"
                        type="password"
                        placeholder="Digite sua senha"
                        autocomplete="current-password"
                    />
                </div>

                <Button
                    type="submit"
                    label="Entrar"
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
                Ainda não tem uma conta ?
                <button
                    onClick={onGoToRegister}
                    className="font-semibold text-primary underline-offset-4 hover:underline"
                >
                    Criar conta
                </button>
            </p>
        </div>
    )
}
