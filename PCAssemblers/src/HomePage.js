import React from 'react';
import * as eva from '@eva-design/eva';
import { SafeAreaView } from 'react-native';
import { ApplicationProvider, Layout, Text, Divider, TopNavigation, Button, IconRegistry } from '@ui-kitten/components';
import { AppNavigator } from './navigation.bottom';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import HomeScreen from "./components/homescreen.component";

const HomePage = () => {

    return (
        <>
        <IconRegistry icons={EvaIconsPack}/>
        <ApplicationProvider {...eva} theme={eva.light}>
            <AppNavigator />
        </ApplicationProvider>
        </>
    );
}

export default HomePage;