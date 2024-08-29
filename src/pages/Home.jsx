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

function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  // const [accordionIndex, setAccordionIndex] = useState(0);

  // useEffect(() => {
  //   console.log(errors);
  //   if (errors.color) {
  //     setAccordionIndex(0);
  //   }
  // }, [errors]);

  const [input, setInput] = useState('')

  return ( 
    <>
    <Header/>
    <main className="home">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="design">
        
        <Accordion defaultIndex={[0]} allowToggle  width='300px' marginTop='30px'>
          <Design register={register} errors={errors} />
          <Complete register={register} errors={errors}/>
          <Share  />
        </Accordion>
        
        </div>
        <div className="card">
        <Reset />
        <Card />
        <div className="icons">
        <Icons  />
        </div>
        </div>
      </form>
    </main>
    </>
  );
}

export default Home;
