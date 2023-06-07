import { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [animals, setAnimals] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos/1")
      .then((response) => {
        setAnimals(response.data);
      })
      .catch(error => {
        console.error(error);
      });
    //Il ne se lance qu'sau chargement du composant
  }, []);
  return <>
  <img src={animals.url} alt="" />
  <p>{animals.title}</p>
  </>;
};
export default HomePage;
