import React from 'react';
import * as eva from '@eva-design/eva';
import { SafeAreaView } from 'react-native';
import { ApplicationProvider, Layout, Text, Divider, TopNavigation, Button } from '@ui-kitten/components';

const HomeScreen = ({navigation}) => {

    const navigateDetails = () => {
        navigation.navigate('Details');
      };


    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* <TopNavigation title='MyApp' alignment='center'/> */}
            <Divider/>
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button onPress={navigateDetails}>OPEN DETAILS</Button>
            </Layout>
        </SafeAreaView>
    );
}

export default HomeScreen;