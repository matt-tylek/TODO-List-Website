import React, { useContext, useState } from 'react';
import {styles, UserContext} from '../App'
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
      const myElement = <h1>ToDo List</h1>;
      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(myElement);

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

       

            
        
            
            
        

        
          <MDBNavbarItem style={{ marginLeft: '5px'}}>
            {user
              ? <MDBNavbarItem>
                  <MDBDropdown>
                    <MDBDropdownToggle tag='a' className='lav-link' href='#'>
                      {user.displayName}
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem>
                        <MDBBtn color='primary' onClick={props.logout}>Logout</MDBBtn>
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavbarItem>
              : <MDBBtn color='primary' onClick={props.login}>Login</MDBBtn>
            }
          </MDBNavbarItem>
      </MDBContainer>
    </MDBNavbar>
  );
}
// Learned this through https://react-bootstrap.github.io/components/navbar/, modifiied to fit our needs however.