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
    <main style={{ backgroundColor: '#200909' }}>
      <div style={{ ...sectionStyle }}>
        <h1>TESTE</h1>
      </div>

      <div style={{ ...sectionStyle }}>
        <h1>TESTE</h1>
      </div>

      <div style={{ ...sectionStyle }}>
        <h1>TESTE</h1>
      </div>
    </main>
  );
}
