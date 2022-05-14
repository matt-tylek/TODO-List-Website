import React, { useContext, useState } from 'react';
import {styles, UserContext} from '../App'
import "../App.css";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';

export default function NavbarPage(props) {
  const [showBasic, setShowBasic] = useState(false);
  const {user, setUser} = useContext(UserContext);

  return (
    <MDBNavbar expand='lg' id="formatMenubar">
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>Home</MDBNavbarBrand>
      <h1 id="centerTitle">ToDo List</h1>
  

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          
        </MDBNavbarToggler>

        {user
          ? 
          <div id="helloUser">
            <div>
              Welcome, {user.displayName} &nbsp;&nbsp;&nbsp;&nbsp;
              <button color='primary' onClick={props.logout} type="button" class="btn btn-primary">Logout</button>
            </div>
          </div>

          : <button color='primary' onClick={props.login} type="button" class="btn btn-primary">Login</button>
        }
          
      </MDBContainer>
          </MDBNavbar>
  );
}
// Learned this through https://react-bootstrap.github.io/components/navbar/, modifiied to fit our needs however.