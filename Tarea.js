import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
//import {Ionicons} from '@expo/vector-icons';
//import Icon from 'react-native-vector-icons/Font';
import Icon from 'react-native-vector-icons/Ionicons';

class Tarea extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}> {this.props.item.texto} </Text>
        <TouchableOpacity
          onPress={() => {
            this.props.eliminar(this.props.item.key);
          }}>
          <Icon name="md-trash" size={24} color="gray" />
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  texto: {
    paddingHorizontal: 26,
    fontSize: 24,
  },
});
export default Tarea;
