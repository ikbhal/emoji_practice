import React, { useState } from 'react';
import Picker from 'emoji-picker-react';

const App = () => {
  const [chosenEmoji, setChosenEmoji] = useState(null);

 
  var fruits = { apple: "🍏", banana: "🍌", watermelon: "🍉", grape: "🍇", kiwi: "🥝"};
  var fruitNames = Object.keys(fruits);// apple, banana..
  console.log("fruits", fruits);

  const sayFruit = (name) => {
    return (
      <div>
        { name + " = " + fruits[name]}

      </div>
    );
  }
  return (
    <div>
    
      <h1>Fruits</h1>

      {
        fruitNames.map(sayFruit)
      }
      
    </div>
  );
};

export default App;