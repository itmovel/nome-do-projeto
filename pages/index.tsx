import React, { useState } from 'react';
import Screen1 from '../components/screens/Screen1';
import Screen2 from '../components/screens/Screen2';
import Screen3 from '../components/screens/Screen3';
import Screen4 from '../components/screens/Screen4';

const HomePage = () => {
  const [screen, setScreen] = useState(1);

  const renderScreen = () => {
    switch (screen) {
      case 1:
        return <Screen1 setScreen={setScreen} />;
      case 2:
        return <Screen2 setScreen={setScreen} />;
      case 3:
        return <Screen3 setScreen={setScreen} />;
      case 4:
        return <Screen4 setScreen={setScreen} />;
      default:
        return <Screen1 setScreen={setScreen} />;
    }
  };

  return <div>{renderScreen()}</div>;
};

export default HomePage;