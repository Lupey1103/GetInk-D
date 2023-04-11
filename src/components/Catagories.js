import { Text, ScrollView } from 'react-native'
import React from 'react'
import { CatagoriesCard } from './CatagoriesCard'

export const Catagories = () => {
  return (
    <ScrollView contentContainerStyle={{
      paddingHorizontal: 15,
      paddingTop: 10
    }}
    horizontal
    showsHorizontalScrollIndicator={false}
    >
    <CatagoriesCard imgUrl='https://static.wixstatic.com/media/ac02e2_419bd26e31e74e3a9a5adaeb6941a59b~mv2.jpg/v1/fill/w_560,h_362,al_c,q_80,usm_4.00_1.00_0.00,enc_auto/ac02e2_419bd26e31e74e3a9a5adaeb6941a59b~mv2.jpg' title='Badfellow Tattoo' />
    <CatagoriesCard imgUrl='https://h6f9r7p4.rocketcdn.me/wp-content/uploads/2018/11/ink-logo-300x300.jpg' title='Inkaholik' />
    <CatagoriesCard imgUrl='https://static.wixstatic.com/media/59abf5_f6a380f44a5c427fb803166718cd9faa~mv2_d_2048_2048_s_2.png' title='Fame Tattoo' />
    
    </ScrollView>
  )
}
