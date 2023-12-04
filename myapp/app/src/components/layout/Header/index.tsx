'use client';
import { useState } from "react";
import Link from "next/link";
import { GiTomato } from "react-icons/gi";
import { BiWorld } from "react-icons/bi";
import { GoClockFill } from "react-icons/go";
import { RiTimer2Fill } from "react-icons/ri";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

export default function Header() {

    const[ menuAtivado, setMenuAtivado ] = useState(false);

    function abrirMenu() {

        menuAtivado ? setMenuAtivado(false) : setMenuAtivado(true);
    }

    return(

        <>

            <div className="p-3">

                <HiMenuAlt1 onClick={abrirMenu} className="hidden absolute bg-white rounded-lg p-1 text-orange-100-a text-3xl transition-[0.2s] hover:brightness-90 active:scale-90 cursor-pointer lg:flex"/> {/*Btn para abrir menu*/}

                <div className="flex flex-col items-center justify-between bg-gray-200-a w-[200px] shadow-2xl rounded-3xl h-full p-3 duration-[0.2s] lg:ml-[-220px]">

                    <p className="text-orange-100-a font-bold text-4xl">times</p>

                    <div className="flex flex-col items-center gap-3">

                        <Link href="/pomodoro">
                            <div className="flex flex-col items-center bg-white p-3 w-40 rounded-3xl cursor-pointer duration-[0.2s] hover:brightness-90">

                                <GiTomato className="text-orange-100-a text-3xl"/>
                                <p className="font-bold text-orange-100-a">Pomodoro</p>
                            </div>
                        </Link> {/*Btn pomodoro*/}
                        <Link href="/">
                            <div className="flex flex-col items-center bg-white p-3 w-40 rounded-3xl cursor-pointer duration-[0.2s] hover:brightness-90">

                                <GoClockFill className="text-orange-100-a text-3xl"/>
                                <p className="font-bold text-orange-100-a">Cronômetro</p>
                            </div>
                        </Link> {/*Btn cronometro*/}
                        <Link href="/temporizador">
                            <div className="flex flex-col items-center bg-white p-3 w-40 rounded-3xl cursor-pointer duration-[0.2s] hover:brightness-90">

                            <RiTimer2Fill className="text-orange-100-a text-3xl"/>
                            <p className="font-bold text-orange-100-a">Temporizador</p>
                            </div>
                        </Link> {/*Btn temporizador*/}

                    </div> {/*Btns das paginas*/}

                    <div></div>

                </div>

            </div> {/*Header*/}

            {menuAtivado ? <div className="z-20 absolute w-screen h-screen bg-black/50"></div> : <></>} {/*Fundo do header*/}

            <div className={`z-20 absolute flex flex-col items-center justify-between p-3 w-[300px] h-screen bg-gray-300-a duration-[0.2s] ${menuAtivado ? "ml-0" : "ml-[-300px]"} lgMin:hidden`}>

                <IoMdClose onClick={ abrirMenu } className="absolute right-0 mr-3 bg-white rounded-lg p-1 text-orange-100-a text-3xl transition-[0.2s] cursor-pointer hover:brightness-90 active:scale-90"/>

                <p className="text-orange-100-a font-bold text-4xl">times</p>

                <div className="flex flex-col items-center gap-3">

                    <Link href="/pomodoro">
                        <div className="flex flex-col items-center bg-white p-3 w-40 rounded-3xl cursor-pointer duration-[0.2s] hover:brightness-90">

                        <GiTomato className="text-orange-100-a text-3xl"/>
                        <p className="font-bold text-orange-100-a">Pomodoro</p>
                        </div>
                    </Link> {/*Btn pomodoro*/}
                    <Link href="/">
                        <div className="flex flex-col items-center bg-white p-3 w-40 rounded-3xl cursor-pointer duration-[0.2s] hover:brightness-90">

                        <GoClockFill className="text-orange-100-a text-3xl"/>
                        <p className="font-bold text-orange-100-a">Cronômetro</p>
                        </div>
                    </Link> {/*Btn cronometro*/}
                    <Link href="/temporizador">
                        <div className="flex flex-col items-center bg-white p-3 w-40 rounded-3xl cursor-pointer duration-[0.2s] hover:brightness-90">

                        <RiTimer2Fill className="text-orange-100-a text-3xl"/>
                        <p className="font-bold text-orange-100-a">Temporizador</p>
                        </div>
                    </Link> {/*Btn temporizador*/}

                </div> {/*Btns das paginas*/}

                <div></div>

            </div> {/*Menu para telas menores*/}

        </>

    );
};