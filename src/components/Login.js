import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const navigation = useNavigation();


    const goToOtherScreen = () => {
      navigation.navigate('Cadastro');
    };
  
    const handleLogin = () => {
  
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          navigation.navigate('Home', {
              name: user.displayName, // Substitua pelo nome real
              email: email,
          });
  
        })
        .catch((error) => {
          console.error('Erro ao fazer login:', error);
        });
  
  
    };
  
    return (
      <View style={styles.container}>
        <View style={styles.card}>
        <Image
          source={require('autenticacao/src/images/rita.jpeg')}
          style={styles.logo}
        />
          <Text style={styles.label}>Email</Text>

          <TextInput
              style={styles.input}
              value={email}
              onChangeText = {setEmail}
              keyboardType="email-address"
              placeholder= "Email"
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
          <Text style= {styles.buttonText}>Não tem conta? </Text>
        </TouchableOpacity>
        <View>


        <TouchableOpacity  
          style ={styles.TouchableOpacity} onPress= {handleLogin}> 
          <Text style={styles.inputButton}>Login</Text>
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
         marginTop: 20,
         marginBottom: 10,
         width: '90%',
         borderRadius: 8,
        left: 5
         
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
          paddingLeft: 150
          
        }, 
        inputButton:{
          color: '#FFFFFF', // Cor do texto
          fontSize: 18,
          fontWeight: 'bold',
        }
    

  });
  
  export default Login;