import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export const CatagoriesCard = ({imgUrl, title}) => {
  return (
    <TouchableOpacity className='relative mr-2'>
    <Image source={{
        uri: imgUrl,
    }} className='h-20 w-20 rounded' />
      <Text className='absolute bottom-1 left-1 text-yellow-700'>{title}</Text>
    </TouchableOpacity>
  )
}
