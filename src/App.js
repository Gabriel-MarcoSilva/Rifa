import './App.css';

import Header from './components/Header';
import Contato from './Contato';
import Content from "./Content";
import Footer from "./Footer";
import Produto from './Produto';
import Rifas from './Rifas';

function App() {
  return (
    <main>
      <Header/>
      <Contato />
      <Produto />
      <Rifas />
      <Content />
      <Footer />
    </main>
  );
}

export default App;
