import React from 'react';
import { ScrollView, FlatList } from 'react-native';
import Card from '../../components/Card';
import CreditItem from '../../components/CreditItem';
import { ListItemProps } from '../../common/types';
import { CREDITS } from '../../constants/creadits';
import { NavigationScreenProps } from 'react-navigation';
import { InfoCard, CardBody, ItemSeparator, CardText, styles } from './styles';

class About extends React.PureComponent<NavigationScreenProps> {
  static navigationOptions = {
    title: 'About',
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <InfoCard>
          <Card.Header>Info</Card.Header>
          <Card.Body>
            <CardText>Simple React Native app displaying information about pokemons.</CardText>
          </Card.Body>
        </InfoCard>

        <Card>
          <Card.Header>Credits</Card.Header>
          <CardBody>
            <FlatList
              data={CREDITS}
              horizontal={false}
              // @ts-ignore
              keyExtractor={(item:ListItemProps, index) => String(index)}
              renderItem={({ item }) => <CreditItem item={item}/>}
              ItemSeparatorComponent={() => <ItemSeparator/>}
            />
          </CardBody>
        </Card>
      </ScrollView>
    );
  }
}

export default About;
