import { animals } from "../../info/animals"
import { Animal } from "../animal/animal";

export const Animals = () => {

    const images = [];

    for (const animal in animals) {
        images.push(<Animal key={animal} facts={animals[animal].facts} animal={animal} image={animals[animal].image}/>);
      }
    return (
        <div className="animals">
          {images}
        </div>
    )

}