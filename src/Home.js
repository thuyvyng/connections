import { Box, Grid, Button, Typography } from "@mui/material";
import ConnectionCard from "./ConnectionCard";
import Header from "./Header";

function Home() {
  return (
    <div className="App">
      <Header />
      <br></br>
      <br></br>
      <Typography gutterBottom variant="subtitle1" component="div">
        Create your own connections game!
      </Typography>
      <br></br>
      <br></br>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="row"
          columnSpacing={0}
        >
          <Grid item xs={3}>
            <ConnectionCard />
          </Grid>
          <Grid item xs={3}>
            <ConnectionCard />
          </Grid>
          <Grid item xs={3}>
            <ConnectionCard />
          </Grid>
          <Grid item xs={3}>
            <ConnectionCard />
          </Grid>
          <Grid item xs={3}>
            <ConnectionCard />
          </Grid>
          <Grid item xs={3}>
            <ConnectionCard />
          </Grid>
          <Grid item xs={3}>
            <ConnectionCard />
          </Grid>
          <Grid item xs={3}>
            <ConnectionCard />
          </Grid>
          <Grid item xs={3}>
            <ConnectionCard />
          </Grid>
          <Grid item xs={3}>
            <ConnectionCard />
          </Grid>
          <Grid item xs={3}>
            <ConnectionCard />
          </Grid>
          <Grid item xs={3}>
            <ConnectionCard />
          </Grid>
          <Grid item xs={3}>
            <ConnectionCard />
          </Grid>
          <Grid item xs={3}>
            <ConnectionCard />
          </Grid>
          <Grid item xs={3}>
            <ConnectionCard />
          </Grid>
          <Grid item xs={3}>
            <ConnectionCard />
          </Grid>
        </Grid>
      </Box>
      <Button variant="contained"> start </Button>
    </div>
  );
}

export default Home;
