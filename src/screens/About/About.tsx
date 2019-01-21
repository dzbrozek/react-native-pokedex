import React from 'react';
import { Text, StyleSheet, ScrollView, FlatList, View } from 'react-native';
import Card from '../../components/Card';
import { theme } from '../../constants';
import CreditItem from '../../components/CreditItem';
import { ListItemProps } from '../../common/types';
import { CREDITS } from '../../constants/creadits';

class About extends React.Component {
  static navigationOptions = {
    title: 'About',
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Card style={styles.card}>
          <Card.Header>Info</Card.Header>
          <Card.Body>
            <Text style={styles.text}>Simple React Native app displaying information about pokemons.</Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>Credits</Card.Header>
          <Card.Body style={styles.credits}>
            <FlatList
              data={CREDITS}
              horizontal={false}
              // @ts-ignore
              keyExtractor={(item:ListItemProps, index) => String(index)}
              renderItem={({ item }) => <CreditItem item={item}/>}
              ItemSeparatorComponent={() => <View style={styles.itemSeparator}/>}
            />
          </Card.Body>
        </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: theme.layout.padding.md,
  },
  card: {
    marginBottom: 16,
  },
  credits: {
    padding: 0,
  },
  text: {
    fontFamily: theme.fonts.regular,
    fontSize: theme.fonts.fontSizeMedium,
  },
  itemSeparator: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.lightGrey,
  },
});

export default About;
