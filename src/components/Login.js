import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,  Alert, Image, TouchableOpacity } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';



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
                 source={{
                  uri: 'data:image/jpeg;base64,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'}}
                  
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
        
       
        <TouchableOpacity  
          style ={styles.TouchableOpacity} onPress= {handleLogin}> 
          <Text style={styles.inputButton}>Login</Text>
        </TouchableOpacity>
        
     

  
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
          width: '32%', 
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