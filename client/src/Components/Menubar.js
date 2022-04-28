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

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                Calender
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' href='#'>
                  My Lists
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <Link to="/Incomplete">Current Lists</Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                   <Link to="/Completed">Previous Lists </Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink><Link to="/All"> All Lists</Link></MDBDropdownLink>

                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                My Account
              </MDBNavbarLink>
            </MDBNavbarItem>
            
          </MDBNavbarNav>

          <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
            <MDBBtn color='primary'>Search</MDBBtn>
          </form>
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
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
