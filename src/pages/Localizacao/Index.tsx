import React from 'react';
import Header from '../../components/Header/Index';
import SearchBar from '../../components/SearchBar/Index';
import Maps from '../../components/Maps/Index';

const Localizacao: React.FC = () => {
  return (
    <>
      <Header />
      <SearchBar placeHolder="Localizar" />
      <Maps />
    </>
  );
};

export default Localizacao;
