import { Grid } from "@mui/material";
import ConnectionCard from "./ConnectionCard";
import Header from "./Header";

function Home() {
  return (
    <div className="App">
      <Header />
      <br></br>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="row"
        spacing={1}
      >
        <Grid item xs={4}>
          <ConnectionCard />
        </Grid>
        <Grid item xs={4}>
          <ConnectionCard />
        </Grid>
        <Grid item xs={4}>
          <ConnectionCard />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
