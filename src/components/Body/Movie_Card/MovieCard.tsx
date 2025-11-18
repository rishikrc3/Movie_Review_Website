import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

function MovieCard(props) {
  const { moviesData } = props;
  const { Title, Year, Poster } = moviesData;

  return (
    <Card
      sx={{
        width: 345,
        height: 450,
        display: "flex",
        flexDirection: "column",
        m: 2,
      }}
    >
      <CardActionArea
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          justifyContent: "flex-start",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            height: 300,
            objectFit: "cover",
          }}
          image={Poster}
          alt={Title}
        />
        <CardContent
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              minHeight: "3em",
            }}
          >
            {Title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {Year}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default MovieCard;
