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
    <main>
      <div style={{ ...sectionStyle, backgroundColor: "red" }}>
        <h1>TESTE</h1>
      </div>

      <div style={{ ...sectionStyle, backgroundColor: "green" }}>
        <h1>TESTE</h1>
      </div>

      <div style={{ ...sectionStyle, backgroundColor: "blue" }}>
        <h1>TESTE</h1>
      </div>
    </main>
  );
}
