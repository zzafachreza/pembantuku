import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../utils/colors';

const IconPemayaran = ({img, title, onPress, iconname}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        // flex: 1,
        width: 80,
        height: 90,
        // backgroundColor: '#F8781D',
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,

        elevation: 2,
      }}>
      <View
        style={{
          flex: 2,
          justifyContent: 'center',
        }}>
        <Icon
          type="ionicon"
          name={iconname}
          color={colors.secondary}
          size={40}
        />
      </View>
      <View
        style={{
          flex: 1,
        }}>
        <Text
          style={{
            fontFamily: 'Montserrat-SemiBold',
            // color: '#F8781D',
            color: colors.secondary,
            fontSize: 12,
            textAlign: 'center',
          }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default function MyKategori() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        justifyContent: 'center',
        padding: 10,
        backgroundColor: colors.primary,
        // backgroundColor: '#FFF',
      }}>
      <View
        style={{
          flexDirection: 'row',
          // justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 5,
        }}>
        <Icon type="ionicon" name="grid" color="#FFF" size={16} />
        <Text
          style={{
            fontFamily: 'Montserrat-SemiBold',
            color: '#FFF',
            left: 10,
            fontSize: 16,
          }}>
          KATEGORI
        </Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            // backgroundColor: '#16A858',
          }}>
          <IconPemayaran
            title="Driver"
            iconname="car"
            onPress={() =>
              navigation.navigate('Kategori', {
                kategori: 'driver',
                menu: 'Driver',
              })
            }
          />
          <IconPemayaran
            title="Tukang Kebun"
            iconname="color-fill"
            onPress={() =>
              navigation.navigate('Kategori', {
                kategori: 'tukang_kebun',
                menu: 'Tukang Kebun',
              })
            }
          />
          <IconPemayaran
            title="Home Care"
            iconname="home"
            onPress={() =>
              navigation.navigate('Kategori', {
                kategori: 'home_care',
                menu: 'Home Care',
              })
            }
          />
          <IconPemayaran
            title="Pet Caretaker"
            iconname="paw"
            onPress={() =>
              navigation.navigate('Kategori', {
                kategori: 'pet_caretaker',
                menu: 'Pet Caretaker',
              })
            }
          />
          <IconPemayaran
            title="SPG"
            iconname="woman"
            onPress={() =>
              navigation.navigate('Kategori', {
                kategori: 'spg',
                menu: 'SPG',
              })
            }
          />

          <IconPemayaran
            title="Asisten Rumah"
            iconname="woman"
            onPress={() =>
              navigation.navigate('Kategori', {
                kategori: 'asisten_rumah',
                menu: 'Asisten Rumah',
              })
            }
          />
          <IconPemayaran
            title="Juru Masak"
            iconname="restaurant"
            onPress={() =>
              navigation.navigate('Kategori', {
                kategori: 'juru_masak',
                menu: 'Juru Masak',
              })
            }
          />
          <IconPemayaran
            title="Perawat Lansia"
            iconname="walk"
            onPress={() =>
              navigation.navigate('Kategori', {
                kategori: 'perawat_lansia',
                menu: 'Perawat Lansia',
              })
            }
          />
          <IconPemayaran
            title="Nanny"
            iconname="woman"
            onPress={() =>
              navigation.navigate('Kategori', {
                kategori: 'nanny',
                menu: 'Nanny',
              })
            }
          />

          <IconPemayaran
            title="Perawat Anak Khusus"
            iconname="woman"
            onPress={() =>
              navigation.navigate('Kategori', {
                kategori: 'perawat_anak',
                menu: 'Perawat Anak Khusus',
              })
            }
          />
        </View>
      </ScrollView>
    </View>
  );
}
