import React from "react";
import { makeStyles } from "@mui/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { CardMedia } from "@mui/material";
import useStyles from "./AskingQuestionsStyle";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import FacultyData from "./FacultyData";
import "./AskingQuestions.css";

function AskingQuestions() {
  //const classes = useStyles();

  return (
    <div className="background">
      <div className="margin">
        <Container maxWidth="sm">
          <Typography
            fontFamily="Merriweather Sans"
            component="h1"
            variant="h2"
            align="center"
            color="#EEEEEE"
            gutterBottom
          >
            Choose your faculty!
          </Typography>
          <Typography
            fontFamily="Playfair Display"
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Wait no more, join the faculty that you belong in!
          </Typography>
        </Container>
      </div>
      <div className="background">
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {FacultyData.map((fac) => (
              <Grid item key={fac.Name} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    variant: "outlined",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      height: "140",
                      //pt: "56.25%",
                    }}
                    image={fac.Image}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      align="center"
                    >
                      <Typography fontFamily="Merriweather Sans" variant="h6">
                        {fac.Name}
                      </Typography>
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center" }}>
                    <Button size="small" variant="contained">
                      <Link
                        to={{
                          pathname: `/listQuestions/${fac.Name}`,
                          state: { fac },
                        }}
                        style={{ textDecoration: "none" }}
                      >
                        {" "}
                        <Typography
                          color="white"
                          fontFamily="Merriweather Sans"
                        >
                          Join
                        </Typography>
                      </Link>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default AskingQuestions;
