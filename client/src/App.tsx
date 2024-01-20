import { Navbar, Container, Nav } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="d-flex flex-column vh-100">
      <header>
        <Navbar bg="dark" data-bs-theme="dark" expand="lg">
          <Container>
            <Navbar.Brand href="/" className="nav-link">
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
          <Outlet />
        </Container>
      </main>
      <footer>
        <div className="text-center">All rights reserved.</div>
      </footer>
    </div>
  );
}

export default App;
