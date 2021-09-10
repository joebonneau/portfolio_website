import './App.css';

import theme from './theme'
import {
  BottomNavigation,
  BottomNavigationAction,
  ThemeProvider,
} from '@material-ui/core'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

function App() {
  return (
    <div>
      <Container>
        <Navbar collapseOnSelect className="top-nav" fixed="top" bg="dark" variant="dark">
          <Container fluid>
            <Navbar.Brand href="#home">Joe Bonneau</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
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
      </Container>

      <Container>
        <Col>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ea aliquid excepturi, sint temporibus, dicta consequuntur accusamus, veritatis ratione magnam iure eius id eligendi aperiam maiores quam tempora cupiditate labore!
            Illum ipsam aliquam id cupiditate voluptas esse! Voluptatum natus itaque repudiandae quasi eos odio dolore quibusdam vitae, deleniti ea earum cum voluptatem! Voluptatem iste quos dolorum reprehenderit labore eaque saepe.
            Eveniet dolorem quasi aut, deserunt rerum modi, beatae provident inventore reprehenderit dolore sequi. Vero quidem laudantium amet nobis aspernatur minus repudiandae dolorum dolorem error praesentium. Ab distinctio vero perferendis placeat.
            Deleniti, ipsa voluptatem. Soluta rem quia ad sed beatae autem velit sequi optio! Quaerat repellendus architecto perferendis. Nisi impedit libero velit neque officiis molestias voluptates suscipit, nam aut nesciunt consectetur?
            Aliquid tempora modi fugiat, minus blanditiis corporis delectus architecto tempore aut. Commodi aperiam rem voluptates voluptatibus facilis velit dignissimos eaque nulla in laudantium, sit blanditiis autem, unde eum labore facere!
            Quam architecto deserunt, beatae distinctio dolore, officiis explicabo voluptatibus similique quae ipsa reiciendis sequi molestias blanditiis quibusdam! Deleniti inventore rerum corrupti, doloremque illo, omnis, dolorum tenetur asperiores eos saepe non!
            Perferendis architecto rem distinctio, voluptates nobis commodi veritatis eum ducimus iste quasi aperiam provident, animi quia facere possimus totam et vero nemo non doloremque sit quos voluptatem consequatur qui. Labore!
            Voluptatum optio incidunt aut, aspernatur error porro necessitatibus enim nesciunt recusandae eum odio laborum nostrum ea unde quasi sit consectetur. Nesciunt labore consectetur expedita, recusandae distinctio rem ducimus deleniti molestiae!
            Repellat, corporis voluptate odio amet aliquam tempore. Laboriosam culpa aliquam et architecto nisi tempore ipsum aperiam aut hic blanditiis? Optio atque eius magni voluptatum hic quam quas aliquid vero dolore!
            Eveniet, dignissimos voluptatem itaque dolor, maxime, dolorem quisquam velit a architecto error sequi nemo possimus sapiente natus. Corrupti placeat quia quam. Doloribus, quos tenetur. Aliquid earum expedita quisquam harum fugiat.
          </p>
        </Col>
      </Container>
      <ThemeProvider theme={theme}>
        <BottomNavigation
        // value={value}
        // onChange={(event, newValue) => {
        //   setValue(newValue);
        // }}
        // className={classes.root}
        >
          <BottomNavigationAction label="GitHub" icon={<GitHubIcon color="primary" fontSize="medium" />} />
          <BottomNavigationAction label="LinkedIn" icon={<LinkedInIcon color="primary" fontSize="large" />} />
          <BottomNavigationAction label="Email" icon={<MailOutlineIcon color="primary" fontSize="large" />} />
        </BottomNavigation>

      </ThemeProvider>
    </div>

  );
}

export default App;
