import {
  Box,
  ButtonGroup,
  Container,
  Heading,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";

export const Footer = () => (
  <Box bg="gray.900" color="on-accent">
    <Container
      as="footer"
      role="contentinfo"
      py={{
        base: "12",
        md: "16",
      }}
    >
      <Stack
        spacing={{
          base: "4",
          md: "5",
        }}
      >
        <Stack justify="space-between" direction="row" align="center">
          <Heading fontSize={"2xl"}>DEADLYSLOB</Heading>
        </Stack>
        <Text fontSize="sm" color="on-accent-subtle">
          &copy; {new Date().getFullYear()} Deadlyslob. Created by a member of the community. All rights reserved.
        </Text>
      </Stack>
    </Container>
  </Box>
);
