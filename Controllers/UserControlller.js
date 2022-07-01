/* eslint-disable import/extensions */
/* eslint-disable prefer-destructuring */
/* eslint-disable node/no-unsupported-features/es-syntax */
import bcrypt from 'bcrypt';

import UserModel from '../Models/userModel.js';

export const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findById(id);
    if (user) {
      const { password, ...otherDetails } = user._doc;
      res.status(200).json(otherDetails);
    } else {
      res.status(404).json('user does not exits');
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId, currenUserAdminStatus, password } = req.body;

  if (id === currentUserId || currenUserAdminStatus) {
    try {
      if (password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(password, salt);
      }
      const user = await UserModel.findByIdAndUpdate(id, req.body, {
        new: true
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(401).json('Access Denied!');
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId, currenUserAdminStatus } = req.body;
  if (currentUserId || currenUserAdminStatus) {
    try {
      await UserModel.findByIdAndDelete(id);
      res.status(200).json('User deleted successfully');
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(401).json('Access Denied!');
  }
};
