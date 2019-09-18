/* eslint-disable react/prop-types */
import React from 'react';
import { ScrollView, Linking } from 'react-native';

import ItemList from './ItemList';

import {
  Body,
  Mind,
  Yoga,
  Vegetables,
  Salad,
  Smoking,
  Diabetes,
  Brain,
} from '../../../../assets/Icons';
import {
  physical,
  nutrition,
  diabetes,
  tobacco,
  food,
  mental,
  handleRouteCurry,
} from '../../../utils';

const ListItems = ({
  sick,
  notWell,
  itemTextOne,
  itemTextTwo,
  itemTextThree,
  itemTextFour,
  itemMessageOne,
  itemMessageTwo,
  otherProps,
}) => {
  const screenElements = {};
  const goToScreen = route => handleRouteCurry(otherProps)(route);
  const openLink = link => Linking.openURL(link);
  let {
    itemOne,
    itemTwo,
    itemThree,
    itemFour,
    iconOne,
    iconTwo,
    iconThree,
    iconFour,
  } = screenElements;

  if (sick) {
    itemOne = () => goToScreen('Body');
    itemTwo = () => goToScreen('Mind');
    iconOne = <Body />;
    iconTwo = <Mind />;
  } else if (notWell) {
    itemOne = () => openLink(diabetes);
    itemTwo = () => openLink(tobacco);
    itemThree = () => openLink(food);
    itemFour = () => openLink(mental);
    iconOne = <Diabetes />;
    iconTwo = <Smoking />;
    iconThree = <Salad />;
    iconFour = <Brain />;
  } else {
    itemOne = () => openLink(physical);
    itemTwo = () => openLink(nutrition);
    iconOne = <Yoga />;
    iconTwo = <Vegetables />;
  }
  return (
    <ScrollView>
      <ItemList
        handlePress={itemOne}
        iconName={iconOne}
        itemText={itemTextOne}
        itemMessage={itemMessageOne}
        notWell={notWell}
      />
      <ItemList
        handlePress={itemTwo}
        iconName={iconTwo}
        itemText={itemTextTwo}
        itemMessage={itemMessageTwo}
        notWell={notWell}
      />
      {notWell && (
        <>
          <ItemList
            handlePress={itemThree}
            iconName={iconThree}
            itemText={itemTextThree}
            notWell={notWell}
          />
          <ItemList
            handlePress={itemFour}
            iconName={iconFour}
            itemText={itemTextFour}
            notWell={notWell}
          />
        </>
      )}
    </ScrollView>
  );
};

export default ListItems;
