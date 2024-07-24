import { Box, Card } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useState, useEffect } from "react";

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
const colors = [
  theme.palette.cards.yellow,
  theme.palette.cards.green,
  theme.palette.cards.blue,
  theme.palette.cards.purple,
];

function ConnectionCard() {
  const [color, setColor] = useState(colors[Math.floor(Math.random() * 4)]);

  useEffect(() => {
    const interval = setInterval(() => {
      setColor(colors[Math.floor(Math.random() * 4)]);
    }, 750);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Card
        sx={{
          width: 1,
          height: 150,
          m: 1,
          bgcolor: color,
        }}
      ></Card>
    </Box>
  );
}

export default ConnectionCard;
