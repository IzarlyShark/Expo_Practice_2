import React from 'react';
import { FlatList, RefreshControl, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import LanguageCard from './components/LanguageCard';

const languages = [
  {
    id: 1,
    language: 'JavaScript',
    experience: '2 года опыта',
    logo: 'https://avatars.dzeninfra.ru/get-zen_doc/9618280/pub_64a8e525b2b7aa001d288630_64a8ebde5a90544259153c4e/scale_1200',
  },
  {
    id: 2,
    language: 'Python',
    experience: '1 год опыта',
    logo: 'https://repository-images.githubusercontent.com/349899895/75ef5700-96ec-11eb-8cf4-bda259e0d772',
  },
  {
    id: 3,
    language: 'Java',
    experience: '3 года опыта',
    logo: 'https://yt3.googleusercontent.com/_kyGVYrqGAOgInKv0_xXWQTc265etVnC6g9OHzxqfArxoyRlcNprei7y1o32Gv9t-THP623Hdg=s900-c-k-c0x00ffffff-no-rj',
  },
];

const App = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  const renderItem = ({ item }) => (
    <LanguageCard 
      language={item.language} 
      experience={item.experience} 
      logo={item.logo} 
    />
  );

  return (
    <FlatList
      data={languages}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
};

export default App;