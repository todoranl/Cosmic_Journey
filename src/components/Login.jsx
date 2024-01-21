import React, { useState } from 'react';
import { auth } from './firebase-config'; // Asigură-te că ai acest fișier configurat corect
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const signInWithEmail = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      // Logarea a reușit, redirecționează utilizatorul
    } catch (error) {
      console.error(error.message);
      // Afișează un mesaj de eroare
      navigate('/form');
    }
   
  };


  // Într-un scenariu real, ai gestiona și login cu Facebook, Twitter, Google
  const signInWithProvider = async (providerName) => {
    try {
      let provider;
      if (providerName === 'google') {
        provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        // Aici poți prelucra rezultatul autentificării, de exemplu:
        // const user = result.user;
        // Redirecționează utilizatorul sau actualizează starea aplicației
        navigate('/form'); // Redirecționează către Home  
    }
      // Adaugă aici logica pentru alți provideri, dacă este necesar
    } catch (error) {
      console.error(error.message);
      // Gestionează erorile aici
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-800 to-blue-600">
      <div className="bg-blue-900 text-white py-8 px-4 shadow-md rounded-lg max-w-sm">
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Sign Up</h2>
          <form onSubmit={signInWithEmail}>
            <div className="mb-4">
              <input 
                type="email" 
                className="w-full p-2 text-blue-900" 
                placeholder="Email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <input 
                type="password" 
                className="w-full p-2 text-blue-900" 
                placeholder="Password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
            >
              Login
            </button>
          </form>
        </div>
        <div className="flex items-center justify-between my-4">
          <hr className="w-full" /> <span className="p-2 text-white">OR</span> <hr className="w-full" />
        </div>
        <div className="flex justify-between">
          <button 
            className="flex-1
            mr-2 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded inline-flex items-center justify-center"
            onClick={() => signInWithProvider('facebook')}
            >
            <i className="fab fa-facebook-f mr-2"></i> Facebook
            </button>
            <button
            className="flex-1 ml-2 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded inline-flex items-center justify-center"
            onClick={() => signInWithProvider('twitter')}
            >
            <i className="fab fa-twitter mr-2"></i> Twitter
            </button>
            <button
            className="flex-1 ml-2 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded inline-flex items-center justify-center"
            onClick={() => signInWithProvider('google')}
            >
            <i className="fab fa-google mr-2"></i> Google
            </button>
            </div>
            <div className="mt-4">
            <p className="text-center text-sm">
            Already have an account? <a href="/signin" className="text-blue-300 hover:text-blue-200">Sign In</a>
            </p>
            </div>
            </div>
            </div>
            );
            };
            
            export default Login;