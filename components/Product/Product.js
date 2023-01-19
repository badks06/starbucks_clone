import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Alert,
    Dimensions
} from 'react-native';
import Colors from '../../constants/Colors';

function Product(props) {
    return (
        <TouchableHighlight
            onPress={() => Alert.alert('Désolé, option non-disponible')}
            activeOpacity={0.8}
            underlayColor={Colors.primaryFaded}
        >
            <View style={styles.card}>
                <Text style={styles.cardTitle}>{props.item.name}</Text>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        padding: Dimensions.get('window').width < 400 ? 15 : 30,
        borderBottomWidth: 1,
        borderColor: '#182e28',
    },
});

export default Product;
