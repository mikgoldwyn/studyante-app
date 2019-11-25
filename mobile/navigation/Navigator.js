import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import InitialLoadingScreen from '../screens/InitialLoadingScreen';
import LoginScreen from '../screens/LoginScreen';
import StudentHomeScreen from '../screens/student/StudentHomeScreen';
import StudentRequirementsScreen from '../screens/student/StudentRequirementsScreen';
import StudentRequirementsDetailScreen from '../screens/student/StudentRequirementsDetailScreen';
import TeacherHomeScreen from '../screens/teacher/TeacherHomeScreen';
import TeacherStudentListScreen from '../screens/teacher/TeacherStudentListScreen';
import TeacherStudentRequirements from '../screens/teacher/TeacherStudentRequirementsScreen';


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

const TeacherStack = createStackNavigator(
  {
    TeacherHome: {
      screen: TeacherHomeScreen,
    },
    TeacherStudentList: {
      screen: TeacherStudentListScreen,
    },
    TeacherStudentRequirements: {
      screen: TeacherStudentRequirements,
    }
  },
  {
    headerMode: 'none',
    initialRouteName: 'TeacherHome'
  },
);

export default createAppContainer(
  createSwitchNavigator(
    {
      InitialLoading: InitialLoadingScreen,
      Auth: AuthStack,
      StudentApp: StudentStack,
      TeacherApp: TeacherStack,
    },
    {
      initialRouteName: 'InitialLoading',
    }
  )
);
