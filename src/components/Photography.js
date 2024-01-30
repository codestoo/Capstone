import React from "react";

import Snow from "./Snow";
import PhotoAlbum from "react-photo-album";
import Player from "./Player";

function Photography() {
  const photos = [
    { src: "/images/33207615156_b625cf354f_o.jpg", width: 4, height: 3 },
    { src: "/images/27044536337_7eb59be9b9_o.jpg", width: 4, height: 3 },
    { src: "/images/40255760630_113f3f8d6b_o.jpg", width: 4, height: 3 },
    { src: "/images/15863692555_1f58ce9c17_o.jpg", width: 16, height: 9 },
    { src: "/images/185A1184.jpg", width: 4, height: 3 },
    { src: "/images/41488578935_183cf0d110_o.jpg", width: 4, height: 3 },
    { src: " images/33759075152_b148a79af5_o.jpg ", width: 4, height: 3 },
    { src: "/images/43208960635_4059ca5a55_o.jpg", width: 16, height: 9 },
    { src: "/images/33942089514_9e6b19c1c6_o.jpg", width: 4, height: 3 },
    { src: "/images/40500437013_5e209d95df_o.jpg", width: 4, height: 3 },
    { src: "/images/34398919740_51ce72a070_o.jpg", width: 4, height: 3 },
    { src: "/images/14935820451_9b48fd63fc_o.jpg", width: 16, height: 9 },
  ];

  return (
    <div className="px-2">
      <Snow />
      <div className="d-flex justify-content-between">
        <Player url={"/media/Yosemite_lenscape.mp3"} />
        <h2>Photography</h2>
        <a className= "url" href= "https://soundcloud.com/manuscriptmastr/yosemite-lenscape-a-travel-montage?utm_source=clipboard"> Music by Joshua Martin</a>
      </div>
      
      <PhotoAlbum layout="rows" photos={photos} />

      {/* <PhotoGallery /> */}
    </div>
  );
}

export default Photography;
