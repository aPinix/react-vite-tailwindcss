import { useEffect } from 'react';

import reactLogo from './assets/images/react-logo.svg';
import tailwindcssLogo from './assets/images/tailwindcss-logo.svg';
import viteLogo from './assets/images/vite-logo.svg';
import CustomClassComponent from './components/CustomClassComponent';
import CustomFunctionalComponent from './components/CustomFunctionalComponent';

import './App.scss';

function App() {
  useEffect(() => {
    setWindowHeight();
  });

  function setWindowHeight() {
    const appHeight = window.innerHeight;
    document.documentElement.style.setProperty('--app-height', `${appHeight}px`);
  }

  return (
    <div className="App">
      <div className="flex h-full flex-col items-center justify-center gap-8">
        <div className="flex">
          <h1 className="flex items-center gap-3 text-4xl font-bold text-slate-600">
            <div className="flex flex-nowrap gap-2">
              <a href="https://reactjs.org" target="_blank" rel="noreferrer">
                <img src={reactLogo} className="w-10" alt="React logo" />
              </a>
              <span className="text-sky-400">React</span>
            </div>
            <span>+</span>
            <div className="flex flex-nowrap gap-2">
              <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
                <img src={viteLogo} className="w-10" alt="Vite logo" />
              </a>
              <span className="text-indigo-500">Vite</span>
            </div>
            <span>+</span>
            <div className="flex flex-nowrap gap-2">
              <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
                <img src={tailwindcssLogo} className="w-10" alt="TailwindCSS logo" />
              </a>
              <span className="text-slate-600">tailwindcss</span>
            </div>
          </h1>
        </div>

        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <CustomClassComponent title={'Title'} cls={'text-sky-500'} />
            <CustomClassComponent title={'Title'} description={'This is a description'} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <CustomFunctionalComponent title={'Title'} cls={'text-sky-500'} />
            <CustomFunctionalComponent title={'Title'} description={'This is a description'} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
