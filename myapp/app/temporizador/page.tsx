'use client';
import { useEffect, useState, useRef } from "react";
import Header from "../src/components/layout/Header";
import Timer from "../src/components/Timer";
import EditTimer from "../src/components/EditTimer";

export default function Temporizador() {

    const[ editTimerModal, setEditTimerModal ] = useState(false);
    const[ tempoAtivo, setTempoAtivo ] = useState(false);
    const[ hours, setHours ] = useState(0);
    const[ min, setMin ] = useState(5);
    const[ seg, setSeg ] = useState(0);
    const[ hoursEdit, setHoursEdit ] = useState(0);
    const[ minEdit, setMinEdit ] = useState(5);
    const[ segEdit, setSegEdit ] = useState(0);
    const timer: any = useRef(); //setInterval
    
    //Definindo horas
    function defineHours(e: any) {

        setHoursEdit(Number(e.target.value));
    };
    //Definindo minutos
    function defineMin(e: any) {

        setMinEdit(Number(e.target.value));
    };
    //Definindo segundos
    function defineSeg(e: any) {

        setSegEdit(Number(e.target.value));
    };
    //Confirmar a edicao de dados
    function confirmeEdit() {

        setEditTimerModal(false);
        setHours(hoursEdit);
        setMin(minEdit);
        setSeg(segEdit);
    };
    //Cancelar edicao de dados
    function cancelEdit() {

        setEditTimerModal(false);
        setHoursEdit(0);
        setMinEdit(0);
        setSegEdit(0);
    };
    //Editar tempo
    function editTimer() {

        if ( editTimerModal == false ) {

            setEditTimerModal(true);
        }
        else {

            setEditTimerModal(false);
        }
    };
    //Iniciar tempo
    function playTimer() {

        if( tempoAtivo == false ) {

            setTempoAtivo(true);
        }
        else {

            setTempoAtivo(false);
        }
    };
    //Reiniciar tempo
    function resetTimer() {

        setHours(hoursEdit);
        setMin(minEdit);
        setSeg(segEdit);
        setTempoAtivo(false);
    };
    function playAudio() {

    };

    //Iniciar temporizador
    useEffect(() => {

        if ( tempoAtivo == true ) {

            timer.current = setInterval(() => {

                setSeg( seg - 1);

                if( seg == 0 ) {

                    setSeg(59);
                    setMin(min - 1);

                    if( min == 0 ) {

                        setMin(59);
                        setHours(hours - 1);
                        
                        //Fim do temporizador
                        if( hours == 0 ) {
                            
                            setHours(0);
                            setMin(0);
                            setSeg(0);
                            setTempoAtivo(false);
                            playAudio();

                        };
                    };
                };
            }, 1000);

            return () => clearInterval(timer.current);
        }
    });
    //Parar temporizador
    useEffect(() => {

        if(tempoAtivo == false) {

            clearInterval(timer.current);
        }

    });

    return(

        <div className="relative flex h-full">

            <Header/>

            {editTimerModal ? <div className="absolute z-10 bg-black/30 backdrop-blur-sm w-full h-full"></div> : <></>} {/*Fundo do modal*/}
            {editTimerModal == true ? <EditTimer onClickCancel={cancelEdit} onClickConfirme={confirmeEdit} onChangeHours={defineHours} onChangeMin={defineMin} onChangeSeg={defineSeg} hours={hours} min={min} seg={seg}/> : <></>} {/*Modal para editar tempo*/}

            <Timer hours={hours} min={min} seg={seg} tempoAtivo={tempoAtivo} timeTotal={`${hoursEdit <= 9 ? `0${hoursEdit}` : hoursEdit}:${minEdit <= 9 ? `0${minEdit}` : minEdit}:${segEdit <= 9 ? `0${segEdit}` : segEdit}`} onClickEdit={editTimer} onClickPlay={playTimer} onClickReset={resetTimer}/>

        </div>
    );
};
