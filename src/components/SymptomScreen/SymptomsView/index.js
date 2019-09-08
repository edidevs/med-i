/* eslint-disable react/prop-types */
import React from 'react';

import { FlatGrid } from 'react-native-super-grid';

import { ItemView, ItemGridText } from '../styledComponents';
import { CircleView } from '../../../common/styledComponents';

const SymptomsView = ({ symptoms }) => (
  <FlatGrid
    spacing={4}
    itemDimension={150}
    items={symptoms}
    renderItem={({ item }) =>
      item ? (
        <ItemView>
          <CircleView color="#e77565" diameter={12} />
          <ItemGridText>{item}</ItemGridText>
        </ItemView>
      ) : null
    }
  />
);

export default SymptomsView;
