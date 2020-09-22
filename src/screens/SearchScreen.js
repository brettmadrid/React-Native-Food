import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import ResultsList from '../components/ResultsList'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState('')
  const [searchApi, results, errorMessage] = useResults()

  const filterResultsByPrice = price => {
    // price === '$' || '$$' || '$$$'
    return results.filter(result => {
      return result.price === price
    })
  }

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice('$')}
          title='Cost Effective'
          navigation={navigation}
        />
        <ResultsList
          navigation={navigation}
          results={filterResultsByPrice('$$')}
          title='Bit Pricier'
        />
        <ResultsList
          navigation={navigation}
          results={filterResultsByPrice('$$$')}
          title='Big Spender'
        />
        {filterResultsByPrice('$$$$').length > 0 ? (
          <ResultsList
            navigation={navigation}
            results={filterResultsByPrice('$$$$')}
            title='Top Shelf'
          />
        ) : null}
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({})

export default SearchScreen
