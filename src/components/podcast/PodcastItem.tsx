import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Slider,
  CardHeader,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
interface PodcastItemProps {
  title: string;
  date: string;
  description: string;
  duration: string;
  playing?: boolean;
  currentTime?: number;
  totalTime?: number;
}

const PodcastItem: React.FC<PodcastItemProps> = ({
  title,
  date,
  description,
  duration,
  playing = true,
  currentTime = 0,
  totalTime = 0,
}) => {
  return (
    <Card sx={{ display: "flex", marginBottom: 2 }}>
      <Box
        sx={{
          width: 200,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "black",
          color: "white",
          padding: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="h6">Podcast Episode Name</Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {date}
          </Typography>
          <Typography component="div" variant="h6">
            {title}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center", // يجعل العناصر في المنتصف عمودياً
              padding: "8px", // إضافة حشوة حول المحتوى
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#476B8733", // لون الخلفية الذي تريده
                borderRadius: "20px", // حدود مستديرة (يمكنك تعديل القيم حسب رغبتك)
                padding: "8px", // إضافة حشوة حول المحتوى
              }}
            >
              <PlayArrowIcon sx={{ color: "#476B87", marginRight: "3px" }} />
              <Typography variant="body2" color="#476B87">
                Play
              </Typography>
            </Box>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginLeft: "8px" }}
            >
              {duration}
            </Typography>
          </Box>
          {/* <Button variant="contained" sx={{ marginTop: 1 }}>
            {playing ? 'Pause' : 'Play'} {duration}
          </Button> */}
          {playing && (
            <Box sx={{ display: "flex", alignItems: "center", marginTop: 1 }}>
              <Typography variant="body2" color="text.secondary">
                {new Date(currentTime * 1000).toISOString().substr(11, 8)}
              </Typography>
              <Slider
                value={(currentTime / totalTime) * 100}
                sx={{ marginX: 2 }}
              />
              <Typography variant="body2" color="text.secondary">
                {new Date(totalTime * 1000).toISOString().substr(11, 8)}
              </Typography>
            </Box>
          )}
        </CardContent>
      </Box>
    </Card>
  );
};

export default PodcastItem;
