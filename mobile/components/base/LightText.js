import React from 'react';
import { Text } from 'native-base';


export default class HeavyText extends React.Component {
  constructor(props) {
    super(props);
    this.style = (typeof(this.props.style) == 'object') ? this.props.style : {};
  }

  render() {
    return (
      <Text style={{ ...this.style, fontFamily: 'KeepCalm' }}>{this.props.children}</Text>
    );
  }
}
