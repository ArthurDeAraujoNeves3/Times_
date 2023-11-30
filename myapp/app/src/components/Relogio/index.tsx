'use client';
import { useState } from "react";
import { FaPlay, FaStop, FaRedoAlt } from "react-icons/fa";

export default function Relogio() {

    const[ tempoAtivo, setTempoAtivo ] = useState(false);
    const[min, setMin] = useState(0);
    const[seg, setSeg] = useState(0);

    //Iniciar relogio
    function iniciarTempo() {

        if (tempoAtivo == false) {

            setTempoAtivo(true);
        }
        else {

            setTempoAtivo(false);
        }
    }

    return(

        <div className="absolute top-1/2 left-1/2 translate -translate-x-1/2 -translate-y-1/2 flex flex-col gap-3 items-center justify-center bg-gradient-to-br from-green-200-a to-green-100-a border-4 border-solid border-green-300-a w-[500px] h-[500px] rounded-full duration-[0.2s] sm:w-[300px] sm:h-[300px]">
            
            <div className="flex flex-col items-center">

                <p className="text-lg text-green-300-a">Tempo total: {min <= 9 ? `0${min}` : min}:{seg <= 9 ? `0${seg}` : seg}</p>
                <p className="text-6xl text-green-300-a p-2 border-2 border-dashed border-transparent rounded-lg cursor-pointer duration-[0.2s] hover:border-green-300-a sm:text-5xl">{min <= 9 ? `0${min}` : min}:{seg <= 9 ? `0${seg}` : seg}</p>
            </div> {/*Tempo*/}

            <div className="flex items-center gap-3">

                {tempoAtivo ? 
                <FaStop onClick={ iniciarTempo } className="bg-gradient-to-br from-green-300-a to-green-200-a p-3 rounded-2xl text-5xl text-green-100-a duration-[0.2s] cursor-pointer hover:brightness-90 active:scale-90 sm:text-[40px] sm:rounded-[14px]"/> : 
                <FaPlay onClick={ iniciarTempo } className="bg-gradient-to-br from-green-300-a to-green-200-a p-3 rounded-2xl text-5xl text-green-100-a duration-[0.2s] cursor-pointer hover:brightness-90 active:scale-90 sm:text-[40px] sm:rounded-[14px]"/> 
                } {/*Btn para iniciar / pausar tempo*/}

                <FaRedoAlt className="bg-gradient-to-br from-green-300-a to-green-200-a p-3 rounded-2xl text-5xl text-green-100-a duration-[0.2s] cursor-pointer hover:brightness-90 active:scale-90 sm:text-[40px] sm:rounded-[14px]"/> {/*Recomeçar temporizador*/}

            </div> {/*Btns*/}
            
        </div>
    );
};