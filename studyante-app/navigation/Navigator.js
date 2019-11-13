import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import InitialLoadingScreen from '../screens/InitialLoadingScreen';
import LoginScreen from '../screens/LoginScreen';
import StudentHomeScreen from '../screens/student/StudentHomeScreen';


const AuthStack = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
  },
  {
    headerMode: 'none',
  },
);

const StudentStack = createStackNavigator(
  {
    StudentHome: {
      screen: StudentHomeScreen,
    },
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(
  createSwitchNavigator(
    {
      InitialLoading: InitialLoadingScreen,
      Student: StudentStack,
      Auth: AuthStack,
    }
  )
);
