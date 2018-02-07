import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import mockLocalStorage from './mockLocalStorage';

dotenv.load();

const token = jwt.sign({
  id: 1,
  username: 'Gbenga',
  image_url: 'iiiii'
}, process.env.secret, {
  expiresIn: 86400
});

window.localStorage = mockLocalStorage;

const mockAuthCheck = jest.fn(() => {
  mockLocalStorage.setItem('jwtToken', token);
  return true;
});

export default mockAuthCheck;
