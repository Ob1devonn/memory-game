import { SimpleGrid, Text } from "@chakra-ui/react";
import useChar from "../hooks/useChar";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

function GameGrid() {
  const { characters, error, isLoading } = useChar();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} padding={10} spacing={10}>
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {error && <Text>{error}</Text>}
        {characters.map((char) => (
          <GameCard character={char} key={char.id} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
