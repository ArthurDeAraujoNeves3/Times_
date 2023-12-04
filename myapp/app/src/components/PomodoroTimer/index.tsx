import { FaPlay, FaStop, FaBook } from "react-icons/fa";
import { IoPhoneLandscape } from "react-icons/io5";
import { FaBreadSlice } from "react-icons/fa6";

type PomodoroTimerProps = {

    onClickPlay: (value:any) => void,
    onClickReset: (value:any) => void,
    onClickEdit: (value:any) => void,
    onClickPomodoro: (value:any) => void,
    onClickShort: (value:any) => void,
    onClickLong: (value:any) => void,
    tempoAtivo: boolean,
    hours: number,
    min: number,
    seg: number,
};

export default function PomodoroTimer( { onClickPlay, onClickReset, onClickEdit, tempoAtivo, hours, min, seg, onClickPomodoro, onClickShort, onClickLong }: PomodoroTimerProps ) {

    return(

        <div className="absolute top-1/2 left-1/2 translate -translate-x-1/2 -translate-y-1/2 flex flex-col gap-3 items-center justify-center bg-gray-200-a border-4 border-solid border-gray-100-a w-[500px] h-[500px] rounded-full duration-[0.2s] sm:w-[300px] sm:h-[300px]">

            <div>

                <div className="flex items-center gap-3 sm:hidden">
                    <p onClick={onClickPomodoro} className="bg-orange-100-a p-2 rounded-full text-white duration-[0.2s] cursor-pointer hover:brightness-90 active:scale-90">Pomodoro</p>
                    <p onClick={onClickShort} className="bg-orange-100-a p-2 rounded-full text-white duration-[0.2s] cursor-pointer hover:brightness-90 active:scale-90">Short Break</p>
                    <p onClick={onClickLong} className="bg-orange-100-a p-2 rounded-full text-white duration-[0.2s] cursor-pointer hover:brightness-90 active:scale-90">Long Break</p>
                </div> {/*Btns com texto*/}

                <div className="hidden items-center gap-3 sm:flex">

                    <FaBook onClick={onClickPomodoro} className="text-white text-4xl p-2 bg-orange-100-a rounded-lg duration-[0.2s] cursor-pointer hover:brightness-90 active:scale-90"/>
                    <IoPhoneLandscape onClick={onClickShort} className="text-white text-4xl p-2 bg-orange-100-a rounded-lg duration-[0.2s] cursor-pointer hover:brightness-90 active:scale-90"/>
                    <FaBreadSlice onClick={onClickLong} className="text-white text-4xl p-2 bg-orange-100-a rounded-lg duration-[0.2s] cursor-pointer hover:brightness-90 active:scale-90"/> {/*Long break*/}
                </div> {/*Btns com icones*/}

            </div> {/*Btns para mudar o timer*/}
            
            <div className="flex flex-col items-center">

                <p onClick={onClickEdit} className="text-6xl text-orange-100-a p-2 rounded-lg duration-[0.2s] sm:text-5xl">{min <= 9 ? `0${min}` : min}:{seg <= 9 ? `0${seg}` : seg}</p> {/*Temporizador*/}
            </div> {/*Tempo*/}

            <div className="flex items-center gap-3">

                {tempoAtivo ? 
                <FaStop onClick={ onClickPlay } className="bg-white p-3 w-40 rounded-2xl text-5xl text-orange-100-a duration-[0.2s] cursor-pointer hover:brightness-90 active:scale-90 sm:text-[40px] sm:rounded-[14px]"/> : 
                <FaPlay onClick={ onClickPlay } className="bg-white p-3 w-40 rounded-2xl text-5xl text-orange-100-a duration-[0.2s] cursor-pointer hover:brightness-90 active:scale-90 sm:text-[40px] sm:rounded-[14px]"/> 
                } {/*Btn para iniciar / pausar tempo*/}

            </div> {/*Btns*/}
            
        </div>
    );
};
