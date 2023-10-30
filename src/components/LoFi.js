import React from 'react'
import '../assets/css/LoFi.css'

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
                <source src="./assets/video/Day-sunny.mp4" type="video/mp4" />
            </video>
            <video loop muted autoPlay className={!isSunny && isMorning ? 'videoIn' : 'videoOut'}>
                <source src="./assets/video/Day-rainny.mp4" type="video/mp4" />
            </video>
            <video loop muted autoPlay className={isSunny && !isMorning ?  'videoIn' : 'videoOut'}>
                <source src="./assets/video/Night-clear.mp4" type="video/mp4" />
            </video>
            <video loop muted autoPlay className={!isSunny && !isMorning ? 'videoIn' : 'videoOut'}>
                <source src="./assets/video/Night-rainny.mp4" type="video/mp4" />
            </video>

            {/* lofi chill */}
            <audio loop ref={audioChill1Ref} style={{display: 'none'}}>
                <source src='./assets/lofi/chill1.mp3' type="audio/mpeg" />
            </audio>
            <audio loop ref={audioChill2Ref} style={{display: 'none'}}>
                <source src='./assets/lofi/chill2.mp3' type="audio/mpeg" />
            </audio>
            <audio loop ref={audioChill3Ref} style={{display: 'none'}}>
                <source src='./assets/lofi/chill3.mp3' type="audio/mpeg" />
            </audio>

            {/* lofi jazz */}
            <audio loop ref={audioJazz1Ref} style={{display: 'none'}}>
                <source src="./assets/lofi/jazz1.mp3" type="audio/mpeg" />
            </audio>
            <audio loop ref={audioJazz2Ref} style={{display: 'none'}}>
                <source src="./assets/lofi/jazz2.mp3" type="audio/mpeg" />
            </audio>
            <audio loop ref={audioJazz3Ref} style={{display: 'none'}}>
                <source src="./assets/lofi/jazz3.mp3" type="audio/mpeg" />
            </audio>

            {/* lofi sleep */}
            <audio loop ref={audioSleep1Ref} style={{display: 'none'}}>
                <source src="./assets/lofi/sleepy1.mp3" type="audio/mpeg" />
            </audio>
            <audio loop ref={audioSleep2Ref} style={{display: 'none'}}>
                <source src="./assets/lofi/sleepy2.mp3" type="audio/mpeg" />
            </audio>
            <audio loop ref={audioSleep3Ref} style={{display: 'none'}}>
                <source src="./assets/lofi/sleepy3.mp3" type="audio/mpeg" />
            </audio>

            {/* song */}
            <audio loop controls ref={audioRainRef} style={{display: 'none'}}>
                <source src="./assets/musics/rain_city.mp3" type="audio/mpeg" />
            </audio>
            <audio loop controls ref={audioBirdRef} style={{display: 'none'}}>
                <source src="./assets/musics/birds.mp3" type="audio/mpeg" />
            </audio>
            <audio loop controls ref={audioTrafficRef} style={{display: 'none'}}>
                <source src="./assets/musics/city_traffic.mp3" type="audio/mpeg" />
            </audio>
            <audio loop controls ref={audioFanRef} style={{display: 'none'}}>
                <source src="./assets/musics/fan.mp3" type="audio/mpeg" />
            </audio>
            <audio loop controls ref={audioFirePlaceRef} style={{display: 'none'}}>
                <source src="./assets/musics/fireplace.mp3" type="audio/mpeg" />
            </audio>
            <audio loop controls ref={audioPeopleRef} style={{display: 'none'}}>
                <source src="./assets/musics/people_talk_inside.mp3" type="audio/mpeg" />
            </audio>
            <audio loop controls ref={audioRiverRef} style={{display: 'none'}}>
                <source src="./assets/musics/river.mp3" type="audio/mpeg" />
            </audio>
            <audio loop controls ref={audioWindRef} style={{display: 'none'}}>
                <source src="./assets/musics/wind.mp3" type="audio/mpeg" />
            </audio>
            <audio loop controls ref={audioRainRef} style={{display: 'none'}}>
                <source src="./assets/musics/rain_city.mp3" type="audio/mpeg" />
            </audio>
            <audio loop controls ref={audioRainRef} style={{display: 'none'}}>
                <source src="./assets/musics/rain_city.mp3" type="audio/mpeg" />
            </audio>
        </>
        
    )
}

export default LoFi