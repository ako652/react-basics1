import { createCoverageSummary } from "istanbul-lib-coverage"
import { Row,Card,Button,Col,Container} from "react-bootstrap"
import images from '../data/horror.json'





const LatestRelease = ()=>{
    return (
        <Container>
            <Row>
               


               { images.map( image =>(
                    <Col key= {image.asin}>
                    <Card style={{ width: '18rem' }} >
  <Card.Img variant="top" src={image.img} />
  <Card.Body>
    <Card.Title>{image.title}</Card.Title>
    <Card.Text>
      {image.category}
    </Card.Text>
    <Button variant="primary">{image.price}</Button>
  </Card.Body>
</Card>
</Col>
               ))
}
                
            </Row>
        </Container>

    )
}


export default LatestRelease