import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import CurrentWeather from './screens/CurrentWeather';
import UpcomingWeather from './screens/UpcomingWeather';
import City from './screens/City';

const Tab = createBottomTabNavigator();

const Tabs = ({ weatherData }) => {
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
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name="droplet"
                            size={25}
                            color={focused ? 'white' : 'grey'}
                        />
                    )
                }}
            >
                {() => <CurrentWeather weatherData={weatherData?.list[0]} />}
            </Tab.Screen>
            <Tab.Screen
                name="Upcoming"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name="clock"
                            size={25}
                            color={focused ? 'white' : 'grey'}
                        />
                    )
                }}
            >
                {() => <UpcomingWeather weatherData={weatherData?.list} />}
            </Tab.Screen>
            <Tab.Screen
                name="City"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name="home"
                            size={25}
                            color={focused ? 'white' : 'grey'}
                        />
                    )
                }}
            >
                {() => <City weatherData={weatherData.city} />}
            </Tab.Screen>
        </Tab.Navigator>
    );
};

export default Tabs;
