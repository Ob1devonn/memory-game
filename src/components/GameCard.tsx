import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Character } from "../hooks/useChar";

interface Props {
  character: Character;
}

function GameCard({ character }: Props) {
  return (
    <Card>
      <Image h="20rem" src={character.image} />
      <CardBody>
        <Heading fontSize="md">{character.name}</Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
