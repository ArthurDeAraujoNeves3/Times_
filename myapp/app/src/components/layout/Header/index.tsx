import Link from "next/link";
import { GiTomato } from "react-icons/gi";

export default function Header() {

    return(

        <div className="bg-red-500 flex flex-col gap-2 duration-[0.2s]">

            <div className="flex flex-col gap-3 bg-fundo h-auto w-[500px] rounded-lg p-5">

                <a href="#home" className="group flex items-center gap-2">

                    <p className="text-color duration-[0.2s] group-hover:text-white">Home</p>
                </a> {/*Btn home*/}
                <a href="#projetos" className="group flex items-center gap-2">

                    <p className="text-color duration-[0.2s] group-hover:text-white">Projetos</p>
                </a> {/*Btn projetos*/}
                <a href="#conhecimentos" className="group flex items-center gap-2">

                    <p className="text-color duration-[0.2s] group-hover:text-white">Conhecimentos</p>
                </a> {/*Btn conhecimentos*/}
                <a href="#sobreMim" className="group flex items-center gap-2">

                    <p className="text-color duration-[0.2s] group-hover:text-white">Sobre mim</p>
                </a> {/*Btn sobre mim*/}
                <a href="#contato" className="group flex items-center gap-2">

                    <p className="text-color duration-[0.2s] group-hover:text-white">Contato</p>
                </a> {/*Btn contato*/}
                
            </div> {/*Header*/}

            <div className="flex flex-col gap-3 bg-fundo h-screen w-[500px] rounded-lg p-5">
                
                <div className="group flex items-center gap-2">

                    <p className="text-color">Meus Repositórios</p>

                </div> {/*Titulo*/}

                <a href="#"><div className="flex items-center gap-3 p-2 rounded-lg hover:bg-modal">

                    <img src="https://github.com/ArthurDeAraujoNeves3.png" className="w-12 rounded-full" draggable="false" loading="eager" alt="Foto de perfil de Arthur de Araujo Neves"/> {/*Foto do github*/}

                    <p className="">MakeMyLifeEasy</p>
                </div></a> {/*Modelo do repositório*/}

            </div> {/*Repositórios*/}

        </div>
    );
};
