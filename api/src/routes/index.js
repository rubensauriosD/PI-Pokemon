const { Router } = require('express');
const types = require('./types.js');
const pokemons = require('./pokemons.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
router.use('/pokemons', pokemons);
router.use('/types', types);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use(function (err, req, res, next) {
    console.error(err);
    res.status(err.status || 500).send(err.message);
});

module.exports = router;
