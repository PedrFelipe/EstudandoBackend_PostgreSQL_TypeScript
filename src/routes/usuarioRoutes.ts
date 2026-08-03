const express = require("express");
const router = express.Router();

const usuarioController = require ("../controllers/usuarioController");
const authController = require ("../controllers/authController");
const logMiddleWare = require ("../middlewares/logMiddleware");
const authMiddleware = require ("../middlewares/authMiddleware");
const roleMiddleware = require ("../middlewares/roleMiddleware")


router.get("/", logMiddleWare.avisarAcesso, usuarioController.listarUsuarios);

router.get("/:id", usuarioController.procurarUsuario);

router.post("/", usuarioController.criarUsuarios);

router.post("/login", authController.login);

router.put("/:id", usuarioController.editarUsuario);

router.delete("/:id", authMiddleware.autenticar, roleMiddleware.somenteAdmin, usuarioController.deletarUsuario);

router.patch("/:id", usuarioController.atualizarUsuario);



module.exports = router;
