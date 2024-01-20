import { sampleProducts } from './data.ts';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="d-flex flex-column vh-100">
      <header>
        <Navbar bg="dark" data-bs-theme="dark" expand="lg">
          <Container>
            <Navbar.Brand href="/home" className="nav-link">
              Watcher
            </Navbar.Brand>
            <Nav>
              <Nav.Link href="/cart" className="nav-link">
                Cart
              </Nav.Link>
              <Nav.Link href="/signin" className="nav-link">
                Sign In
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <main>
        <Container className="mt-3">
          <Row>
            {sampleProducts.map((product) => (
              <Col key={product.slug} sm={6} md={4} lg={3}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                ></img>
                <h2>{product.name}</h2>
                <p>${product.price}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </main>
      <footer>
        <div className="text-center">All rights reserved.</div>
      </footer>
    </div>
  );
}

export default App;
