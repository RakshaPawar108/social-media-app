import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
} from "@chakra-ui/react";

const config = {
  colors: {
    blue: {
      100: "#55B4F4",
      200: "#8ECDF7",
      300: "#63B3ED",
      400: "#1FA5FF",
      500: "#1D9BF0",
    },
    bg: {
      100: "#f7f9f9",
    },
    black: "#000000",
  },
  fonts: {
    body: `Poppins, ${base.fonts?.body}`,
  },
  components: {
    Input: {
      variants: {
        outline: {
          field: {
            borderColor: "blue.100",
            _hover: {
              borderColor: "blue.400",
            },
            _focus: {
              borderColor: "blue.500",
            },
          },
        },
      },
    },
    Button: {
      variants: {
        brand: {
          backgroundColor: "blue.500",
          _hover: {
            backgroundColor: "blue.400",
          },
          _active: {
            backgroundColor: "blue.200",
          },
        },
      },
    },
  },

  initialColorMode: "system",
  useSystemColorMode: false,
};

const theme = extendTheme(
  config,
  withDefaultColorScheme({
    colorScheme: "blue",
    components: ["Checkbox"],
  })
);

export default theme;
