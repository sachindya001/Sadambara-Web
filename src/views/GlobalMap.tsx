import { Stack, Typography, Button, Box, Chip, Container } from "@mui/material";
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Polyline,
  Tooltip,
} from "react-leaflet";
import PublicIcon from "@mui/icons-material/Public";
import GroupsIcon from "@mui/icons-material/Groups";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { colors } from "../utils/themeColor";
import ImageCollage from "../components/ImageCollage";
import "leaflet/dist/leaflet.css";

const locations = [
  { lat: 51.5074, lng: -0.1278, name: "London, UK", students: 120 },
  { lat: 40.7128, lng: -74.006, name: "New York, USA", students: 85 },
  { lat: 35.6762, lng: 139.6503, name: "Tokyo, Japan", students: 45 },
  { lat: -25.2744, lng: 133.7751, name: "Sydney, Australia", students: 32 },
  { lat: 28.6139, lng: 77.209, name: "New Delhi, India", students: 210 },
  { lat: 6.9271, lng: 79.8612, name: "Colombo, Sri Lanka", students: 450 },
  { lat: 48.8566, lng: 2.3522, name: "Paris, France", students: 28 },
  { lat: 1.3521, lng: 103.8198, name: "Singapore", students: 65 },
];

const center: [number, number] = [20, 0];

const stats = [
  { icon: <PublicIcon />, value: "25+", label: "Countries" },
  { icon: <GroupsIcon />, value: "1,000+", label: "Students" },
  { icon: <EmojiEventsIcon />, value: "50+", label: "Events" },
];

export default function GlobalReachSection() {
  return (
    <Box
      sx={{
        backgroundColor: colors.bg,
        color: colors.textPrimary,
        minHeight: "100vh",
        py: { xs: 6, md: 10 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glow Effects */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "-10%",
          width: 400,
          height: 400,
          background: `radial-gradient(circle, ${colors.gold}15 0%, transparent 70%)`,
          borderRadius: "50%",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "5%",
          right: "-5%",
          width: 300,
          height: 300,
          background: `radial-gradient(circle, ${colors.gold}10 0%, transparent 70%)`,
          borderRadius: "50%",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg">
        <Stack spacing={8}>
          {/* Title Section */}
          <Stack spacing={3} alignItems="center" textAlign="center">
            <Chip
              label="WORLDWIDE COMMUNITY"
              sx={{
                bgcolor: `${colors.gold}20`,
                color: colors.gold,
                fontWeight: 600,
                letterSpacing: 1.5,
                px: 2,
                fontSize: "0.75rem",
              }}
            />

            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                background: `linear-gradient(135deg, ${colors.goldSoft} 0%, ${colors.gold} 50%, ${colors.goldSoft} 100%)`,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: -0.5,
                fontSize: { xs: "2rem", md: "3.5rem" },
              }}
            >
              Global Reach
            </Typography>

            <Typography
              variant="h5"
              sx={{
                color: colors.textSecondary,
                fontWeight: 300,
                maxWidth: 600,
                lineHeight: 1.6,
              }}
            >
              Connecting cultures and traditions across continents through the
              art of Sri Lankan dance
            </Typography>

            {/* Stats Row */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={4}
              sx={{ mt: 3 }}
            >
              {stats.map((stat, index) => (
                <Stack
                  key={index}
                  alignItems="center"
                  spacing={1}
                  sx={{
                    px: 4,
                    py: 2,
                    borderRadius: 3,
                    bgcolor: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    backdropFilter: "blur(10px)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      bgcolor: "rgba(255,255,255,0.06)",
                      transform: "translateY(-4px)",
                      borderColor: `${colors.gold}40`,
                    },
                  }}
                >
                  <Box sx={{ color: colors.gold, fontSize: 32 }}>
                    {stat.icon}
                  </Box>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: 700, color: colors.goldSoft }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: colors.textSecondary }}
                  >
                    {stat.label}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Stack>

          {/* Map Section */}
          <Box
            sx={{
              width: "100%",
              height: { xs: 400, md: 500 },
              borderRadius: 4,
              overflow: "hidden",
              boxShadow: `0 25px 80px -20px ${colors.gold}30`,
              border: `1px solid ${colors.gold}20`,
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                inset: 0,
                borderRadius: 4,
                padding: 2,
                background: `linear-gradient(135deg, ${colors.gold}40, transparent 50%, ${colors.gold}20)`,
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                maskComposite: "exclude",
                WebkitMaskComposite: "xor",
                pointerEvents: "none",
                zIndex: 1,
              },
            }}
          >
            <MapContainer
              center={center}
              zoom={2}
              style={{ width: "100%", height: "100%", background: colors.bg }}
              zoomControl={false}
              scrollWheelZoom={false}
            >
              <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />

              {/* Lines from Sri Lanka to each location */}
              {locations.map((loc, index) => (
                <Polyline
                  key={`line-${index}`}
                  positions={[
                    [6.9271, 79.8612],
                    [loc.lat, loc.lng],
                  ]}
                  pathOptions={{
                    color: colors.gold,
                    weight: 1,
                    opacity: 0.4,
                    dashArray: "5, 10",
                  }}
                />
              ))}

              {/* Markers with Tooltips */}
              {locations.map((loc, index) => (
                <CircleMarker
                  key={index}
                  center={[loc.lat, loc.lng]}
                  radius={loc.name.includes("Sri Lanka") ? 10 : 6}
                  pathOptions={{
                    color: colors.gold,
                    fillColor: loc.name.includes("Sri Lanka")
                      ? colors.gold
                      : colors.goldSoft,
                    fillOpacity: loc.name.includes("Sri Lanka") ? 1 : 0.8,
                    weight: 2,
                  }}
                >
                  <Tooltip direction="top" offset={[0, -10]} opacity={1}>
                    <Box sx={{ p: 0.5 }}>
                      <Typography sx={{ fontWeight: 600, fontSize: 12 }}>
                        {loc.name}
                      </Typography>
                      <Typography sx={{ fontSize: 11, color: "#666" }}>
                        {loc.students} Students
                      </Typography>
                    </Box>
                  </Tooltip>
                </CircleMarker>
              ))}
            </MapContainer>
          </Box>

          {/* CTA Section */}
          <Stack alignItems="center" spacing={3}>
            <Typography
              variant="h5"
              sx={{
                color: colors.textSecondary,
                textAlign: "center",
                fontWeight: 400,
              }}
            >
              Join our growing community of passionate learners
            </Typography>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  px: 5,
                  py: 1.5,
                  borderRadius: 50,
                  background: `linear-gradient(135deg, ${colors.gold} 0%, ${colors.goldSoft} 100%)`,
                  color: "#000",
                  fontWeight: 700,
                  fontSize: "1rem",
                  boxShadow: `0 8px 30px -10px ${colors.gold}80`,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: `0 12px 40px -10px ${colors.gold}`,
                  },
                }}
              >
                Start Learning Today
              </Button>

              <Button
                variant="outlined"
                size="large"
                sx={{
                  px: 5,
                  py: 1.5,
                  borderRadius: 50,
                  borderColor: colors.gold,
                  color: colors.gold,
                  fontWeight: 600,
                  fontSize: "1rem",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: colors.goldSoft,
                    bgcolor: `${colors.gold}10`,
                  },
                }}
              >
                View Programs
              </Button>
            </Stack>
          </Stack>

          {/* Location Tags */}
          <Stack
            direction="row"
            spacing={1}
            flexWrap="wrap"
            justifyContent="center"
            useFlexGap
            sx={{ gap: 1 }}
          >
            {locations.map((loc, index) => (
              <Chip
                key={index}
                label={loc.name}
                size="small"
                sx={{
                  bgcolor: "rgba(255,255,255,0.05)",
                  color: colors.textSecondary,
                  border: "1px solid rgba(255,255,255,0.1)",
                  fontSize: "0.75rem",
                  "&:hover": {
                    bgcolor: `${colors.gold}15`,
                    color: colors.gold,
                    borderColor: `${colors.gold}30`,
                  },
                }}
              />
            ))}
          </Stack>
        </Stack>

        {/* Gallery Section */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          alignItems="center"
          sx={{ mt: 8, mb: 4 }}
        >
          <Box sx={{ flex: 1, maxWidth: { xs: "100%", md: 500 } }}>
            <ImageCollage />
          </Box>
          <Stack
            flex={1}
            spacing={2}
            alignItems={{ xs: "center", md: "flex-start" }}
            textAlign={{ xs: "center", md: "left" }}
          >
            <Typography
              variant="h5"
              sx={{
                fontStyle: "italic",
                fontWeight: 300,
                color: colors.textSecondary,
                lineHeight: 1.8,
              }}
            >
              "Dancing across the globe, we unite cultures through the rhythm
              of Sri Lankan traditions."
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: colors.gold,
                fontWeight: 600,
              }}
            >
              — Ranwala Dance Academy
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
