import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import InitialLoadingScreen from '../screens/InitialLoadingScreen';
import LoginScreen from '../screens/LoginScreen';
import StudentHomeScreen from '../screens/student/StudentHomeScreen';
import StudentRequirementsScreen from '../screens/student/StudentRequirementsScreen';
import StudentRequirementsDetailScreen from '../screens/student/StudentRequirementsDetailScreen';


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
    StudentRequirements: {
      screen: StudentRequirementsScreen,
    },
    StudentRequirementsDetail: {
      screen: StudentRequirementsDetailScreen,
    }
  },
  {
    headerMode: 'none',
    initialRouteName: 'StudentHome'
  },
);

export default createAppContainer(
  createSwitchNavigator(
    {
      InitialLoading: InitialLoadingScreen,
      Auth: AuthStack,
      Student: StudentStack,
    },
    {
      initialRouteName: 'Student',
    }
  )
);
