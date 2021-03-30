import React from 'react';
import ReactDOM from 'react-dom';
import {Reset} from 'styled-reset'; 
/* dodajemy styled reset dlatego, że każda przeglądarka ma
swoje standardowe stylowanie, marginesy, paddingi, wielkości fontów itp.
reset powoduje zresetowanie tych wszysykich domyślnych styli
analogicznie w przypadku html i css też można dodawać taki reset.
Niżej ten reset jest nad MainPage. StyledReset jest biblioteką, która słóży do tworzenia komponentów stylowych.
React jest oparty o komponenty, żeby były one jak najbardziej atomizowane- czyli małe */

import MainPage from './components/MainPage/MainPage';

ReactDOM.render(
  <>
    <Reset /> 
    <MainPage />
  </>,
  document.getElementById('root')
);

//główny plik, z niego wychodzimy