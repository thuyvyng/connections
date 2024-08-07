import { Box, Card, TextField } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useState, useEffect } from "react";

const theme = createTheme({
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
const colors = [
  theme.palette.cards.yellow,
  theme.palette.cards.green,
  theme.palette.cards.blue,
  theme.palette.cards.purple,
];

function ConnectionCard(props) {
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
          bgcolor: props.create === true ? theme.palette.cards.gray : color,
          opacity: props.create === true ? 0.7 : 1,
        }}
      >
        {props.create ? (
          <TextField variant="standard" multiline margin="normal" />
        ) : (
          <></>
        )}
      </Card>
    </Box>
  );
}

export default ConnectionCard;
