import React, { useState, useEffect, memo } from "react";
import { Video, CloudinaryContext } from "cloudinary-react";
import { useInView } from "react-intersection-observer";

const VideoPlayer = memo(({ publicId }) => {
  return (
    <div>
      <CloudinaryContext cloudName="chuloo">
        <Video publicId={publicId} width="600px" controls />
      </CloudinaryContext>
    </div>
  );
});

export default VideoPlayer;
