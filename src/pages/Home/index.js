import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';
import LottieView from 'lottie-react-native';
import {getData} from '../../utils/localStorage';
import {FlatListSlider} from 'react-native-flatlist-slider';
import {Preview} from '../../components';
import {Icon} from 'react-native-elements';
import MyNews from '../../components/MyNews';
import MyCarouser from '../../components/MyCarouser';
import MyKategori from '../../components/MyKategori';
import MyTerbaik from '../../components/MyTerbaik';

export default function Home({navigation}) {
  const images = [
    {
      image:
        'https://images.bisnis-cdn.com/posts/2019/09/27/1153079/rruk-dynamix2.jpg',
    },
    {
      image: 'https://kipmi.or.id/wp-content/uploads/2017/01/molen-kecil.jpg',
    },
    {
      image: 'https://kipmi.or.id/wp-content/uploads/2016/11/beton8.jpg',
    },
  ];

  const [user, setUser] = useState([]);

  useEffect(() => {
    getData('user').then(res => {
      console.log(res);
      setUser(res);
    });
  }, []);

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const ratio = 192 / 108;
  const _renderItem = ({item, index}) => {
    return (
      <Image
        resizeMode="contain"
        source={{uri: item.image}}
        style={{
          width: windowWidth,
          height: Math.round((windowWidth * 9) / 16),
        }}
      />
    );
  };
  return (
    <ImageBackground
      style={{
        flex: 1,
      }}>
      <ScrollView>
        <View
          style={{
            height: 100,
            padding: 10,
            backgroundColor: colors.primary,
            flexDirection: 'row',
          }}>
          <View style={{flex: 1}}>
            <Text
              style={{
                fontSize: 20,
                color: colors.white,
                fontFamily: fonts.secondary[600],
              }}>
              PEMBANTUKU
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: colors.white,
                fontFamily: fonts.secondary[400],
              }}>
              Selamat datang,
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: colors.white,
                fontFamily: fonts.secondary[600],
              }}>
              {user.nama_lengkap}
            </Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              style={{width: 80, height: 80}}
              source={require('../../assets/logo.png')}
            />
          </View>
        </View>
        <MyCarouser />
        <MyKategori />
        <MyTerbaik />
      </ScrollView>
    </ImageBackground>
  );
}