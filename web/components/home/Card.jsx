import preview from "../../images/Comparte.jpg"
import { Image } from "@chakra-ui/react";

function Card({ watch, projectImage }) {
  const [name, job, color,] = watch(['name', 'job', 'color', '']);

  return (
    <>
      <div className={color ? "nav-card " + color : "nav-card"}>
        <h1 className="nav-card__title">{name || 'Maria'}</h1>
        <h2 className="nav-card__sub-title">{job || 'Programadora' }</h2>
      </div>

      <Image
        border='1px'
        // boxSize="200px"
        borderColor='gray'
        marginTop= "20px"
        width="100%"
        minHeight="200px"
        borderRadius='10px'
        object-fit= "contain"
        src={projectImage ? projectImage : preview}
        alt='Rellena' />
    </>
  );
}

export default Card;
