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

function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm()
  
  const [cardUrl, setCardUrl] = useState(null);


  const onSubmit = (data) => {
    fetch(`http://localhost:5000/projects`, {
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
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCardUrl(data.cardUrl);
      })
      .catch((error) => {
        console.log(error);
      });  
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
              <Share  />
            </Accordion>
          </div>
          <div className="card">
            {/* <Reset /> */}
            
            <Card watch={watch} projectImage={projectImage} />

            <Icons watch={watch} />
            {cardUrl && <Link to={cardUrl} target="_blank" className="card-url">Pincha aqui para ver tu tarjeta</Link>}
          </div>
        </form>
      </main>
    </>
  );
}

export default Home;
