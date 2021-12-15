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
import "./AskingQuestions.css";
import { CardMedia } from "@mui/material";
import useStyles from "./AskingQuestionsStyle";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function AskingQuestions() {
  const cards = [1, 2, 3, 4, 5, 6];
  const Facultydata = [
    "Faculty of Science",
    "School of Computing",
    "College of Design and Engineering",
    "Faculty of Arts and Social Science",
    "School of Medicine",
    "Law",
  ];
  //const classes = useStyles();
  return (
    <div className="mainFaculty">
      <div>
        <Container maxWidth="sm">
          <Typography
            fontFamily="Comic Sans"
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Choose your faculty!
          </Typography>
          <Typography
            fontFamily="Arial"
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Wait no more, join the faculty that you belong in!
          </Typography>
        </Container>
      </div>

      <div>
        <Container style={{ display: "flex", flexDirection: "row" }}>
          <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
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
                      pt: "56.25%",
                    }}
                    image="https://static.straitstimes.com.sg/s3fs-public/styles/article_pictrure_780x520_/public/articles/2014/07/22/nusschcomscijuly22e_2x.jpg?itok=Up3J7Oyk&timestamp=1435159793"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      School of Computing
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" variant="contained">
                      Join
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Container>
          <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
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
                      pt: "56.25%",
                    }}
                    image="https://miro.medium.com/max/800/1*1uOi7kwwIq_POfXtQSx1og.jpeg"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Faculty of Science
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" variant="contained">
                      Join
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Container>

          <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
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
                      pt: "56.25%",
                    }}
                    image="https://assets.change.org/photos/6/sa/hm/iGSaHMeegvelhyR-800x450-noPad.jpg?1571151506"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Faculty of Arts and Social Sciences
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" variant="contained">
                      Join
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Container>
      </div>

      <div>
        <Container
          style={{ width: "90vw", display: "flex", flexDirection: "row" }}
        >
          <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
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
                      pt: "56.25%",
                    }}
                    image="https://static.straitstimes.com.sg/s3fs-public/styles/article_pictrure_780x520_/public/articles/2021/02/08/yq-nuslaw-210802.jpg?itok=UpTwTZf-&timestamp=1612783711"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Faculty of Law
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" variant="contained">
                      Join
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Container>
          <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
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
                      pt: "56.25%",
                    }}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoR-mgq5YDnP1m4hCiXOhcIao3FPcIgrIXmA&usqp=CAU"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      School of Medicine
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" variant="contained">
                      Join
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Container>

          <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
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
                      pt: "56.25%",
                    }}
                    image="https://static.mothership.sg/1/2021/03/1000x525-cover-photo.jpg"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      College of Design and Engineering
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" variant="contained">
                      Join
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Container>
      </div>
    </div>
  );
}

//   return (
//     <div className="mainlistF">
//       <div className="rowF">
//         <Grid container spacing={2} justifyContent="centre">
//           <Grid item>
//             <Paper style={{ height: 100, width: 100 }}>
//               <Typography>Faculty of Science</Typography>
//             </Paper>
//           </Grid>

//           <Grid item>
//             <Paper style={{ height: 100, width: 50 }} />
//           </Grid>

//           <Grid item>
//             <Paper style={{ height: 100, width: 50 }} />
//           </Grid>
//         </Grid>
//       </div>
//       <div className="rowF">
//         <Grid container spacing={2} justifyContent="centre">
//           <Grid item>
//             <Paper style={{ height: "25%", width: 50 }} />
//           </Grid>

//           <Grid item>
//             <Paper style={{ height: "25%", width: 50 }} />
//           </Grid>

//           <Grid item>
//             <Paper style={{ height: "25%", width: 50 }} />
//           </Grid>
//         </Grid>
//       </div>
//     </div>
//   );
// }

export default AskingQuestions;
