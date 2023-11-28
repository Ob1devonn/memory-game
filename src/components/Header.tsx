import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/harry_potter_icon_by_rickyrgoetz_dbfr8a2.webp";
import ColorModeSwitch from "./ColorModeSwitch";

export default function Header() {
  return (
    <HStack padding="2rem" justifyContent="space-between">
      <Image src={logo} boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
}
