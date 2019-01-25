import React from 'react';
import { ToastAndroid } from 'react-native';
import { ListItemProps } from '../../common/types';
import { FontAwesome } from '@expo/vector-icons';
import { theme } from '../../constants';
import { Linking } from 'expo';
import { Container, IconContainer, InfoContainer, LinkContainer, Subtitle, Title } from './styles';

interface Props {
  item: ListItemProps;
}

class CreditItem extends React.Component<Props, {}> {
  onPress = () => {
    const { item: { link } } = this.props;

    Linking.canOpenURL(link)
      .then((supported: boolean) => {
        if (!supported) {
          ToastAndroid.show('Link cannot be opened', ToastAndroid.SHORT);
        } else {
          return Linking.openURL(link);
        }
      }).catch(() => ToastAndroid.show('Link cannot be opened', ToastAndroid.SHORT));
  }

  render() {
    const { item: { title, subtitle, icon } } = this.props;
    return (
      <Container onPress={this.onPress}>
        <IconContainer>
          <FontAwesome
            name={icon}
            size={26}
            color={theme.colors.red}
          />
        </IconContainer>
        <InfoContainer testID="info-container">
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </InfoContainer>
        <LinkContainer>
          <FontAwesome
            name="arrow-right"
            size={26}
            color={theme.colors.red}
          />
        </LinkContainer>
      </Container>
    );
  }
}

export default CreditItem;
