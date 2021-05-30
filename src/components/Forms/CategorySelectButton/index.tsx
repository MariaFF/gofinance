import React from 'react';
import { View } from 'react-native';

import { Container, Category, Icon, } from './styles';

interface Props {
  title: string;
  onPress: () => void;
}

const CategorySelect = ({ title, onPress }: Props) => {
  return (
    <Container onPress={onPress}> 
      <Category>{title}</Category>
      <Icon name="chevron-down" />
    </Container>
  );
}

export default CategorySelect;