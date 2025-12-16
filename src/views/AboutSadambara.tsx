import React from "react";
import {
  Box,
  Stack,
  Typography,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Container,
} from "@mui/material";

const CulturalLandingPage: React.FC = () => {
  return (
    <Box sx={{ bgcolor: "#111", color: "#eee", minHeight: "100vh" }}>
      {/* Top Navigation */}

      {/* Hero Section */}
      <Box
        sx={{
          height: "80vh",
          backgroundImage: "url(/images/hero-dancer.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            bgcolor: "rgba(0,0,0,0.45)",
          }}
        />
      </Box>

      {/* Content Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Stack spacing={8}>
          {/* Vision */}
          <Stack spacing={2} maxWidth={720}>
            <Typography variant="h4" fontWeight={600}>
              Vision & Philosophy: Cultural Worlds
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.85 }}>
              This space connects the pulsing traditions of Sri Lanka with
              contemporary global expression, creating a living dialogue between
              heritage, artistry, and modern storytelling.
            </Typography>
            <Button
              variant="contained"
              sx={{
                width: "fit-content",
                bgcolor: "#c9a24d",
                color: "#000",
                borderRadius: 5,
                px: 4,
              }}
            >
              Enroll Show (Auditions)
            </Button>
          </Stack>

          {/* Bridging Worlds */}
          <Stack spacing={2} maxWidth={720}>
            <Typography variant="h4" fontWeight={600}>
              The Concept: Bridging Worlds
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.85 }}>
              Ancient movement, ritual rhythm, and symbolic costume merge with
              theatrical staging and international performance aesthetics to
              form a seamless cultural bridge.
            </Typography>
          </Stack>

          {/* Cultural Fusion Images */}
          <Stack spacing={3}>
            <Typography variant="h4" fontWeight={600}>
              Cultural + Western Fusion
            </Typography>

            <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
              <Box
                component="img"
                src="/images/drummer.jpg"
                alt="Traditional drummer"
                sx={{
                  width: "100%",
                  borderRadius: 2,
                  objectFit: "cover",
                }}
              />
              <Box
                component="img"
                src="/images/dancer-fusion.jpg"
                alt="Fusion dancer"
                sx={{
                  width: "100%",
                  borderRadius: 2,
                  objectFit: "cover",
                }}
              />
            </Stack>
          </Stack>
        </Stack>
      </Container>

      {/* Footer */}
    </Box>
  );
};

export default CulturalLandingPage;
