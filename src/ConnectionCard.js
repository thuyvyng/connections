import { Box, Card } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    cards: {
      yellow: "#f9df6d",
      green: "#a0c35a",
      blue: "#b0c4ef",
      purple: "#ba81c5",
    },
  },
});

function ConnectionCard() {
  const colors = [
    theme.palette.cards.yellow,
    theme.palette.cards.green,
    theme.palette.cards.blue,
    theme.palette.cards.purple,
  ];
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Card
        sx={{
          width: 1,
          height: 150,
          m: 1,
          bgcolor: colors[Math.floor(Math.random() * 4)],
        }}
      ></Card>
    </Box>
  );
}

export default ConnectionCard;
