import { animals } from "./info/animals"
import imgOceano from '../public/images/ocean.jpg'
import { Animals } from "./componentes/animals/animals";

export const App = () => {
  let title = "";
  
  return (
    <>
      <img src={imgOceano} className='background' alt='ocean'/>
      <p id="fact"></p>
      <h1>{title === "" ? "Click an animal for a fun fact" : title}</h1>
      <Animals />
    </>
  )
}