import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';
import {MyButton} from '../../components';
import 'intl';
import 'intl/locale-data/jsonp/en';

export default function Pembantu({navigation, route}) {
  const item = {
    image: 'https://pembantuku.id/sites/default/files/IMG_20210501_080502.jpg',
    nama_lengkap: 'febriana elisabeth mare',
    nama_panggilan: 'riani',
    tempat_lahir: 'Bandung',
    tanggal_lahir: '20/02/2003',
    nomor_ktp: '5304236002030002',
    nomor_kk: '',
    profesi: '',
    tinggi_badan: '150',
    berat_badan: '45',
    umur: '18',
    mau_kerja_dimana: 'dimana saja',
    takut_anjing: 'tidak',
    kerja_diluar_negri: 'tidak',
    pendidikan: 'sma',
    pengalaman: 'art dana baby sister',
    pernikahan: 'singel',
    punya_anak: 'tidak',
    agama: 'katolik',
    suku: 'jawa',
    inggris: 'tidak',
    naik_motor: 'tidak',
    bisa_masak: 'bisa',
    bisa_asuh: 'bisa',
    gaji: 2500000,
  };
  navigation.setOptions({title: item.nama_lengkap});

  const MyListData = ({label, value}) => {
    return (
      <View
        style={{
          marginTop: 5,
          flexDirection: 'row',
          borderBottomWidth: 0.5,
          paddingBottom: 5,
          borderBottomColor: colors.primary,
        }}>
        <View
          style={{
            flex: 1,
          }}>
          <Text
            style={{
              fontFamily: fonts.secondary[600],
              fontSize: 12,
              color: colors.secondary,
            }}>
            {label}
          </Text>
        </View>
        <Text
          style={{
            fontFamily: fonts.secondary[400],
            fontSize: 12,
            color: colors.black,
          }}>
          {value}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
          backgroundColor: colors.primary,
        }}>
        <Image
          resizeMode="contain"
          style={{
            width: '100%',
            aspectRatio: 1,
          }}
          source={{
            uri: item.image,
          }}
        />
      </View>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: 'white',
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          padding: 20,
        }}>
        <Text
          style={{
            fontFamily: fonts.secondary[600],
            fontSize: 20,
          }}>
          {item.nama_lengkap} ({' '}
          <Text
            style={{
              fontFamily: fonts.secondary[400],
              fontSize: 18,
              color: colors.primary,
            }}>
            {item.nama_panggilan}
          </Text>{' '}
          )
        </Text>
        <MyListData label="Tempat Lahir" value={item.tempat_lahir} />
        <MyListData label="Tanggal Lahir" value={item.tanggal_lahir} />
        <MyListData label="Nomor KTP" value={item.nomor_ktp} />
        <MyListData label="Nomor KK" value={item.nomor_kk} />
        <MyListData label="Profesi" value={item.profesi} />
        <MyListData label="Tinggi Badan" value={item.tinggi_badan} />
        <MyListData label="Berat Badan" value={item.berat_badan} />
        <MyListData label="Umur" value={item.umur} />
        <MyListData label="Mau kerja dimana ?" value={item.mau_kerja_dimana} />
        <MyListData label="Apakah Takut Anjing" value={item.takut_anjing} />
        <MyListData
          label="Pernah kerja diluar negri ?"
          value={item.kerja_diluar_negri}
        />
        <MyListData label="Pendidikan Terakhir" value={item.pendidikan} />
        <MyListData label="Pengalaman Kerja" value={item.pengalaman} />
        <MyListData label="Status Pernikahan" value={item.pernikahan} />
        <MyListData label="Sudah Punya Anak" value={item.punya_anak} />
        <MyListData label="Agama" value={item.agama} />
        <MyListData label="Suku Asal" value={item.suku} />
        <MyListData label="Bisa Bahasa Inggris" value={item.inggris} />
        <MyListData label="Bisa Naik Motor" value={item.naik_motor} />
        <MyListData label="Bisa Masak" value={item.bisa_masak} />
        <MyListData
          label="Bisa Asuk Bayi/Balita/Anak-anak"
          value={item.bisa_asuh}
        />
        <View
          style={{
            marginTop: 5,
            flexDirection: 'row',
            borderBottomWidth: 0.5,
            paddingBottom: 5,
            borderBottomColor: colors.primary,
          }}>
          <View
            style={{
              flex: 1,
            }}>
            <Text
              style={{
                fontFamily: fonts.secondary[600],
                fontSize: 12,
                color: colors.secondary,
              }}>
              Gaji yang diharapkan
            </Text>
          </View>
          <Text
            style={{
              fontFamily: fonts.secondary[400],
              fontSize: 12,
              color: colors.black,
            }}>
            Rp. {new Intl.NumberFormat().format(item.gaji)}
          </Text>
        </View>

        <View style={{marginTop: 30}} />
      </ScrollView>
      <MyButton
        radius={0}
        title="KIRIM PERMINTAAN"
        warna={colors.primary}
        onPress={() => {
          navigation.navigate('PembantuSelesai', item);
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
