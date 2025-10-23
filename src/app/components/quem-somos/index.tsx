import styles from './styles.module.scss';

export default function QuemSomos() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.col}>
            <h1>Quem Somos</h1>
            <h2>Estamos aqui para te ajudar</h2>
            <p>
              Atuamos em processos criminais com foco na aplicação e interpretação das normas
              de forma mais favorável aos interesses do cliente.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen
              book. It has survived not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </p>
          </div>

          <div className={styles.boxImage}>
            imagem
          </div>
        </div>
      </div>
    </section>
  );
}
