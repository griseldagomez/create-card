import { AccordionItem, AccordionIcon, AccordionButton, AccordionPanel, Box } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@chakra-ui/react';

function Share() {
  return (
      <AccordionItem p={3}>
        <h2 className="title-share">
        <AccordionButton>
          <Box 
            as='span' 
            flex='1' 
            textAlign='left'>
          <FontAwesomeIcon 
            icon={faShareNodes} 
            className='icon-form' />
              COMPARTE
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          pt={2}
          pb={2}
          margin='20px'
        >
          <AccordionPanel
            className='button-container'>
            <Button
              backgroundColor='#165e79' 
              color='White'
              type="submit">
              <FontAwesomeIcon 
                icon={faAddressCard} />

              Crear tarjeta
            </Button>
          </AccordionPanel>
        </Box>
      </AccordionItem>
  ); 
}


export default Share;
