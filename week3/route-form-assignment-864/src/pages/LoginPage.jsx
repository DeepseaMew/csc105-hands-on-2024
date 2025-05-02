import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';

const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email!' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters long.' }),
});

const LoginPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log('Login Data:', data);
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-200 " >
    <div className="w-full max-w-md p-6 contianer bg-white rounded-2xl shadow-2xl">
      <h2 className="text-center text-2xl mt-3 mb-3 font-bold">LOGIN</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="pb-3">
          <label >Email</label><br/>
          <input type="email" placeholder="Email"  {...register('email')} className="w-full border-1 px-2 py-2 rounded-xl" />
          {errors.email && <p className="text-red-600">{errors.email.message}</p>}
        </div>
        <div>
          <label>Password</label><br/>
          <input type="password" placeholder="Password" {...register('password')} className="w-full border-1 px-2 py-2 rounded-xl" />
          {errors.password && <p className="text-red-600">{errors.password.message}</p>}
          <p>Don't have an account? <button onClick={()=>navigate("/signup")} className="text-black font-bold cursor-pointer">
                Register
              </button></p>
        </div>
        <button type="submit" className="bg-blue-800 text-white mt-3 w-full p-2 rounded-full hover:bg-blue-900 cursor-pointer" >Login</button>
      </form>
    </div>
    </div>
  );
}

export default LoginPage
