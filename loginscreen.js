import React from "react";
import { AppNavigation } from "./src/navigation/appNavigation";
import { Text, View, TextInput, Image,TouchableOpacity, Alert } from "react-native";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase-config";
import {styles} from "./loginstyles";
import { useNavigation } from "@react-navigation/native";

const Login=()=>{
    const [email, setEmail]=React.useState('')
    const [password, setPassword]=React.useState('')
    const navigation=useNavigation();

    const apps=initializeApp(firebaseConfig);
    const auth=getAuth(apps);

    const handleCreateAccount=()=>{
      createUserWithEmailAndPassword(auth,email,password)
      .then((userCredential)=>{
        console.log('Account created!')
        const user=userCredential.user;
        console.log(user)
        Alert.alert("Cuenta creada","Inicie Sesion")
      })
      .catch(error=>{
        console.log(error)
        Alert.alert(error.message)
      })
    }

    const handleSignIn=()=>{
      signInWithEmailAndPassword(auth,email,password)
      .then((userCredential)=>{
        console.log('Signed in!')
        const user=userCredential.user;
        console.log(user)
        navigation.navigate(AppNavigation)
      })
      .catch(error=>{
        console.log(error)
        Alert.alert("No registrado","Registre su correo y contraseña.")
      })
    }

    return(
      <View style={styles.container}>
        <Image style={styles.image} source={{uri:"https://wixmp-fe53c9ff592a4da924211f23.wixmp.com/users/ff091463-bc50-4a6a-b757-f1156d2df827/design-previews/ac9132bf-39cb-4eb3-bc04-61eb3312a1cd/1685859785054-thumbnail.jpeg"}}/>
        <Text style={styles.textstil}>Inicia sesión en tu cuenta</Text>
        <TextInput onChangeText={(text)=>setEmail(text)} style={styles.input} placeholder="Edgarcat4331@gmail.com"/>
        <TextInput onChangeText={(text)=>setPassword(text)}style={styles.input} placeholder="Password" secureTextEntry={true}/>
        <TouchableOpacity onPress={handleSignIn} style={styles.button}>
          <Text>SIGN IN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCreateAccount} style={{marginTop:10}}>
          <Text>Create Account</Text>
        </TouchableOpacity>
      </View>
    )
  }
export default Login;