import React from 'react'
import { connect } from 'react-redux'
import { Text, View } from 'react-native'

// ____ COMPONENT
export const NotificationDetailScreen = () => (
  <View>
    <Text>NotificationDetailScreen</Text>
  </View>
)

// ____ CONTAINER
// const mapState = (state) => ({

// })

// const mapDispatch = (dispatch) => ({

// })

export default connect()(NotificationDetailScreen)
