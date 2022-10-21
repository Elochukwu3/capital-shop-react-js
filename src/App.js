
import './App.css';
import Main from './body/Main';
import FirstHeader from './header/FirstHeader';
import HeaderTwo from './header/HeaderTwo';
import SubHeader from './header/SubHeader';


function App() {
  return (
    <div className="App">
      <section>
      <FirstHeader />
      <HeaderTwo/>
      <SubHeader/>
      </section>
      <main>
        <section>
          <Main/>
        </section>
      </main>
    </div>
  );
}

export default App;
