import { SimpleGrid, Text } from "@chakra-ui/react";
import useChar from "../hooks/useChar";
import GameCard from "./GameCard";

function GameGrid() {
  const { characters, error } = useChar();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 2, md: 3, lg: 5 }} padding={10} spacing={10}>
        {characters.map((char) => (
          <GameCard character={char} key={char.id} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
