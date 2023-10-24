import React, { Component } from 'react'
import { Text, View } from 'react-native'
import MasonryList from '@react-native-seoul/masonry-list'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { mealData } from '../constants'
export default function Recipe() {
  
    return (
      <View className="mx-4 space-y-3 ">
        <Text style={{fontSize: hp(3)}} className="font-semibold text-gray-700"> Recipe </Text>
            <View>
          
                <MasonryList
                    data={mealData}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item, i}) => <RecipeCard item={item} index={i}  />}
                    // refreshing={isLoadingNext}
                    // onRefresh={() => refetch({first: ITEM_CNT})}
                    onEndReachedThreshold={0.1}
                    // onEndReached={() => loadNext(ITEM_CNT)}
                />
     </View>
     
        </View>
    )

    const RecipeCard = ({ item, index }) => {
        return (
            <View>
                <Text>
                    recipe
                </Text>
            </View>
        )
    }
  
// nvcc

}



const RecipeCard = ({ item, index }) => {
    return (
        <View>
            <Text>
                recipe
            </Text>
        </View>
    )
}