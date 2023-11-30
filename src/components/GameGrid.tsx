import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Characters {
  id: number;
  name: string;
}

function GameGrid() {
  const [characters, setCharacters] = useState<Characters[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get("/characters")
      .then((res) => setCharacters(res.data))
      .catch((err) => setError(err.message));
  });

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {characters.map((char) => (
          <li key={char.id}>{char.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GameGrid;
