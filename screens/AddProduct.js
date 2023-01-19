import React, {useState} from "react";
import { View, Text, StyleSheet, Dimensions, TextInput, Platform, Keyboard, Alert} from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../constants/Colors";
import { useDispatch} from 'react-redux';
import * as productsActions from '../store/actions/products';

function AddProduct(props) {
    const [productName, setProductName] = useState('');
    const dispatch = useDispatch();
    const onSubmitPressedHandler = () => {
        // Fermer le clavier
            Keyboard.dismiss();
            dispatch(productsActions.addProduct(productName));
        // Afficher une alerte
            Alert.alert('Bravo!', "Votre proposition a été accepté")
        // Vider le state
        setProductName('')
    }
    return (
        <View style={styles.container}>
            <View style={styles.form}>
            <Text style={styles.label}>Nom du produit</Text>

            <TextInput 
            style={styles.input} 
            placeholder="Tapez quelque chose"
            autoCapitalize="words"
            value={productName}
            onChangeText={setProductName}
            />

            <TouchableOpacity style={styles.submit} activeOpacity={0.8} onPress={onSubmitPressedHandler}>
                <Text style={styles.submitText}>Ajouter</Text>
            </TouchableOpacity>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 15,
        width: Dimensions.get('window').width * 0.8,
        elevation: 1,
        shadowColor: 'black',
        shadowOffset: {width:0, height: 0},
        shadowOpacity: 0.15,
        shadowRadius: 50
    },
    input: {
        borderBottomColor: Colors.primary,
        borderBottomWidth: 3,
        paddingHorizontal: 10,
        paddingVertical: Platform.OS === 'ios' ? 10 : 5,
        backgroundColor: '#ecf0f1',
        marginTop: 10
    },
    label: {
        color: Colors.primary,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
    submit: {
        backgroundColor: Colors.primary,
        padding: 10,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        marginTop: 15
    },
    submitText: {
        color: 'white',
    }
})

export default AddProduct;