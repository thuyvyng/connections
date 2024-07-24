import { Box, Grid, Button, Typography } from "@mui/material";
import ConnectionCard from "./ConnectionCard";
import { useState } from "react";
import Header from "./Header";

function Home() {
  const [creating, setCreating] = useState(false);
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
            <ConnectionCard create={creating} />
          </Grid>
          <Grid item xs={3}>
            <ConnectionCard create={creating} />
          </Grid>
          <Grid item xs={3}>
            <ConnectionCard create={creating} />
          </Grid>
          <Grid item xs={3}>
            <ConnectionCard create={creating} />
          </Grid>
          <Grid item xs={3}>
            <ConnectionCard create={creating} />
          </Grid>
          <Grid item xs={3}>
            <ConnectionCard create={creating} />
          </Grid>
          <Grid item xs={3}>
            <ConnectionCard create={creating} />
          </Grid>
          <Grid item xs={3}>
            <ConnectionCard create={creating} />
          </Grid>
          <Grid item xs={3}>
            <ConnectionCard create={creating} />
          </Grid>
          <Grid item xs={3}>
            <ConnectionCard create={creating} />
          </Grid>
          <Grid item xs={3}>
            <ConnectionCard create={creating} />
          </Grid>
          <Grid item xs={3}>
            <ConnectionCard create={creating} />
          </Grid>
          <Grid item xs={3}>
            <ConnectionCard create={creating} />
          </Grid>
          <Grid item xs={3}>
            <ConnectionCard create={creating} />
          </Grid>
          <Grid item xs={3}>
            <ConnectionCard create={creating} />
          </Grid>
          <Grid item xs={3}>
            <ConnectionCard create={creating} />
          </Grid>
        </Grid>
      </Box>
      <Button
        variant="contained"
        onClick={() => {
          setCreating(!creating);
        }}
      >
        {creating ? "finish" : "create"}
      </Button>

      {creating ? (
        <Button
          variant="contained"
          onClick={() => {
            setCreating(!creating);
          }}
        >
          {"cancel"}
        </Button>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Home;
