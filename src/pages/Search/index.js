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

export default function Search({navigation, route}) {
  const [key, setKey] = useState('');
  const [cari, setCari] = useState(false);
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState([]);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('Pembantu', item)}
        activeOpacity={1.0}>
        <Image style={styles.image} source={{uri: item.foto2}} />
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
            {item.sebagai_apa}
          </Text>
        </View>
        <View style={styles.detailsContainer}>
          <View
            style={{
              flex: 1,
            }}>
            <Text style={styles.title}>
              {' '}
              Rp. {new Intl.NumberFormat().format(item.gaji)}
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
              {item.alamat}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const pencarian = () => {
    setLoading(true);
    setTimeout(() => {
      setCari(true);
      axios
        .post('https://zavalabs.com/pembantuku/api/pelamar_cari.php', {
          cari: key,
        })
        .then(res => {
          console.log(res.data);
          setData(res.data);
          // setData(res.data.data);
        });
      setLoading(false);
    }, 500);
  };

  return (
    <>
      <ScrollView
        style={{
          flex: 1,
        }}>
        <View
          style={{
            // flex: 1,
            backgroundColor: colors.primary,
            height: 70,
            flexDirection: 'row',

            padding: 10,
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon type="ionicon" name="arrow-back" color="#FFF" size={25} />
            </TouchableOpacity>
            <View
              style={{
                flex: 1,
              }}>
              <TextInput
                value={key}
                onSubmitEditing={pencarian}
                onChangeText={value => setKey(value)}
                selectionColor={'#FFF'}
                autoCapitalize="none"
                autoFocus
                style={{
                  paddingLeft: 20,
                  borderWidth: 1,
                  height: 45,
                  borderRadius: 10,
                  borderColor: '#FFF',
                  color: '#FFF',
                  flexDirection: 'row',
                  fontSize: 18,
                  justifyContent: 'center',
                }}
              />
            </View>
          </View>
        </View>
        {cari && (
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
              <Icon
                type="ionicon"
                name="search"
                color={colors.primary}
                size={16}
              />
              <Text
                style={{
                  fontFamily: 'Montserrat-SemiBold',
                  color: colors.primary,
                  left: 10,
                  fontSize: 16,
                }}>
                Kata Kunci "{key}"
              </Text>
            </View>
            <FlatList
              numColumns={2}
              data={data}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
        )}
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
