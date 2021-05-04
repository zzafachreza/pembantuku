import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';
import 'intl';
import 'intl/locale-data/jsonp/en';

export default function MyTerbaik() {
  useEffect(() => {
    // axios
    //   .get(
    //     'https://ayokulakan.com/api/barang?limit=11&includes=creator,attachments&disc_barang!=null',
    //   )
    //   .then(res => {
    //     console.log(res.data.data);
    //     // setData(res.data.data);
    //   });
  }, []);

  const navigation = useNavigation();
  const [data, setData] = useState([
    {
      id: 0,
      nama: 'Febriana elizabeth mare',
      lokasi: 'Jakarta',
      harga: 2000000,
      kategori: 'Home Care',
      image:
        'https://pembantuku.id/sites/default/files/styles/mediaum_large_pportrait/public/IMG-20210501-WA0015.jpg?itok=X7BGWX6P',
    },
    {
      id: 1,
      nama: 'Ratinah bt darta',
      lokasi: 'Jakarta',
      harga: 3200000,
      kategori: 'Home Care',
      image:
        'https://pembantuku.id/sites/default/files/styles/mediaum_large_pportrait/public/IMG_20210504_142254.jpg?itok=NXqMajpa',
    },
    {
      id: 2,
      nama: 'Komalasari',
      lokasi: 'Jakarta',
      harga: 1800000,
      kategori: 'Home Care',
      image:
        'https://pembantuku.id/sites/default/files/styles/mediaum_large_pportrait/public/IMG-20210411-WA0063.jpg?itok=XbREtZJh',
    },
    {
      id: 3,
      nama: 'Seiyva nazula bibah',
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
        onPress={() =>
          navigation.navigate('Product', {
            product: item,
          })
        }
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
            <Text style={styles.subTitle}>{item.nama}</Text>
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
    <View>
      <View
        style={{
          flex: 1,
          padding: 10,
          backgroundColor: '#FFF',
        }}>
        <View
          style={{
            flexDirection: 'row',
            // justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 5,
          }}>
          <Icon type="ionicon" name="grid" color={colors.primary} size={16} />
          <Text
            style={{
              fontFamily: 'Montserrat-SemiBold',
              color: colors.primary,
              left: 10,
              fontSize: 16,
            }}>
            DAFTAR PEMBANTU TERBAIK
          </Text>
        </View>
        <FlatList
          horizontal
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
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
