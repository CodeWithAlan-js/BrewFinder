import React, { useEffect, useState } from "react";
import { useUserContext } from "./UserContext.jsx";
import Cards from "../components/Cards.jsx";

const DetectBrew = () => {
  const [brew, setBrew] = useState([]);
  const [error, setError] = useState(false);
  const { userLatitude, userLongitude } = useUserContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.openbrewerydb.org/v1/breweries?by_dist=${userLatitude},${userLongitude}&per_page=3`
        );
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }
        const data = await response.json();
        setBrew(data);
        console.log(data);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [userLatitude, userLongitude]);

  return (
    <div>
      {isLoading ? (
        <p>Chargement en cours</p>
      ) : error ? (
        <p>Erreur : {error}</p>
      ) : (
        <Cards breweries={brew} />
      )}
    </div>
  );
};

export default DetectBrew;
