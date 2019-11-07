import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.texto}
          onChangeText={this.props.cambiarTexto}
          placeholder="Escriba su nota por favor.."
          onSubmitEditing={this.props.agregrar}
          value={this.props.texto}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#00ff00',

    // alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    paddingHorizontal: 16,
    fontSize: 26,
  },
});

export default Header;
