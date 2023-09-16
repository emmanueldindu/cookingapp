import { StatusBar } from 'expo-status-bar'
import { useCallback } from 'react';
import { View, Text, Image } from 'react-native'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import { useEffect } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native';



const Welcome = () => {

    const ring1 = useSharedValue(0)
    const ring2 = useSharedValue(0)

    const navigation = useNavigation()

    useEffect(() => {
        ring1.value = 0;
        ring2.value = 0;
        setTimeout(()=> ring1.value = withSpring(ring1.value+hp(5)), 300)
        setTimeout(() => ring2.value = withSpring(ring2.value + hp(5.5)), 500)
        

        setTimeout(()=> navigation.navigate('Home'), 3000)
    },[])
 

    return (

        <View className="flex-1 justify-center items-center space-y-10 bg-amber-400"
        >
            <StatusBar style='light' />
            <Animated.View className="bg-white/20 rounded-full" style={{ padding: ring1}}  >

                <Animated.View className="bg-white/20 rounded-full" style={{padding: ring2}}>
                    <Image source={require('../../assets/bg.png')}
                    style={{width: hp(20), height: hp(20)}}
                    
                    />
            </Animated.View>
            </Animated.View>  


            <View className="flex items-center space-y-3">
                <Text style={{fontSize: hp(4)}} className="font-bold text-gray-200 ">
                   Recipe Genie
                </Text>
                <Text style={{fontSize: hp(2)}} className="font-medium text-gray-200 tracking-wider ">
                Make quick and easy meals from home    
                </Text>
                
            </View>
        </View>
        
            )
}

export default Welcome
