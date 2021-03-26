import React from 'react';
import { SafeAreaView, View, VirtualizedList, StyleSheet, Text, StatusBar, } from 'react-native';
import styled from 'styled-components/native';

const DATA = [];

const getItem = (data, index) => ({
  id: Math.random().toString(12).substring(0),
  title: `Học sinh ${index+1}`
});

const getItemCount = (data) => 50;

const Item = ({ title }) => (
  <Sitem>
    <Stitle>{title}</Stitle>
  </Sitem>
);

const App = () => {
  return (
    <SView>
      <VirtualizedList
        data={DATA}
        initialNumToRender={4}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.key}
        getItemCount={getItemCount}
        getItem={getItem}
        ListHeaderComponent={<Text style={{fontSize:32,paddingHorizontal:90}}>Số học sinh</Text>}
      />
    </SView>
  );
}
const SView=styled.SafeAreaView`
  flex:1;
  padding:20px;
  background-color:white
`;
const Sitem=styled.View`
    background-color:white;
    height: 100px;
    border-bottom-width:0.7px;
    border-bottom-color:#DCE0E6;
    justify-content:flex-end;
`;
const Stitle=styled.Text`
  font-size:32PX;
`;


export default App;