import { StackNavigator, DrawerNavigator } from 'react-navigation';
import DeviceDetail from './screens/DeviceDetail'
import DeviceList from './screens/DeviceList'
import Login from './screens/Login'
import NotificationDetail from './screens/NotificationDetail'
import NotificationList from './screens/NotificationList'
import Splash from './screens/Splash'
import Welcome from './screens/Welcome'

const notificationsNav = StackNavigator(
  {
    NotificationDetail: { screen: NotificationDetail },
    NotificationList: { screen: NotificationList }
  },
  {
    initialRouteName: 'NotificationList',
    headerMode: 'none'
  }
);

const devicesNav = StackNavigator(
  {
    DeviceDetail: { screen: DeviceDetail },
    DeviceList: { screen: DeviceList }
  },
  {
    initialRouteName: 'DeviceList',
    headerMode: 'none'
  }
);

const UnauthorizedNavigator = StackNavigator(
  {
    Welcome: { screen: Welcome },
    Login: { screen: Login }
  },
  {
    initialRouteName: 'Welcome',
    headerMode: 'screen'
  }
);

const AuthorizedNavigator = DrawerNavigator(
  {
    Notifications: { screen: notificationsNav },
    Devices: { screen: devicesNav }
  },
  {
    initialRouteName: 'Notifications',
    headerMode: 'none'
  }
);

const AppNavigator = StackNavigator(
  {
    Splash: { screen: Splash },
    Unauthorized: { screen: UnauthorizedNavigator },
    Authorized: { screen: AuthorizedNavigator }
  },
  {
    // initialRouteName: 'Splash',
    headerMode: 'none',
    gesturesEnabled: false
  }
);

export default AppNavigator;
