const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");
const UserModel = require("../models/userModel");

// Rotas públicas
router.post("/register", register);
router.post("/login", login);

// Exemplo de rota privada (protegida pelo JWT)
// Testa com: GET /api/auth/me — header: Authorization: Bearer <token>
router.get("/me", authMiddleware, (req, res) => {
  const user = UserModel.findById(req.user.id);
  if (!user) {
    return res.status(404).json({ message: "Usuário não encontrado." });
  }
  res.json({
    user: { id: user.id, name: user.name, email: user.email },
  });
});

module.exports = router;
