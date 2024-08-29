import { Image, Box, useMediaQuery } from '@chakra-ui/react'
import Diseña from '../images/diseña.png';
import Rellena from '../images/rellena.png';
import Comparte from '../images/comparte.png';


function Images() {
    const [mobile] = useMediaQuery('(max-width: 720px)');

    return (
        <section className="images">
            <Box
                display='flex' 
                flexDirection={mobile ? 'column' : 'row'}
                justifyContent='space-evenly' 
                alignItems="center"
                margin='20px'
                marginTop={10}
                color='black'
                fontFamily='inherit'
            >
                <Box display='flex' flexDirection={'column'} alignItems='center'>
                    <p>Diseña</p>
                    <Image
                        border='1px'
                        boxSize="200px"
                        borderColor='gray'
                        borderRadius='10px'
                        src={Diseña}
                        alt='Diseño' />
                </Box>

                <Box display='flex' flexDirection={'column'} alignItems='center'>
                <p>Rellena</p>      
                <Image
                    border='1px'
                    boxSize="200px"
                    borderColor='gray'
                    borderRadius='10px'
                    src={Rellena}
                    alt='Rellena' />
                </Box>
                
                <Box display='flex' flexDirection={'column'} alignItems='center'>
                <p>Comparte</p>
                <Image
                    border='1px'
                    boxSize="200px"
                    borderColor='gray'
                    borderRadius='10px'
                    src={Comparte}
                    alt='Rellena' />
                </Box>
            </Box>
        </section>
    );
}

export default Images;
