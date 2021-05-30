import React from 'react';
import { FlatList } from 'react-native';
import Button from '../../components/Forms/Button';
import { categories } from '../../utils/categories';

import {
  Container,
  Header,
  Title,
  Category,
  Icon,
  Name,
  Separator,
  Footer,
} from './styles';

interface Category {
  key: string;
  name: string;
}

interface Props {
  category: Category;
  setCategory: (category: Category) => void;
  closeSelectCategory: () => void;
}

const CategorySelect = ({
  category,
  closeSelectCategory,
  setCategory
}: Props) => {

  function handleCategorySelect(category: Category) {
    setCategory(category)
  }

  return (
    <Container>
      <Header>
        <Title>Categoria</Title>
      </Header>

      <FlatList
        keyExtractor={(item) => item.key}
        data={categories}
        ItemSeparatorComponent={() => <Separator />}
        renderItem={({ item }) => (
          <Category
            onPress={() => handleCategorySelect(item)}
            isActive={category.key === item.key}
          >
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </Category>
        )}
        style={{ flex: 1, width: '100%' }}
      />

      <Footer>
        <Button title="Selecionar"
          onPress={closeSelectCategory}
        />
      </Footer>
    </Container>
  );
}

export default CategorySelect;