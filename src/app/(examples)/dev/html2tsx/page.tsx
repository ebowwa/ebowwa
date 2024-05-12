"use client";
// this component takes html scripts and makes typescript nextjs 14 app router components from the html acting as a convertor
import ConvertHTMLToTSX from './ConvertHTMLToTSX';

const App = () => {
  return (
    <div>
      <ConvertHTMLToTSX />
    </div>
  );
};

export default App;
