import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  ImagePickerIOS,
  Alert,
} from 'react-native';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';
import {MyInput, MyGap, MyButton} from '../../components';
import axios from 'axios';
import {showMessage} from 'react-native-flash-message';
import LottieView from 'lottie-react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default function Pelamar({navigation}) {
  const [loading, setLoading] = useState(false);

  const [foto1, setfoto1] = useState(
    'https://ayokulakan.com/img/no-images.png',
  );
  const [foto2, setfoto2] = useState(
    'https://ayokulakan.com/img/no-images.png',
  );

  const options = {
    includeBase64: true,
    quality: 0.5,
  };

  const getCamera = xyz => {
    launchCamera(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image Picker Error: ', response.error);
      } else {
        let source = {uri: response.uri};
        switch (xyz) {
          case 1:
            setData({
              ...data,
              foto1: `data:${response.type};base64, ${response.base64}`,
            });
            setfoto1(`data:${response.type};base64, ${response.base64}`);
            break;
          case 2:
            setData({
              ...data,
              foto2: `data:${response.type};base64, ${response.base64}`,
            });
            setfoto2(`data:${response.type};base64, ${response.base64}`);
            break;
        }
      }
    });
  };

  const getGallery = xyz => {
    launchImageLibrary(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image Picker Error: ', response.error);
      } else {
        let source = {uri: response.uri};
        switch (xyz) {
          case 1:
            setData({
              ...data,
              foto1: `data:${response.type};base64, ${response.base64}`,
            });
            setfoto1(`data:${response.type};base64, ${response.base64}`);
            break;
          case 2:
            setData({
              ...data,
              foto2: `data:${response.type};base64, ${response.base64}`,
            });
            setfoto2(`data:${response.type};base64, ${response.base64}`);
            break;
        }
      }
    });
  };

  const [data, setData] = useState({
    nama_lengkap: null,
    nama_panggilan: null,
    email: null,
    tempat_lahir: null,
    tanggal_lahir: null,
    nomor_ktp: null,
    nomor_kk: null,
    alamat: null,
    alamaat_sekarang: null,
    profesi: null,
    telepon: null,
    tinggi_badan: null,
    berat_badan: null,
    umur: null,
    mau_kerja_dimana: null,
    takut_anjing: null,
    kerja_diluar_negri: null,
    pendidikan: null,
    pengalaman: null,
    pernikahan: null,
    punya_anak: null,
    agama: null,
    suku: null,
    inggris: null,
    naik_motor: null,
    bisa_masak: null,
    bisa_asuh: null,
    referal: null,
    gaji: null,
    foto1: foto1,
    foto2: foto2,
  });

  const simpan = () => {
    // setLoading(true);
    console.log(data);
    navigation.navigate('PelamarDetail', data);
    // axios.post('https://zavalabs.com/api/register.php', data).then(res => {
    //   console.log(res);
    //   let err = res.data.split('#');

    //   // console.log(err[0]);
    //   if (err[0] == 50) {
    //     setTimeout(() => {
    //       setLoading(false);
    //       showMessage({
    //         message: err[1],
    //         type: 'danger',
    //       });
    //     }, 1200);
    //   } else {
    //     setTimeout(() => {
    //       setLoading(false);
    //       navigation.replace('Success', {
    //         messege: res.data,
    //       });
    //     }, 1200);
    //     showMessage({
    //       message: res.data,
    //       type: 'success',
    //     });
    //   }
    // });\
    // setTimeout(() => {
    //   setLoading(false);
    //   showMessage({
    //     message: 'Data berhasil disimpan !',
    //     type: 'success',
    //   });
    // }, 2000);
  };

  const UploadFoto = ({onPress1, onPress2, label, foto}) => {
    return (
      <View
        style={{
          padding: 10,
          backgroundColor: colors.white,
          marginVertical: 10,
          borderWidth: 1,
          borderRadius: 10,
          borderColor: 'gray',
        }}>
        <Text style={styles.subjudulUpload}>{label}</Text>
        <Image
          source={{
            uri: foto,
          }}
          style={{
            width: '100%',
            aspectRatio: 1.5,
          }}
          resizeMode="center"
        />
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View
            style={{
              flex: 1,
              paddingRight: 5,
            }}>
            <MyButton
              onPress={onPress1}
              title="KAMERA"
              warna={colors.primary}
            />
          </View>
          <View
            style={{
              flex: 1,
              paddingLeft: 5,
            }}>
            <MyButton
              onPress={onPress2}
              title="GALLERY"
              warna={colors.secondary}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <ImageBackground style={styles.page}>
      <ScrollView style={styles.page}>
        {/* <Image
        source={require('../../assets/logooren.png')}
        style={styles.image}
      /> */}

        <MyGap jarak={20} />
        <MyInput
          label="Nama Lengkap"
          iconname="person"
          value={data.nama_lengkap}
          onChangeText={value =>
            setData({
              ...data,
              nama_lengkap: value,
            })
          }
        />
        <MyGap jarak={10} />
        <MyInput
          label="Nama Panggilan"
          iconname="person"
          value={data.nama_panggilan}
          onChangeText={value =>
            setData({
              ...data,
              nama_panggilan: value,
            })
          }
        />
        <MyGap jarak={10} />
        <MyInput
          label="Email"
          iconname="mail"
          value={data.email}
          onChangeText={value =>
            setData({
              ...data,
              email: value,
            })
          }
        />
        <MyGap jarak={10} />
        <MyInput
          label="Tempat Lahir"
          iconname="map"
          value={data.tempat_lahir}
          onChangeText={value =>
            setData({
              ...data,
              tempat_lahir: value,
            })
          }
        />

        <MyGap jarak={10} />
        <MyInput
          label="Tanggal Lahir (contoh : 20/11/1987)"
          iconname="calendar"
          value={data.tanggal_lahir}
          onChangeText={value =>
            setData({
              ...data,
              tanggal_lahir: value,
            })
          }
        />
        <MyGap jarak={10} />
        <MyInput
          label="Nomor KTP"
          iconname="card"
          value={data.nomor_ktp}
          onChangeText={value =>
            setData({
              ...data,
              nomor_ktp: value,
            })
          }
        />
        <MyGap jarak={10} />
        <MyInput
          label="Nomor KK"
          iconname="card"
          value={data.nomor_kk}
          onChangeText={value =>
            setData({
              ...data,
              nomor_kk: value,
            })
          }
        />
        <MyGap jarak={10} />
        <MyInput
          label="Alamat"
          iconname="map"
          value={data.alamat}
          onChangeText={value =>
            setData({
              ...data,
              alamat: value,
            })
          }
        />

        <MyGap jarak={10} />
        <MyInput
          label="Tempat Tinggal Saat ini"
          iconname="map"
          value={data.alamat_sekarang}
          onChangeText={value =>
            setData({
              ...data,
              alamat_sekarang: value,
            })
          }
        />

        <MyGap jarak={10} />
        <MyInput
          label="Profesi"
          iconname="layers"
          value={data.profesi}
          onChangeText={value =>
            setData({
              ...data,
              profesi: value,
            })
          }
        />
        <MyGap jarak={10} />
        <MyInput
          label="Telepon"
          iconname="call"
          keyboardType="number-pad"
          value={data.telepon}
          onChangeText={value =>
            setData({
              ...data,
              telepon: value,
            })
          }
        />
        <MyGap jarak={10} />
        <MyInput
          label="Tinggi Badan"
          iconname="man"
          keyboardType="number-pad"
          value={data.tinggi_badan}
          onChangeText={value =>
            setData({
              ...data,
              tinggi_badan: value,
            })
          }
        />
        <MyGap jarak={10} />
        <MyInput
          label="Berat Badan"
          iconname="body"
          keyboardType="number-pad"
          value={data.berat_badan}
          onChangeText={value =>
            setData({
              ...data,
              berat_badan: value,
            })
          }
        />
        <MyGap jarak={10} />
        <MyInput
          label="Umur"
          iconname="hourglass"
          keyboardType="number-pad"
          value={data.umur}
          onChangeText={value =>
            setData({
              ...data,
              umur: value,
            })
          }
        />

        <MyGap jarak={10} />
        <MyInput
          label="Bersedia bekerja dimana ? (contoh : Jabodetabek)"
          iconname="navigate"
          value={data.mau_kerja_dimana}
          onChangeText={value =>
            setData({
              ...data,
              mau_kerja_dimana: value,
            })
          }
        />
        <MyGap jarak={10} />
        <MyInput
          label="Takut Anjing ? (YA/TIDAK)"
          iconname="paw"
          value={data.takut_anjing}
          onChangeText={value =>
            setData({
              ...data,
              takut_anjing: value,
            })
          }
        />
        <MyGap jarak={10} />
        <MyInput
          label="Pengalaman bekerja diluar negri ? (YA/TIDAK)"
          iconname="trail-sign"
          value={data.kerja_diluar_negri}
          onChangeText={value =>
            setData({
              ...data,
              kerja_diluar_negri: value,
            })
          }
        />

        <MyGap jarak={10} />
        <MyInput
          label="Pendidikan Terkahir"
          iconname="school"
          value={data.pendidikan}
          onChangeText={value =>
            setData({
              ...data,
              pendidikan: value,
            })
          }
        />

        <MyGap jarak={10} />
        <MyInput
          label="Pengalaman Kerja"
          iconname="briefcase"
          value={data.pengalaman}
          onChangeText={value =>
            setData({
              ...data,
              pengalaman: value,
            })
          }
        />

        <MyGap jarak={10} />
        <MyInput
          label="Status Pernikahan"
          iconname="heart"
          value={data.pernikahan}
          onChangeText={value =>
            setData({
              ...data,
              pernikahan: value,
            })
          }
        />

        <MyGap jarak={10} />
        <MyInput
          label="Punya Anak ? (YA/TIDAK)"
          iconname="people"
          value={data.punya_anak}
          onChangeText={value =>
            setData({
              ...data,
              punya_anak: value,
            })
          }
        />

        <MyGap jarak={10} />
        <MyInput
          label="Agama"
          iconname="book"
          value={data.agama}
          onChangeText={value =>
            setData({
              ...data,
              agama: value,
            })
          }
        />

        <MyGap jarak={10} />
        <MyInput
          label="Suku Asal"
          iconname="earth"
          value={data.suku}
          onChangeText={value =>
            setData({
              ...data,
              suku: value,
            })
          }
        />

        <MyGap jarak={10} />
        <MyInput
          label="Bahasa Inggris"
          iconname="chatbubbles"
          value={data.inggris}
          onChangeText={value =>
            setData({
              ...data,
              inggris: value,
            })
          }
        />

        <MyGap jarak={10} />
        <MyInput
          label="Bisa Naik Motor ? (YA/TIDAK)"
          iconname="bicycle"
          value={data.naik_motor}
          onChangeText={value =>
            setData({
              ...data,
              naik_motor: value,
            })
          }
        />

        <MyGap jarak={10} />
        <MyInput
          label="Bisa Masak ? (YA/TIDAK)"
          iconname="restaurant"
          value={data.bisa_masak}
          onChangeText={value =>
            setData({
              ...data,
              bisa_masak: value,
            })
          }
        />

        <MyGap jarak={10} />
        <MyInput
          label="Bisa Asuh Bayi/Balita/Anak"
          iconname="people-circle"
          value={data.bisa_asuh}
          onChangeText={value =>
            setData({
              ...data,
              bisa_asuh: value,
            })
          }
        />
        <MyGap jarak={10} />
        <MyInput
          label="Referal"
          iconname="analytics"
          value={data.referal}
          onChangeText={value =>
            setData({
              ...data,
              referal: value,
            })
          }
        />
        <MyGap jarak={10} />
        <MyInput
          label="Gaji Yang diharapkan"
          iconname="cash"
          keyboardType="number-pad"
          value={data.gaji}
          onChangeText={value =>
            setData({
              ...data,
              gaji: value,
            })
          }
        />

        <UploadFoto
          onPress1={() => getCamera(1)}
          onPress2={() => getGallery(1)}
          label="Upload KTP"
          foto={foto1}
        />

        <UploadFoto
          onPress1={() => getCamera(2)}
          onPress2={() => getGallery(2)}
          label="Upload Pas Foto"
          foto={foto2}
        />

        <MyGap jarak={40} />
        <MyButton
          warna={colors.secondary}
          title="SIMPAN"
          Icons="log-in"
          onPress={simpan}
        />
        <Text
          style={{
            marginTop: 20,
            fontFamily: fonts.secondary[400],
            fontSize: 16,
            color: colors.black,
            // maxWidth: 230,
          }}>
          Silahkan melakukan pengisian formulir terlebih dahulu
        </Text>
      </ScrollView>
      {loading && (
        <LottieView
          source={require('../../assets/animation.json')}
          autoPlay
          loop
          style={{
            flex: 1,
            backgroundColor: colors.primary,
          }}
        />
      )}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 10,
  },
  image: {
    width: 620 / 4,
    height: 160 / 4,
  },
  judul: {
    fontSize: 14,
    fontFamily: fonts.secondary[600],
    marginVertical: 10,
  },
  subjudul: {
    fontSize: 12,
    fontFamily: fonts.secondary[400],
    marginVertical: 5,
  },
  subjudulUpload: {
    fontSize: 12,
    fontFamily: fonts.secondary[600],
    marginVertical: 5,
  },
});
