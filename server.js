require("dotenv").config();

const express = require("express");
const conectarBanco = require("./src/config/database");
const vagaRoutes = require("./src/routes/vagaRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/vagas", vagaRoutes);

// Rota inicial
app.get("/", (req, res) => {
  res.json({
    mensagem: "API Trampo Certo funcionando!"
  });
});

// Iniciar a aplicação
const iniciarServidor = async () => {
  try {
    await conectarBanco();

    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  } catch (erro) {
    console.error("Não foi possível iniciar a API.");
    process.exit(1);
  }
};

iniciarServidor();