import React from 'react'
//import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, Container} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
//import SearchBox from './SearchBox'
//import { logout } from '../actions/userActions'
const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand href='/'>NamasteShop</Navbar.Brand>
          </LinkContainer>  
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              
              <LinkContainer to='/cart'>
                <Nav.Link ><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
              </LinkContainer>

              <LinkContainer to='/login'>
                <Nav.Link><i className="fas fa-user"></i>Login</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header