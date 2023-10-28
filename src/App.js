import React, { useState, useEffect, useRef } from 'react';
import './assets/css/App.css';

import { Box } from '@chakra-ui/react'
import LoFi from './components/LoFi';
import Header from './components/Header';

function App() {
    const [isFirstLoad, setIsFirstLoad] = useState(true)
    const [isFullScreen, setIsFullScreen] = useState(false)
    const [isSunny, setIsSunny] = useState(true)
    const [isMorning, setIsMorning] = useState(true)
    const [isSongPlaying, setIsSongPlaying] = useState(false)
    const [loFiTheme, setLoFiTheme] = useState('Chill')
    const [songIndex, setSongIndex] = useState(0)

    const [songVolume, setSongVolume] = useState(100)

    const [rainVolume, setRainVolume] = useState(0)
    const [birdVolume, setBirdVolume] = useState(0)
    const [trafficVolume, setTrafficVolume] = useState(0)
    const [fanVolume, setFanVolume] = useState(0)
    const [firePlaceVolume, setFirePlaceVolume] = useState(0)
    const [peopleVolume, setPeopleVolume] = useState(0)
    const [riverVolume, setRiverVolume] = useState(0)
    const [windVolume, setWindVolume] = useState(0)

    useEffect(() => {
        if (!isFirstLoad) {
            if (isSongPlaying) {
                pauseAll()
                loFiSongChangeHandler()
            }
        }
    }, [loFiTheme, songIndex])

    useEffect(() => {
        console.log(`playing ${loFiTheme} track #${songIndex}`);
    }, [songIndex])

    const audioChill1Ref = useRef()
    const audioChill2Ref = useRef()
    const audioChill3Ref = useRef()

    const audioJazz1Ref = useRef()
    const audioJazz2Ref = useRef()
    const audioJazz3Ref = useRef()

    const audioSleep1Ref = useRef()
    const audioSleep2Ref = useRef()
    const audioSleep3Ref = useRef()

    const audioRainRef = useRef()
    const audioBirdRef = useRef()
    const audioTrafficRef = useRef()
    const audioFanRef = useRef()
    const audioFirePlaceRef = useRef()
    const audioPeopleRef = useRef()
    const audioRiverRef = useRef()
    const audioWindRef = useRef()

    const pauseAll = () => {
        audioChill1Ref.current.pause()
        audioChill2Ref.current.pause()
        audioChill3Ref.current.pause()

        audioJazz1Ref.current.pause()
        audioJazz2Ref.current.pause()
        audioJazz3Ref.current.pause()

        audioSleep1Ref.current.pause()
        audioSleep2Ref.current.pause()
        audioSleep3Ref.current.pause()
    }

    const loFiSongChangeHandler = () => {
        if (loFiTheme === 'Chill') {
            if (songIndex === 0) {
                audioChill1Ref.current.play()
            } else if (songIndex == 1) {
                audioChill2Ref.current.play()
            } else if (songIndex == 2) {
                audioChill3Ref.current.play()
            }
        } else if (loFiTheme === 'Jazzy') {
            if (songIndex === 0) {
                audioJazz1Ref.current.play()
            } else if (songIndex == 1) {
                audioJazz2Ref.current.play()
            } else if (songIndex == 2) {
                audioJazz3Ref.current.play()
            }
        } else if (loFiTheme === 'Sleep') {
            if (songIndex === 0) {
                audioSleep1Ref.current.play()
            } else if (songIndex == 1) {
                audioSleep2Ref.current.play()
            } else if (songIndex == 2) {
                audioSleep3Ref.current.play()
            }
        }
    }

    const changeSongVolumeHandler = vol => {
        vol = 0.01 * vol
        audioChill1Ref.current.volume = vol
        audioChill2Ref.current.volume = vol
        audioChill3Ref.current.volume = vol

        audioJazz1Ref.current.volume = vol
        audioJazz2Ref.current.volume = vol
        audioJazz3Ref.current.volume = vol

        audioSleep1Ref.current.volume = vol
        audioSleep2Ref.current.volume = vol
        audioSleep3Ref.current.volume = vol
    }

    const changeRainVolumeHandler = vol => {
        vol = 0.01 * vol
        audioRainRef.current.volume = vol
        if (vol === 0) {
            audioRainRef.current.pause()
            setIsSunny(true)
        } else {
            audioRainRef.current.play()
            setIsSunny(false)
        }
    }

    const changeBirdVolumeHandler = vol => {
        vol = 0.01 * vol
        audioBirdRef.current.volume = vol
        if (vol === 0) {
            audioBirdRef.current.pause()
        } else {
            audioBirdRef.current.play()
        }
    }

    const changeTrafficVolumeHandler = vol => {
        vol = 0.01 * vol
        audioTrafficRef.current.volume = vol
        if (vol === 0) {
            audioTrafficRef.current.pause()
        } else {
            audioTrafficRef.current.play()
        }
    }

    const changeFanVolumeHandler = vol => {
        vol = 0.01 * vol
        audioFanRef.current.volume = vol
        if (vol === 0) {
            audioFanRef.current.pause()
        } else {
            audioFanRef.current.play()
        }
    }

    const changeFirePlaceVolumeHandler = vol => {
        vol = 0.01 * vol
        audioFirePlaceRef.current.volume = vol
        if (vol === 0) {
            audioFirePlaceRef.current.pause()
        } else {
            audioFirePlaceRef.current.play()
        }
    }

    const changePeopleVolumeHandler = vol => {
        vol = 0.01 * vol
        audioPeopleRef.current.volume = vol
        if (vol === 0) {
            audioPeopleRef.current.pause()
        } else {
            audioPeopleRef.current.play()
        }
    }

    const changeRiverVolumeHandler = vol => {
        vol = 0.01 * vol
        audioRiverRef.current.volume = vol
        if (vol === 0) {
            audioRiverRef.current.pause()
        } else {
            audioRiverRef.current.play()
        }
    }

    const changeWindVolumeHandler = vol => {
        vol = 0.01 * vol
        audioWindRef.current.volume = vol
        if (vol === 0) {
            audioWindRef.current.pause()
        } else {
            audioWindRef.current.play()
        }
    }

    useEffect(() => {
        changeSongVolumeHandler(songVolume)
        changeRainVolumeHandler(rainVolume)
        changeBirdVolumeHandler(birdVolume)
        changeTrafficVolumeHandler(trafficVolume)
        changeFanVolumeHandler(fanVolume)
        changeFirePlaceVolumeHandler(firePlaceVolume)
        changePeopleVolumeHandler(peopleVolume)
        changeRiverVolumeHandler(riverVolume)
        changeWindVolumeHandler(windVolume)
    }, [songVolume, rainVolume, birdVolume, trafficVolume, fanVolume, firePlaceVolume, peopleVolume, riverVolume, windVolume])

    const changeSongHandler = () => {
        randomGenerator()
    }

    const randomGenerator = () => {
        const selectedIndex = Math.floor(Math.random() * 3)
        if (selectedIndex === songIndex) {
            randomGenerator()
        } else {
            setSongIndex(selectedIndex)
        }
    }

    const playAudio = () => {
        if (isSongPlaying) {
            pauseAll()
        } else {
            loFiSongChangeHandler()
        }
        setIsFirstLoad(false)
        setIsSongPlaying(!isSongPlaying)
    }

    return (
        <>
            <Box>
                <Header
                    isFullScreen = {isFullScreen} 
                    setIsFullScreen = {setIsFullScreen}
                    isSunny = {isSunny}
                    setIsSunny = {setIsSunny}
                    isMorning = {isMorning}
                    setIsMorning = {setIsMorning}
                    isSongPlaying = {isSongPlaying}
                    playAudio = {playAudio}
                    audioRainRef = {audioRainRef}
                    loFiTheme = {loFiTheme} 
                    setLoFiTheme = {setLoFiTheme}
                    changeSongHandler={changeSongHandler}
                    songVolume = {songVolume}
                    setSongVolume = {setSongVolume}
                    
                    rainVolume = {rainVolume}
                    setRainVolume = {setRainVolume}
                    birdVolume = {birdVolume}
                    setBirdVolume = {setBirdVolume}
                    trafficVolume = {trafficVolume}
                    setTrafficVolume = {setTrafficVolume}
                    fanVolume = {fanVolume}
                    setFanVolume = {setFanVolume}
                    firePlaceVolume = {firePlaceVolume}
                    setFirePlaceVolume = {setFirePlaceVolume}
                    peopleVolume = {peopleVolume}
                    setPeopleVolume = {setPeopleVolume}
                    riverVolume = {riverVolume}
                    setRiverVolume = {setRiverVolume}
                    windVolume = {windVolume}
                    setWindVolume = {setWindVolume}

                    // changeBirdVolumeHandler = {changeBirdVolumeHandler}
                    // changeTrafficVolumeHandler = {changeTrafficVolumeHandler}
                    // changeFanVolumeHandler = {changeFanVolumeHandler}
                    // changeFirePlaceVolumeHandler = {changeFirePlaceVolumeHandler}
                    // changePeopleVolumeHandler = {changePeopleVolumeHandler}
                    // changeRiverVolumeHandler = {changeRiverVolumeHandler}
                    // changeWindVolumeHandler = {changeWindVolumeHandler}
                />
                <LoFi 
                    audioChill1Ref = {audioChill1Ref}
                    audioChill2Ref = {audioChill2Ref}
                    audioChill3Ref = {audioChill3Ref}

                    audioJazz1Ref={audioJazz1Ref}
                    audioJazz2Ref={audioJazz2Ref}
                    audioJazz3Ref={audioJazz3Ref}

                    audioSleep1Ref={audioSleep1Ref}
                    audioSleep2Ref={audioSleep2Ref}
                    audioSleep3Ref={audioSleep3Ref}

                    audioRainRef = {audioRainRef}
                    audioBirdRef = {audioBirdRef}
                    audioTrafficRef = {audioTrafficRef}
                    audioFanRef = {audioFanRef}
                    audioFirePlaceRef = {audioFirePlaceRef}
                    audioPeopleRef = {audioPeopleRef}
                    audioRiverRef = {audioRiverRef}
                    audioWindRef = {audioWindRef}

                    isSunny = {isSunny}
                    isMorning = {isMorning}
                    songIndex={songIndex}
                />
            </Box>
        </>
    );
}

export default App;
