import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/harry_potter_icon_by_rickyrgoetz_dbfr8a2.webp";

export default function Header() {
  return (
    <HStack padding="2rem">
      <Image src={logo} boxSize="60px" />
      <Text> Header</Text>
    </HStack>
  );
}
