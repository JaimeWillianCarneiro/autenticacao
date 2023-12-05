import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';





const Cadastro = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');


    const navigation = useNavigation();


    const goToOtherScreen = () => {
      navigation.navigate('Login');
    };

    const handleSignUp = async () => {
      try {
        if (email && password && name) {
          await auth().createUserWithEmailAndPassword(email, password);
          Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
          const user = auth().curr




        } else {
          Alert.alert('Erro', 'Preencha todos os campos.');
        }
      } catch (error) {
        Alert.alert('Erro', `Erro ao cadastrar: ${error.message}`);
      }
    };



  
    return (
      <View style={styles.container}>
        <View style={styles.card}>
        <Image
          source={require('autenticacao/src/images/rita.jpeg')}
          style={styles.logo}
        />




<Text style={styles.label}>Nome</Text>

<TextInput
    style={styles.input}
    value={name}
    onChangeText = {setName}

    placeholder= "Nome"
    placeholderTextColor= { '#f5fffa' } 
    color = { '#f5fffa' }
/>
          <Text style={styles.label}>Email</Text>

          <TextInput
              style={styles.input}
              value={email}
              onChangeText = {setEmail}
              keyboardType="email-address"
              placeholder= "E-mail"
              placeholderTextColor= { '#f5fffa' } 
              color = { '#f5fffa' }
          />
  
          <Text style={styles.label}>Senha</Text>


          <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              placeholder="Senha"
              placeholderTextColor= { '#f5fffa' } 
              color = { '#f5fffa' }
          />


<TouchableOpacity  
          style ={styles.button} onPress={goToOtherScreen} > 
          <Text style={styles.buttonText} >Já tem conta?</Text>
        </TouchableOpacity>
        <View>


        <TouchableOpacity  
          style ={styles.TouchableOpacity} > 
          <Text style= {styles.inputButton}>Cadastrar!</Text>
        </TouchableOpacity>
        </View>
     

  
        </View>
   
      </View>
   
    );
  };




  
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: '#201b2c', // Cor de fundo escura
      backgroundColor: '#cc4200', 
      //backgroundColor: '#0000cd',
      padding: 20, // Espaçamento interno
    },
    
    card:{
        paddingTop: 40,
        width: "80%",
        backgroundColor: '#2f2841',
        alignItems: 'center',
        paddingBottom: 20,
        borderRadius: 20,
        boxShadowColor: 'black',
        boxShadowOffset: { width: 1, height: 2 },
        boxShadowOpacity: 0.6,
        boxShadowRadius: 8,
        elevation: 10
    },

    label: {
      right: 105,
      fontSize: 16,
      marginBottom: 5,
      color: '#D8E3C6',
      fontSize: 14
      
    },
    input: {
      backgroundColor: '#514869',
    width: '90%', 
    height: 40,
    borderColor: '#999', 
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 8, 
    color: '#f0ffff94', 
    borderWidth: 0 
    },

    button: {
       ackgroundColor: '#007BFF', // Cor azul
       paddingVertical: 10,
       paddingHorizontal: 15,
       borderRadius: 5,
       alignItems: 'right',
       justifyContent: 'right',
       
    },


    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
        //borderWidth: 5,
        borderRadius: 20, 
        //borderTopLeftRadius: 20,
        //borderTopRightRadius: 20
    }, 

      TouchableOpacity:{
        marginTop: 20, 
        marginBottom: 10, 
        width: '80%', 
        borderRadius: 15, 
        backgroundColor: '#ff0000', 
        //padding: 10
        paddingVertical: 15,
        paddingHorizontal: 20

      }, 

   
      buttonText: {
        color: '#FFFFFF', // Cor do texto
        fontSize: 16,
        paddingLeft: 160
        
      }, 
      inputButton:{
        color: '#FFFFFF', // Cor do texto
        fontSize: 18,
        fontWeight: 'bold',
      }

  

});

    
  export default Cadastro;