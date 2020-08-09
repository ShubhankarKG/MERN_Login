import React from "react";
import { Grid, Container } from "@material-ui/core";

function LandingPage() {
  return (
    <Container maxWidth="md">
      <Grid container>
        <Grid item style={{ placeItems: "center" }}>
          Welcome!
        </Grid>
      </Grid>
    </Container>
  );
}

export default LandingPage;
