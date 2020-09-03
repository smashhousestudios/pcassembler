import React from 'react';
import * as eva from '@eva-design/eva';
import { View } from 'react-native';
import { ApplicationProvider, Layout, Text, Divider, TopNavigation, Button, IconRegistry } from '@ui-kitten/components';
import { AppNavigator } from './navigation.bottom';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import HomeScreen from "./components/homescreen.component";

// import { AppLoading } from "expo";

// import { Asset } from "expo-asset";
// import * as Font from "expo-font";

import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "react-apollo";


const client = new ApolloClient({
    // initialize cache
    cache: new InMemoryCache(),
    //Assign your link with a new instance of a HttpLink linking to your graphql server
    link: new HttpLink({
      uri: "http://10.0.2.2:3000/graphql"
    })
  });

const HomePage = () => {

    return (
        <>
        <IconRegistry icons={EvaIconsPack}/>
        {/* <ApplicationProvider {...eva} theme={eva.light}>
            <AppNavigator />
        </ApplicationProvider> */}
      <ApolloProvider client={client}>
      <ApplicationProvider {...eva} theme={eva.light}>
            <AppNavigator />
        </ApplicationProvider>
      </ApolloProvider>
        </>
    );
}

export default HomePage;