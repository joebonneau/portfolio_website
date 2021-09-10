import React from "react";
import { Container, Menu, Image, Header, Sticky } from "semantic-ui-react";

export const TopMenu = () => {
  return (
    <Sticky>
      <Container style={{ marginBottom: "1em" }}>
        <Menu attached="top" size="huge" secondary>
          <Menu.Item as="a">
            <Image src="/pro_photo.png" avatar size="tiny" />
          </Menu.Item>
          <Menu.Item header>Joe Bonneau</Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item as="a">About</Menu.Item>
            <Menu.Item as="a">Projects</Menu.Item>
            <Menu.Item as="a">Experience</Menu.Item>
            <Menu.Item as="a">Blog</Menu.Item>
          </Menu.Menu>
        </Menu>
      </Container>
    </Sticky>
  );
};
