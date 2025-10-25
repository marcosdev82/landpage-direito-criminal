import { Element } from "react-scroll";
import Banner from "./components/banner";
import Servicos from "./components/servicos";
import styles from './page.module.css';
import ComoFunciona from "./components/como-funciona";
import QuemSomos from "./components/quem-somos";
import Contato from "./components/contato";
const imageUrl = "./visao-de-escalas-de-justica-3d.jpg";

export default function Home() {


  return (
    <main className={styles.main} style={{ backgroundImage: `url(${imageUrl})` }}>
      <div id="banner">
        <Banner/> 
      </div>
      <div id="servicos">
        <Servicos />
      </div>
      <div id="como-funciona">
        <ComoFunciona />
      </div>
      <div id="quem-somos">
        <QuemSomos />
      </div>
      <div id="contato">
        <Contato />
      </div>
    </main>
  );
}
