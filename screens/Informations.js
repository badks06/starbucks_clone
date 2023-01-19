import react from "react";
import {View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import { ScrollView, TouchableWithoutFeedback } from "react-native-gesture-handler";
import { block } from "react-native-reanimated";
import Ionicons from "react-native-vector-icons/Ionicons";
import Colors from "../constants/Colors";

function Informations(props) {
    return (
        <ScrollView contentContainerStyle={{flex: 1}}>
        <View style={styles.container}>
            <Text style={styles.title}>Service aux consommateurs</Text>

                <View style={styles.contact}>
                    <Ionicons name="call-outline" size={35} color={Colors.primary}/>
                    <Text style={styles.information}>+5580336544</Text>
                </View>
                <View style={styles.contact}>
                    <TouchableWithoutFeedback onPress={() => Linking.openURL('mailto:contact@starbucks.com')}>
                    <Ionicons name="mail-outline" size={35} color={Colors.primary}/>
                    <Text style={{...styles.information, fontSize: 12}}>contact@starbucks.com</Text>
                    </TouchableWithoutFeedback>
                </View>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <View style={styles.button}>
                <Ionicons name="close-circle-outline" size={23} color='white'/>
            </View>
            </TouchableOpacity>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        textTransform: "uppercase",
        fontSize: 17,
        fontWeight: 'bold',
        color: Colors.primary
    },
    button: {
        backgroundColor: Colors.primary,
        borderRadius: 25,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 150
    },
    contact: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 190,
        marginTop: 30
    },

    information: {
        fontWeight: 'bold',
        fontSize: 20
    }
})

export default Informations;