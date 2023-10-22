import {
    HiCommandLine,
    HiComputerDesktop,
    HiDevicePhoneMobile
} from "react-icons/hi2"

export function Services() {
    const services = [
        {
          title: "Sites",
          description:
            "Adoro criar experiências atraentes usando HTML5, CSS3 e React.js. Meu foco está em designs atraentes e interativos, tornando a web mais atraente e envolvente",
          icon: <HiComputerDesktop className="h-12 w-12" />,
        },
        {
          title: "Sistemas",
          description: "Construo alicerces para aplicativos web usando Java e Python. Desde gerenciamento de servidores até o desenvolvimento de APIs, garanto que tudo funcione sem problemas.",
          icon: <HiCommandLine className="h-12 w-12" />,
        },
        {
          title: "Responsividade",
          description: "Responsividade é a chave. Com o Tailwind CSS, garanto que seu site seja perfeito em qualquer dispositivo, de desktops a smartphones. Cada tela, uma experiência incrível.",
          icon: <HiDevicePhoneMobile className="h-12 w-12" />,
        },
    ]

    return (
        <section className="container mx-auto my-12 max-w-4xl p-4">
            <div className="p-4 text-center">
                <p className="text-sm font-semibold uppercase text-blue-600">
                    O que faço de melhor
                </p>

                <h2 className="mb-2 font-bold text-blue-900">
                    <span className="mr-2 font-headline text-3xl">Meus</span>
                    <span className="font-handwriting text-4xl">Serviços</span>
                </h2>

                <p className="text-sm text-gray-600">
                    Posso oferecer uma gama completa de serviços, do front-end ao back-end.
                </p>
            </div>

            <div className="mt-6 flex flex-col gap-2 md:flex-row">
                {
                    services.map((service, index) => (
                        <div className="basis-1/3 rounded-lg bg-blue-700 p-4 text-white" 
                        key={`service-${index}`}>
                            <div className="mb-2">{service.icon}</div>
                            <h3 className="text-xl font-bold">{service.title}</h3>
                            <p className="text-sm text-justify">{service.description}</p>
                        </div>
                    ))}
            </div>
        </section>
    )
}