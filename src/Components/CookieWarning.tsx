import React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  useDisclosure,
  CloseButton,
} from "@chakra-ui/react";

export default function CookieWarning() {
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: true });
  return isVisible ? (
    <Alert status="warning" variant="solid" borderRadius={"2xl"} my={2}>
      <AlertIcon />
      This site uses cookies to improve user experience
      <CloseButton
        alignSelf="flex-start"
        position="relative"
        right={-1}
        //top={-3}
        onClick={onClose}
      />
    </Alert>
  ) : (
    <React.Fragment />
  );
}
