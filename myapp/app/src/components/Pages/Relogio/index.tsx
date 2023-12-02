'use client';
import { useEffect, useState, useRef } from "react";
import Timer from "../../Timer";
import EditTimer from "../../EditTimer";

export default function Relogio() {

    const[ editTimerModal, setEditTimerModal ] = useState(false);
    const[ tempoAtivo, setTempoAtivo ] = useState(false);
    const[ timeTotal, setTimeTotal ] = useState("00:00:00");
    const[ hours, setHours ] = useState(0);
    const[ min, setMin ] = useState(0);
    const[ seg, setSeg ] = useState(0);
    const timer = useRef();
    
    //Definindo horas
    function defineHours(e) {

        setHours(Number(e.target.value));
    }
    //Definindo minutos
    function defineMin(e) {

        setMin(Number(e.target.value));
    }
    //Definindo segundos
    function defineSeg(e) {

        setSeg(Number(e.target.value));
    }
    function CancelEdit() {

        setEditTimerModal(false);
    }
    function ConfirmeEdit() {

        setHours(hoursEdit);
        setEditTimerModal(false);
    }
    //Editar tempo
    function editTimer() {

        if ( editTimerModal == false ) {

            setEditTimerModal(true);
        }
        else {

            setEditTimerModal(false);
        }
    }
    //Iniciar tempo
    function playTimer() {

        if(tempoAtivo == false) {

            setTempoAtivo(true);
        }
        else {

            setTempoAtivo(false);
        }
    }
    //Reiniciar tempo
    function resetTimer() {

        setHours(0);
        setMin(0);
        setSeg(0);
        setTempoAtivo(false);
    }

    //Iniciar temporizador
    useEffect(() => {

        if(tempoAtivo == true) {

            timer.current = setInterval(() => {

                setSeg( seg + 1);

                if( seg == 59 ) {

                    setSeg(0);
                    setMin(min + 1);

                    if( min == 59 ) {

                        setMin(0);
                        setHours(hours + 1);
                        
                        //Fim do temporizador
                        if( hours == 23 ) {
                            
                            setHours(0);
                            setTempoAtivo(false);

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

        <>

            {editTimerModal ? <div className="absolute z-10 bg-black/30 backdrop-blur-sm w-full h-full"></div> : <></>} {/*Fundo do modal*/}
            {editTimerModal == true ? <EditTimer onClickCancel={CancelEdit} onClickConfirme={ConfirmeEdit} onChangeHours={defineHours} onChangeMin={defineMin} onChangeSeg={defineSeg} hours={hours} min={min} seg={seg}/> : <></>} {/*Modal para editar tempo*/}

            <Timer hours={hours} min={min} seg={seg} onClickEdit={editTimer} onClickPlay={playTimer} onClickReset={resetTimer} tempoAtivo={tempoAtivo} timeTotal={timeTotal}/> {/*Temporizador*/}

        </>
    );
};