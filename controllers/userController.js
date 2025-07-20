
const User = require('../models/User');

// Registrar um novo usuário
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Verificar se o usuário já existe
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'Usuário já existe!' });
        }

        // Criar novo usuário
        const user = new User({ name, email, password });
        await user.save();
        res.status(201).json({ message: 'Usuário registrado com sucesso!' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao registrar usuário' });
    }
};

module.exports = { registerUser };
