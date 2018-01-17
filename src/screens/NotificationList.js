import React from 'react'
import { connect } from 'react-redux'
import { Text, TouchableOpacity, View } from 'react-native'
import { NavigationActions } from 'react-navigation';

// ____ COMPONENT
export const NotificationListScreen = ({ viewDetail }) => (
  <View>
    <Text>NotificationListScreen</Text>
    <TouchableOpacity
      style={{ padding: 10, marginTop: 10 }}
      onPress={viewDetail}>
      <Text style={{ color: '#11ddee' }}>View Detail</Text>
    </TouchableOpacity>
  </View>
)

// ____ CONTAINER
// const mapState = (state) => ({

// })

const mapDispatch = (dispatch) => ({
  viewDetail() {
    dispatch(NavigationActions.navigate({ routeName: 'NotificationDetail' }))
  }
})

export default connect(null, mapDispatch)(NotificationListScreen)
