import { AccordionItem, AccordionIcon, AccordionButton, AccordionPanel, Box } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
} from '@chakra-ui/react'



function Share({ isButtonEnabled,isOpen, onClose, cardUrl }) {
  return (
    <>
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
              backgroundColor='rgb(92, 10, 92)' 
              color='White'
              type="submit"
              disabled={!isButtonEnabled}
            >
              <FontAwesomeIcon 
                icon={faAddressCard} />

              Crear tarjeta
            </Button>
          </AccordionPanel>
        </Box>
      </AccordionItem>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>Tu tarjeta de visita se ha creado</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text> {cardUrl && <Link to={cardUrl} target="_blank" className="card-url">Pincha aqui para ver tu tarjeta</Link>}</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
   </>
  ); 
}


export default Share;
