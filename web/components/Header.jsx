import { Box, Text } from '@chakra-ui/react';

function Header() {
  return (
        <Box
          as="header"
          color='rgb(92, 10, 92)'
         display='flex'
         justifyContent="center"
         fontFamily='cursive'
         fontSize='24px'
         flexDirection='column'
         gap='10px'
         alignItems='center'
         padding='15px'
        >
          <Text as="h1">Crea tu tarjeta de visita</Text>
          <h1 className="title"></h1>
          <p className="subtitle">Crea mejores contactos profesionales de forma fácil y cómoda</p>
        </Box>
  )
}

export default Header;
              
