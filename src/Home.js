import { Box, Grid, Button, Typography } from "@mui/material";
import ConnectionCard from "./ConnectionCard";
import { useState } from "react";
import Header from "./Header";

function Home() {
  const [isCreating, setIsCreating] = useState(false);
  return (
    <div className="App">
      <Header />
      <br></br>
      <br></br>
      <Typography gutterBottom variant="subtitle1" component="div">
        Create your own connections game!
      </Typography>
      <br />
      <br />
      <Box display="flex" justifyContent="center" alignItems="center">
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="row"
          columnSpacing={0}
        >
          {
            isCreating ? 
            <>
              <Grid item xs={3}>Theme 1</Grid>
              <Grid item xs={3}>Theme 2</Grid>
              <Grid item xs={3}>Theme 3</Grid>
              <Grid item xs={3}>Theme 4</Grid>
              </> : <></>}
          <Grid item xs={3}>
            <ConnectionCard create={isCreating} />
          </Grid>
          <Grid item xs={3}>
            <ConnectionCard create={isCreating} />
          </Grid>
          <Grid item xs={3}>
            <ConnectionCard create={isCreating} />
          </Grid>
          <Grid item xs={3}>
            <ConnectionCard create={isCreating} />
          </Grid>
          <Grid item xs={3}>
            <ConnectionCard create={isCreating} />
          </Grid>
          <Grid item xs={3}>
            <ConnectionCard create={isCreating} />
          </Grid>
          <Grid item xs={3}>
            <ConnectionCard create={isCreating} />
          </Grid>
          <Grid item xs={3}>
            <ConnectionCard create={isCreating} />
          </Grid>
          <Grid item xs={3}>
            <ConnectionCard create={isCreating} />
          </Grid>
          <Grid item xs={3}>
            <ConnectionCard create={isCreating} />
          </Grid>
          <Grid item xs={3}>
            <ConnectionCard create={isCreating} />
          </Grid>
          <Grid item xs={3}>
            <ConnectionCard create={isCreating} />
          </Grid>
          <Grid item xs={3}>
            <ConnectionCard create={isCreating} />
          </Grid>
          <Grid item xs={3}>
            <ConnectionCard create={isCreating} />
          </Grid>
          <Grid item xs={3}>
            <ConnectionCard create={isCreating} />
          </Grid>
          <Grid item xs={3}>
            <ConnectionCard create={isCreating} />
          </Grid>
        </Grid>
      </Box>
      <Button
        variant="contained"
        onClick={() => {
          setIsCreating(!isCreating);
        }}
      >
        {isCreating ? "finish" : "create"}
      </Button>

      {isCreating ? (
        <Button
          variant="contained"
          onClick={() => {
            setIsCreating(!isCreating);
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
