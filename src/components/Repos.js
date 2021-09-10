import React from 'react';
import { List } from 'semantic-ui-react';


export const Repos = ({ repos }) => {
  return (
    <List divided relaxed>
      {repos.map(repo => {
        return (
          <List.Item key={repo}>
            <List.Icon name='github' size='large' verticalAlign='middle' />
            <List.Content>
              <List.Header as='a'>{repo}</List.Header>
              <List.Description as='a'>Updated 10 mins ago</List.Description>
            </List.Content>
          </List.Item>
        );
      })}
    </List>
  );
};