import { useEffect } from "react";
import { Link } from "react-router-dom";
import Data from "../../dummyData/courses";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

const Courses = ({ setSelectedTab }) => {
  document.title = "Courses";
  useEffect(() => {
    setSelectedTab("Courses");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Container maxWidth={false}>
        <Grid container spacing={2} sx={{ py: 3 }}>
          {Data.map((item) => {
            return (
              <Grid item xs="auto" key={item.id}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="body2">{item.description}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      component={Link}
                      to={`/courses/${item.id}`}
                      size="small"
                    >
                      Open Course
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
      {/* this box is added to unhide */}
      <Box sx={{ height: 56 }} />
    </>
  );
};

export default Courses;
