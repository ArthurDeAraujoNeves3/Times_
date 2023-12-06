'use client';
import { useEffect, useState, useRef } from "react";
import Header from "../src/components/layout/Header";
import PomodoroTimer from "../src/components/PomodoroTimer";

export default function Pomodoro() {
    
    const[ editTimerModal, setEditTimerModal ] = useState(false);
    const[ tempoAtivo, setTempoAtivo ] = useState(false);
    const[ hours, setHours ] = useState(0);
    const[ min, setMin ] = useState(25);
    const[ seg, setSeg ] = useState(0);
    const[ breaks, setBreaks ] = useState(0); //Pomodoro e short break
    const[ breakLong, setBreakLong ] = useState(0); //Break long
    const timer: any = useRef(); //setInterval
    
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

        setMin(min);
        setSeg(seg);
        setTempoAtivo(false);
    };
    function pomodoro() {

        setMin(25);
        setSeg(0);
        setBreaks(0);
        setBreakLong(0);
    };
    function shortBreak() {

        setMin(5);
        setSeg(0);
        setBreaks(1);
        setBreakLong(0);
    };
    function longBreak() {

        setMin(15);
        setSeg(0);
        setBreaks(2);
        setBreakLong(0);
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

                        //Pausa curto - 5min
                        if ( breaks == 0 ) {

                            setMin(5);
                            setSeg(0);
                            setBreaks(1);
                            setBreakLong(breakLong + 1);
                        }
                        //Pausa longa - 15min
                        else if ( breakLong == 2 ) {

                            setMin(15);
                            setSeg(0);
                            setBreaks(1);
                            setBreakLong(0);
                        }
                        //Foco - 25min
                        else {

                            setMin(25);
                            setSeg(0);
                            setBreaks(0);
                        }
                        
                        setTempoAtivo(false);
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

            <PomodoroTimer hours={hours} min={min} seg={seg} onClickEdit={editTimer} onClickPlay={playTimer} onClickReset={resetTimer} tempoAtivo={tempoAtivo} onClickPomodoro={pomodoro} onClickShort={shortBreak} onClickLong={longBreak}/>
            
        </div>
        
    );
};
