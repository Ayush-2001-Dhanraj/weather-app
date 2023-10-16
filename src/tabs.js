import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import CurrentWeather from './screens/CurrentWeather';
import UpcomingWeather from './screens/UpcomingWeather';
import City from './screens/City';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'grey',
                headerStyle: {
                    backgroundColor: 'black'
                },
                headerTitleStyle: {
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 25
                },
                tabBarStyle: {
                    backgroundColor: 'black'
                }
            }}
        >
            <Tab.Screen
                name="Current"
                component={CurrentWeather}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name="droplet"
                            size={25}
                            color={focused ? 'white' : 'grey'}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Upcoming"
                component={UpcomingWeather}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name="clock"
                            size={25}
                            color={focused ? 'white' : 'grey'}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="City"
                component={City}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name="home"
                            size={25}
                            color={focused ? 'white' : 'grey'}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
};

export default Tabs;
