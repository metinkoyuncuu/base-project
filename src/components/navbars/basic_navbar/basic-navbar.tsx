import { CSSProperties } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

interface Props {
  fixed?: "top" | "bottom";
  sticky?: "top" | "bottom";
  backgroundColor: CSSProperties['backgroundColor'];
  expand?: boolean | "sm" | "md" | "lg" | "xl" | "xxl";
  dataBsTheme?:"dark"|"light";
}

function BasicNavbar(props: Props) {
    return (
      <  >
       <Navbar 
          fixed={props.fixed} 
          sticky={props.sticky} 
          collapseOnSelect 
          style={{ backgroundColor: props.backgroundColor }}  
          expand={props.expand ? props.expand : 'lg'}  
          data-bs-theme={props.dataBsTheme?props.dataBsTheme:'dark'} >
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                {/* {<Nav.Item><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/220px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"/></Nav.Item>} */}
                <Nav.Link href="#features">Sample 1</Nav.Link>
                <Nav.Link href="#pricing">Sample 2 </Nav.Link>
                <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Dank memes
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

 
      </>
        
      );
}


export default BasicNavbar;


