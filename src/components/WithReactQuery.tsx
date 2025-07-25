import { useQuery } from "@tanstack/react-query";
import { getCharacters } from "../services/character";

const WithReactQuery = () => {
  // Access the client
  //   const queryClient = useQueryClient();

  // Queries
  const query = useQuery({ queryKey: ["characters"], queryFn: getCharacters });

  return (
    <div>
      {query.status === "pending" && <span>Loading.....</span>}
      {query.data?.results.map((character) => (
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

export default WithReactQuery;
