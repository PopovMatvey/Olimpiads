import React,{ useState } from 'react';
import '../css/App.css';
import { Button } from './Button';
import { useOutData } from '../hook/outputData';

const buttomsDataArray = [
  {
    text: "Образовательные учреждения",
    href: "https:google.com",
  },
  {
    text: "Олимпиады",
    href: "https:yandex.ru",
  },
  {
    text: "Студенты",
    href: "",
  },
  {
    text: "Задания",
    href: "",
  },
  {
    text: "Преподаватели",
    href: "",
  },
  {
    text: "Результаты участников",
    href: "",
  },
];


function getValues(object: any) {
  let returnedString: string = "";

  for (let key in object) {
    returnedString = returnedString + "   " + object[key];
  }

  return returnedString;
}


function App() {
let index = 0;
let voidHref = "";

// const { outputData } = useOutData(voidHref);

  return (
    <div className='app-content'>
      <div className='header'>
        <h1>Информационная система “Олимпиады по программированию”</h1>
      </div>
      <div className="buttons-block">
        {
          buttomsDataArray.map(element => <Button key={index++} parText={element.text} parHref={element.href}/>)
        }
      </div>
      <div className="output-block">
        {
          //  outputData.map(element => <div key={index++}> <span key={index++}>{getValues(element)}</span></div>)
        }
      </div>
    </div>
  );
}

export default App;
