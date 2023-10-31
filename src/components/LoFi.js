import React from 'react'
import '../assets/css/LoFi.css'

import daySunny from '../assets/video/Day-sunny.mp4'
import dayRainny from '../assets/video/Day-rainny.mp4'
import nightClear from '../assets/video/Night-clear.mp4'
import nightRainny from '../assets/video/Night-rainny.mp4'

import chill1 from '../assets/lofi/chill1.mp3'
import chill2 from '../assets/lofi/chill2.mp3'
import chill3 from '../assets/lofi/chill3.mp3'
import jazz1 from '../assets/lofi/jazz1.mp3'
import jazz2 from '../assets/lofi/jazz2.mp3'
import jazz3 from '../assets/lofi/jazz3.mp3'
import sleep1 from '../assets/lofi/sleepy1.mp3'
import sleep2 from '../assets/lofi/sleepy2.mp3'
import sleep3 from '../assets/lofi/sleepy3.mp3'

import rain from '../assets/musics/rain_city.mp3'
import birds from '../assets/musics/birds.mp3'
import traffic from '../assets/musics/city_traffic.mp3'
import fan from '../assets/musics/fan.mp3'
import firePlace from '../assets/musics/fireplace.mp3'
import people from '../assets/musics/people_talk_inside.mp3'
import river from '../assets/musics/river.mp3'
import wind from '../assets/musics/wind.mp3'

const LoFi = ({
    audioChill1Ref,
    audioChill2Ref, 
    audioChill3Ref,

    audioJazz1Ref, 
    audioJazz2Ref, 
    audioJazz3Ref, 

    audioSleep1Ref, 
    audioSleep2Ref, 
    audioSleep3Ref, 

    audioRainRef, 
    audioBirdRef, 
    audioTrafficRef, 
    audioFanRef, 
    audioFirePlaceRef, 
    audioPeopleRef, 
    audioRiverRef, 
    audioWindRef, 

    isSunny,
    isMorning
    // songIndex
}) => {
    return (
        <>
            {/* bg */}
            <video loop muted autoPlay className={isSunny && isMorning ? 'videoIn' : 'videoOut'}>
                <source src={daySunny} type="video/mp4" />
            </video>
            <video loop muted autoPlay className={!isSunny && isMorning ? 'videoIn' : 'videoOut'}>
                <source src={dayRainny} type="video/mp4" />
            </video>
            <video loop muted autoPlay className={isSunny && !isMorning ?  'videoIn' : 'videoOut'}>
                <source src={nightClear} type="video/mp4" />
            </video>
            <video loop muted autoPlay className={!isSunny && !isMorning ? 'videoIn' : 'videoOut'}>
                <source src={nightRainny} type="video/mp4" />
            </video>

            {/* lofi chill */}
            <audio loop ref={audioChill1Ref} style={{display: 'none'}}>
                <source src={chill1} type="audio/mpeg" />
            </audio>
            <audio loop ref={audioChill2Ref} style={{display: 'none'}}>
                <source src={chill2} type="audio/mpeg" />
            </audio>
            <audio loop ref={audioChill3Ref} style={{display: 'none'}}>
                <source src={chill3} type="audio/mpeg" />
            </audio>

            {/* lofi jazz */}
            <audio loop ref={audioJazz1Ref} style={{display: 'none'}}>
                <source src={jazz1} type="audio/mpeg" />
            </audio>
            <audio loop ref={audioJazz2Ref} style={{display: 'none'}}>
                <source src={jazz2} type="audio/mpeg" />
            </audio>
            <audio loop ref={audioJazz3Ref} style={{display: 'none'}}>
                <source src={jazz3} type="audio/mpeg" />
            </audio>

            {/* lofi sleep */}
            <audio loop ref={audioSleep1Ref} style={{display: 'none'}}>
                <source src={sleep1} type="audio/mpeg" />
            </audio>
            <audio loop ref={audioSleep2Ref} style={{display: 'none'}}>
                <source src={sleep2} type="audio/mpeg" />
            </audio>
            <audio loop ref={audioSleep3Ref} style={{display: 'none'}}>
                <source src={sleep3} type="audio/mpeg" />
            </audio>

            {/* song */}
            <audio loop controls ref={audioRainRef} style={{display: 'none'}}>
                <source src={rain} type="audio/mpeg" />
            </audio>
            <audio loop controls ref={audioBirdRef} style={{display: 'none'}}>
                <source src={birds} type="audio/mpeg" />
            </audio>
            <audio loop controls ref={audioTrafficRef} style={{display: 'none'}}>
                <source src={traffic} type="audio/mpeg" />
            </audio>
            <audio loop controls ref={audioFanRef} style={{display: 'none'}}>
                <source src={fan} type="audio/mpeg" />
            </audio>
            <audio loop controls ref={audioFirePlaceRef} style={{display: 'none'}}>
                <source src={firePlace} type="audio/mpeg" />
            </audio>
            <audio loop controls ref={audioPeopleRef} style={{display: 'none'}}>
                <source src={people} type="audio/mpeg" />
            </audio>
            <audio loop controls ref={audioRiverRef} style={{display: 'none'}}>
                <source src={river} type="audio/mpeg" />
            </audio>
            <audio loop controls ref={audioWindRef} style={{display: 'none'}}>
                <source src={wind} type="audio/mpeg" />
            </audio>
        </>
        
    )
}

export default LoFi