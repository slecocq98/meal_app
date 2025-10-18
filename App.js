import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';

import MealsOverviewScreen from './screens/MealsOverviewScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import FavoritesContextProvider from './store/context/favorites-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        sceneStyle: {
          backgroundColor: '#692F09',
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerStyle: {
          backgroundColor: '#75350B',
        },
        drawerContentStyle: {
          backgroundColor: '#692F09',
        },
        drawerActiveTintColor: '#FFFFFF',
        drawerActiveBackgroundColor: '#75350B',
        drawerInactiveTintColor: '#FFFFFF',
        drawerInactiveBackgroundColor: '#692F09',
      }}
    >
      <Drawer.Screen name="Categories" component={CategoriesScreen} options={{
        title: 'All Categories',
        drawerIcon: ({ color, size }) => (
          <MaterialIcons name="list" color={color} size={size} />
        ),
      }} />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} options={{
        title: 'Favorites',
        drawerIcon: ({ color, size }) => (
          <MaterialIcons name="favorite" color={color} size={size} />
        ),
      }} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavoritesContextProvider>
        <NavigationContainer>
          <FavoritesContextProvider>
            <Stack.Navigator
              screenOptions={{
                contentStyle: {
                  backgroundColor: '#692F09',
                },
                headerTintColor: '#FFFFFF',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerStyle: {
                  backgroundColor: '#75350B',
                },
              }}
            >

              <Stack.Screen
                name="DrawerNavigator"
                component={DrawerNavigator}
                options={{
                  title: 'All Categories',
                  headerShown: false,
                }}
              // options={{
              //   title: 'All Categories',
              //   headerStyle: {
              //     backgroundColor: '#75350B',
              //   },
              //   headerTintColor: '#FFFFFF',
              //   headerTitleStyle: {
              //     fontWeight: 'bold',
              //   },
              //   contentStyle: {
              //     backgroundColor: '#692F09',
              //   },
              // }}
              />
              <Stack.Screen
                name="MealsOverview"
                component={MealsOverviewScreen}
              // options={({ route, navigation }) => {
              //   const catId = route.params.categoryId;
              //   return {
              //     title: catId,
              //   };
              // }}
              />
              <Stack.Screen
                name="MealDetails"
                component={MealDetailsScreen}
                options={{
                  title: 'Meal Details',
                }}
              />
            </Stack.Navigator>
          </FavoritesContextProvider>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#24180f',
  },
});
