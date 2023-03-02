import {
  useColorMode,
  Button,
  Switch,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      {colorMode === "light" ? (
        <IconButton
          variant="ghost"
          icon={<Icon as={FiSun} fontSize="xl" />}
          aria-label="Toggle color mode"
          onClick={toggleColorMode}
        />
      ) : (
        <IconButton
          variant="ghost"
          icon={<Icon as={FiMoon} fontSize="xl" />}
          aria-label="Toggle color mode"
          onClick={toggleColorMode}
        />
      )}
    </header>
  );
}
