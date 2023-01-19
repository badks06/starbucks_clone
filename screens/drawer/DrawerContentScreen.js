import react from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Colors from "../../constants/Colors";
import {DrawerItemList, DrawerContentScrollView} from '@react-navigation/drawer';

function DrawerContentScreen(props) {
    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView>
                <View style={{alignItems: 'center'}}>
             <Image source={{uri: 'https://logodownload.org/wp-content/uploads/2017/10/Starbucks-logo.png'}} style={styles.logo} />
             </View>
            <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    logo: {
        width: 84 ,
        height: 84,
        marginBottom: 15,
    }
})

export default DrawerContentScreen;