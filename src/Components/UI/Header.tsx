import {
  Box,
  Button,
  CloseButton,
  Container,
  Heading,
  HStack,
  Icon,
  Square,
  Stack,
  useBreakpointValue,
  Text
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function Header() {
    const isMobile = useBreakpointValue({ base: true, md: false })
  return (
    <>
      {/* <Box m={2} borderRadius={"2xl"} color={"black"} w={"full"} h={"100px"}>
        
      </Box> */}
      <Container
        as="section"
        pt={{ base: "4", md: "8" }}
        pb={{ base: "12", md: "24" }}
      >
        <Box
          bg="bg-accent"
          color="on-accent"
          px={{ base: "4", md: "3" }}
          py={{ base: "4", md: "2.5" }}
          position="relative"
          borderRadius="xl"
        >
          <HStack spacing={"5"}>
          <Box>
            <Link href={"/"}>
              <Button>Home</Button>
            </Link>
          </Box>
          <Box>
            <Link href={"/Gallery"}>
              <Button>Gallery</Button>
            </Link>
          </Box>
        </HStack>
        </Box>
      </Container>
    </>
  );
}
