import React, { useEffect, useState } from "react";
import { supabase } from "../supabase";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function NewestWork() {
  const [photos, setPhotos] = useState([]);
  const [user, setUser] = useState({});
  useEffect(() => {

    async function checkLoggedin() {
      try {
    const { data: { user } } = await supabase.auth.getUser() 
    console.log(user)
    setUser(user)}
    catch (error){console.log(error)}
      }
    async function getPhotography() {
      try {
        const { data, error } = await supabase
        .from('Photography')
        .select()
        .gte(
          'created_at',
          new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
        );        // Update the state with the fetched photos
        setPhotos(data);
      } catch (error) {
        console.log('Error fetching photos:', error);
      }
    }
    getPhotography();
    checkLoggedin()
  }, []); 


  return (

    <div>
    <h1>Newest Work</h1>
    {user ? (
    photos?.map((singlePhotoObject, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={singlePhotoObject.image} />
            <Card.Body>
              
              <Card.Text>{singlePhotoObject.Behind_the_Scenes}
               </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))): <p>Please log in</p>}


    </div> 
  )
}

export default NewestWork