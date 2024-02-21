import React, {useState} from "react";
import {Text, View, StyleSheet, Button, TextInput} from "react-native";
import * as ExpoDocumentPicker from "expo-document-picker";
//import axios from 'axios';

const Pdf = () => {
    const [pdfDoc, setPdfDoc] = useState()
    const [question, setQuestion] = useState('')
    const [result, setResult] = useState('')
    const handleFilePicker = async () => {
        let result = await ExpoDocumentPicker.getDocumentAsync({copyToCacheDirectory: true});
        setPdfDoc(result.file)
    }
    const handleUpload = async () => {
        try {
            const data = new FormData()
            data.append('question', question)
            data.append('file', pdfDoc)
            //console.log(data.get('file'))
            const response = await fetch('http://localhost:9021/upload', {
                method: 'POST',
                body: data
            })
            //const response = await axios.post('http://localhost:9021/upload', data);
            if (response.ok) {
                setQuestion('')
                const responseJSON = await response.json()
                setResult(responseJSON.text)
            }


        } catch (error) {
            console.log(error)
        }

    }

    return (
        <View>
            <Button title={'Seleccione el PDF'} onPress={handleFilePicker} color={'#9A08DE'} />
            <TextInput style={styles.input} value={question} onChangeText={setQuestion}
                       placeholder={'Ingresa tu pregunta'}/>
            <Button title={'ENVIAR'} onPress={handleUpload} color={'#9A08DE'} />
            <Text>{result}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        margin: 10
    }
})
export default Pdf