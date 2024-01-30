import React from 'react'
import PhotoAlbum from "react-photo-album";

function Paintings() {

  const photos = [
    { src: "/images/IMG_7483.jpg", width: 4, height: 3 },
    { src:  "/images/IMG_7486.jpg", width: 4, height: 3 },
    { src:  "/images/IMG_7484.jpg", width: 4, height: 3 },
    { src:  "/images/IMG_7485.jpg", width: 4, height: 3 },
    { src: "/images/IMG_7489.jpg", width: 4, height: 3 },
    { src:  "/images/IMG_7487.jpg ",width: 4, height: 3 },
    { src:  "/images/IMG_7493.jpg ", width: 4, height: 3},
    { src:  "/images/IMG_7490.jpg ",  width: 4, height: 3 },
    { src: "/images/IMG_7494.jpg ", width: 4, height: 3 },
    { src:  "/images/IMG_7492.jpg",  width: 4, height: 3 },
    { src:  "/images/IMG_7582.jpg",  width: 4, height: 3},
    { src:  "/images/IMG_7592.jpg",  width: 4, height: 3 },







  ];





 
 
 
 
 
  return (
    <div>
      <h2>Paintings</h2>

      
    <div className="px-2">
      {/* <Snow /> */}
     
      
      <PhotoAlbum layout="rows" photos={photos} />


      {/* <PhotoGallery /> */}
    </div>
  








      </div>
  )
}

export default Paintings