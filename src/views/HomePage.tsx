import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Fade,
  Grid,
  Slide,
  Stack,
  Typography,
  Zoom,
} from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useInView } from "react-intersection-observer";

const COLORS = {
  primary: "#0E0E0E",
  secondary: "#C9A24D",
  accent: "#6B1F1F",
  textLight: "#F5F5F5",
  textMuted: "#CFCFCF",
};

const HomePage: React.FC = () => {
  const [heroRef, heroInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [journeyRef, journeyInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [showcaseRef, showcaseInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [youtubeRef, youtubeInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <Box sx={{ bgcolor: COLORS.primary, color: COLORS.textLight }}>
        
      <Box
        ref={heroRef}
        sx={{
          minHeight: "92vh",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1586339277898-b9a832c86c2e?w=1920)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: { xs: "scroll", md: "fixed" },
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            bgcolor: "rgba(0,0,0,0.65)",
          }}
        />

        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 1,
            height: "92vh",
            display: "flex",
            alignItems: "center",
            px: { xs: 3, md: 4 },
          }}
        >
          <Fade in={heroInView} timeout={1200}>
            <Stack spacing={3} sx={{ maxWidth: { xs: "100%", md: "65%" } }}>
              <Typography
                variant="h2"
                fontWeight={700}
                color={COLORS.secondary}
                sx={{
                  fontSize: { xs: "2.5rem", sm: "3rem", md: "3.75rem" },
                  lineHeight: 1.2,
                }}
              >
                Sadambara Sri Lanka
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: "1.25rem", sm: "1.5rem" },
                  fontWeight: 300,
                }}
              >
                2026 · Classical Cultural Concert
              </Typography>

              <Typography
                sx={{
                  maxWidth: 540,
                  color: COLORS.textMuted,
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  lineHeight: 1.7,
                }}
              >
                Unveiling a timeless legacy of Sri Lankan art, rhythm and
                tradition through a world‑class classical performance.
              </Typography>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{ pt: 2 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: COLORS.secondary,
                    color: COLORS.primary,
                    fontWeight: 600,
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    transition: "all 0.3s",
                    "&:hover": {
                      bgcolor: COLORS.secondary,
                      transform: "translateY(-2px)",
                      boxShadow: "0 8px 20px rgba(201,162,77,0.3)",
                    },
                  }}
                >
                  Enroll Now
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: COLORS.secondary,
                    color: COLORS.secondary,
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    borderWidth: 2,
                    transition: "all 0.3s",
                    "&:hover": {
                      borderWidth: 2,
                      borderColor: COLORS.secondary,
                      bgcolor: "rgba(201,162,77,0.1)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  Book Show (Audience)
                </Button>
              </Stack>
            </Stack>
          </Fade>
        </Container>
      </Box>

      {/* PARTICIPATION JOURNEY */}
      <Box
        ref={journeyRef}
        sx={{ bgcolor: "#F5F1E8", py: { xs: 6, md: 8 }, px: 0, m: 0 }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
          <Slide direction="up" in={journeyInView} timeout={800}>
            <Typography
              align="center"
              variant="h4"
              fontWeight={600}
              color="#2A2A2A"
              sx={{ mb: 5, fontSize: { xs: "1.75rem", md: "2.125rem" } }}
            >
              Participation Journey
            </Typography>
          </Slide>

          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={3}
            justifyContent="center"
            alignItems="stretch"
          >
            {[
              { title: "Applications Open", icon: "📝" },
              { title: "Auditions & Rehearsals", icon: "🎭" },
              { title: "Grand Show", icon: "🎪" },
            ].map((step, i) => (
              <Zoom
                key={step.title}
                in={journeyInView}
                timeout={800}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <Card
                  sx={{
                    flex: 1,
                    textAlign: "center",
                    py: 4,
                    px: 3,
                    borderRadius: 3,
                    borderTop: `5px solid ${
                      i === 1 ? COLORS.accent : COLORS.secondary
                    }`,
                    transition: "all 0.3s",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
                    },
                  }}
                >
                  <CardContent>
                    <Typography variant="h3" sx={{ mb: 2 }}>
                      {step.icon}
                    </Typography>
                    <Typography fontWeight={600} variant="h6">
                      {step.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Zoom>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* FOUNDATION */}
      <Container sx={{ py: 8 }}>
        <Grid container spacing={4} alignItems="center">
          <Stack>
            <Typography variant="h5" fontWeight={600} color={COLORS.secondary}>
              Ramwala Foundation · Nurturing Heritage
            </Typography>
            <Typography sx={{ mt: 2, color: COLORS.textMuted }}>
              Dedicated to preserving and elevating Sri Lankas classical dance
              and musical traditions through education, global exposure and
              performance excellence.
            </Typography>
          </Stack>
          <Stack>
            <Card sx={{ borderRadius: 3 }}>
              <CardMedia
                component="img"
                height="260"
                image="https://images.unsplash.com/photo-1545235617-9465d2a55698"
              />
            </Card>
          </Stack>
        </Grid>
      </Container>

      {/* YOUTUBE PREVIEW */}
      <Box
        ref={youtubeRef}
        sx={{ bgcolor: "#1A1A1A", py: { xs: 6, md: 8 }, px: 0, m: 0 }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
          <Fade in={youtubeInView} timeout={800}>
            <Box>
              <Stack direction="row" alignItems="center" spacing={2} mb={4}>
                <YouTubeIcon sx={{ color: "#FF0000", fontSize: 40 }} />
                <Typography
                  variant="h4"
                  fontWeight={600}
                  color={COLORS.secondary}
                  sx={{ fontSize: { xs: "1.75rem", md: "2.125rem" } }}
                >
                  Video Preview
                </Typography>
              </Stack>
            </Box>
          </Fade>

          <Zoom in={youtubeInView} timeout={600}>
            <Card
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                bgcolor: "#000",
                boxShadow: "0 8px 30px rgba(0,0,0,0.5)",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  paddingTop: "56.25%",
                  width: "100%",
                }}
              >
                <iframe
                  src="https://www.youtube.com/embed/sLFNwToqIZs"
                  title="Sadambara Sri Lanka Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: "none",
                  }}
                />
              </Box>
            </Card>
          </Zoom>
        </Container>
      </Box>

      {/* SHOWCASE PREVIEWS */}
      <Box
        ref={showcaseRef}
        sx={{ bgcolor: "#121212", py: { xs: 6, md: 8 }, px: 0, m: 0 }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
          <Fade in={showcaseInView} timeout={800}>
            <Typography
              variant="h4"
              fontWeight={600}
              color={COLORS.secondary}
              mb={5}
              sx={{ fontSize: { xs: "1.75rem", md: "2.125rem" } }}
            >
              Showcase Previews
            </Typography>
          </Fade>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={3}
            sx={{ flexWrap: "wrap" }}
          >
            {[
              "https://images.unsplash.com/photo-1586339277898-b9a832c86c2e?w=600",
              "https://images.unsplash.com/photo-1604999333679-b86d54738315?w=600",
              "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600",
              "https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?w=600",
            ].map((img, i) => (
              <Zoom
                key={i}
                in={showcaseInView}
                timeout={800}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <Card
                  sx={{
                    flex: {
                      xs: "1 1 100%",
                      sm: "1 1 calc(50% - 12px)",
                      md: "1 1 calc(25% - 18px)",
                    },
                    borderRadius: 3,
                    overflow: "hidden",
                    transition: "all 0.3s",
                    cursor: "pointer",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0 8px 25px rgba(201,162,77,0.3)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="220"
                    image={img}
                    alt={`Sri Lankan cultural performance ${i + 1}`}
                    sx={{ objectFit: "cover" }}
                  />
                </Card>
              </Zoom>
            ))}
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
