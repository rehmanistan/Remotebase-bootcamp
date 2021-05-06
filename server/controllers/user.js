const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const PRIV_KEY = require("../auth/key").secretOrKey;

const User = require("../database/models/user");

const signUp = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });

    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await User.create({
      email,
      password: hashedPassword,
    });

    const token = jwt.sign(
      { email: newUser.email, id: newUser._id },
      PRIV_KEY,
      { expiresIn: "24h" }
    );

    res.status(201).json({ newUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong when signing up" });
    console.log(error);
  }
};

const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser)
      return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      PRIV_KEY,
      { expiresIn: "1h" }
    );

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong when signing in" });
    console.log(error);
  }
};

// const signOut = async (req, res) => {
//   try {
//     if (req.user) {
//       req.logout()
//       res.status(200).send({ message: 'User succesfully logged out' });
//     } else {
//       res.status(200).send({ message: 'No user to logout' });
//     }
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

// const getUser = async (req, res) => {
//   try {
//     console.log('======== user !! ========')
//     console.log(req.user)
//     if (req.user) {
//       res.json({ user: req.user })
//     } else {
//       res.json({ user: null });
//     }
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

// module.exports = { signUp, signIn, signOut, getUser }
module.exports = { signUp, signIn };
