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

    return(

        <div className="flex flex-col items-center gap-5 absolute translate -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-20 bg-gray-200-a border-[3px] border-solid border-gray-100-a rounded-3xl p-2">

            <div className="flex items-center gap-2 sm:flex-col">

                <input onChange={ onChangeHours } type="number" placeholder={`${hours <= 9 ? `0${hours}` : hours}`} className="bg-green-300-a w-24 py-10 rounded-3xl placeholder-gray-100-a text-6xl text-center text-gray-100-a border-2 border-solid border-white outline-none focus:border-orange-100-a duration-[0.2s] sm:w-full"/> {/*Horas*/}
                <p className="text-3xl text-white">:</p>
                <input onChange={ onChangeMin } type="number" placeholder={`${min <= 9 ? `0${min}` : min}`} className="bg-green-300-a w-24 py-10 rounded-3xl placeholder-gray-100-a text-6xl text-center text-gray-100-a border-2 border-solid border-white outline-none focus:border-orange-100-a duration-[0.2s] sm:w-full"/> {/*Minutos*/}
                <p className="text-3xl text-white">:</p>
                <input onChange={ onChangeSeg } type="number" placeholder={`${seg <= 9 ? `0${seg}` : seg}`} className="bg-green-300-a w-24 py-10 rounded-3xl placeholder-gray-100-a text-6xl text-center text-gray-100-a border-2 border-solid border-white outline-none focus:border-orange-100-a duration-[0.2s] sm:w-full"/> {/*Segundos*/}
            </div> {/*Inputs do tempo*/}

            <div className="flex items-center gap-3">

                <button onClick={onClickConfirme} className="bg-orange-100-a p-2 px-5 rounded-3xl text-white  duration-[0.2s] hover:brightness-90">Confirmar</button> {/*Btn para confimar*/}
                <button onClick={onClickCancel} className="bg-orange-100-a p-2 px-5 rounded-3xl text-white  duration-[0.2s] hover:brightness-90">Cancelar</button> {/*Btn para cancelar*/}
            </div> {/*Btns*/}
            
        </div>
    );
};