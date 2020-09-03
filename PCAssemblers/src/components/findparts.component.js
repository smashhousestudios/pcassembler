import React from 'react';
import { SafeAreaView, View, Keyboard, Platform, Image, StyleSheet } from 'react-native';
import { Divider, Layout, Text, TopNavigationAction, Autocomplete, AutocompleteItem, Icon, Button, Card } from '@ui-kitten/components';
import ProductCard from './productcard.component';
import { useQuery } from '@apollo/react-hooks';
import {ALL_PROCESSORS} from './gql.queries';

const searchHistory = [
  { title: 'Nvidia' },
  { title: 'AMD' },
  { title: 'Intel' },
  { title: 'PSU' },
  { title: 'GPU' },
  ];

const showEvent = Platform.select({
  android: 'keyboardDidShow',
  default: 'keyboardWillShow',
});
  
const hideEvent = Platform.select({
  android: 'keyboardDidHide',
  default: 'keyboardWillHide',
});

const SearchIcon = (props) => (
  <Icon {...props} name='search-outline'/>
);
  

const filter = (item, query) => item.title.toLowerCase().includes(query.toLowerCase());

const PartsScreen = ({ navigation }) => {

  const { loading, error, data: procData } = useQuery(ALL_PROCESSORS);

  const [value, setValue] = React.useState(null);
  const [data, setData] = React.useState(searchHistory);
  const [placement, setPlacement] = React.useState('bottom');

  React.useEffect(() => {
    const keyboardShowListener = Keyboard.addListener(showEvent, () => {
      setPlacement('top');
    });

    const keyboardHideListener = Keyboard.addListener(hideEvent, () => {
      setPlacement('bottom');
    });

    return () => {
      keyboardShowListener.remove();
      keyboardHideListener.remove();
    };
  });

  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>{`Error! ${error.message}`}</Text>


  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
  );

  const onSelect = (index) => {
    setValue(data[index].title);
  };

  const onChangeText = (query) => {
    setValue(query);
    setData(searchHistory.filter(item => filter(item, query)));
  };

  const renderOption = (item, index) => (
    <AutocompleteItem
      key={index}
      title={item.title}
    />
  );

  const onSubmit = data => {
    console.log(data);
  };

  let img = "rtx2080ti.jpg";


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Divider/>
      <Layout style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
        <Text category='h1'>Find Parts</Text>
        <View style={{ flex:0.1, justifyContent: 'center', flexDirection: 'row', padding: 10, backgroundColor: 'powderblue'}}>
          <View style={{flex:0.8, alignSelf: 'center', flexDirection: 'column'}}>
            <Autocomplete
              placeholder='Search'
              value={value}
              placement={placement}
              style={{align: 'center', padding: 5}}
              onChangeText={onChangeText}
              onSelect={onSelect}>
              {data.map(renderOption)}
            </Autocomplete>
          </View>
          <View style={{flex:0.2, alignSelf: 'center', flexDirection: 'column'}}>
            <Button type="submit" appearance='outline' accessoryLeft={SearchIcon}/>
          </View>
        </View>
        <View style={{flex:1 ,flexDirection: 'column', alignSelf: 'stretch'}}>
          {procData && procData.processors.map((proc) => {
            return <ProductCard key={proc.id} image={require(`../images/${img}`)} text={proc.brand}/>
          })}
          {procData && procData.nvidia_gpus.map((gpu) => {
            return <ProductCard key={gpu.id} image={require(`../images/${img}`)} text={gpu.Model} navigation={navigation}/>
          })}
        </View>
      </Layout>
    </SafeAreaView>
  );
};



export default PartsScreen;