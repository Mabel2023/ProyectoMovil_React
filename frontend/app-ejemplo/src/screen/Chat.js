import React, {useState} from "react";
import {TextInput, View, StyleSheet, Text, Button} from "react-native";
//import axios from 'axios';

const Chat = () => {
    const [prompt, setPrompt] = useState('')
    const [result, setResult] = useState('')

    const getResultFromOpenApi = async () => {
        try {
            //const response = await axios.post('http://localhost:9004/openapi', {
            //    prompt
            //}, {
            //    headers: {
            //        'Content-Type': 'application/json'
            //    }
            //});
            const response = await fetch('http://localhost:9021/openapi', {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },  
                body: JSON.stringify({prompt})
            })
            const jsonData = await response.json();
            console.log(jsonData);

            const tokensUsed = jsonData.tokens;

            setResult(`${jsonData.result} y los token utilizados fueron ${tokensUsed} `)
        } catch (error) {
            console.log(error);
            //setResult("Ocurri� un error al obtener la respuesta de la API.");
        }
    }


    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {'Ingrese el numero que desea convertir a binario'}
            </Text>
            <TextInput style={styles.input} value={prompt} onChangeText={setPrompt}/>
            <Button title={'Enviar'} onPress={getResultFromOpenApi} color={'#9A08DE'} />
            <Text style={styles.text}>
                {result}
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: '#D9F4F7'
    },
    input: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        padding: 15,
        margin: 10
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "center"
    }
})

export default Chat