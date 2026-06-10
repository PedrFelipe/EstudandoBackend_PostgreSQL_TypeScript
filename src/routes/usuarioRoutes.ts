const express = require("express");
const router = express.Router();

const usuarioController = require ("../controllers/usuarioController");
const logMiddleWare = require ("../middlewares/logMiddleware")


router.get("/", logMiddleWare.avisarAcesso, usuarioController.listarUsuarios);

router.get("/:id", usuarioController.procurarUsuario);

router.post("/", usuarioController.criarUsuarios);

router.put("/:id", usuarioController.editarUsuario);

router.delete("/:id", usuarioController.deletarUsuario);



module.exports = router;
