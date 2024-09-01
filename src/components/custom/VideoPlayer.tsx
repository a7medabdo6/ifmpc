import React from "react";

interface VideoPlayerProps {
  videoSrc: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoSrc }) => {
  // الحصول على معرف الفيديو من رابط يوتيوب
  const videoId = videoSrc.split("v=")[1]?.split("&")[0];

  // التأكد من أن المعرف موجود
  if (!videoId) {
    return <div>Invalid video URL</div>;
  }

  // بناء رابط التضمين
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div>
      <iframe
        width="95%"
        height="500"
        src={embedUrl}
        title="Video Player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ borderRadius: "10px" }} // إضافة border-radius هنا
      />
    </div>
  );
};

export default VideoPlayer;
