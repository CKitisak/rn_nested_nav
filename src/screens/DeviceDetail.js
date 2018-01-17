import React from 'react'
import { connect } from 'react-redux'
import { Text, View } from 'react-native'

// ____ COMPONENT
export const DeviceDetailScreen = () => (
  <View>
    <Text>DeviceDetailScreen</Text>
  </View>
)

// ____ CONTAINER
// const mapState = (state) => ({

// })

// const mapDispatch = (dispatch) => ({

// })

export default connect()(DeviceDetailScreen)
