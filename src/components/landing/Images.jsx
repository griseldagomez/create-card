import { Image, Box, useMediaQuery } from '@chakra-ui/react'
import Diseña from '../images/Diseña.jpg';
import Rellena from '../images/Rellena.jpg';
import Comparte from '../images/Comparte.jpg';


function Images() {
    const [mobile] = useMediaQuery('(max-width: 720px)');

    return (
        <section className="images">
            <Box
                display='flex' 
                flexDirection={mobile ? 'column' : 'row'}
                justifyContent='space-evenly' 
                alignItems="center"
                margin='30px'
                marginTop={10}
                color='black'
                fontFamily='-moz-initial'
                fontWeight='bold'
            >
                <Box display='flex' flexDirection={'column'} alignItems='center'>
                    <p>Diseña</p>
                    <Image
                    borderRadius='full'
                    boxSize='200px'
                    src={Diseña}
                    alt='diseña' />
                </Box>

                <Box display='flex' flexDirection={'column'} alignItems='center'>
                <p>Rellena</p>      
                <Image
                   borderRadius='full'
                    boxSize='200px'
                    src={Rellena}
                    alt='Rellena' />
                </Box>
                
                <Box display='flex' flexDirection={'column'} alignItems='center'>
                <p>Comparte</p>
                <Image
                    borderRadius='full'
                    boxSize='200px'
                    src={Comparte}
                    alt='Rellena' />
                </Box>
            </Box>
        </section>
    );
}

export default Images;
