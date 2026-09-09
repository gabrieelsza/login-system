const HeroSection = () => {
    return (
        <div className="relative z-10 mt-12 lg:mt-0">
            <h1 className="font-wonk text-cream">
                <span className="block text-[19vw] leading-[0.82] uppercase font-black sm:text-[13vw] lg:text-[9.5vw]">
                    Entre
                </span>

                <span className="-mt-1 block -rotate-2 pl-1 text-[14vw] leading-[0.85] font-semibold italic text-cream-deep sm:text-[9.5vw] lg:text-[7vw]">
                    descubra
                </span>

                <span className="mt-1 block text-[17vw] leading-[0.82] font-black tracking-tight sm:text-[11.5vw] lg:text-[8.5vw]">
                    viva
                </span>
            </h1>

            <div className="mt-5 flex items-end gap-4">
                <p className="max-w-xs text-sm leading-relaxed text-cream/70">
                    Um lugar feito para as suas ideias virarem coisas reais com capricho de pôster impresso.
                </p>
            </div>
        </div>
    )
}

export default HeroSection