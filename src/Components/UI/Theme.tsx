import { theme as proTheme } from "@chakra-ui/pro-theme";
import { extendTheme, theme as baseTheme } from "@chakra-ui/react";

export const DeadlyTheme = extendTheme(proTheme, {
  colors: { ...baseTheme.colors, brand: baseTheme.colors.blue },
  fonts: {
    heading: "'Josefin Sans', -apple-system, system-ui, sans-serif",
  //  body: "'Share Tech Mono', -apple-system, system-ui, sans-serif",
  },
});
