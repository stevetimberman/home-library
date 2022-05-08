import { extendTheme } from '@chakra-ui/react'
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'
import { theme as chakraProTheme } from '@chakra-ui/pro-theme'

// Base color: #FDD3D3

const styles = {
	global: (props: StyleFunctionProps) => ({
		body: {
			fontFamily: 'body',
			color: mode('gray.800', 'whiteAlpha.900')(props),
			bg: mode('red.100', 'gray.800')(props),
		},
		'*::placeholder': {
      opacity: 1,
      color: 'subtle',
    },
    '*, *::before, &::after': {
      borderColor: mode('gray.200', 'gray.700')(props),
    },
	}),
}

const colors = {
	gray: {
	    50: "#faf9f9",
	    100: "#f1ecec",
	    200: "#e5dfdf",
	    300: "#d7d2d2",
	    400: "#c8c3c3",
	    500: "#b7b2b2",
	    600: "#a39f9f",
	    700: "#8c8888",
	    800: "#6e6b6b",
	    900: "#403f3f",
	  },

	  red: {
	    50: "#fff8f8",
	    100: "#fee9e9",
	    200: "#fdd8d8",
	    300: "#f2c9c9",
	    400: "#e0bbbb",
	    500: "#cdabab",
	    600: "#b79999",
	    700: "#9d8383",
	    800: "#7c6767",
	    900: "#483c3c",
	  },

	  orange: {
	    50: "#fef8f2",
	    100: "#fdead8",
	    200: "#f2ddc9",
	    300: "#e3d0bd",
	    400: "#d2c1af",
	    500: "#c0b0a0",
	    600: "#ac9d8f",
	    700: "#93877b",
	    800: "#746b61",
	    900: "#443e39",
	  },

	  yellow: {
	    50: "#fcfcd2",
	    100: "#f0f0c8",
	    200: "#e3e3bd",
	    300: "#d5d5b2",
	    400: "#c6c6a5",
	    500: "#b5b597",
	    600: "#a1a187",
	    700: "#8a8a73",
	    800: "#6d6d5b",
	    900: "#404035",
	  },

	  lime: {
	    50: "#f1fee4",
	    100: "#e0f4cc",
	    200: "#d4e7c1",
	    300: "#c7d9b5",
	    400: "#b9c9a8",
	    500: "#a9b899",
	    600: "#97a489",
	    700: "#818d76",
	    800: "#666f5d",
	    900: "#3c4136",
	  },

	  green: {
	    50: "#edfeed",
	    100: "#cff8cf",
	    200: "#c4ebc4",
	    300: "#b8dcb8",
	    400: "#abcdab",
	    500: "#9cbb9c",
	    600: "#8ba78b",
	    700: "#778f77",
	    800: "#5e715e",
	    900: "#374237",
	  },

	  teal: {
	    50: "#eafef4",
	    100: "#cef7e2",
	    200: "#c3ead6",
	    300: "#b7dbc9",
	    400: "#aacbbb",
	    500: "#9bbaab",
	    600: "#8aa698",
	    700: "#778e83",
	    800: "#5e7067",
	    900: "#37423c",
	  },

	  blue: {
	    50: "#f5faff",
	    100: "#e1effe",
	    200: "#cfe3f8",
	    300: "#c2d5e8",
	    400: "#b4c6d8",
	    500: "#a5b5c5",
	    600: "#93a2b0",
	    700: "#7e8b97",
	    800: "#636d77",
	    900: "#3a4046",
	  },

	  cyan: {
	    50: "#e7fefe",
	    100: "#cdf5f5",
	    200: "#c2e8e8",
	    300: "#b6dada",
	    400: "#a9caca",
	    500: "#9ab9b9",
	    600: "#8aa5a5",
	    700: "#768e8e",
	    800: "#5d7070",
	    900: "#364141",
	  },

	  purple: {
	    50: "#fbf8ff",
	    100: "#f4eafe",
	    200: "#ecdafd",
	    300: "#dfcbf4",
	    400: "#cfbde2",
	    500: "#bdaccf",
	    600: "#a99ab8",
	    700: "#91849e",
	    800: "#72687d",
	    900: "#433d49",
	  },

	  pink: {
	    50: "#fff8fb",
	    100: "#fee8f3",
	    200: "#fdd6ea",
	    300: "#f0c8dc",
	    400: "#dfbacc",
	    500: "#ccaabb",
	    600: "#b698a7",
	    700: "#9c828f",
	    800: "#7b6771",
	    900: "#483c42",
	  },

	  indigo: {
	    50: "#f9f9ff",
	    100: "#ececfe",
	    200: "#dedefe",
	    300: "#cfcff9",
	    400: "#c1c1e7",
	    500: "#b0b0d3",
	    600: "#9d9dbc",
	    700: "#8787a2",
	    800: "#6a6a7f",
	    900: "#3e3e4b",
	  },
}

const theme = extendTheme({ styles, colors }, chakraProTheme)
export default theme
