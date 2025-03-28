import './App.css';
import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function AppWrapper() {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
}

export default AppWrapper;