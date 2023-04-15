import { View, Text } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import { ShopCard } from './ShopCard';

export const FeaturedRow = ( {id, title, description,}) => {
  return (
    <View className='bg-gray-700'>
      <View className='mt-4 flex-row items-center justify-between px-4'>
        <Text className='font-bold text-lg text-amber-600'>{title}</Text>
        <AntDesign name="arrowright" size={24} color="#e3874f" />
      </View>

      <Text className='text-xs text-white px-4'>{description}</Text>
      <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 15
      }}
      showsHorizontalScrollIndicator={false}
      className='pt-4'
      >
        <ShopCard 

            id={123}
            imgUrl='https://res.cloudinary.com/expertise-com/image/upload/f_auto,fl_lossy,q_auto/w_167,c_scale/remote_media/logos/tattoos-hialeah-fametattoos-com(1).jpg'
            title='Fame Tattoo'
            rating={4.8}
            catagory='Misc.'
            address='1409 W 49th St Suite 1'
            short_description='Fame Tattoos is the Best Tattoo Shop in Miami we take Tattoo Art to a different level spiritually and mentally.'
            artists={[]}
            long={20}
            lat={0}
        />
        <ShopCard 

            id={123}
            imgUrl='https://res.cloudinary.com/expertise-com/image/upload/f_auto,fl_lossy,q_auto/w_167,c_scale/remote_media/logos/tattoos-hialeah-fametattoos-com(1).jpg'
            title='Fame Tattoo'
            rating={4.8}
            catagory='Misc.'
            address='1409 W 49th St Suite 1'
            short_description='Fame Tattoos is the Best Tattoo Shop in Miami we take Tattoo Art to a different level spiritually and mentally.'
            artists={[]}
            long={20}
            lat={0}
        />
        <ShopCard 

            id={123}
            imgUrl='https://res.cloudinary.com/expertise-com/image/upload/f_auto,fl_lossy,q_auto/w_167,c_scale/remote_media/logos/tattoos-hialeah-fametattoos-com(1).jpg'
            title='Fame Tattoo'
            rating={4.8}
            catagory='Misc.'
            address='1409 W 49th St Suite 1'
            short_description='Fame Tattoos is the Best Tattoo Shop in Miami we take Tattoo Art to a different level spiritually and mentally.'
            artists={[]}
            long={20}
            lat={0}
        />
        <ShopCard 

            id={123}
            imgUrl='https://res.cloudinary.com/expertise-com/image/upload/f_auto,fl_lossy,q_auto/w_167,c_scale/remote_media/logos/tattoos-hialeah-fametattoos-com(1).jpg'
            title='Fame Tattoo'
            rating={4.8}
            catagory='Misc.'
            address='1409 W 49th St Suite 1'
            short_description='Fame Tattoos is the Best Tattoo Shop in Miami we take Tattoo Art to a different level spiritually and mentally.'
            artists={[]}
            long={20}
            lat={0}
        />
        <ShopCard 

            id={123}
            imgUrl='https://res.cloudinary.com/expertise-com/image/upload/f_auto,fl_lossy,q_auto/w_167,c_scale/remote_media/logos/tattoos-hialeah-fametattoos-com(1).jpg'
            title='Fame Tattoo'
            rating={4.8}
            catagory='Misc.'
            address='1409 W 49th St Suite 1'
            short_description='Fame Tattoos is the Best Tattoo Shop in Miami we take Tattoo Art to a different level spiritually and mentally.'
            artists={[]}
            long={20}
            lat={0}
        />
      </ScrollView>
    </View>
  )
}
