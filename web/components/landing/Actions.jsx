
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
            margin='30px'
        >
            <Button
                size='lg'
                height='48px'
                width='200px'
                border='2px'
                color='white'
                fontSize='lg'
                backgroundColor='rgb(92, 10, 92)'
                fontFamily='-moz-initial'
                as={Link} to='/create'>
                Crear mi tarjeta
            </Button >
        </Box>
    );
}

export default Actions;
