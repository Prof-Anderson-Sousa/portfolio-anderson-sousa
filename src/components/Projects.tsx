import { HiArrowTopRightOnSquare } from "react-icons/hi2"

export function Projects() {
    const projects = [
      {
        title: "NeoTech Cursos",
        description: "Site institucional que combina design atraente com funcionalidade prática. Os visitantes podem facilmente explorar cursos e se inscrever com facilidade.",
        image:
          "images/neotech.png",
        link: "https://neotechcursos.com.br/",
        colSpan: "col-span-1",
      },
      {
        title: "HK Viagens",
        description: "Site de viagens que convida os visitantes a explorar destinos incríveis, encontrar acomodações e experiências memoráveis. Com um design elegante e responsivo, o projeto reflete minha paixão por criar experiências de viagem online envolventes.",
        image:
          "images/hk-viagens.png",
        link: "https://prof-anderson-sousa.github.io/HK-Viagens/",
        colSpan: "col-span-1 md:col-span-2",
      },
      {
        title: "Óticas Vida",
        description: "Site para ótica, com um design elegante e informações detalhadas sobre todos os produtos, proporcionando uma experiência de compra excepcional.",
        image:
          "images/otica.png",
        link: "https://prof-anderson-sousa.github.io/otica/",
        colSpan: "col-span-1",
      },
      {
        title: "Calculadora IOS",
        description: "Calculadora inspirada no iOS, com um design intuitivo e responsivo que oferece uma experiência prática para os usuários.",
        image:
          "images/calculadora.jpg",
        link: "https://prof-anderson-sousa.github.io/calculadora-reactjs-site/",
        colSpan: "col-span-1",
      },
      {
        title: "Gerenciador de Finanças",
        description: "Plataforma inovadora que oferece funcionalidades abrangentes para o gerenciamento financeiro, atendendo a uma variedade de CPFs e Cálculos.",
        image:
          "images/contabil.jpg",
        link: "https://prof-anderson-sousa.github.io/js-challenge-contabilizar/",
        colSpan: "col-span-1",
      },
    ]
    return (
        <>
        <section className="rounded-tl-[80px] bg-gradient-to-tr from-black to-gray-900 text-white md:rounded-tl-[180px]">
            <div className="container mx-auto max-w-4xl p-4 py-12">
                <div className="relative p-4 text-center">
                    <h2 className="relative z-50 mb-2 text-white">
                        <span className="mr-2 font-headline text-3xl font-semibold">
                            Projetos &
                        </span>
                        <span className="font-handwriting text-4xl">Portfólio</span>
                    </h2>
                    <p className="relative text-sm text-gray-400">
                        Alguns dos projetos pessoais e que já realizei ao longo da minha
                        trajetória como programador front-end.
                    </p>
                    <div className="absolute left-1/2 top-3 z-0 h-10 rounded-lg bg-blue-400/10"/>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {projects.map((project, index) => (
                        <div className={`group relative h-56 cursor-default rounded-lg
                        ${project.colSpan} bg-cover bg-center`} 
                        key={`project-${index}`}
                        style={{backgroundImage: `url('${project.image}')`}}>
                            <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-lg bg-blue-600 text-white opacity-0 transition-opacity group-hover:opacity-100">
                                <h4 className="font-headline text-lg font-semibold">
                                    {project.title}
                                </h4>
                                <p className="px-2 mb-4 text-justify text-sm">{project.description}</p>
                                <a href={project.link} target="_blank">
                                    <HiArrowTopRightOnSquare className="h-6 w-6" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </>
    )
}