import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';
import {MyHeader} from '../../components';
import {Icon} from 'react-native-elements';
import axios from 'axios';
import {colors} from '../../utils/colors';
import LottieView from 'lottie-react-native';
import {fonts} from '../../utils/fonts';
import 'intl';
import 'intl/locale-data/jsonp/en';

export default function Kategori({navigation, route}) {
  const kategori = route.params.kategori;
  const menu = route.params.menu;

  navigation.setOptions({title: menu});

  const [key, setKey] = useState('');
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState([
    {
      id: 0,
      nama_lengkap: 'Febriana elizabeth mare',
      lokasi: 'Jakarta',
      harga: 2000000,
      kategori: 'Home Care',
      image:
        'https://pembantuku.id/sites/default/files/IMG_20210501_080502.jpg',
    },
    {
      id: 1,
      nama_lengkap: 'Ratinah bt darta',
      lokasi: 'Jakarta',
      harga: 3200000,
      kategori: 'Home Care',
      image:
        'https://pembantuku.id/sites/default/files/styles/mediaum_large_pportrait/public/IMG_20210504_142254.jpg?itok=NXqMajpa',
    },
    {
      id: 2,
      nama_lengkap: 'Komalasari',
      lokasi: 'Jakarta',
      harga: 1800000,
      kategori: 'Home Care',
      image:
        'https://pembantuku.id/sites/default/files/styles/mediaum_large_pportrait/public/IMG-20210411-WA0063.jpg?itok=XbREtZJh',
    },
    {
      id: 3,
      nama_lengkap: 'Seiyva nazula bibah',
      lokasi: 'Jakarta',
      harga: 2600000,
      kategori: 'Home Care',
      image:
        'https://pembantuku.id/sites/default/files/styles/mediaum_large_pportrait/public/IMG_20210427_185110_0.jpg?itok=8cNqoDMo',
    },
  ]);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('Pembantu', item)}
        activeOpacity={1.0}>
        <Image style={styles.image} source={{uri: item.image}} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
          }}>
          <Text
            style={{
              fontFamily: fonts.secondary[600],
              fontSize: 14,
              backgroundColor: colors.secondary,
              paddingHorizontal: 20,
              color: colors.white,
            }}>
            {item.kategori}
          </Text>
        </View>
        <View style={styles.detailsContainer}>
          <View
            style={{
              flex: 1,
            }}>
            <Text style={styles.title}>
              {' '}
              Rp. {new Intl.NumberFormat().format(item.harga)}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
            }}>
            <Text style={styles.subTitle}>{item.nama_lengkap}</Text>
          </View>

          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Icon
              name="map"
              type="ionicon"
              color={colors.secondary}
              size={12}
            />
            <Text
              style={{
                fontFamily: fonts.secondary[600],
                fontSize: 12,
                left: 10,
                color: colors.black,
              }}>
              {item.lokasi}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: '#FFF',
        }}>
        <View
          style={{
            flex: 1,
            padding: 10,
          }}>
          <FlatList
            numColumns={2}
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
      {loading && (
        <LottieView
          source={require('../../assets/animation.json')}
          autoPlay
          loop
          style={{flex: 1, backgroundColor: colors.primary}}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
  },
  card: {
    shadowColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: -10,
      height: 2,
    },
    shadowOpacity: 0.44,
    shadowRadius: 5.32,

    elevation: 5,

    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginBottom: 20,
    flex: 1,
    marginHorizontal: 5,
  },
  image: {
    width: 180,
    height: 200,
  },
  detailsContainer: {
    padding: 10,
    flex: 1,
  },
  detailsContainerButton: {
    paddingHorizontal: 5,
  },
  title: {
    marginBottom: 7,
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 18,
    color: colors.primary,
  },
  subTitle: {
    // flex: 1,
    // backgroundColor: 'red',
    fontFamily: fonts.secondary[600],
    fontSize: 14,
    color: '#000',
    marginBottom: 5,
  },
});
