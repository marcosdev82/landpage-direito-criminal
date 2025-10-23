import Image from "next/image";
import Banner from "./components/banner";
import Servicos from "./components/servicos";
import styles from './page.module.css';
import ComoFunciona from "./components/como-funciona";
import QuemSomos from "./components/quem-somos";
import Footer from "./components/footer";
const imageUrl = "./visao-de-escalas-de-justica-3d.jpg";

export default function Home() {
  const sectionStyle = {
    width: "100%",
    height: "600px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2rem",
    color: "#fff",
  };

  return (
    <main className={styles.main} style={{ backgroundImage: `url(${imageUrl})` }}>
      <Banner />
      <Servicos />
      <ComoFunciona />
      <QuemSomos />
    </main>
  );
}
