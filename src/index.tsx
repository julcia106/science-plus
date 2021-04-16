import React from 'react'; //biblioteka- wszystkie koncepty i funkcje REACT
import ReactDOM from 'react-dom'; //biblioteka- odpowiada za renderowanie efektów w przeglądarce
import {Reset} from 'styled-reset'; 

/* dodajemy styled reset dlatego, że każda przeglądarka ma
swoje standardowe stylowanie, marginesy, paddingi, wielkości fontów itp.
reset powoduje zresetowanie tych wszysykich domyślnych styli
analogicznie w przypadku html i css też można dodawać taki reset.
Niżej ten reset jest nad MainPage. StyledReset jest biblioteką, która słóży do tworzenia komponentów stylowych.
React jest oparty o komponenty, żeby były one jak najbardziej atomizowane- czyli małe */

import MainPage from './components/MainPage/MainPage';

ReactDOM.render( // funkcja
  <>
    <Reset /> 
    <MainPage />  
  </>,
  document.getElementById('root')
);

//główny plik, z niego wychodzimy

// najprostrzy komponent to po prostu funkcja np. <MainPage/>
