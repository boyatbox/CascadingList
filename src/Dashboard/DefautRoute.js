import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
  CardMedia,
  Button,
} from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 180,
  },
});

const movieList = [
  {
    title: "Little Miss Sunshine",
    plot: "A family determined to get their young daughter into the finals of a beauty pageant take a cross-country trip in their VW bus.",
    poster: "/lms.webp",
  },
  {
    title: "The Breakfast Club",
    plot: "Five high school students meet in Saturday detention and discover how they have a lot more in common than they thought.",
    poster: "/bc.jpg",
  },
  {
    title: "No Country for Old Men",
    plot: "Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.",
    poster: "/ncfom.jpg",
  },
];

export default function DefaultRoute() {
  const classes = useStyles();

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {movieList.map((movie) => {
        return <MovieCard data={movie} />;
      })}
    </div>
  );
}

function MovieCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.data.poster}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.data.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.data.plot}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
