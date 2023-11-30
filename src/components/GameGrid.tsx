import { Text } from "@chakra-ui/react";
import useChar from "../hooks/useChar";

function GameGrid() {
  const { characters, error } = useChar();
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
