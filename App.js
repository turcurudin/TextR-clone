//Search bar in contact list
import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';
export default class SearchBarExample extends Component {
  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
      </Container>
    );
  }
}

//In message conversation with title, subtitle, and back arrow. Needs funtions that get the contacts name,
//the information that will go in the subtitle section, and arrow needs to navigate back to contact list
import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text , Subtitle} from 'native-base';
export default class HeaderIconTextButtonExample extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
              <Text>Back</Text>
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
            <Subtitle>Subtitle</Subtitle>
          </Body>
        </Header>
      </Container>
    );
  }
}