
const express = require("express");
const router = express.Router();

const Profissional = require("../models/Profissional");

// CADASTRAR profissional
router.post("/", async (req, res) => {
  try {
    const novoProfissional = new Profissional(req.body);
    const profissionalSalvo = await novoProfissional.save();

    res.status(201).json(profissionalSalvo);
  } catch (erro) {
    res.status(400).json({
      mensagem: "Erro ao cadastrar profissional.",
      erro: erro.message,
    });
  }
});

// LISTAR profissionais
router.get("/", async (req, res) => {
  try {
    const profissionais = await Profissional.find();

    res.status(200).json(profissionais);
  } catch (erro) {
    res.status(500).json({
      mensagem: "Erro ao listar profissionais.",
    });
  }
});

// EDITAR profissional
router.put("/:id", async (req, res) => {
  try {
    const profissionalAtualizado =
      await Profissional.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );

    if (!profissionalAtualizado) {
      return res.status(404).json({
        mensagem: "Profissional não encontrado.",
      });
    }

    res.status(200).json({
      mensagem: "Profissional atualizado com sucesso!",
      profissional: profissionalAtualizado,
    });
  } catch (erro) {
    res.status(400).json({
      mensagem: "Erro ao atualizar profissional.",
      erro: erro.message,
    });
  }
});

// EXCLUIR profissional
router.delete("/:id", async (req, res) => {
  try {
    const profissionalExcluido =
      await Profissional.findByIdAndDelete(req.params.id);

    if (!profissionalExcluido) {
      return res.status(404).json({
        mensagem: "Profissional não encontrado.",
      });
    }

    res.status(200).json({
      mensagem: "Profissional excluído com sucesso!",
    });
  } catch (erro) {
    res.status(400).json({
      mensagem: "Erro ao excluir profissional.",
      erro: erro.message,
    });
  }
});

module.exports = router;
