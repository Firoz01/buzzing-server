/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import bcrypt from 'bcrypt';
import UserModel from '../Models/userModel.js';
//Registering a new User

// eslint-disable-next-line prettier/prettier
export const registerUser = async (req, res) => {
  const { userName, password, firstName, lastName } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(password, salt);

  const newUser = new UserModel({
    userName,
    password: hashedPass,
    firstName,
    lastName
  });
  try {
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const loginUser = async (req, res) => {
  const { userName, password } = req.body;
  try {
    const user = await UserModel.findOne({ userName: userName });
    if (user) {
      const validity = await bcrypt.compare(password, user.password);

      // eslint-disable-next-line no-unused-expressions
      validity
        ? res.status(200).json(user)
        : res.status(401).json('Wrong Password');
    } else {
      res.status(404).json('user dose not exists');
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
