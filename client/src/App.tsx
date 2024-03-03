import { useContext, useEffect } from 'react';
import { Navbar, Container, Nav, Button, Badge } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import { Store } from './store';

function App() {
  const {
    state: { mode, cart },
    dispatch,
  } = useContext(Store);

  useEffect(() => {
    document.body.setAttribute('data-bs-theme', mode);
  }, [mode]);

  const switchModeHandler = () => {
    dispatch({ type: 'SWITCH_MODE' });
  };

  return (
    <div className="d-flex flex-column vh-100">
      <header>
        <Navbar bg="dark" data-bs-theme="dark" expand="lg">
          <Container>
            <Navbar.Brand href="/" className="nav-link">
              Watcher
            </Navbar.Brand>
            <Nav>
              <Button variant={mode} onClick={switchModeHandler}>
                <i
                  className={mode === 'light' ? 'fa fa-sun' : 'fa fa-moon'}
                ></i>
              </Button>
              <Link to="/cart" className="nav-link">
                Cart
                {cart.cartItems.length > 0 && (
                  <Badge pill bg="danger">
                    {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                  </Badge>
                )}
              </Link>
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
