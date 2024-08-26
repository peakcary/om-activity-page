import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './App.css';  // Optional: Could be removed if Tailwind is enough

function App() {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];

  const handleClick = (index) => {
    setSelectedTab(index);
  };

  const animation = useSpring({
    transform: `translateX(${-selectedTab * 100}%)`,
    config: { tension: 300, friction: 30 },
  });

  return (
    <div className="flex flex-col items-center mt-12">
      <div className="flex space-x-4 mb-6">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-md border ${
              selectedTab === index
                ? 'bg-blue-500 text-white border-transparent'
                : 'bg-gray-100 text-gray-800 border-gray-300'
            } transition-colors duration-300`}
            onClick={() => handleClick(index)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="relative w-72 h-48 overflow-hidden border border-gray-300">
        <animated.div
          className="flex w-[300%]"
          style={animation}
        >
          <div className="w-full flex justify-center items-center bg-gray-100 text-xl border-r border-gray-300">
            {`This is ${tabs[0]} content`}
          </div>
          <div className="w-full flex justify-center items-center bg-gray-100 text-xl border-r border-gray-300">
            {`This is ${tabs[1]} content`}
          </div>
          <div className="w-full flex justify-center items-center bg-gray-100 text-xl">
            {`This is ${tabs[2]} content`}
          </div>
        </animated.div>
      </div>
    </div>
  );
}

export default App;
