import React,  { useState } from "react";
import { View,Text, TextInput, Button, StyleSheet, Image  } from "react-native";
import { getAuth, onAuthStateChanged, updateProfile, updateEmail, updatePassword, EmailAuthProvider, reauthenticateWithCredential, signInWithEmailAndPassword } from 'firebase/auth';

const Home = ({ route }) => {
  const { name, email } = route.params;
  const [nome, setName] = useState('');
  const [novoEmail, setEmail] = useState('');



  const changeProfile = async () => {

    const auth = getAuth();
    const user = auth.currentUser;

    // if(name !== "" && name != user.displayName){
    //     await user.updateProfile(user, {displayName: name});


    // };
    if(email !== "" && email !== user.email){
    
      await   user.updateProfile(user,{email: email});
      ;
  }



    };

  return (
    
    <View style={styles.container}>
      <View style={styles.perfil}>
      { <Image
        source={require('autenticacao/src/images/ritaperfil.jpeg')}
        style={styles.logo}
      /> }
    
      <Text style={styles.label}>Nome: {name}</Text>
      <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Nome"
              placeholderTextColor= { '#f5fffa' } 
              color = { '#f5fffa' }
          />
       
      <Text style={styles.label}>Email: {email}</Text>
      <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              placeholder="Email"
              placeholderTextColor= { '#f5fffa' } 
              color = { '#f5fffa' }
          />

{/* 
           
    <Text style={styles.label}>Senha:</Text>
      <TextInput
              style={styles.input}
              value={pass}
              onChangeText={email}
              secureTextEntry
              
              placeholder="Senha"
              placeholderTextColor= { '#f5fffa' } 
              color = { '#f5fffa' }
          />
        */}

      <View style={styles.button}>
              <Button title="Alterar Perfil" onPress={changeProfile}   c/>
          </View>
      </View>



    </View>

    
     
    
  );
};

const styles = StyleSheet.create({

    container:{
      width: "100%",
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#201b2c', // Cor de fundo escura
      padding: 20, // Espaçamento interno
    },

    perfil: {
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
        elevation: 10, 
     
    },

    infoUser: {
        
    },

    logo: {
      width: 100,
      height: 100,
      marginBottom: 20
    },

    label: {
      right: 5,
      fontSize: 16,
      marginBottom:3 ,
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
      color: '#d3d3d3', 
      borderWidth: 0
    }


});


export default Home;
    





