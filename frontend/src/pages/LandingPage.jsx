import { useState } from "react"
import { LoginForm } from "../components/auth/LoginForm"
import HeroSection from "../components/landing/HeroSection"
import RegisterForm from "../components/auth/RegisterForm"

const LandingPage = () => {
    const [view, setView] = useState("login")

    return (
        <div className="flex min-h-[calc(100vh-80px)] items-center justify-center gap-16 px-16">
            {/* Esquerda — hero */}
            <HeroSection />

            {/* Direita — form de login */}
            {view === "login"
                ? <LoginForm onGoToRegister={() => setView("register")} />
                : <RegisterForm onGoToLogin={() => setView("login")} />
            }
        </div>
    )
}

export default LandingPage