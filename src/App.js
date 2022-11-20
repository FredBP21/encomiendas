import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom"
import { CreateUser } from "./CreateUser/CreateUser";
import { Login } from "./Login/Login";
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import encomienda from "./assets/img/encomienda.png";
import { Home } from "./Home/Home";
import { Pedido } from "./Pedido/Pedido";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbarr />}>
            <Route path="home" element={<Home />}></Route>
            <Route path="crearUsu" element={<CreateUser />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="crearPed" element={<Pedido />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const Navbarr = () => {
  return (
    <div className="row">
      <div className="container">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home"><img src={encomienda}/></Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/crearUsu">Registrese</Nav.Link>
              <Nav.Link href="/crearPed">Pedido</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <hr />
      <Container className="contenido">
        <Outlet />
      </Container>
      <div className="row">
          <div className="container" className="footer">
            <br/>
            <p className="text-center">Copyright 2022 — Encomienda. Todos los derechos reservados.</p>
          </div>
      </div>
    </div>
  )
}

export default App;
