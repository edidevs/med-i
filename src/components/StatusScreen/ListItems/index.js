/* eslint-disable react/prop-types */
import React from 'react';
import { ScrollView, Linking } from 'react-native';

import ItemList from './ItemList';

import { Body, Mind, Yoga, Vegetables } from '../../../../assets/Icons';
import {
  linkOne,
  linkTwo,
  linkThree,
  linkFour,
  linkFive,
  linkSix,
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
  itemMessageThree,
  itemMessageFour,
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
    itemOne = () => openLink(linkThree);
    itemTwo = () => openLink(linkFour);
    itemThree = () => openLink(linkFive);
    itemFour = () => openLink(linkSix);
    iconOne = <Body />;
    iconTwo = <Body />;
    iconThree = <Body />;
    iconFour = <Body />;
  } else {
    itemOne = () => openLink(linkOne);
    itemTwo = () => openLink(linkTwo);
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
      />
      <ItemList
        handlePress={itemTwo}
        iconName={iconTwo}
        itemText={itemTextTwo}
        itemMessage={itemMessageTwo}
      />
      {notWell && (
        <>
          <ItemList
            handlePress={itemThree}
            iconName={iconThree}
            itemText={itemTextThree}
            itemMessage={itemMessageThree}
          />
          <ItemList
            handlePress={itemFour}
            iconName={iconFour}
            itemText={itemTextFour}
            itemMessage={itemMessageFour}
          />
        </>
      )}
    </ScrollView>
  );
};

export default ListItems;
