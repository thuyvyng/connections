import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
      cards: {
        yellow: "#f9df6d",
        green: "#a0c35a",
        blue: "#b0c4ef",
        purple: "#ba81c5",
        gray: "#efefe6",
      },
    },
  });
  
export const colors = [
    theme.palette.cards.yellow,
    theme.palette.cards.green,
    theme.palette.cards.blue,
    theme.palette.cards.purple,
];