import React from 'react';
import { Container, Content, Text, View } from 'native-base';

import Colors from '../../constants/Colors';


export default class StudentHomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Content contentContainerStyle={{ flex: 1, backgroundColor: Colors.white }}>
          <View
            style={{ flex: 1 }}
          >
            <Text> Test </Text>
          </View>
        </Content>
      </Container>
    );
  }
}
