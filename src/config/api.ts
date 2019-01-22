import ApolloClient from 'apollo-boost';
import { API_ENDPOINT } from './settings';

export default new ApolloClient({
  uri: API_ENDPOINT,
});
