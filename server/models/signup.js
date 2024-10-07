import mongoose from 'mongoose';

const signupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  addresso: { type: String, required: true },
  pincode: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true }
});

// Check if the model is already registered
const Signup = mongoose.models.Signup || mongoose.model('Signup', signupSchema);

export default Signup;
