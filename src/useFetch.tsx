import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
};

function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData(url);
  }, [url]);

  const fetchData = async (url: string) => {
    try {
      setIsLoading(true);
      const response = await axios.get(url);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setData(response.data);
    } catch {
      setError("Error fetching the data");
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, error };
}

function App() {
  const { data, isLoading, error } = useFetch<{results: Character[]}>(
    "https://rickandmortyapi.com/api/character"
  );

  return (
    <>
      {isLoading && <span>Loading.....</span>}
      {error && <span>{error}</span>}
      {data?.results.map((character) => (
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
    </>
  );
}

export default App;
