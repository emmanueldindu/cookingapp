import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View, Text, ScrollView, Image, TextInput } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import {BellIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import Categories from '../components/categories'
const HomeScreen = () => {
  return (
    <View className="flex-1 bg-white">
      <StatusBar style='dark' />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        className="space-y-6 pt-14"
      >
        <View className="mx-4 flex-row justify-between items-center mb-2">
        <Image source={require('../../assets/avatar.png')} style={{height: hp(5), width: hp(5.5)}}  />
        <BellIcon size={hp(4)} color="gray" />
        </View>  


        <View className="mx-4 space-y-3 mb-2">
          {/* <Text style={{ fontSize: hp(1.7) }}
            className="text-gray-700"
            
          
          >
            Hello, Odoi!
          </Text> */}
          <View>
            <Text style={{fontSize: hp(3.5)} } className="font-semibold text-gray-700"> You can stair up any meal,</Text>
          </View>

          <Text style={{ fontSize: hp(3.5) }} className="font-semibold text-gray-700"> From  <Text className="text-amber-400" >Home</Text>  

            
          
              
              
            </Text>
          
        </View>

        <View className="mx-4 flex-row items-center rounded-full bg-black/5 p-[6px]" >
          <TextInput
            placeholder='search any recipe'
            placeholderTextColor={'gray'}
            style={{fontSize: hp(1.7)}}
            className="flex-1 text-base mb-1 pl-3 tracking-wider"          
          >
            
          </TextInput>
          <View className="">
            <MagnifyingGlassIcon size={hp(2.5)} strokeWidth={3} color='gray' />

          </View>
          
        </View>

        <View>
          <Categories />
        </View>
          


      </ScrollView>
      {/* <Text>Hello, World!</Text> */}
      

    </View>

  )
}

export default HomeScreen
