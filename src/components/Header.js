import React from "react";

import { 
    Box, Button, Grid, Flex, Spacer , 
    Icon, 
    IconButton, 
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    PopoverArrow,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    FormControl,
    FormLabel,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { 
    BsFullscreen, BsFullscreenExit, 
    BsFillSunFill, BsMoonFill, 
    BsFillCloudFill, BsFillCloudRainFill, 
    BsFillVolumeUpFill, BsShuffle, 
    BsPlayFill, BsPauseFill , BsMusicNote
} from 'react-icons/bs'

import '../assets/css/Header.css'

const Header = ({
    isFullScreen,  
    setIsFullScreen, 
    isSunny, 
    setIsSunny, 
    isMorning, 
    setIsMorning, 
    playAudio, 
    isSongPlaying, 
    audioRainRef, 
    loFiTheme, 
    setLoFiTheme, 
    changeSongHandler, 
    songVolume, 
    setSongVolume, 

    rainVolume, 
    setRainVolume, 
    
    birdVolume, 
    setBirdVolume, 
    trafficVolume, 
    setTrafficVolume, 
    fanVolume, 
    setFanVolume, 
    firePlaceVolume, 
    setFirePlaceVolume, 
    peopleVolume, 
    setPeopleVolume, 
    riverVolume, 
    setRiverVolume, 
    windVolume, 
    setWindVolume, 
}) => {
    const step_ = 5
    const fullScreenHandler = () => {
        (!isFullScreen) ? document.documentElement.requestFullscreen() : document.exitFullscreen()
        setIsFullScreen(!isFullScreen);
    }

    const sunnyHandler = () => {
        if (!isSunny) {
            audioRainRef.current.pause()
            setRainVolume(0)
        } else {
            audioRainRef.current.play()
            setRainVolume(100)
        }
        setIsSunny(!isSunny);
    }

    const morningHandler = () => {
        setIsMorning(!isMorning)
    }

    const setLoFiSliderVal = val => {
        setSongVolume(val)
    }

    const setRainSliderVal = val => {
        setRainVolume(val)
    }

    const setBirdSliderVal = val => {
        setBirdVolume(val)
    }

    const setTrafficSliderVal = val => {
        setTrafficVolume(val)
    }

    const setFanSliderVal = val => {
        setFanVolume(val)
    }

    const setFirePlaceSliderVal = val => {
        setFirePlaceVolume(val)
    }

    const setPeopleSliderVal = val => {
        setPeopleVolume(val)
    }

    const setRiverSliderVal = val => {
        setRiverVolume(val)
    }

    const setWindSliderVal = val => {
        setWindVolume(val)
    }

    return (
        <Flex position={'absolute'} w={'100%'} zIndex={2} p={4}>
            <Spacer />
            {/* <Grid gap={4} autoFlow="row dense"> */}
                <Menu autoSelect={false}>
                    <MenuButton as={Button} 
                        // rightIcon={<ChevronDownIcon />} 
                        variant={'solid'} colorScheme={'blackAlpha'}
                    >
                        {/* {loFiTheme} */}
                        <Icon as={BsMusicNote} />
                    </MenuButton>
                    <MenuList>
                        <MenuItem onClick={() => setLoFiTheme('Chill')}>Chill</MenuItem>
                        <MenuItem onClick={() => setLoFiTheme('Jazzy')}>Jazzy</MenuItem>
                        <MenuItem onClick={() => setLoFiTheme('Sleep')}>Sleep</MenuItem>
                    </MenuList>
                </Menu>
                <IconButton
                    mx={1}
                    variant={'solid'}
                    colorScheme={'blackAlpha'}
                    color={'white'}
                    icon={isSongPlaying ? <BsPauseFill /> : <BsPlayFill />}
                    onClick={playAudio}
                />
                <IconButton
                    variant={'solid'}
                    colorScheme={'blackAlpha'}
                    color={'white'}
                    icon={<BsShuffle />}
                    onClick={changeSongHandler}
                />
                <Popover>
                    <PopoverTrigger>
                        <IconButton
                            mx={1}
                            variant={'solid'}
                            colorScheme={'blackAlpha'}
                            color={'white'}
                            icon={<BsFillVolumeUpFill />}
                        />
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverBody>
                            <Box>
                                <FormControl>
                                    <FormLabel>LoFi Volume</FormLabel>
                                    <Slider value={songVolume} onChange={e => setLoFiSliderVal(e)} step={step_}>
                                        <SliderTrack>
                                            <SliderFilledTrack />
                                        </SliderTrack>
                                        <SliderThumb index={0} bg={'black'} />
                                    </Slider>
                                </FormControl>
                                <hr />
                                <FormControl>
                                    <FormLabel>Rain Volume</FormLabel>
                                    <Slider value={rainVolume} onChange={e => setRainSliderVal(e)} step={step_}>
                                        <SliderTrack>
                                            <SliderFilledTrack />
                                        </SliderTrack>
                                        <SliderThumb index={0} bg={'black'} />
                                    </Slider>
                                </FormControl>
                                <hr />
                                <FormControl>
                                    <FormLabel>Birds Volume</FormLabel>
                                    <Slider value={birdVolume} onChange={e => setBirdSliderVal(e)} step={step_}>
                                        <SliderTrack>
                                            <SliderFilledTrack />
                                        </SliderTrack>
                                        <SliderThumb index={0} bg={'black'} />
                                    </Slider>
                                </FormControl>
                                <hr />
                                <FormControl>
                                    <FormLabel>Traffic Volume</FormLabel>
                                    <Slider value={trafficVolume} onChange={e => setTrafficSliderVal(e)} step={step_}>
                                        <SliderTrack>
                                            <SliderFilledTrack />
                                        </SliderTrack>
                                        <SliderThumb index={0} bg={'black'} />
                                    </Slider>
                                </FormControl>
                                <hr />
                                <FormControl>
                                    <FormLabel>Fan Volume</FormLabel>
                                    <Slider value={fanVolume} onChange={e => setFanSliderVal(e)} step={step_}>
                                        <SliderTrack>
                                            <SliderFilledTrack />
                                        </SliderTrack>
                                        <SliderThumb index={0} bg={'black'} />
                                    </Slider>
                                </FormControl>
                                <hr />
                                <FormControl>
                                    <FormLabel>Fire Place Volume</FormLabel>
                                    <Slider value={firePlaceVolume} onChange={e => setFirePlaceSliderVal(e)} step={step_}>
                                        <SliderTrack>
                                            <SliderFilledTrack />
                                        </SliderTrack>
                                        <SliderThumb index={0} bg={'black'} />
                                    </Slider>
                                </FormControl>
                                <hr />
                                <FormControl>
                                    <FormLabel>People Volume</FormLabel>
                                    <Slider value={peopleVolume} onChange={e => setPeopleSliderVal(e)} step={step_}>
                                        <SliderTrack>
                                            <SliderFilledTrack />
                                        </SliderTrack>
                                        <SliderThumb index={0} bg={'black'} />
                                    </Slider>
                                </FormControl>
                                <hr />
                                <FormControl>
                                    <FormLabel>River Volume</FormLabel>
                                    <Slider value={riverVolume} onChange={e => setRiverSliderVal(e)} step={step_}>
                                        <SliderTrack>
                                            <SliderFilledTrack />
                                        </SliderTrack>
                                        <SliderThumb index={0} bg={'black'} />
                                    </Slider>
                                </FormControl>
                                <hr />
                                <FormControl>
                                    <FormLabel>Wind Volume</FormLabel>
                                    <Slider value={windVolume} onChange={e => setWindSliderVal(e)} step={step_}>
                                        <SliderTrack>
                                            <SliderFilledTrack />
                                        </SliderTrack>
                                        <SliderThumb index={0} bg={'black'} />
                                    </Slider>
                                </FormControl>
                            </Box>
                            
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
                <IconButton
                    variant={'solid'}
                    colorScheme={'blackAlpha'}
                    color={'white'}
                    icon={isSunny ? <BsFillCloudRainFill /> : <BsFillCloudFill />}
                    onClick={sunnyHandler}
                />
                <IconButton
                    mx={1}
                    variant={'solid'}
                    colorScheme={'blackAlpha'}
                    color={'white'}
                    icon={isMorning ? <BsMoonFill /> : <BsFillSunFill />}
                    onClick={morningHandler}
                />
                <IconButton
                    variant={'solid'}
                    colorScheme={'blackAlpha'}
                    color={'white'}
                    icon={isFullScreen ? <BsFullscreenExit /> : <BsFullscreen />}
                    onClick={fullScreenHandler}
                />
            {/* </Grid> */}
        </Flex>
        
    )
}

export default Header;