import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faKeyboard} from '@fortawesome/free-solid-svg-icons';
import { Accordion, AccordionItem, AccordionIcon, AccordionButton, AccordionPanel, Box, FormControl, FormLabel,FormErrorMessage, FormHelperText, useFormErrorStyles } from '@chakra-ui/react';
import { Input, InputGroup, InputLeftAddon, InputRightAddon } from '@chakra-ui/react';

function Complete({ register, errors, }) {

    // const handleInputChange = (e) => setInput(e.target.value)
    // event.preventDefault()
    // const isError = input === ''
    // console.log("click")
  return (
    <AccordionItem p={2}>
        <h2 className="title-rellena">
            <AccordionButton>
                <Box as='span' flex='1' textAlign='left'>
                <FontAwesomeIcon icon={faKeyboard} className='icon-form'/>
                    RELLENA  
                </Box>
                <AccordionIcon />
            </AccordionButton>    
        </h2>

        <AccordionPanel>
            <FormControl isInvalid={errors.name} id='name' isRequired>
                <FormLabel>Nombre completo</FormLabel>

                <Input
                    className='border'
                    placeholder='Ej. Maria Gómez' 
                    size='md'
                    { ...register('name', { required: true })} />
                
                {errors.name && <FormErrorMessage>Por favor, rellene el campo</FormErrorMessage>}
            </FormControl>

            <FormControl isInvalid={errors.job} isRequired id="job">
                <FormLabel>Puesto</FormLabel>
                <Input
                   placeholder='Ej. Programadora' 
                   size='md'
                   {...register('job', { required: true })}
                   />
                   {errors.job && <FormErrorMessage>Por favor, rellene el campo</FormErrorMessage>}
                </FormControl>
             

             <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                   type='email' 
                   placeholder=' Ej. maria_go@gmail.com' 
                   {...register('email', { required: true })}  />
                </FormControl>
                {/* {errors.job && <div>Por favor, rellene el campo</div>}  */}

            <Box
                display='inline block'
            >
            <FormControl isRequired>
                <FormLabel>Foto de perfil</FormLabel>
                <Input
                   className='profile_image' 
                   type='file' 
                   {...register('file', { required: true })}
                   id='file' 
                   accept="image/png,image/jpeg"
               />
                </FormControl>

            <span>
                <img src="" alt="" />
            </span>
            </Box>
      
            <FormControl isRequired>
                <FormLabel>Teléfono</FormLabel>
                  <InputGroup>
                  <InputLeftAddon>+34</InputLeftAddon>
                  <Input 
                     type='tel' 
                     placeholder='Ej. 682745632' 
                     size='md' 
                     {...register('tel', { required: true })}
                 />
             </InputGroup>
                </FormControl>
            {/* {errors.job && <div>Por favor, rellene el campo</div>}  */}

          
            <FormControl isRequired>
                <FormLabel>Linkedin</FormLabel>
                  <InputGroup>
                  <InputLeftAddon>https://</InputLeftAddon>
                  <Input 
                      placeholder='www.linkedin.com/in/MariaGómez'  
                     size='md' 
                     {...register('linkedin', { required: true })}
                 />
                     </InputGroup>
                        </FormControl>
                        <FormControl isRequired>
                <FormLabel>Github</FormLabel>
                  <InputGroup>
                  <InputLeftAddon>https://</InputLeftAddon>
                  <Input 
                      placeholder='@github'  
                     size='md' 
                     {...register('github', { required: true })}
                 />
                     </InputGroup>
                        </FormControl>
            {/* {errors.job && <div>Por favor, rellene el campo</div>}  */}
        </AccordionPanel>
    </AccordionItem>
  );
}

export default Complete;
