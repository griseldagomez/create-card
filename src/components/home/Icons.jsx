import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons' ;


function Icons() {
  return (
    <>

<div>
          <a href="#" target="_blank" title="">
          <FontAwesomeIcon icon={faMobileScreen} />
          </a>
        </div>
    <div >
    <a href="#" target="_blank">
    <FontAwesomeIcon icon={faLinkedin} />
    </a>
  </div>

   <div>
   <a href="#" target="_blank" title="">
     <FontAwesomeIcon icon={faEnvelope} />
   </a>
 </div>

      <div >
          <a href="#" target="_blank" title="">
            <FontAwesomeIcon icon={faGithub}/>
          </a>
        </div>    
 </>
  )
}

export default Icons;
