import React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import { Text, View } from './Themed';

const data = [
  {"id": 1,"name": "sleep 8h", "objectiveRelated": "have a better sleep"},
  {"id": 2,"name": "cold shower", "objectiveRelated": "have more energy"},
  {"id": 3,"name": "gym", "objectiveRelated": "become muscular"},
  {"id": 4,"name": "clean my room", "objectiveRelated": "have a prettier room"},
];
const renderItem=({item})=> {
  return (
      <View style={styles.row}>
        <Text style={styles.cell}>{item.id}</Text>
        <Text style={styles.cell}>{item.name}</Text>
        <Text style={styles.cell}>{item.objectiveRelated}</Text>
      </View>
  );
}
export default function Datatable() {
  return (
    <View style={styles.Container}>
      <View style={styles.headerTopBar}>
        <Text style={styles.headerTopBarText}>Id</Text>
        <Text style={styles.headerTopBarText}>Name</Text>
        <Text style={styles.headerTopBarText}>Objective related</Text>
      </View>
      <FlatList data={data}
                keyExtractor={(item)=>item.id.toString()}
                renderItem={renderItem}>
      </FlatList>

    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex:1,
    backgroundColor:"#fff",
    paddingVertical:30,
    paddingHorizontal:30
  },
  headerTopBar: {
    backgroundColor:"#6AB7E2",
    padding:10,
    borderRadius:5,
    elevation:2,
    marginBottom: 15,
    flexDirection:"row",
    justifyContent:"space-between",

  },
  headerTopBarText: {
    color:"#fff",
    fontSize:16,
    flex:1,
  },
  row: {
    flexDirection:'row',
    justifyContent:'space-between',
    padding:10,
    elevation:1,
    marginVertical:8,
    marginHorizontal:2,
    borderColor:"#fff",
    borderRadius:3,
    backgroundColor:"#fff"
  },
  cell: {
    fontSize:15,
    textAlign:'left',
    flex:1,
    padding:2,
    borderColor:"#fff",
    borderRadius:3,
  }
});
