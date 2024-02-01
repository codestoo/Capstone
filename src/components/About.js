import React from "react";
import Card from "react-bootstrap/Card";
import PhotoAlbum from "react-photo-album";

const photos = [
  { src: "/images/IMG_0135-2.jpg", width: 3, height: 4 },
  { src: "/images/IMG_4018-3.jpg", width: 4, height: 3 },
  { src: "/images/IMG_8228.jpg", width: 4, height: 3 },
];

function About() {
  return (
    <Card>
      <PhotoAlbum layout="rows" photos={photos} />

      <Card.Body>
        <Card.Title>Just a little more about me.</Card.Title>
        <Card.Text>
          I’ve been blessed to have been given some creative abilities; all of
          the work that you see on these pages are my original work, as well as
          two sons, now adults, that continue to amaze me. I suppose they are
          original work too!
          <br />
          <br />
          I couldn’t have an about page without sharing a few of our experiences
          together, though there have been a lifetime of those and for that I am
          grateful.
          <br />
          <br />
          We’ve shared education (they were homeschooled for all our theirs)
          music, art, design, photography, European travel, adventure, and most
          importantly by far…faith. Daily reading of the scriptures have always
          been at the heart of our home and more importantly, following those
          precepts.
          <br />
          <br />
          For many years we worked side by side at a coffee shop, writing
          stories, editing photography, laughing and discussing everything under
          the sun. I taught them, they taught me. Now they are both Software
          Developers.
          <br />
          <br />
          Every mother knows that her children are and always will be her heart
          and I’m so proud of the heart of both of my sons.
          <br />
          <br />
          I love to learn. I realized that when I homeschooled my sons. I didn’t
          love my schooling growing up in public school — memorize this and take
          a test. As you get older you should always be learning something new
          and that desire should be there. I can say I instilled that in my sons — a
          love to learn.
          <br />
          <br />
          Somehow I’m always teaching. I’ve taught Fine Art to high school
          students, piano, voice, violin and drums to 5 year olds to adults.
          <br />
          <br />
          And now I’m excited to have come this far in Software Development to
          create my own Website. Much like fine art, I can work for hours and
          get lost in a project and so I feel I’m on the right path.
          <br />
          <br />
          I want to give a special thanks to Jaye Rasmussen and Stephen Doty at
          DigitalCrafts for assisting me on this project. Jaye never laughed at
          me over databases. Ugh. And Stephen never questioned my vision but
          simply helped me accomplish what I wanted. Snow! Music!
          <br />
          <br />
          Thanks for taking the time to read this!
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default About;
