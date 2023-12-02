import { useState } from "react";

type EditTimerProps = {

    hours: number,
    min: number,
    seg: number,
    onChangeHours: (value: any) => void,
    onChangeMin: (value: any) => void,
    onChangeSeg: (value: any) => void,
    onClickConfirme:(value:any) => void,
    onClickCancel:(value:any) => void,
};

export default function EditTimer( { hours, min, seg, onChangeHours, onChangeMin, onChangeSeg, onClickConfirme, onClickCancel }: EditTimerProps ) {

    const[hoursEdit, setHoursEdit] = useState("");
    const[minEdit, setMinEdit] = useState("");
    const[segEdit, setSegEdit] = useState("");

    return(

        <div className="flex flex-col items-center gap-5 absolute translate -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-20 bg-gradient-to-br from-green-200-a to-green-100-a rounded-3xl p-2">

            <div className="flex items-center gap-2">

                <input onChange={ (e) => { setHoursEdit(e.target.value) } } type="number" placeholder={`${hours <= 9 ? `0${hours}` : hours}`} className="bg-green-300-a w-24 py-10 rounded-3xl placeholder-white text-6xl text-center text-white border-2 border-solid border-green-300-a outline-none focus:border-green-100-a"/> {/*Horas*/}
                <p className="text-3xl text-white">:</p>
                <input onChange={ (e) => { setMinEdit(e.target.value) } } type="number" placeholder={`${min <= 9 ? `0${min}` : min}`} className="bg-green-300-a w-24 py-10 rounded-3xl placeholder-white text-6xl text-center text-white border-2 border-solid border-green-300-a outline-none focus:border-green-100-a"/> {/*Minutos*/}
                <p className="text-3xl text-white">:</p>
                <input onChange={ (e) => { setSegEdit(e.target.value) } } type="number" placeholder={`${seg <= 9 ? `0${seg}` : seg}`} className="bg-green-300-a w-24 py-10 rounded-3xl placeholder-white text-6xl text-center text-white border-2 border-solid border-green-300-a outline-none focus:border-green-100-a"/> {/*Segundos*/}
            </div> {/*Inputs do tempo*/}

            <div className="flex items-center gap-3">

                <button onClick={onClickConfirme} className="bg-green-300-a p-2 px-5 rounded-3xl text-white  duration-[0.2s] hover:brightness-90">Confirmar</button> {/*Btn para confimar*/}
                <button onClick={onClickCancel} className="bg-green-300-a p-2 px-5 rounded-3xl text-white  duration-[0.2s] hover:brightness-90">Cancelar</button> {/*Btn para cancelar*/}
            </div> {/*Btns*/}
            
        </div>
    );
};