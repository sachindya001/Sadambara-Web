import { Box } from "@mui/material";

interface CollageImage {
  img: string;
  title: string;
}

const defaultImages: CollageImage[] = [
  {
    img: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800",
    title: "Cultural Performance",
  },
  {
    img: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800",
    title: "Traditional Dance",
  },
  {
    img: "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=800",
    title: "Student Workshop",
  },
  {
    img: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800",
    title: "Dance Class",
  },
  {
    img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800",
    title: "Festival Event",
  },
];

interface ImageCollageProps {
  images?: CollageImage[];
}

export default function ImageCollage({ images = defaultImages }: ImageCollageProps) {
  return (
    <Box
      sx={{
        width: "100%",
        aspectRatio: "16 / 9",
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        gridTemplateRows: "repeat(2, 1fr)",
        gap: 0.5,
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      {/* Large left image */}
      <Box
        sx={{
          gridColumn: "1 / 3",
          gridRow: "1 / 3",
          position: "relative",
          overflow: "hidden",
          "& img": {
            transition: "transform 0.4s ease",
          },
          "&:hover img": {
            transform: "scale(1.05)",
          },
        }}
      >
        <img
          src={images[0]?.img}
          alt={images[0]?.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      {/* Top middle */}
      <Box
        sx={{
          gridColumn: "3 / 5",
          gridRow: "1 / 2",
          position: "relative",
          overflow: "hidden",
          "& img": {
            transition: "transform 0.4s ease",
          },
          "&:hover img": {
            transform: "scale(1.05)",
          },
        }}
      >
        <img
          src={images[1]?.img}
          alt={images[1]?.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      {/* Top right */}
      <Box
        sx={{
          gridColumn: "5 / 7",
          gridRow: "1 / 2",
          position: "relative",
          overflow: "hidden",
          "& img": {
            transition: "transform 0.4s ease",
          },
          "&:hover img": {
            transform: "scale(1.05)",
          },
        }}
      >
        <img
          src={images[2]?.img}
          alt={images[2]?.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      {/* Bottom middle */}
      <Box
        sx={{
          gridColumn: "3 / 5",
          gridRow: "2 / 3",
          position: "relative",
          overflow: "hidden",
          "& img": {
            transition: "transform 0.4s ease",
          },
          "&:hover img": {
            transform: "scale(1.05)",
          },
        }}
      >
        <img
          src={images[3]?.img}
          alt={images[3]?.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      {/* Bottom right */}
      <Box
        sx={{
          gridColumn: "5 / 7",
          gridRow: "2 / 3",
          position: "relative",
          overflow: "hidden",
          "& img": {
            transition: "transform 0.4s ease",
          },
          "&:hover img": {
            transform: "scale(1.05)",
          },
        }}
      >
        <img
          src={images[4]?.img}
          alt={images[4]?.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
    </Box>
  );
}
