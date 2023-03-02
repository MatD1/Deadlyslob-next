import { Divider, SimpleGrid, Center, Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import galleryData from "../../public/gallery.json";
import Image from "next/image";
import React from "react";

export default function GalleryGrid() {
  return (
    <React.Fragment>
      <Divider my={2} />
      <SimpleGrid columns={[1, 3, 6]} spacing={5} minChildWidth={"400px"}>
        {galleryData.map((g) => (
          <>
            <Box borderRadius={"2xl"} p={5} borderWidth={"thin"}>
              <Text>Creator: {g.imageCreatorName}</Text>
              <Divider my={2} />
              <Center>
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                >
                  <Image
                    src={g.imageSrc}
                    alt={g.imageAlt}
                    width={g.w}
                    height={g.h}
                  />
                </motion.div>
              </Center>
            </Box>
          </>
        ))}
      </SimpleGrid>
    </React.Fragment>
  );
}
