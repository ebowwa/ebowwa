// app/hex-color-picker/page.tsx
import React, { useState } from 'react';

const HexColorPicker: React.FC = () => {
  const [hexColor, setHexColor] = useState('#000000');

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value;
    setHexColor(newColor);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-8">Hex Color Picker</h1>
      <div className="flex items-center mb-8">
        <input
          type="color"
          value={hexColor}
          onChange={handleColorChange}
          className="w-32 h-32 border-none rounded-full focus:outline-none"
        />
        <input
          type="text"
          value={hexColor}
          onChange={handleColorChange}
          className="ml-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div
        className="w-64 h-64 rounded-full"
        style={{ backgroundColor: hexColor }}
      ></div>
    </div>
  );
};

export default HexColorPicker;