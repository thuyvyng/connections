import {
  Box,
  Grid,
  Card,
  Typography,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import Header from "./Header";

function About() {
  return (
    <div className="App">
      <Header />
      <Box sx={{ margin: 5 }}>
        <Typography variant="body1" gutterBottom>
          We decided to create a fun game inspired by the New York Times' game.
          It started off as a joke as Thuy-Vy was thinking of funny games for
          her birthday parties and they came up with the idea of a Thuy-Vy
          themed connections game to play at the party. We then decided to go
          turn it into this web app for others to share and play too. Enjoy!
        </Typography>
      </Box>

      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Card variant="outlined"> Aubin Lohier </Card>
        </Grid>
        <Grid item xs={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Thuy-Vy Nguyen
              </Typography>
              <Typography variant="body2" color="text.secondary">
                blah blah about thuyvy
              </Typography>
            </CardContent>
            <CardActions>
              <Button href="https://www.linkedin.com/in/thuyvyng/" size="small">
                Linkedin
              </Button>
              <Button href="https://github.com/thuyvyng" size="small">
                Github
              </Button>
              <Button href="https://thuyvy.vercel.app/" size="small">
                Website
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
