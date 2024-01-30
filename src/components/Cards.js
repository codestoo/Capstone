import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function Cards() {
  return (
    <CardGroup>
      <Card>
        <Card.Img
          variant="top"
          src="./images/23746507069_546e87ef3f_c.jpg   "
        />
        <Card.Body>
          <Card.Title>Italy</Card.Title>
          <Card.Text>
            “Would you like dis at da bar or tavolo?” “At the bar, per favore.”
            I felt like a real local on her way to work as I stood at the bar
            and sipped my cappuccino — the surroundings’ old world elegance and
            the locals’ chic! But gee that cappuccino was small!
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            Go to Travel Stories to Read More!
          </small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="./images/34652098041_0a17de6d89_c.jpg" />
        <Card.Body>
          <Card.Title>Switzerland</Card.Title>
          <Card.Text>
            Be the first to get a glimplse of New Work for those who sign in!
            <br />
            <br /> Story Coming Soon!
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Newest Work for those Logged In</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="./images/15258221524_c0d8f453d6_c.jpg      "
        />
        <Card.Body>
          <Card.Title>Scotland</Card.Title>
          <Card.Text>
            “Sittin’ in or carryin’ out?” What? How cute is that. We’re sittin’
            in. I picked up my order, Cheers…(warm smile)…I love Scotland, and I
            haven’t left the airport yet.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            Go to Travel Stories to Read More!
          </small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default Cards;
