import React from 'react'
import { connect } from 'react-redux'
import { Text, TouchableOpacity, View } from 'react-native'
import { NavigationActions } from 'react-navigation';

// ____ COMPONENT
export const WelcomeScreen = ({ goToLogin }) => (
  <View>
    <Text>WelcomeScreen</Text>
    <TouchableOpacity
      style={{ padding: 10, marginTop: 10 }}
      onPress={goToLogin}>
      <Text style={{ color: '#11ddee' }}>Go to login</Text>
    </TouchableOpacity>
  </View>
)

// ____ CONTAINER
// const mapState = (state) => ({

// })

const mapDispatch = (dispatch) => ({
  goToLogin() {
    dispatch(NavigationActions.navigate({ routeName: 'Login' }))
  }
})

export default connect(null, mapDispatch)(WelcomeScreen)
