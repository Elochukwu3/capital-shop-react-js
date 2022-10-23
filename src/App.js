
import './App.css';
import Categories from './body/Categories';
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
          <Main>
            <Categories name={"Men's fashion"} imgUrl={'./images/yellow.webp'}/>
            <Categories name={"Women's fashion"} imgUrl={'./images/brownhandbag.png'}/>
            <Categories name={'Baby Fashion'} imgUrl={'./images/pinkoutfit.png'}/>
          </Main>
        </section>
      </main>
    </div>
  );
}

export default App;
