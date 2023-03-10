import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  useColorModeValue,
  useDisclosure,
  Heading,
  Avatar,
  Stack,
  useToast,
  VStack,
  Center,
} from "@chakra-ui/react";
import * as React from "react";
import { NavLayout } from "./NavLayout";
import Link from "next/link";
import { useContext } from "react";
import { useRouter } from "next/router";

export const Navbar = () => {
  const Router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const menuButtonRef = React.useRef(null);

  return (
    <Box pb={{ base: "3", md: "6" }}>
      <Box
        as="nav"
        bg="bg-surface"
        borderRadius={"md"}
        borderColor={useColorModeValue("gray", "white")}
        borderWidth={"thin"}
        boxShadow={useColorModeValue("3xl", "2xl")}
      >
        <NavLayout
          onClickMenu={onOpen}
          isMenuOpen={isOpen}
          onToggleMode={undefined}
          menuButtonRef={undefined}
        />
        <Drawer
          placement="left"
          initialFocusRef={menuButtonRef}
          isOpen={isOpen}
          onClose={onClose}
          size="sm"
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader padding="0">
              <NavLayout
                onClickMenu={onClose}
                isMenuOpen={isOpen}
                menuButtonRef={menuButtonRef}
                onToggleMode={undefined}
              />
            </DrawerHeader>
            <DrawerBody>
              {/* <NavAccordion /> */}
              <VStack py={5} spacing={5}>
                <Box
                  //boxShadow={"2xl"}
                  p={2}
                  borderRadius={"md"}
                  borderColor={"white"}
                  borderWidth={"thin"}
                  w={"full"}
                >
                  <Link href="/">
                    <Button
                      aria-current={Router.pathname === "/" ? "page" : "false"}
                      w={"full"}
                    >
                      Home
                    </Button>
                  </Link>
                </Box>
                <Box
                  //boxShadow={"2xl"}
                  p={2}
                  borderRadius={"md"}
                  borderColor={"white"}
                  borderWidth={"thin"}
                  w={"full"}
                >
                  <Link href="/Gallery">
                    <Button
                      aria-current={
                        Router.pathname === "/Gallery" ? "page" : "false"
                      }
                      w={"full"}
                    >
                      Gallery
                    </Button>
                  </Link>
                </Box>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Box>
  );
};
