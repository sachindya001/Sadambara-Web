import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Fade,
  Stack,
  Typography,
  Zoom,
} from "@mui/material";
import { useInView } from "react-intersection-observer";

const COLORS = {
  primary: "#0E0E0E",
  secondary: "#C9A24D",
  accent: "#6B1F1F",
  textLight: "#F5F5F5",
  textMuted: "#CFCFCF",
};

const RanwalaProfile: React.FC = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [visionRef, visionInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [experienceRef, experienceInView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <Box
      sx={{
        bgcolor: COLORS.primary,
        color: COLORS.textLight,
        minHeight: "100vh",
      }}
    >
      {/* HERO SECTION */}
      <Box
        ref={heroRef}
        sx={{
          minHeight: "70vh",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('https://images.unsplash.com/photo-1603312613438-3d5a36b6b2d8')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: { xs: "scroll", md: "fixed" },
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
          <Fade in={heroInView} timeout={1000}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 4, md: 6 }}
              alignItems={{ xs: "center", md: "center" }}
            >
              <Box sx={{ flexShrink: 0 }}>
                <Avatar
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  sx={{
                    width: { xs: 140, md: 180 },
                    height: { xs: 140, md: 180 },
                    border: `4px solid ${COLORS.secondary}`,
                    boxShadow: "0 8px 32px rgba(201,162,77,0.3)",
                  }}
                />
              </Box>

              <Stack
                spacing={2}
                sx={{ textAlign: { xs: "center", md: "left" } }}
              >
                <Box>
                  <Typography
                    variant="h3"
                    fontWeight={700}
                    color={COLORS.textLight}
                    sx={{ fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" } }}
                  >
                    Sahan Ranwala
                  </Typography>
                  <Typography
                    variant="h5"
                    fontWeight={500}
                    color={COLORS.secondary}
                    sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" } }}
                  >
                    Global Cultural Leader
                  </Typography>
                </Box>

                <Typography
                  color={COLORS.textMuted}
                  sx={{
                    maxWidth: 600,
                    lineHeight: 1.8,
                    fontSize: { xs: "0.95rem", md: "1rem" },
                  }}
                >
                  A visionary dedicated to preserving and evolving Sri Lanka's
                  cultural heritage through global artistic collaboration,
                  education, and performance.
                </Typography>

                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  sx={{
                    pt: 2,
                    justifyContent: { xs: "center", md: "flex-start" },
                  }}
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
                    Message to Global Artists
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
                    View Portfolio
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Fade>
        </Container>
      </Box>

      {/* ARTISTIC VISION */}
      <Box ref={visionRef} sx={{ bgcolor: "#111", py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
          <Fade in={visionInView} timeout={800}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 4, md: 6 }}
              alignItems={{ xs: "flex-start", md: "center" }}
              justifyContent="space-between"
            >
              <Stack spacing={2} sx={{ flex: 1 }}>
                <Typography
                  variant="h4"
                  color={COLORS.secondary}
                  fontWeight={600}
                  sx={{ fontSize: { xs: "1.75rem", md: "2.125rem" } }}
                >
                  Artistic Vision: Bridging Worlds
                </Typography>

                <Typography
                  color={COLORS.textMuted}
                  sx={{ maxWidth: 650, lineHeight: 1.8 }}
                >
                  Through rhythm, movement, and storytelling, this vision
                  bridges traditional Sri Lankan artistry with global
                  audiences—creating shared cultural understanding across
                  continents and generations.
                </Typography>
              </Stack>

              <Box sx={{ flexShrink: 0, pt: { xs: 0, md: 0 } }}>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: COLORS.secondary,
                    color: COLORS.secondary,
                    fontWeight: 600,
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    borderWidth: 2,
                    transition: "all 0.3s",
                    "&:hover": {
                      borderWidth: 2,
                      bgcolor: "rgba(201,162,77,0.1)",
                      borderColor: COLORS.secondary,
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  Enroll Now
                </Button>
              </Box>
            </Stack>
          </Fade>
        </Container>
      </Box>

      {/* EXPERIENCE SECTION */}
      <Box
        ref={experienceRef}
        sx={{ bgcolor: COLORS.primary, py: { xs: 6, md: 8 } }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 3, md: 4 } }}>
          <Fade in={experienceInView} timeout={800}>
            <Box>
              <Typography
                variant="h4"
                color={COLORS.secondary}
                fontWeight={600}
                mb={2}
                sx={{ fontSize: { xs: "1.75rem", md: "2.125rem" } }}
              >
                Experience & Contribution
              </Typography>

              <Typography
                color={COLORS.textMuted}
                sx={{ maxWidth: 900, mb: 4, lineHeight: 1.8 }}
              >
                Decades of leadership in cultural performance, global festivals,
                and mentorship programs have shaped a new generation of artists
                while preserving traditional values.
              </Typography>

              <Divider sx={{ borderColor: "rgba(201,162,77,0.2)", mb: 5 }} />
            </Box>
          </Fade>

          <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
            {[
              {
                image:
                  "https://images.unsplash.com/photo-1582719478174-bf7e0dbb7a90",
                title: "Traditional Performance",
                description:
                  "Celebrating ritualistic drumming and movement rooted in centuries-old traditions.",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1503095396549-807759245b35",
                title: "Global Stage Collaboration",
                description:
                  "Showcasing Sri Lankan culture on international platforms through fusion and innovation.",
              },
            ].map((item, index) => (
              <Zoom
                key={item.title}
                in={experienceInView}
                timeout={600}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <Card
                  sx={{
                    flex: 1,
                    bgcolor: "#111",
                    borderRadius: 3,
                    overflow: "hidden",
                    transition: "all 0.3s",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 12px 30px rgba(0,0,0,0.4)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="280"
                    image={item.image}
                    alt={item.title}
                    sx={{ objectFit: "cover" }}
                  />
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      color={COLORS.textLight}
                      fontWeight={600}
                      variant="h6"
                      mb={1}
                    >
                      {item.title}
                    </Typography>
                    <Typography color={COLORS.textMuted} lineHeight={1.7}>
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Zoom>
            ))}
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default RanwalaProfile;
