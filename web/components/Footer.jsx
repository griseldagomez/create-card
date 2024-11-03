import logo from "../images/logo.png";
import { Box } from '@chakra-ui/react'

function Footer() {
  return (
     <Box
     width='100%'
      backgroundColor='rgb(92, 10, 92)'
      height='2px'
     >
    <footer>
      <Box
      display='flex'
      justifyContent='space-between'
      color='black'
      fontSize='12px'
      alignItems='center'
      >
        <p>Creative Digital ©2024</p>
        <Box 
        width='95px'
        height='95px'>
        
        <img src={logo}/>
        </Box>
        </Box>
    </footer>
    </Box>
  );
}

export default Footer