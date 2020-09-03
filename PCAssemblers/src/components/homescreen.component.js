import React from 'react';
import * as eva from '@eva-design/eva';
import { SafeAreaView } from 'react-native';
import { ApplicationProvider, Layout, Text, Divider, TopNavigation, Button } from '@ui-kitten/components';

const HomeScreen = ({navigation}) => {

    const navigateBuild = () => {
        navigation.navigate('Build');
      };

      const navigateParts = () => {
        navigation.navigate('Parts', { screen: 'PartsScreen' });
        // navigation.navigate('PartsScreen');

      };


    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* <TopNavigation title='MyApp' alignment='center'/> */}
            <Divider/>
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button onPress={navigateBuild} style={{padding: 10, margin: 20}}>Build Your Pc</Button>
                <Divider/>
                <Button onPress={navigateParts}  style={{padding: 10}}>Find Parts</Button>
            </Layout>
        </SafeAreaView>
    );
}

export default HomeScreen;