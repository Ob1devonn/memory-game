import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Character } from "../hooks/useChar";

interface Props {
  character: Character;
}

function GameCard({ character }: Props) {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={character.image} />
      <CardBody>
        <Heading fontSize="2xl">{character.name}</Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
