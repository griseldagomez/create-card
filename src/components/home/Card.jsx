import preview from "../images/Comparte.jpg"
import { Image } from "@chakra-ui/react";
import Icons from "./Icons";
function Card() {
  return (
    <>

      <div className="nav-card jscolour1__2">
        <h1 className="nav-card__title js-card-name jscolour1__1">Maria</h1>
        <h2 className="nav-card__sub-title js-card-job">Programadora</h2>
      </div>
      <Image
                    border='1px'
                    boxSize="200px"
                    borderColor='gray'
                    marginTop= "20px"
                    width="100%"
                    minHeight="200px"
                    borderRadius='10px'
                    src={preview}
                    alt='Rellena' />
      </>
  )
  }
   
export default Card;