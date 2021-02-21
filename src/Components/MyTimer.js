import React, { useState } from 'react';
import ReactSvgTimer from 'react-svg-timer'

export default function MyTimer(props) {

    let [resetRequested, setResetRequested] = useState(false)
    let [timerIsComplete, setTimerIsComplete] = useState(false)
    let [logMilliseconds, setLogMilliseconds] = useState(true)

    function onComplete(status) {
        setTimerIsComplete(status);
    }

    function onReset() {
        setResetRequested(false);
    }

    function timerValue(value) {
        if (logMilliseconds) {
            console.log(value);
        }
    }

    function onResetRequest() {
        setResetRequested(true);
    }

    return (
        <div style={{ width: '3.5em', height: '3.5em' }}>
            <ReactSvgTimer 
                timerCount={40}
                countdownColor="#7b5d91"
                innerColor="black"
                outerColor="white"
                resetTimer={onReset}
                completeTimer={onComplete}
                resetTimerRequested={resetRequested}
                timerDuration={timerValue}
                displayCountdown={true}
            />
        </div>
    );

}