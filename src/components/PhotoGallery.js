import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import photosFromJson from '../photos.json'



console.log(photosFromJson)

function PhotoGallery() {


  

  








  return (

    //  <PhotoAlbum layout="rows" photos={photos} />


    <Row xs={2} md={3} className="g-2">
      {photosFromJson.map((singlePhotoObject, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={singlePhotoObject.path} />
            <Card.Body>
              <Card.Title>{singlePhotoObject.title}</Card.Title>
              <Card.Text>{singlePhotoObject.text}
               </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default PhotoGallery;