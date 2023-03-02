import { Box, Center, VStack } from "@chakra-ui/react";
import React, { useRef } from "react";
import { TwitchPlayer, TwitchPlayerNonInteractive } from "react-twitch-embed";

const TwitchHome = () => {
  const embed = useRef(); // We use a ref instead of state to avoid rerenders.

  const handleReady = (e: any) => {
    embed.current = e;
  };

  return (
    <Box w={"full"}>
      <Center>
        <Box
          borderRadius={"2xl"}
          borderWidth="medium"
          p={3}
        w={['250px', '600px', 'auto']}
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
