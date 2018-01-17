import { NavigationActions } from 'react-navigation';
import AppNavigator from '../../AppNavigator';

const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams('Splash')
);

const navReducer = (state = initialState, action) => {
  console.log('state:', state);
  console.log('action:', action);
  const nextState = AppNavigator.router.getStateForAction(action, state);
  console.log('nextState:', nextState);
  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

export default navReducer;
