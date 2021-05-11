import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import {tan} from 'react-native-reanimated';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';

export default function ListData() {
  const MyList = ({tanggal, nama_pembantu, status}) => {
    return (
      <View
        style={{
          margin: 5,
          borderRadius: 10,
          borderColor: colors.primary,
          borderWidth: 1,
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View style={{flex: 1, padding: 10}}>
            <Text
              style={{
                fontFamily: fonts.secondary[600],
              }}>
              {tanggal}
            </Text>
          </View>
          <View>
            <Text
              style={{
                borderTopRightRadius: 10,
                backgroundColor: colors.primary,
                color: colors.white,
                padding: 10,
              }}>
              {status}
            </Text>
          </View>
        </View>

        <View style={{flex: 1, padding: 10}}>
          <Text
            style={{
              fontFamily: fonts.secondary[400],
              fontSize: 18,
            }}>
            {nama_pembantu}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <ScrollView
        style={{
          padding: 10,
        }}>
        <MyList
          tanggal="11 Mei 2021"
          nama_pembantu="febriana elisabeth mare"
          status="SEDANG DIPROSES"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
