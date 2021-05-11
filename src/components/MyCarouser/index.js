import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {colors} from '../../utils/colors';

export default function MyCarouser() {
  const [activeSlide, setActiveSlide] = useState(0);
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const [data, setData] = useState([
    {
      id: 0,
      desc: 'Jasa kebutuhan asisten rumah tangga',
      image: 'https://zavalabs.com/api/assets/pembantuku-banner.jpg',
    },
    {
      id: 1,
      desc: 'Jasa kebutuhan asisten rumah tangga',
      image:
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    },

    {
      id: 2,
      desc: 'Jasa kebutuhan asisten rumah tangga',
      image:
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    },
  ]);

  const _renderItem = ({item, index}) => {
    return (
      <ImageBackground
        key={item.id}
        source={{uri: item.image}}
        style={{
          height: Math.round((windowWidth * 9) / 16),
        }}>
        <View
          style={{
            backgroundColor: colors.secondary,
            position: 'absolute',
            // maxWidth: 200,
            bottom: 0,
            right: 0,
            borderTopLeftRadius: 20,
            // borderBottomRightRadius: 20,
            opacity: 0.9,
            padding: 10,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'Courgette-Regular',
              color: '#FFF',
            }}>
            {item.desc}
          </Text>
        </View>
      </ImageBackground>
    );
  };

  return (
    <View
      style={{
        backgroundColor: colors.secondary,
      }}>
      <Carousel
        // layout="stack"
        layoutCardOffset={18}
        data={data}
        sliderWidth={windowWidth}
        itemWidth={windowWidth}
        renderItem={_renderItem}
        activeDotIndex
        autoplay={true}
        autoplayDelay={2000}
        autoplayInterval={3000}
        onSnapToItem={index => setActiveSlide(index)}
        activeAnimationType="spring"
        loop={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
