import React from 'react';
import {
    View,
    ActivityIndicator
} from 'react-native';
import { loadAsync, useFonts } from 'expo-font';

import AppNavigator from './navigation/AppNavigator';
import Colors from './constants/Colors';

// redux
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import placesReducer from './store/reducers/places';
import productsReducer from './store/reducers/products';


const rootReducer = combineReducers({
   places: placesReducer,
   products: productsReducer
}) ;

const store = createStore(rootReducer);
    
export default function App() {
    
    // const [modal, setModal] = useState(false);

    let [fontsLoaded] = useFonts({
        'Montserrat-Black' : require('./assets/fonts/Montserrat-Black.ttf')
    });

    if(!fontsLoaded) {
        return <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
        <ActivityIndicator size="large" color={Colors.primary} /></View>;
    }
    return <Provider store={store}><AppNavigator/></Provider>
        
}


