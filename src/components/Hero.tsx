import { HiDownload } from 'react-icons/hi'

export function Hero() {
    return (
        <section className="rounded-br-[80px] bg-gradient-to-tr from-black to-gray-900 text-white md:rounded-br-[180px]">
            <div className="container mx-auto max-w-4xl p-2 py-12 flex-col md:flex-row">
                    <div className="basis-1/2">
                        <h1 className="mb-6">
                            <span className="font-handwriting block text-3xl text-center md:text-left">Olá, me chamo</span>
                            <span className="font-headline text-5xl font-semibold ">Anderson </span>
                            <span className="font-headline text-5xl font-light text-blue-400 ">Sousa</span>
                        </h1>  

                        <h2 className="font-semibold flex items-center gap-2 text-center md:text-left">
                            <div className="h-1 w-12 rounded-full bg-blue-800"></div>
                            Desenvolvedor Full Stack Júnior
                        </h2>

                        <p className="text-gray-400 my-6 text-center md:text-left">
                        Desenvolvedor Full Stack Júnior apaixonado por criar experiências digitais incríveis! ♥
                        </p>

                        <div className="flex items-center justify-center md:justify-start gap-2">
                            <a href="https://wa.me/5581987630519?text=Olá..." target="_blank" className="underline font-bold">Fale Comigo</a>
                            <span className="italic text-gray-500">ou</span>
                            <a href="documents/Anderson de Sousa Soares -  Desenvolvedor Full-Stack Júnior.pdf" target="_blank" className="button text-gray-600 hover:text-gray-900 flex items-center gap-2"><HiDownload/>Baixe meu CV</a>
                        </div>
                    </div>
                    <div className="basis-1/2"></div>
                </div>
        </section>
    )
}