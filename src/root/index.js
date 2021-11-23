import React, { PureComponent, Fragment } from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { default as customMapping } from '../theme/json/custom-mapping.json';
import { default as appTheme } from '../theme/json/custom-theme.json';
import { BootstrapIconsPack } from '../theme/bootstrapIcon';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux/reducers';
import Home from '../pages/home';
import Anggota from '../pages/anggota';
import Master from '../pages/master_data';
import GoTo from './goto';
import Tabs from './tabs';
import Init from './init';

const theme     = { ...lightTheme, ...appTheme };
const options   = { headerShown: false };

const Tab           = createBottomTabNavigator();
const AppStack      = createNativeStackNavigator();
const HomeStack     = createNativeStackNavigator();
const AnggotaStack  = createNativeStackNavigator();
const MasterStack   = createNativeStackNavigator();

function MasterStackScreen() {
  return (
    <MasterStack.Navigator screenOptions={options}>
      <MasterStack.Screen name="Master" component={Master} />
    </MasterStack.Navigator>
  );
}

function AnggotaStackScreen() {
  return (
    <AnggotaStack.Navigator screenOptions={options}>
      <AnggotaStack.Screen name="Anggota" component={Anggota} />
    </AnggotaStack.Navigator>
  );
}

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={options}>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
}

const TabNavigator = () => (
  <Tab.Navigator screenOptions={options} tabBar={props => <Tabs {...props} />}>
    <Tab.Screen name='HomeTab' component={HomeStackScreen}/>
    <Tab.Screen name='AnggotaTab' component={AnggotaStackScreen}/>
    <Tab.Screen name='MasterTab' component={MasterStackScreen}/>
  </Tab.Navigator>
)

const AppNavigation = () => (
  <AppStack.Navigator screenOptions={options}>
    <AppStack.Screen name="Tab" component={TabNavigator} />
    <AppStack.Screen name="GoTo" component={GoTo} />
  </AppStack.Navigator>
)

const store = createStore(reducer);
class App extends PureComponent {

    constructor(props) {
      super(props);
      this.state = {

      }

    }

    render() {
      return (
        <Fragment>
          <Provider store={store}>
            <IconRegistry icons={BootstrapIconsPack} />
            <ApplicationProvider mapping={mapping} theme={theme} customMapping={customMapping}>
              <Init />
              <NavigationContainer>
                <AppNavigation/>
              </NavigationContainer>
            </ApplicationProvider>
          </Provider>
        </Fragment>
      )
    }
}

export default App;
