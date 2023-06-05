import { View, Text, Image } from 'react-native'
import React from 'react'

const RankingScreen = () => {
  return (
    <View>
      <Text>RankingScreen</Text>
      <Image source={{uri: 'https://media.tenor.com/fTTVgygGDh8AAAAC/kitty-cat-sandwich.gif'}}
      style={{width:250, height:250}}/>
    </View>
  )
}

export default RankingScreen