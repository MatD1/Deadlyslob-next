import {
  Button,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  StackDivider,
  useBreakpointValue,
  Avatar,
  Divider,
} from "@chakra-ui/react";
import * as React from "react";
import { FiMenu, FiSun } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import ColorMode from "@/Components/ColorMode";
import Link from "next/link";

export const NavLayout = (props: {
  onClickMenu: any | null;
  onToggleMode: any | null;
  isMenuOpen: any | null;
  menuButtonRef: any | null;
}) => {
  const { onClickMenu, onToggleMode, isMenuOpen, menuButtonRef } = props;
  const MenuIcon = isMenuOpen ? MdClose : FiMenu;
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <Flex height="16" align="center" justify="space-between" px="5">
      <Link href="/">
        <HStack>
          <Avatar src="/logo.jpeg" />
          <Heading
            pt={2}
            fontWeight={"light"}
            fontSize={["lg", "2xl", "4xl"]}
            // bgGradient="linear(to-l, #9a8866, #a8a898)"
            // bgClip="text"
          >
            DEADLYSLOB
          </Heading>
        </HStack>
      </Link>

      <HStack divider={<StackDivider height="6" alignSelf="unset" />}>
        <ColorMode />
        <IconButton
          ref={menuButtonRef}
          variant="ghost"
          icon={<Icon as={MenuIcon} fontSize="2xl" />}
          aria-label="Open Menu"
          onClick={onClickMenu}
        />
      </HStack>
    </Flex>
  );
};
