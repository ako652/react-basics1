import { Navbar,Nav, Container} from "react-bootstrap"



const Mynvbar = ({brand})=>{
    return (
        <Container>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Navbar.Brand href="#home">{brand}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link href="#features">home</Nav.Link>
                <Nav.Link href="#pricing">about</Nav.Link>
                <Nav.Link href="#pricing">browse</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    </Container>
    )
}
export default Mynvbar