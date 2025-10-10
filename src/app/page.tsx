import Image from "next/image";
import Banner from "./components/banner";
import Servicos from "./components/servicos";
import styles from './page.module.css';
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
      <section style={{ ...sectionStyle }}>
        <div className="conainer">
          <div className="content">
            <div className="boxText">
              <h1>QUEM SOMOS</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="boxImage">
              {/* <Image src="" alt="Quem somos" width={500} height={300} /> */}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
