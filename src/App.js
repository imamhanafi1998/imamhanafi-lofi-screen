import React, { useState, useEffect, useRef } from 'react';
// import logo from './logo.svg';
import './assets/css/App.css';

// import {
//     BrowserRouter as Router,
//     Routes,
//     Route
// } from "react-router-dom";

import { Box } from '@chakra-ui/react'
// import MusicPlayer from './components/MusicPlayer';
import LoFi from './components/LoFi';
import Header from './components/Header';

function App() {
    const [isFirstLoad, setIsFirstLoad] = useState(true)
    const [isFullScreen, setIsFullScreen] = useState(false)
    const [isSunny, setIsSunny] = useState(true)
    const [isSongPlaying, setIsSongPlaying] = useState(false)
    const [loFiTheme, setLoFiTheme] = useState('Chill')
    const [songIndex, setSongIndex] = useState(0)
    const [songVolume, setSongVolume] = useState(100)
    const [rainVolume, setRainVolume] = useState(0)

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
        // if (isSunny) {
        //     vol = 0
        // }
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

    useEffect(() => {
        changeSongVolumeHandler(songVolume)
        changeRainVolumeHandler(rainVolume)
    }, [songVolume, rainVolume])

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
                    isSongPlaying = {isSongPlaying}
                    playAudio = {playAudio}
                    audioRainRef = {audioRainRef}
                    loFiTheme = {loFiTheme} 
                    setLoFiTheme = {setLoFiTheme}
                    changeSongHandler={changeSongHandler}
                    // changeSongVolumeHandler={changeSongVolumeHandler}
                    songVolume = {songVolume}
                    setSongVolume = {setSongVolume}
                    rainVolume = {rainVolume}
                    setRainVolume = {setRainVolume}
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
                    isSunny = {isSunny}
                    songIndex={songIndex}
                />
                {/* <MusicPlayer /> */}
            </Box>
        </>
    );
}

export default App;
