import React, {useEffect, useState} from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Linking,
    Dimensions,
    SafeAreaView
} from 'react-native';
import {useSelector} from 'react-redux';
import { ColorSpace } from "react-native-reanimated";

import Product from '../components/Product/Product';
import Colors from "../constants/Colors";

function Home(props) {
    // State
    const [isDisplayed, setIsDisplayed] = useState(false);

    // Variables
    const products = useSelector(state => state.products.products);

let logoStyles = {
    width: Dimensions.get('window').width * 0.2 ,
    height: Dimensions.get('window').width * 0.2,
    marginBottom: 15,
}
// if (Dimensions.get('window').width < 300) {
//     logoStyles = { width: 50, height: 50, marginBottom: 5}
// }


    return (
        <View style={{backgroundColor: 'white', flex: 1}}>
        <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
           
            <Image
                source={{
                    uri: 'https://logodownload.org/wp-content/uploads/2017/10/Starbucks-logo.png',
                }}
                style={logoStyles}
            />
            <Text style={styles.title}>STARBUCKS</Text>
            {isDisplayed ? (
                <Text>Que souhaitez-vous ?</Text>
            ) : (
                <Text>Commencer par ouvrir le menu</Text>
            )}
            <TouchableOpacity onPress={() => Linking.openURL('https://starbucks.fr')}>
            <Text>En savoir plus</Text>
            </TouchableOpacity>
            {isDisplayed && (
                <FlatList
                    data={products}
                    renderItem={({ item }) => <Product item={item} />}
                    keyExtractor={item => Math.random().toString()}
                    style={{ width: '100%' }}
                />
            )}
            <View style={{ marginTop: 40 }}>
               
                <TouchableWithoutFeedback
                     onPress={() => setIsDisplayed(prevState => !prevState)}
                >
                    <View
                        style={{
                            width: '40%',
                            backgroundColor: Colors.primary,
                            paddingHorizontal: 15,
                            paddingVertical: 5,
                            borderRadius: 3,
                        }}
                    >
                        <Text style={{ color: 'white' }}>
                            {isDisplayed ? 'Fermer le menu' : 'Ouvrir le menu'}
                            
                             
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
        </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
         paddingTop: 17,
         paddingBottom: 10,
    },
    title: {
        fontSize: Dimensions.get('window').width * 0.055,
        color: Colors.primary,
        textTransform: 'uppercase',
        fontFamily: 'Montserrat-Black',
    },
});

export default Home;