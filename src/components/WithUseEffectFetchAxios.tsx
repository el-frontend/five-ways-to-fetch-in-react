import axios from "axios";
import { useEffect, useState } from "react";
import type { Character } from "../types/characters";


function WithUseEffectFetchAxios() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "https://rickandmortyapi.com/api/character"
      );
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setCharacters(response.data.results);
    } catch {
      console.log("Error fetching");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {isLoading && <span>Loading.....</span>}
      {characters.map((character) => (
        <div key={character.id}>
          <h2>{character.name}</h2>
          <img
            src={character.image}
            alt={character.name}
            width={200}
            height={200}
          />
        </div>
      ))}
    </div>
  );
}

export default WithUseEffectFetchAxios;
