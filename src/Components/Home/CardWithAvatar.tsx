import {
  Avatar,
  AvatarProps,
  Box,
  Flex,
  FlexProps,
  useColorModeValue,
} from "@chakra-ui/react";

interface CardWithAvatarProps extends FlexProps {
  avatarProps: AvatarProps;
}

export const CardWithAvatar = (props: CardWithAvatarProps) => {
  const { children, avatarProps, ...rest } = props;
  return (
    <Box>
      <Flex
        direction="column"
        alignItems="center"
        rounded="md"
        padding="8"
        position="relative"
        bg={useColorModeValue("white", "gray.700")}
        shadow={{ md: "base" }}
        w={"300px"}
        {...rest}
      >
        <Box
          position="absolute"
          inset="0"
          height="20"
          roundedTop="inherit"
          bgGradient="linear(to-l, #D5C999, #070A13)"
        />
        <Avatar size="xl" {...avatarProps} />
        {children}
      </Flex>
    </Box>
  );
};
