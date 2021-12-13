import { createTheme } from '@mui/material/styles';
import { blue, red } from '@mui/material/colors';

// const config = {
//   initialColorMode: "light",
//   useSystemColorMode: false,
// }
// const styles = {
//   global: props => ({
//     body: {
//       bg: mode('#f0e7db', '#202023')(props)
//     }
//   })
// }
// const components = {
//   Link: {
//     variants: {
//       'link-text': props => ({
//         color: mode('#3d7aed', '#ff63c3')(props),
//         textUnderlineOffset: 3
//       })
//     }
//   },
// }

const theme = createTheme({
  palette: {
    primary: {
      main: '#0052cc',
    },
    secondary: {
      main: '#edf2ff',
    },
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
    spacejelly: '#692ba8',
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'dashed' },
          style: {
            textTransform: 'none',
            border: `2px dashed ${blue[500]}`,
          },
        },
        {
          props: { variant: 'dashed', color: 'secondary' },
          style: {
            border: `4px dashed ${red[500]}`,
          },
        },
      ],
    },
  },
});

export default theme