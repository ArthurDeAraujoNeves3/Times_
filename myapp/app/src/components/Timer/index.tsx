import { FaPlay, FaStop, FaRedoAlt } from "react-icons/fa";

type TimerProps = {

    onClickPlay: (value:any) => void,
    onClickReset: (value:any) => void,
    onClickEdit: (value:any) => void,
    tempoAtivo: boolean,
    timeTotal: string,
    hours: number,
    min: number,
    seg: number,
};

export default function Timer( { onClickPlay, onClickReset, onClickEdit, tempoAtivo, timeTotal, hours, min, seg }: TimerProps ) {

    return(

        <div className="absolute top-1/2 left-1/2 translate -translate-x-1/2 -translate-y-1/2 flex flex-col gap-3 items-center justify-center bg-gray-200-a border-4 border-solid border-gray-100-a w-[500px] h-[500px] rounded-full duration-[0.2s] sm:w-[300px] sm:h-[300px]">
            
            <div className="flex flex-col items-center">

                <p className="text-lg text-orange-100-a">Tempo total: {timeTotal}</p> {/*Tempo total*/}
                <p onClick={onClickEdit} className="text-6xl text-orange-100-a p-2 border-2 border-dashed border-transparent rounded-lg cursor-pointer duration-[0.2s] hover:border-orange-100-a sm:text-5xl">{hours <= 9 ? `0${hours}` : hours}:{min <= 9 ? `0${min}` : min}:{seg <= 9 ? `0${seg}` : seg}</p> {/*Temporizador*/}
            </div> {/*Tempo*/}

            <div className="flex items-center gap-3">

                {tempoAtivo ? 
                <FaStop onClick={ onClickPlay } className="bg-white p-3 rounded-2xl text-5xl text-orange-100-a duration-[0.2s] cursor-pointer hover:brightness-90 active:scale-90 sm:text-[40px] sm:rounded-[14px]"/> : 
                <FaPlay onClick={ onClickPlay } className="bg-white p-3 rounded-2xl text-5xl text-orange-100-a duration-[0.2s] cursor-pointer hover:brightness-90 active:scale-90 sm:text-[40px] sm:rounded-[14px]"/> 
                } {/*Btn para iniciar / pausar tempo*/}

                <FaRedoAlt onClick={onClickReset} className="bg-white p-3 rounded-2xl text-5xl text-orange-100-a duration-[0.2s] cursor-pointer hover:brightness-90 active:scale-90 sm:text-[40px] sm:rounded-[14px]"/> {/*Recomeçar temporizador*/}

            </div> {/*Btns*/}
            
        </div>
    );
};
