import { SimpleGrid, Text } from "@chakra-ui/react";
import useChar from "../hooks/useChar";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

function GameGrid() {
  const { characters, error, isLoading } = useChar();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} padding={10} spacing={10}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {error && <Text>{error}</Text>}
        {characters.map((char) => (
          <GameCardContainer key={char.id}>
            <GameCard character={char} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
