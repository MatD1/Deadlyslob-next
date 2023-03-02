import PageWrapper from "@/Components/PageWrapper";
import {
  Box,
  Center,
  Divider,
  Heading,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import GalleryAnimated from "@/Components/GalleryAnimated";
import GalleryGrid from "@/Components/GalleryGrid";

export default function Gallery() {
  return (
    <PageWrapper>
      <Box h="full">
        <Heading fontWeight={"hairline"} as={"u"}>
          Community Created Art
        </Heading>
        <Text>
          Community art is created by the amazing DNE community and put up here
          for everyone to see
        </Text>
        <Tabs isLazy>
          <TabList>
            <Tab>
              <Heading fontSize={'4xl'}>Animated</Heading>
            </Tab>
            <Tab>
              <Heading fontSize={'4xl'}>Grid</Heading>
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <GalleryAnimated />
            </TabPanel>
            <TabPanel>
              <GalleryGrid />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </PageWrapper>
  );
}
