import { Box, Card, TextField } from "@mui/material";

function ThemeCard(props) {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Card
        sx={{
          width: 1,
          height: 50,
          m: 1,
          bgcolor: props.color,
          opacity: 1,
        }}
      >
        <TextField
          variant="standard"
          multiline
          margin="normal"
          onChange={props.onChange}
        />
      </Card>
    </Box>
  );
}

export default ThemeCard;
