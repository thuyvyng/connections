import { Box, Card, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { theme, colors } from "./ThemeColors";

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
