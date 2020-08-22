import * as React from 'react';
import View from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,TransitionPresets} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from './screen/LoginScreen';
import Chat from './screen/ChatScreen';
import Admin from './screen/Admin.js'
import Iniciar from './screen/Iniciar';
import Login from './screen/Login'
import PassengerScreen from './screen/mapa';
import DriverScreen from './screen/MapTaxi';
import Registrarse from './screen/Registrarse.js'
import Trabajo from './components/trabajo.js';
import {Ionicons} from '@expo/vector-icons'
const Stack = createStackNavigator();
const Drawer= createDrawerNavigator();


function MyStack() {
  
  
  return (
    <Stack.Navigator
      initialRouteName="DrawerScreen"
      screenOptions={{
        gestureEnabled:true,
        gestureDirection:'horizontal',
        
        ...TransitionPresets.SlideFromRightIOS,     
        headerShown: false
      }}
      
      >
 
      
      <Stack.Screen 
        name="LoginScreen" 
        component={LoginScreen}
    
        options={{ title: 'LoginScreen'},
        {headerLeft: null} 
      }
      
      />
      <Stack.Screen 
        name="Login" 
        component={Login}
    
        options={{ title: 'Login'},
        {headerLeft: null} 
      }
      
      />
       <Stack.Screen 
        name="DrawerScreen" 
        component={DrawerScreen}
    
        options={{ title: 'DrawerScreen'},
        {headerLeft: null} 
      }
      
      />     
    
      <Stack.Screen
        name='Trabajo'
        component={Trabajo}
        options={{title:'trabajo'},
        {headerLeft:null}}
      />
      <Stack.Screen 
        name="Admin" 
        component={Admin} 
       
        options={{ title: 'Admin'},
        {headerLeft: null} 
      }
      />    
    
      <Stack.Screen 
        name="PassengerScreen" 
        component={PassengerScreen} 
       
        options={{ title: 'PassengerScreen'},
        {headerLeft: null} 
      }
      />   
       <Stack.Screen 
        name="Registrarse" 
        component={Registrarse} 
      
        options={{ title: 'Registrarse'},
        {headerLeft: null} 
      }
      />  
      <Stack.Screen 
      
        name="Chat" 
        component={Chat} 
        
        options={
          {title: 'Chat'}
           
        }
      />
      <Stack.Screen 
      
      name="Iniciar" 
      component={Iniciar} 
     
      options={
        {title: 'Iniciar'}
         
      }
    />
   <Stack.Screen
     name="Taxi" 
        component={Taxi} 
        
        options={
          {title: 'Taxi'}
           
        }
   />
     
       
    
    </Stack.Navigator>

);

}
const DrawerScreen = () => (
  <Drawer.Navigator
   initialRouteName="Iniciar" 
   drawerStyle={{backgroundColor:'#fec35b'}}
   
  // drawerPosition='left'
   iconContainerStyle= {{opacity: 1} }
   drawerContentOptions={{activeTintColor: '#fff',inactiveTintColor:'#fff',
  itemsContainerStyle: {
    marginVertical: 0,
  },}}
  
   >
   <Drawer.Screen name="Iniciar" component={Iniciar} options={{ drawerLabel: 'Iniciar sesión' }}/>
    <Drawer.Screen name="Chat" component={LoginScreen}/>
    <Drawer.Screen name="PassengerScreen" component={PassengerScreen} options={{ drawerLabel: 'Pedir Viaje' }} />
  </Drawer.Navigator>
);

const Taxi = () => (
  <Drawer.Navigator 
   initialRouteName="DriverScreen" 
   drawerStyle={{backgroundColor:'#fec35b'}}
   
   drawerPosition='left'
   iconContainerStyle= {{opacity: 1} }
   drawerContentOptions={{activeTintColor: '#fff',inactiveTintColor:'#fff',
  itemsContainerStyle: {
    marginVertical: 0,
  },}}

   >
   
    <Drawer.Screen name="Chat" component={Chat} />
    <Drawer.Screen name="DriverScreen" component={DriverScreen}  options={{ drawerLabel: 'Buscar Viaje' }} />
    <Drawer.Screen name="Salir sesión" component={Iniciar} />
  </Drawer.Navigator>
);
export default function App() {
  return (
    
    <NavigationContainer>
     <MyStack/>
  </NavigationContainer>
    
  );
}