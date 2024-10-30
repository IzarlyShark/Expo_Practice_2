
import React from 'react';
import { ScrollView, RefreshControl, StyleSheet } from 'react-native';
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
    logo: 'https://banner2.cleanpng.com/20180512/dhe/kisspng-professional-java-programmer-software-development-5af753799c72c9.9684910015261582016408.jpg',
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

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {languages.map((lang) => (
        <LanguageCard 
          key={lang.id} 
          language={lang.language} 
          experience={lang.experience} 
          logo={lang.logo} 
        />
      ))}
    </ScrollView>
  );
};

export default App;
