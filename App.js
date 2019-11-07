import React, {Component} from 'react';
import {StyleSheet, View, Text, AsyncStorage, Button} from 'react-native';
import Header from './Header';
import Body from './Body';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tareas: [],
      texto: '',
    };
  }

  establecerTexto = value => {
    console.log(value);
    this.setState({
      texto: value,
    });
  };

  componentDidMount() {
    this.recuperarEnTelefono();
  }

  agregarTarea = () => {
    const nuevasTareas = [
      ...this.state.tareas,
      {texto: this.state.texto, key: Date.now()},
    ];
    this.guardarEnTelefono(nuevasTareas);
    this.setState({
      tareas: nuevasTareas,
      texto: '',
    });
    console.log(this.state.tareas.length);
  };

  eliminarTarea = id => {
    const nuevasTareas = this.state.tareas.filter(tarea => tarea.key !== id);
    this.guardarEnTelefono(nuevasTareas);
    this.setState({
      tareas: nuevasTareas,
    });
  };

  guardarEnTelefono = tareas => {
    AsyncStorage.setItem('@AppCursoUdemy:tareas', JSON.stringify(tareas))
      .then(valor => {
        console.log(valor);
      })
      .catch(error => {
        console.log(error);
      });
  };

  recuperarEnTelefono = () => {
    AsyncStorage.getItem('@AppCursoUdemy:tareas')
      .then(valor => {
        console.log(valor);
        if (valor !== null) {
          const nuevasTareas = JSON.parse(valor);
          this.setState({
            tareas: nuevasTareas,
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text> App </Text>
        <Header
          texto={this.state.texto}
          cambiarTexto={this.establecerTexto}
          agregrar={this.agregarTarea}
        />

        <Body tareas={this.state.tareas} eliminar={this.eliminarTarea} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
