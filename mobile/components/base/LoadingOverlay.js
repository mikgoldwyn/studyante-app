import React from 'react';
import {
  View,
} from 'react-native';
import {
  Spinner,
} from 'native-base';

import Colors from '../../constants/Colors';


export default class LoadingOverlay extends React.Component {
  render() {
    if (! this.props.isLoading) {
      return null;
    }
    return (
      <View
        style={{
          zIndex: 1,
          position: 'absolute',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, .5)',
        }}
      >
        <Spinner color={Colors.tint}/>
      </View>
    );
  }
}
