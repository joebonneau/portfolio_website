import React from "react";
import { Container, Menu, Icon } from "semantic-ui-react";


export const Footer = () => {
    return(
    <Container position="bottom">
        <Menu fluid widths={3} icon>
          <Menu.Item name="github" as="a">
            <Icon name="github" size="large" />
          </Menu.Item>
          <Menu.Item name="linkedin" as="a">
            <Icon name="linkedin" size="large" />
          </Menu.Item>
          <Menu.Item name="mail" as="a">
            <Icon name="mail" size="large" />
          </Menu.Item>
        </Menu>
      </Container>
    );
};