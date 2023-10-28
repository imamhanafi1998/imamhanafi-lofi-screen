import React from "react";

import { 
    Box, Button, Grid, Flex, Spacer , 
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
            <Grid gap={4} autoFlow="column dense">
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant={'solid'} colorScheme={'blackAlpha'}>
                        {loFiTheme}
                    </MenuButton>
                    <MenuList>
                        <MenuItem onClick={() => setLoFiTheme('Chill')}>Chill</MenuItem>
                        <MenuItem onClick={() => setLoFiTheme('Jazzy')}>Jazzy</MenuItem>
                        <MenuItem onClick={() => setLoFiTheme('Sleep')}>Sleep</MenuItem>
                    </MenuList>
                </Menu>
                {/* <Button onClick={toggleColorMode}>
                    Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
                </Button> */}
                <Button variant={'solid'} colorScheme={'blackAlpha'} onClick={playAudio} color={'white'}>{isSongPlaying ? 'Pause' : 'Play'}</Button>
                <Button variant={'solid'} colorScheme={'blackAlpha'} onClick={changeSongHandler} color={'white'}>Change Song</Button>
                {/* <Button variant={'solid'} colorScheme={'blackAlpha'} onClick={changeSongVolumeHandler} color={'white'}>Mute</Button> */}
                <Popover>
                    <PopoverTrigger>
                        <Button variant={'solid'} colorScheme={'blackAlpha'} color={'white'}>Volume</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        {/* <PopoverCloseButton /> */}
                        {/* <PopoverHeader>Set LoFi Volume</PopoverHeader> */}
                        <PopoverBody>
                            <Box>
                                <FormControl>
                                    <FormLabel>LoFi Volume</FormLabel>
                                    <Slider value={songVolume} onChange={e => setLoFiSliderVal(e)}>
                                        <SliderTrack>
                                            <SliderFilledTrack />
                                        </SliderTrack>
                                        <SliderThumb index={0} bg={'black'} />
                                    </Slider>
                                </FormControl>
                                <hr />
                                <FormControl>
                                    <FormLabel>Rain Volume</FormLabel>
                                    <Slider value={rainVolume} onChange={e => setRainSliderVal(e)}>
                                        <SliderTrack>
                                            <SliderFilledTrack />
                                        </SliderTrack>
                                        <SliderThumb index={0} bg={'black'} />
                                    </Slider>
                                </FormControl>
                                <hr />
                                <FormControl>
                                    <FormLabel>Birds Volume</FormLabel>
                                    <Slider value={birdVolume} onChange={e => setBirdSliderVal(e)}>
                                        <SliderTrack>
                                            <SliderFilledTrack />
                                        </SliderTrack>
                                        <SliderThumb index={0} bg={'black'} />
                                    </Slider>
                                </FormControl>
                                <hr />
                                <FormControl>
                                    <FormLabel>Traffic Volume</FormLabel>
                                    <Slider value={trafficVolume} onChange={e => setTrafficSliderVal(e)}>
                                        <SliderTrack>
                                            <SliderFilledTrack />
                                        </SliderTrack>
                                        <SliderThumb index={0} bg={'black'} />
                                    </Slider>
                                </FormControl>
                                <hr />
                                <FormControl>
                                    <FormLabel>Fan Volume</FormLabel>
                                    <Slider value={fanVolume} onChange={e => setFanSliderVal(e)}>
                                        <SliderTrack>
                                            <SliderFilledTrack />
                                        </SliderTrack>
                                        <SliderThumb index={0} bg={'black'} />
                                    </Slider>
                                </FormControl>
                                <hr />
                                <FormControl>
                                    <FormLabel>Fire Place Volume</FormLabel>
                                    <Slider value={firePlaceVolume} onChange={e => setFirePlaceSliderVal(e)}>
                                        <SliderTrack>
                                            <SliderFilledTrack />
                                        </SliderTrack>
                                        <SliderThumb index={0} bg={'black'} />
                                    </Slider>
                                </FormControl>
                                <hr />
                                <FormControl>
                                    <FormLabel>People Volume</FormLabel>
                                    <Slider value={peopleVolume} onChange={e => setPeopleSliderVal(e)}>
                                        <SliderTrack>
                                            <SliderFilledTrack />
                                        </SliderTrack>
                                        <SliderThumb index={0} bg={'black'} />
                                    </Slider>
                                </FormControl>
                                <hr />
                                <FormControl>
                                    <FormLabel>River Volume</FormLabel>
                                    <Slider value={riverVolume} onChange={e => setRiverSliderVal(e)}>
                                        <SliderTrack>
                                            <SliderFilledTrack />
                                        </SliderTrack>
                                        <SliderThumb index={0} bg={'black'} />
                                    </Slider>
                                </FormControl>
                                <hr />
                                <FormControl>
                                    <FormLabel>Wind Volume</FormLabel>
                                    <Slider value={windVolume} onChange={e => setWindSliderVal(e)}>
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
                <Button variant={'solid'} colorScheme={'blackAlpha'} onClick={sunnyHandler} color={'white'}>{isSunny ? 'Make Rain' : 'Make Sunny'}</Button>
                <Button variant={'solid'} colorScheme={'blackAlpha'} onClick={morningHandler} color={'white'}>{isMorning ? 'Make Night' : 'Make Morning'}</Button>
                <Button variant={'solid'} colorScheme={'blackAlpha'} onClick={fullScreenHandler} color={'white'}>{isFullScreen && 'Exit '}Full Screen</Button>
            </Grid>
        </Flex>
        
    )
}

export default Header;