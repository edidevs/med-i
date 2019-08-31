/* eslint-disable react/prop-types */
import React from 'react';

import { FlatGrid } from 'react-native-super-grid';

import { ItemView, ItemGridText, BulletPointView } from '../styledComponents';

const SymptomsView = ({ symptoms }) => (
  <FlatGrid
    spacing={4}
    itemDimension={150}
    items={symptoms}
    renderItem={({ item }) =>
      item ? (
        <ItemView>
          <BulletPointView />
          <ItemGridText>{item}</ItemGridText>
        </ItemView>
      ) : null
    }
  />
);

export default SymptomsView;
