import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import yelp from '../api/yelp'

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null)
  const id = navigation.getParam('id')

  const getResult = async id => {
    const response = await yelp.get(`/${id}`)
    setResult(response.data)
  }

  useEffect(() => {
    getResult(id)
  }, [])

  // first time component mounts, result is null
  if (!result) {
    return null
  }

  return (
    <View>
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.address}>{result.location.address1}</Text>
      <Text style={styles.address}>{result.location.city}</Text>
      <Text style={styles.address}>{result.phone}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  name: {
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 10,
  },
  address: {
    marginLeft: 10,
  },
  image: {
    height: 200,
    width: 300,
  },
})

export default ResultsShowScreen
