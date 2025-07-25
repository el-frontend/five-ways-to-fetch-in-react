import useSWR from "swr";
import type { ApiData } from "../types/api";
import type { Character } from "../types/characters";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const WithSWR = () => {
  // Queries
  const { data, isLoading } = useSWR<ApiData<Character>>(
    "https://rickandmortyapi.com/api/character",
    fetcher
  );

  return (
    <div>
      {isLoading && <span>Loading.....</span>}
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
    </div>
  );
};

export default WithSWR;
