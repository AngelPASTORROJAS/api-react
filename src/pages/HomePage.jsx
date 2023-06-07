import { useEffect, useState } from "react";


const HomePage = () => {
  const [animals, setAnimals] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos/1")
      .then((response) => response.json())
      .then((response) => {
        setAnimals(response);
      });
    //Il ne se lance qu'sau chargement du composant
  }, []);
  return <>
  <img src={animals.url} alt="" />
  <p>{animals.title}</p>
  </>;
};
export default HomePage;
