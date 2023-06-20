import logo from './logo.svg';
import './App.css';
import i18n from './i18n';
import Welcome from './Welcome';
import { Suspense, useState } from 'react';
import LocaleContext from './LocaleContext';
import Header from './components/MainHeader';

function Loading(){
  return(
    <>Loading...</>
  )
}

function App() {
  const[locale,setLocale] = useState(i18n.language);

  i18n.on('languageChanged',(lng)=>setLocale(i18n.language));

  const handleChange = (event)=>{
    i18n.changeLanguage(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
        <LocaleContext.Provider value={{locale,setLocale}}>
          <Suspense fallback={<Loading/>}>
            <div>
              <label>Select language : </label>
              <select value={locale} onChange={handleChange}>
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="hn">Hindi</option>
                <option value="gr">German</option>
              </select>
            </div>
            <Welcome/>
          </Suspense>
        </LocaleContext.Provider>
        </div>
      </header>
    </div>
  );
}

export default App;
