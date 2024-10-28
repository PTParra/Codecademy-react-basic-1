
export const Animal = (props) => {

    const displayFact = () => {
      let randomNumber = Math.floor(Math.random() * (props.facts.length));
      if(randomNumber === props.facts.length)
        randomNumber = props.facts.length - 1;

      const randomFact = props.facts[randomNumber];
      const p = document.getElementById('fact');
      p.innerText = randomFact;
    }

    return (
      <img key={props.animal} className="animal" alt={props.animal} src={props.image} aria-label={props.animal} 
      role="button" onClick={displayFact} />
    )

}