import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Text, Card } from '@ui-kitten/components';


const ProductCard = (props) => {

    const navigateDetails = () => {
        props.navigation.navigate('Details');
    };

    return (
        <Card style={styles.cardStyle} onPress={navigateDetails}>
            <View style={{flexDirection: 'row'}}>
              <Image style={styles.cardImage} source={props.image}/>
             <Text style={styles.cardTitle}>{props.text}</Text>
            </View>
          </Card>
    )
}

const styles= StyleSheet.create({
    cardTitle: {
        fontSize: 18,
        marginStart: 5,
        fontWeight: 'bold'
    },

    cardStyle: {
        justifyContent: 'flex-start',
        margin: 2, 
        borderWidth: 1, 
        borderColor: 'black'
    },

    cardDescription:{

    },

    cardImage: {
        width: 80,
        height: 80, 
        borderWidth: 2, 
        borderColor: 'grey'
    }
});

export default ProductCard;