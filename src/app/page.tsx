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
      <Banner />
      <Servicos />
      <ComoFunciona />
      <QuemSomos />
      <Contato />
    </main>
  );
}
