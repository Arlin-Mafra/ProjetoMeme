import React,{Component} from 'react';
import { StyleSheet, Text, View, TextInput,Image } from 'react-native';



export default class App extends  Component {

  constructor(props){

    super(props);

    this.state ={
      texto1:'',
      texto2:''
    };
    this.escrever =this.escrever.bind(this)

  }

  mudarVogal(texto){
    let novoTexto = texto.toLowerCase()
    novoTexto = novoTexto.replace(/(a|e|i|o|u)/g , 'i')
    novoTexto = novoTexto.replace(/(á|à|ã|â)/g , 'i')
    novoTexto = novoTexto.replace(/(é|è|ê)/g , 'i')
    novoTexto = novoTexto.replace(/(ò|ó|õ|ô)/g , 'i')
    novoTexto = novoTexto.replace(/(ú|ù)/g , 'i')
    


    return novoTexto
  }

  
        escrever(t){

        let s = this.state
        s.texto1 = t
        s.texto2 = this.mudarVogal(t)

        this.setState(s)

        }
    


render(){

  return (


    
    <View style={styles.container}>
      <Text style={styles.texto}>Crie aqui seu meme</Text>
      <View style={styles.inputArea}>
      <TextInput style={styles.input} placeholder='Digite o texto...'  onChangeText={this.escrever}/>  
      </View> 

      <View style={styles.imageArea}>
      <Text style={ styles.texto1}>{this.state.texto1.toUpperCase()}</Text>
        <Image source={require('./images/mimimi.jpg')} style={styles.imagem}></Image>
        <Text style={ styles.texto2}>{this.state.texto2.toUpperCase()}</Text>
      </View>   
    </View>
  );


}
}

  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e6e6',
    flexDirection:"column",
    alignItems:"center",
    padding:30
  },

  texto:{
    fontSize:30,
    padding:10,
  },
  inputArea:{
alignSelf:"stretch"
  },

  input:{
    borderWidth:1,
    borderColor:'#000000',
    backgroundColor:"#FFFFFF",
    color:"#000000",
    height:40,
    marginTop:20,
    padding:10,
    fontSize:20
  },

  imageArea:{
    marginTop:80,
    justifyContent:"center",
    alignItems:"center"


  },
  imagem:{
    justifyContent:"center",
    alignItems:"center",
    height:300,
    width:300,
    marginTop:-50,
    zIndex:0

  },

  texto1:{
    fontSize:30,
    padding:10,
    backgroundColor:'transparent',
    color:'#ffffff',
    alignSelf:"stretch",
    textAlign:"center",
    zIndex:1
    
  },
  texto2:{
    fontSize:30,
    padding:10,
    backgroundColor:'transparent',
    color:'#ffffff',
    alignSelf:"stretch",
    textAlign:"center",
    marginTop:-50,
    zIndex:1
  }

});
