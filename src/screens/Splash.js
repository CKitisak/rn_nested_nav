import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { NavigationActions } from 'react-navigation';

// ____ COMPONENT
class SplashScreen extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    setTimeout(this.checkLoggedInt.bind(this), 1500);
  }

  checkLoggedInt() {
    const { isLoggedIn, dispatch } = this.props
    const routeName = isLoggedIn ? 'Authorized' : 'Unauthorized';

    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: routeName })]
    });

    dispatch(resetAction);
  }

  render() {
    return (
      <View>
        <Text>SplashScreen</Text>
      </View>
    );
  }
}

// ____ CONTAINER
const mapState = (state) => ({
  isLoggedIn: state.auth.isLoggedIn
})

// const mapDispatch = (dispatch) => ({

// })

export default connect(mapState)(SplashScreen);
