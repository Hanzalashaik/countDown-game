import { useRef, useState } from 'react'
import ResultModal from './ResultModal.jsx';

// let timer;
export default function TimeChallenge({ title, targetTime }) {
    
    const timer = useRef();
    const dialog = useRef();
    const [timeRemaining , setTimeRemaining] = useState(targetTime * 1000)

    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if(timeRemaining <=0){
        clearInterval(timer.current);
        
        dialog.current.open();
    }
    function handleReset(){
        setTimeRemaining(targetTime * 1000);
    }
    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaining((prevRemainig)=> prevRemainig - 10)
        }, 10)
    }

    function handlestop(){
        dialog.current.open();
        clearInterval(timer.current);

    }
    return (
        <>
        <ResultModal ref={dialog} targetTime={targetTime} remainingTime={timeRemaining} onReset={handleReset}/>
        <section className="challenge">
            <h2>{title}</h2>
            {/* {timeExpired && <p>you lost!</p>} */}
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timerIsActive ? handlestop :handleStart}>
                    {timerIsActive ? 'Stop ' : 'Start'} Challenge
                </button>
            </p>
            <p className={timerIsActive ? 'active' : undefined}>
                {timerIsActive ? 'Time is running...' : "Time inative"}
            </p>
        </section>

        </>
    )
}