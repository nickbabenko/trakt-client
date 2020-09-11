import * as React from 'react'
import { View, Text } from 'react-native'

interface ItemProps {
  item: any
}

export const Item = ({ item }: ItemProps) => {
  return (
    <View>
      <Text>{item.title}</Text>
    </View>
  )
}