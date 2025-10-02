import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../Utils/cartSlice";
import { getMovieById } from "../../services/Api/movieservices";
import { MovieData } from "../../services/types/movietypes";
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardMedia,
  Chip,
  CircularProgress,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
  Paper,
  Rating,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MovieIcon from "@mui/icons-material/Movie";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PersonIcon from "@mui/icons-material/Person";
import StarIcon from "@mui/icons-material/Star";

const MovieDetails = () => {
  const { imdbID } = useParams<{ imdbID: string }>();
  const [movieData, setMovieData] = useState<MovieData | null>(null);
  const [isAddedToWishList, setIsAddedToWishList] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!imdbID) return;

    getMovieById(imdbID)
      .then((response) => {
        const data = response.data;

        const mappedData: MovieData = {
          Title: data.Title,
          Year: data.Year,
          Type: data.Type,
          Poster: data.Poster,
          Released: data.Released,
          Plot: data.Plot,
          Director: data.Director,
          Actors: data.Actors,
          Genre: data.Genre,
          Language: data.Language,
          Country: data.Country,
          Awards: data.Awards,
          Runtime: data.Runtime,
          Rated: data.Rated,
          imdbID: data.imdbID,
          imdbRating: data.imdbRating,
          imdbVotes: data.imdbVotes,
          totalSeasons: data.totalSeasons,
        };

        setMovieData(mappedData);
        console.log("Fetched Movie Data:", mappedData);
      })
      .catch((error) => {
        console.error("Error fetching movie:", error);
      });
  }, [imdbID]);

  const handleAddItem = () => {
    dispatch(addItem(movieData));
    setIsAddedToWishList((prevValue) => !prevValue);
  };

  if (movieData === null)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          bgcolor: "#f5f5f5",
        }}
      >
        <CircularProgress size={60} sx={{ color: "#1a1a1a" }} />
      </Box>
    );

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f5f5f5",
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
          {/* Left: Poster */}
          <Box sx={{ flexShrink: 0 }}>
            <Card
              sx={{
                position: "relative",
                boxShadow: 3,
                borderRadius: 2,
                width: { xs: "100%", md: 350 },
              }}
            >
              <CardMedia
                component="img"
                image={movieData.Poster}
                alt={movieData.Title}
                sx={{
                  width: "100%",
                  height: "auto",
                }}
              />
              <Button
                variant="contained"
                onClick={handleAddItem}
                startIcon={
                  isAddedToWishList ? <FavoriteIcon /> : <FavoriteBorderIcon />
                }
                fullWidth
                sx={{
                  position: "absolute",
                  bottom: 16,
                  left: 16,
                  right: 16,
                  width: "calc(100% - 32px)",
                  bgcolor: "#1a1a1a",
                  "&:hover": {
                    bgcolor: "#333333",
                  },
                  fontWeight: 600,
                  textTransform: "none",
                }}
              >
                {isAddedToWishList ? "Added" : "Add to Wishlist"}
              </Button>
            </Card>
          </Box>

          {/* Right: Info */}
          <Box sx={{ flexGrow: 1 }}>
            {/* Title */}
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                mb: 2,
                color: "#000",
              }}
            >
              {movieData.Title}
            </Typography>

            {/* Genre Chips */}
            <Stack
              direction="row"
              spacing={1}
              sx={{ mb: 3, flexWrap: "wrap", gap: 1 }}
            >
              {movieData.Genre.split(", ").map((genre, index) => (
                <Chip
                  key={index}
                  label={genre}
                  sx={{
                    bgcolor: "transparent",
                    border: "1px solid #d1d5db",
                    color: "#000",
                    fontWeight: 500,
                  }}
                />
              ))}
            </Stack>

            {/* Info Cards */}
            <Stack spacing={2} sx={{ mb: 3 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 2,
                  bgcolor: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: 2,
                }}
              >
                <Stack direction="row" spacing={4} flexWrap="wrap">
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <CalendarTodayIcon
                      sx={{ color: "#1a1a1a", fontSize: 20 }}
                    />
                    <Box>
                      <Typography
                        variant="caption"
                        sx={{ color: "#1a1a1a", display: "block" }}
                      >
                        Released
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        {movieData.Released}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <AccessTimeIcon sx={{ color: "#1a1a1a", fontSize: 20 }} />
                    <Box>
                      <Typography
                        variant="caption"
                        sx={{ color: "#1a1a1a", display: "block" }}
                      >
                        Runtime
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        {movieData.Runtime}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <MovieIcon sx={{ color: "#1a1a1a", fontSize: 20 }} />
                    <Box>
                      <Typography
                        variant="caption"
                        sx={{ color: "#1a1a1a", display: "block" }}
                      >
                        Director
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        {movieData.Director}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <EmojiEventsIcon sx={{ color: "#1a1a1a", fontSize: 20 }} />
                    <Box>
                      <Typography
                        variant="caption"
                        sx={{ color: "#1a1a1a", display: "block" }}
                      >
                        Awards
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        {movieData.Awards}
                      </Typography>
                    </Box>
                  </Box>
                </Stack>
              </Paper>
            </Stack>

            {/* Plot */}
            <Paper
              elevation={0}
              sx={{
                p: 3,
                bgcolor: "white",
                border: "1px solid #e5e7eb",
                borderRadius: 2,
                mb: 3,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                Plot
              </Typography>
              <Typography
                variant="body1"
                sx={{ lineHeight: 1.8, color: "#374151" }}
              >
                {movieData.Plot}
              </Typography>
            </Paper>

            {/* Cast Accordion */}
            <Accordion
              sx={{
                bgcolor: "white",
                border: "1px solid #e5e7eb",
                borderRadius: 2,
                mb: 2,
                "&:before": { display: "none" },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  "& .MuiAccordionSummary-content": {
                    alignItems: "center",
                    gap: 1,
                  },
                }}
              >
                <PersonIcon sx={{ color: "#1a1a1a" }} />
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  Cast
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" sx={{ color: "#374151" }}>
                  {movieData.Actors}
                </Typography>
              </AccordionDetails>
            </Accordion>

            {/* IMDb Rating Accordion */}
            {movieData.imdbRating && (
              <Accordion
                sx={{
                  bgcolor: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: 2,
                  "&:before": { display: "none" },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    "& .MuiAccordionSummary-content": {
                      alignItems: "center",
                      gap: 1,
                    },
                  }}
                >
                  <StarIcon sx={{ color: "#f59e0b" }} />
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    Ratings
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Stack spacing={2}>
                    <Box>
                      <Typography
                        variant="body2"
                        sx={{ color: "#1a1a1a", mb: 1 }}
                      >
                        IMDb Rating
                      </Typography>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <Rating
                          value={parseFloat(movieData.imdbRating) / 2}
                          precision={0.1}
                          readOnly
                          sx={{
                            "& .MuiRating-iconFilled": {
                              color: "#f59e0b",
                            },
                          }}
                        />
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: 700, color: "#f59e0b" }}
                        >
                          {movieData.imdbRating}/10
                        </Typography>
                      </Box>
                    </Box>
                    {movieData.imdbVotes && (
                      <Typography variant="body2" sx={{ color: "#1a1a1a" }}>
                        {movieData.imdbVotes} votes
                      </Typography>
                    )}
                  </Stack>
                </AccordionDetails>
              </Accordion>
            )}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default MovieDetails;
