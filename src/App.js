import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './components/content';
import Footer from './components/footer';
import Header from './components/header';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './components/create';
import Read from './components/read';
import Edit from './components/edit';
import Contact from './components/contact';
import Logo from './images/logo.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar bg="light" variant="light" expand="lg" className="px-3">
          <Container>
            <Navbar.Brand href="/">
              <img
                src={Logo}
                width="auto"
                height="30"
                className="d-inline-block align-top"
                alt="Your Brand Logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/create">Add Coffee</Nav.Link>
                <Nav.Link href="/read">Coffee</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path='/' element={<Content />} />
          <Route path='/read' element={<Read />} />
          <Route path='/create' element={<Create />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/edit/:id' element={<Edit></Edit>}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
