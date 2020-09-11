import * as React from 'react'
import { SafeAreaView, FlatList } from 'react-native'
import Trakt from 'trakt.tv'

import {
  TRAKT_CLIENT_ID,
  TRAKT_CLIENT_SECRET,
  TRAKT_REDIRECT_URI
} from '@env'

import { Item } from './Item'

const trakt = new Trakt({
  client_id: TRAKT_CLIENT_ID,
  client_secret: TRAKT_CLIENT_SECRET,
  redirect_uri: TRAKT_REDIRECT_URI,
})

export const WatchList = () => {
  const [data, setData] = React.useState([])
  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={item => <Item item={item} />} />
    </SafeAreaView>
  )
}