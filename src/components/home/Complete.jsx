import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKeyboard } from '@fortawesome/free-solid-svg-icons';
import { Accordion, AccordionItem, AccordionIcon, AccordionButton, AccordionPanel, Box, FormControl, FormLabel, FormErrorMessage, FormHelperText, useFormErrorStyles, Button } from '@chakra-ui/react';
import { Input, InputGroup, InputLeftAddon, InputRightAddon } from '@chakra-ui/react';

function Complete({ register, errors, handleImage, projectImage }) {
    return (
        <AccordionItem p={2}>
            <h2 className="title-rellena">
                <AccordionButton>
                    <Box as='span' flex='1' textAlign='left'>
                        <FontAwesomeIcon icon={faKeyboard} className='icon-form' />
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
                        {...register('name', { required: true })} />

                    {errors.name && <FormErrorMessage>Por favor, rellena tu nombre</FormErrorMessage>}
                </FormControl>

                <FormControl isInvalid={errors.job} isRequired id="job">
                    <FormLabel>Puesto</FormLabel>
                    <Input
                        placeholder='Ej. Programadora'
                        size='md'
                        {...register('job', { required: true })}
                    />
                    {errors.job && <FormErrorMessage>Por favor, rellene su puesto</FormErrorMessage>}
                </FormControl>


                <FormControl isInvalid={errors.email} isRequired id="email">
                    <FormLabel>Email</FormLabel>
                    <Input
                        type='email'
                        placeholder=' Ej. maria_go@gmail.com'
                        {...register('email', { required: true })} />
                        {errors.email && <FormErrorMessage>Por favor, rellene su email</FormErrorMessage>}
                </FormControl>
               

                <Box
                    display= "flex"
                    flexDirection="column"
                    gap="5px"
                    padding="10px"
                    justifyContent="space-around"
                    fontFamily="initial"
                    
                >
                    <FormControl isInvalid={errors.img} isRequired id="file">
                        <Button as="label" htmlFor="file"> Añadir imagen</Button>
                        <Input
                            className='profile_image'
                            type='file'
                            {...register('file', { required: true })}
                            id='file'
                            accept="image/png,image/jpeg"
                            onChange={handleImage}
                        />
                         {errors.img && <FormErrorMessage>Por favor, sube tu foto</FormErrorMessage>}  
                    </FormControl>
                    <div>
                        {projectImage && <img src={projectImage} />}
                    </div>
                </Box>

                <FormControl isInvalid={errors.tel} isRequired id="tel">
                    <FormLabel>Teléfono</FormLabel>
                    <InputGroup>
                        <InputLeftAddon>+34</InputLeftAddon>
                        <Input
                            type='tel'
                            placeholder='Ej. 682745632'
                            size='md'
                            {...register('tel', { required: true })}
                        />
                        {errors.tel && <FormErrorMessage>Por favor, rellena tu télefono</FormErrorMessage>}
                    </InputGroup>
                </FormControl>
                
                <FormControl isInvalid={errors.linkedin} isRequired id="linkedin">
                    <FormLabel>Linkedin</FormLabel>
                    <InputGroup>
                        <InputLeftAddon>https://</InputLeftAddon>
                        <Input
                            placeholder='www.linkedin.com/in/MariaGómez'
                            size='md'
                            type='linkedin'
                            {...register('linkedin', { required: true })}
                        />
                    </InputGroup>
                    {errors.linkedin && <FormErrorMessage>Por favor, rellene su linkedin</FormErrorMessage>} 
                </FormControl>
               
                <FormControl isInvalid={errors.github} isRequired id="github">
                    <FormLabel>Github</FormLabel>
                    <InputGroup>
                        <InputLeftAddon>https://</InputLeftAddon>
                        <Input
                            placeholder='@github'
                            size='md'
                            type='gitHub'
                            {...register('github', { required: true })}
                        />
                    </InputGroup>
                    {errors.github && <FormErrorMessage>Por favor, rellene su github</FormErrorMessage>}
                </FormControl>
                
            </AccordionPanel>
        </AccordionItem>
    );
}

export default Complete;
