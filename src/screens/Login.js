import React from 'react'
import { connect } from 'react-redux'
import { Text, TouchableOpacity, View } from 'react-native'
import { NavigationActions } from 'react-navigation';

// ____ COMPONENT
export const LoginScreen = ({ goToWelcome, login }) => (
  <View>
    <Text>LoginScreen</Text>
    <TouchableOpacity
      style={{ borderWidth: 1, borderColor: '#11ddee', padding: 10, marginTop: 10 }}
      onPress={login}>
      <Text style={{ color: '#11ddee' }}>Login</Text>
    </TouchableOpacity>
  </View>
)

// ____ CONTAINER
// const mapState = (state) => ({

// })

const mapDispatch = (dispatch) => ({
  login() {
    dispatch(NavigationActions.reset({
      index: 0,
      key: null,
      actions: [NavigationActions.navigate({ routeName: 'Authorized' })]
    }))
  }
})

export default connect(null, mapDispatch)(LoginScreen)
