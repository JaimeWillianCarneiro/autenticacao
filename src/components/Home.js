import React from "react";
import { View,Text, TextInput, Button, StyleSheet, Image  } from "react-native-web";


const Home = ({ route }) =>{

    const {name, email} =  route.params;
    return (
        <View style= {styles.container}>

            <View>
                <Image
                
                source = {require()}
                />
                    
            </View>
        </View>
    )

}

    