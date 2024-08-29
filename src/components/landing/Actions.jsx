
import { Link } from 'react-router-dom'
import { Button, Box } from '@chakra-ui/react'


function Actions() {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            pt={2}
            pb={2}
            margin='20px'
        >
            <Button
                size='lg'
                height='48px'
                width='200px'
                border='2px'
                color='white'
                fontSize='lg'
                backgroundColor='#165e79'
                fontFamily='Verdana, Geneva, Tahoma, sans-serif'
                fontWeight='lighter'
                as={Link} to='/create'>
                Crear mi tarjeta
            </Button >
        </Box>
    );
}

export default Actions;
