import {
  Box,
  Center,
  Switch,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { TwitchPlayer, TwitchPlayerNonInteractive } from "react-twitch-embed";

const TwitchHome = () => {
  const embed = useRef(); // We use a ref instead of state to avoid rerenders.

  const handleReady = (e: any) => {
    embed.current = e;
  };

  const [showPreview, setShowPreview] = useState(false);
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const mobile = true ? isDesktop === false : false;

  return (
    <Box w={"full"}>
      <Center>
        <Box
          borderRadius={"2xl"}
          borderWidth="medium"
          p={3}
          w={["250px", "600px", "auto"]}
        >
          <TwitchPlayer
            channel="deadlyslob"
            autoplay
            muted
            onReady={handleReady}
          />
        </Box>
      </Center>
    </Box>
  );
};

export default TwitchHome;
