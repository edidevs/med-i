import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';

import { ImageContainer } from '../../common/styledComponents';
import { HappyDisk, PokerDisk, SadDisk } from './styledComponents';
import { screenWidth } from '../../utils/deviceSize';
import HappyFace from './icons/Happy.svg';
import PokerFace from './icons/Poker.svg';
import SadFace from './icons/Sad.svg';
import Cart from './icons/Cart.svg';

const background = require('../../../assets/HomeScreen.png');

const scale = 52;

const HomeScreen = props => (
  <ImageContainer source={background}>
    <SafeAreaView>
      <View
        style={{
          flex: 2,
          paddingLeft: 24,
          paddingRight: 24,
          paddingTop: 24,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <View
          style={{
            justifyContent: 'space-between',
            alignSelf: 'flex-end',
            height: 258,
            paddingLeft: 10,
          }}
        >
          <View
            style={{
              borderRadius: 58,
              height: 108,
              width: 108,
              borderWidth: 5,
              borderColor: 'white',
            }}
          />
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: '#fff',
              paddingBottom: 36,
            }}
          >
            Good morning {'\n'}Laarni
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#68CCD9',
            height: 52,
            width: 52,
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Cart width={30} height={24} />
        </View>
      </View>
      <View
        style={{
          flex: 3,
          backgroundColor: '#fff',
          width: screenWidth,
          padding: 36,
        }}
      >
        <Text style={{ fontSize: 16, color: '#393C50' }}>
          Your latest report
        </Text>
        <View
          style={{
            backgroundColor: '#fb69',
            height: 15,
            borderRadius: 25,
            marginTop: 24,
            marginBottom: 24,
          }}
        />
        <Text style={{ fontSize: 28, fontWeight: '600', color: '#393C50' }}>
          How are you feeling today ?
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <View style={{ alignItems: 'center' }}>
            <HappyDisk>
              <HappyFace width={scale} height={scale} />
            </HappyDisk>
            <Text style={{ fontSize: 16, color: '#393C50' }}>Healthy</Text>
          </View>

          <View style={{ alignItems: 'center' }}>
            <PokerDisk>
              <PokerFace width={scale} height={scale} />
            </PokerDisk>
            <Text style={{ fontSize: 16, color: '#393C50' }}>Healthy/Sick</Text>
          </View>

          <View style={{ alignItems: 'center' }}>
            <SadDisk>
              <SadFace width={scale} height={scale} />
            </SadDisk>
            <Text style={{ fontSize: 16, color: '#393C50' }}>Sick</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  </ImageContainer>
);
export default HomeScreen;
