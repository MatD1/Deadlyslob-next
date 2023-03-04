import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import {
  Box,
  Button,
  Center,
  Divider,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  Link as CLink,
  HStack,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import PageWrapper from "@/Components/PageWrapper";
import TwitchHome from "@/Components/TwitchHome";
import { CardWithAvatar } from "@/Components/Home/CardWithAvatar";
import { UserInfo } from "@/Components/Home/UserInfo";
import { FollowerCount } from "@/Components/Home/FollowerCount";
import { FiTwitter, FiInstagram, FiYoutube } from "react-icons/fi";
import { FaTiktok, FaTshirt } from "react-icons/fa";
import Metatags from "@/Components/MetaTags";

export default function Home() {
  const src = "/deadlyLarge.jpg";
  const name = "Deadlyslob";
  return (
    <>
      <Metatags />
      <PageWrapper>
        <VStack>
          <Box>
            <Heading fontWeight={"100"}>About Me</Heading>
          </Box>

          <Box
            // bg={useColorModeValue("gray.100", "gray.800")}
            px={{ base: "6", md: "8" }}
            py="12"
          >
            <Box as="section" maxW={{ base: "xs", md: "3xl" }} mx="auto">
              <SimpleGrid spacing="6" columns={[1, 2]} minChildWidth={"300px"}>
                <Box my={["2", "28"]}>
                  <CardWithAvatar
                    key={"deadlyslob"}
                    avatarProps={{ src, name }}
                  >
                    <UserInfo
                      mt="3"
                      name={"DeadlySlob"}
                      bio={""}
                      isVerified={true}
                    />
                    <FollowerCount my="4" count={406} />
                    <CLink href="https://twitch.tv/deadlyslob" isExternal>
                      <Button
                        variant="outline"
                        colorScheme="blue"
                        rounded="full"
                        size="sm"
                        width="full"
                      >
                        View Twitch
                      </Button>
                    </CLink>
                    <HStack my={2}>
                      <CLink href="https://twitter.com/Deadlyslob" isExternal>
                        <IconButton
                          aria-label="Deadlyslob's Twitter"
                          icon={<Icon as={FiTwitter} />}
                        />
                      </CLink>
                      <CLink
                        href="https://www.instagram.com/deadlyslob.ig/"
                        isExternal
                      >
                        <IconButton
                          aria-label="Deadlyslob's Instagram"
                          icon={<Icon as={FiInstagram} />}
                        />
                      </CLink>
                      <CLink
                        href="https://www.youtube.com/deadlyslob"
                        isExternal
                      >
                        <IconButton
                          aria-label="Deadlyslob's Youtube"
                          icon={<Icon as={FiYoutube} />}
                        />
                      </CLink>
                      <CLink
                        href="https://www.tiktok.com/@deadlyslob?lang=en"
                        isExternal
                      >
                        <IconButton
                          aria-label="Deadlyslob's Tiktok"
                          icon={<Icon as={FaTiktok} />}
                        />
                      </CLink>
                      <CLink
                        href="https://represent.com/store/deadlyslob"
                        isExternal
                      >
                        <IconButton
                          aria-label="Deadlyslob's Merchandise"
                          icon={<Icon as={FaTshirt} />}
                        />
                      </CLink>
                    </HStack>
                  </CardWithAvatar>
                </Box>

                <Box>
                  <Text fontSize={"2xl"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Nunc eget lorem dolor sed viverra ipsum. Lorem dolor
                    sed viverra ipsum nunc aliquet bibendum enim facilisis. Cras
                    tincidunt lobortis feugiat vivamus at augue. Massa id neque
                    aliquam vestibulum morbi blandit cursus risus. At tellus at
                    urna condimentum mattis pellentesque id. Condimentum mattis
                    pellentesque id nibh tortor. Augue lacus viverra vitae
                    congue eu consequat. Morbi tristique senectus et netus et
                    malesuada fames ac turpis. Mauris cursus mattis molestie a.
                    Ullamcorper morbi tincidunt ornare massa eget egestas purus
                    viverra.
                  </Text>
                </Box>
              </SimpleGrid>
            </Box>
          </Box>
        </VStack>

        <Divider my={2} />
        <TwitchHome />
      </PageWrapper>
    </>
  );
}
