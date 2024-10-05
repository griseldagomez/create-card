import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import Design from "../components/home/Design";
import Complete from "../components/home/Complete";
import Card from "../components/home/Card";
import Reset from "../components/home/Reset";
import Icons from "../components/home/Icons";
import Share from "../components/home/Share";
import { Accordion } from "@chakra-ui/react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useDisclosure } from '@chakra-ui/react';
function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm()
  
  const [cardUrl, setCardUrl] = useState(null);
  const [isButtonEnabled, setIsButtonEnabled] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const onSubmit = async (data) => {
    setIsButtonEnabled(false);

    try {
      const response = await fetch(`http://localhost:5001/projects`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "color_palette": data.color,
          "name": data.name,
          "job": data.job,
          "email":data.email,
          "photo": projectImage,
          "phone": data.tel,
          "linkedin": data.linkedin,
          "github":data.github
        }),
      });

      if (response.ok) {
        const data = await response.json();

        console.log(data);
        setCardUrl(data.cardUrl);
        onOpen();
      } else {
        // mostramos otro error
        // van a venir errores del servidor (tipo 500 o 404)
      }
    } catch (e) {
      // mostramos un error
      // van a venir errores de internet (errores de coneccion)
      // o del codigo
    } finally {
      setIsButtonEnabled(true);
    }
  };
  
  const [projectImage, setProjectImage] = useState("");
  

  const handleImage = (e) => {
      //fotografía
      const reader = new FileReader();
      reader.onload = () => {
          if (reader.result && typeof reader.result === "string") {
              setProjectImage(reader.result.toString());
          }
      };
      reader.readAsDataURL(e.target.files[0]);
  };

  return ( 
    <>
      <Header/>
      <main className="home">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="design">
            <Accordion defaultIndex={[0]} allowToggle  width='300px' marginTop='30px'>
              <Design register={register} errors={errors} />
              <Complete register={register} errors={errors} handleImage={handleImage} projectImage={projectImage} />
              <Share isButtonEnabled={isButtonEnabled} isOpen={isOpen} onClose={onClose} cardUrl={cardUrl} />
             
            </Accordion>
          </div>
        
          <div className="card">
      
            <Card watch={watch} projectImage={projectImage} />

            <Icons watch={watch} />
            
          </div>
        </form>
      </main>
    </>
  );
}

export default Home;
