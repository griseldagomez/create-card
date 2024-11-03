import { Image, Box, useMediaQuery } from '@chakra-ui/react'
import Diseña from '../../images/diseña.png';
import Rellena from '../../images/rellena.png';
import Comparte from '../../images/comparte.png';


function Images() {
    const [mobile] = useMediaQuery('(max-width: 720px)');

    return (
        <section className="images">
            <Box
                display='flex' 
                flexDirection={mobile ? 'column' : 'row'}
                // justifyContent='space-evenly' 
                justifyContent="center"
                gap="20px"
                alignItems="center"
                color='black'
                fontFamily='-moz-initial'
                fontWeight='bold'
                width='100%'
                textColor='rgb(92, 10, 92)'
                marginTop='250px'
               
            >
                <Box display='flex' flexDirection={'column'} alignItems='center'>
                    <p>Diseña</p>
                    <Image
                    borderRadius='full'
                    boxSize='150'
                    src={Diseña} 
                    alt='diseña' />
                </Box>

                <Box display='flex' flexDirection={'column'} alignItems='center'>
                <p>Rellena</p>      
                <Image
                   borderRadius='full'
                    boxSize='150'
                    src={Rellena}
                    alt='Rellena' />
                </Box>
                
                <Box display='flex' flexDirection={'column'} alignItems='center'>
                <p>Comparte</p>
                <Image
                    borderRadius='full'
                    boxSize='150'
                    src={Comparte}
                    alt='comparte' />
                
                </Box>
            </Box>
        </section>
    );
}

export default Images;
