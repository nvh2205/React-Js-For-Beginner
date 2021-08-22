import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./styles.css"
CountdownTimer.propTypes = {

};


const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;
const timerProps = {
    isPlaying: true,
    size: 100,
    strokeWidth: 4
};

const renderTime = (dimension, time) => {

    return (
        <div className="time-wrapper">
            <div className="time">{time}</div>
            <div>{dimension}</div>
        </div>
    );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;


function CountdownTimer(props) {

    const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
    const endTime = stratTime + 7200; // use UNIX timestamp in seconds
    const remainingTime = endTime - stratTime;
    const hours = Math.ceil(remainingTime / hourSeconds);
    
    const hoursDuration = hours * hourSeconds
    
    
    return (
        <div className="countdown-timer">
            <CountdownCircleTimer
                {...timerProps}
                colors={[["#D14081"]]}
                duration={hoursDuration}
                initialRemainingTime={remainingTime}
                onComplete={(totalElapsedTime) => [
                    remainingTime - totalElapsedTime> hourSeconds
                ]}
            >
                {({ elapsedTime }) =>
                    renderTime("hours", getTimeHours(hoursDuration - elapsedTime))
                }
            </CountdownCircleTimer>
            
            <CountdownCircleTimer
                {...timerProps}
                colors={[["#EF798A"]]}
                duration={hourSeconds}
                initialRemainingTime={remainingTime % hourSeconds}
                onComplete={(totalElapsedTime) => [
                    remainingTime - totalElapsedTime > minuteSeconds
                ]}
            >
                {({ elapsedTime }) =>
                    renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))
                }
            </CountdownCircleTimer>
            <CountdownCircleTimer
                {...timerProps}
                colors={[["#218380"]]}
                duration={minuteSeconds}
                initialRemainingTime={remainingTime % minuteSeconds}
                onComplete={(totalElapsedTime) => [
                    remainingTime - totalElapsedTime > 0
                ]}
            >
                {({ elapsedTime }) =>
                    renderTime("seconds", getTimeSeconds(elapsedTime))
                }
            </CountdownCircleTimer>
        </div>
    );
}

export default CountdownTimer;