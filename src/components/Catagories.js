import { Text, ScrollView } from 'react-native'
import React from 'react'
import { CatagoriesCard } from './CatagoriesCard'

export const Catagories = () => {
  return (
    <ScrollView contentContainerStyle={{
      paddingHorizontal: 15,
      paddingTop: 10,
      borderTopWidth: 10,
      position: 'relative'
    }}
    horizontal
    showsHorizontalScrollIndicator={false} className='bg-gray-700 pb-3'
    >
    <Text></Text>
    <CatagoriesCard title='Classic Americana' imgUrl='https://i.pinimg.com/474x/d3/aa/c1/d3aac1d6d73530aecd71df7284f2bd42.jpg' />
    <CatagoriesCard title='New School' imgUrl='https://newmedia.10masters.com/images/tatuaje-fluorescente.max-1000x1000.format-webp.webp' />
    <CatagoriesCard title='Fantasy' imgUrl='https://external-preview.redd.it/BG9jM56DWQiMhgK6mAbeba4Y1Vc31Jj0u9N8YyYb0OE.jpg?auto=webp&v=enabled&s=d97ee584921242162c02c2f81669a32c57047356' />
    <CatagoriesCard title='Japanese' imgUrl='https://inkhappened.com/wp-content/uploads/2021/03/japanese-tattoo-geisha-haynna.jpg' />
    <CatagoriesCard title='Anime' imgUrl='https://static.wixstatic.com/media/c9ee6a_7e4c8b49507144e29f2b7f9d6becf122~mv2.jpg/v1/fill/w_640,h_824,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c9ee6a_7e4c8b49507144e29f2b7f9d6becf122~mv2.jpg' />
    <CatagoriesCard title='Black and Gray' imgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFJS121CXHAWHfGZSoszYV14SunvFp-msW8Q&usqp=CAU' />
    <CatagoriesCard title='Portrait' imgUrl='https://rollandfeel.smokingpaper.com/wp-content/uploads/2021/12/posco_losco_tats_tokio-1024x1024.jpeg' />
    <CatagoriesCard title='Realism' imgUrl='https://www.theskullandsword.com/wp-content/uploads/2021/06/Home-KuponBank.jpeg' />
    <CatagoriesCard title='Blackwork' imgUrl='https://inkppl.com/assets/php/files/042019/290419-1934-1330.jpg' />
    <CatagoriesCard title='Bio-     mechanical' imgUrl='https://findtattoodesign.net/storage/171737/biomechanical-forearm.jpg' />
    <CatagoriesCard title='Geometric' imgUrl='https://tattoo-ideas.com/wp-content/uploads/2021/10/Geometric-sleeve.jpg' />
    <CatagoriesCard title='Trash Polka' imgUrl='https://static.wixstatic.com/media/1900bd_f65bebd6219748c7bc415e561c423399~mv2.jpeg/v1/fill/w_640,h_588,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1900bd_f65bebd6219748c7bc415e561c423399~mv2.jpeg' />
    <CatagoriesCard title='Surrealism' imgUrl='https://inkppl.com/assets/php/files/012019/46848678_730926403952586_4161975724414564583_n.jpg' />
    </ScrollView>
  )
}
