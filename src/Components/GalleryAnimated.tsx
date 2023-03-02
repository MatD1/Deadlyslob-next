import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Box, Divider, Heading, VStack, Text, Center } from "@chakra-ui/react";
import Image from "next/image";
import galleryData from "../../public/gallery.json";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const CBox = ({
  creator,
  src,
  alt,
  w,
  h,
}: {
  creator: string;
  src: string;
  alt: string;
  w: number;
  h: number;
}) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <Box h={"600px"}>
        <Center>
          <Box borderRadius={"2xl"} p={5} borderWidth={"thin"} mt={30}>
            <Text>Creator: {creator}</Text>
            <Divider my={2} />
            <Center>
              <Image src={src} alt={alt} width={w} height={h} />
            </Center>
          </Box>
        </Center>
      </Box>
    </motion.div>
  );
};

export default function GalleryAnimated() {
  return (
    <VStack>
      {galleryData.map((g) => (
        <CBox
          src={g.imageSrc}
          creator={g.imageCreatorName}
          alt={g.imageAlt}
          w={g.w}
          h={g.h}
        />
      ))}
    </VStack>
  );
}
