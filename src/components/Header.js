import React, {useState} from "react";

import { 
    Box, Button, Grid, Flex, Spacer , 
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    // MenuItemOption,
    // MenuGroup,
    // MenuOptionGroup,
    // MenuDivider,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    FormControl,
    FormLabel,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
// import { useColorMode } from "@chakra-ui/react";

import '../assets/css/Header.css'

const Header = ({
    isFullScreen,  
    setIsFullScreen, 
    isSunny, 
    setIsSunny, 
    playAudio, 
    isSongPlaying, 
    audioRainRef, 
    loFiTheme, 
    setLoFiTheme, 
    changeSongHandler, 
    // changeSongVolumeHandler, 
    songVolume, 
    setSongVolume, 
    rainVolume, 
    setRainVolume, 
}) => {
    // const { colorMode, toggleColorMode } = useColorMode()
    // const [loFiTheme, setLoFiTheme] = useState('Chill')
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

    const setLoFiSliderVal = val => {
        setSongVolume(val)
    }

    const setRainSliderVal = val => {
        setRainVolume(val)
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
                            </Box>
                            
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
                <Button variant={'solid'} colorScheme={'blackAlpha'} onClick={sunnyHandler} color={'white'}>{isSunny ? 'Make Rain' : 'Make Sunny'}</Button>
                <Button variant={'solid'} colorScheme={'blackAlpha'} onClick={fullScreenHandler} color={'white'}>{isFullScreen && 'Exit '}Full Screen</Button>
            </Grid>
        </Flex>
        
    )
}

export default Header;