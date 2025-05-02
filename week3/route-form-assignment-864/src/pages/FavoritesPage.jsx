import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const FavoritesPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { number, q, size } = data;
    navigate(`/favorite/${number}?q=${q}&size=${size}`);
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-slate-200 " > 
      <div className="w-full max-w-md p-6 contianer bg-white rounded-2xl shadow-2xl">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Number: </label><br/>
          <input type="number" className="border-1" {...register('number', { min: 1, max: 100 })} />
          {errors.number && <p className="text-red-600">Number must be between 1 and 100</p>}
        </div>
        <div>
          <label>Query Parameter: </label><br/>
          <select {...register('q')} className="border-1" >
            <option value="love">Love</option>
            <option value="like">Like</option>
          </select>
        </div>
        <div>
          <label>Size Parameter: </label><br/>
          <select {...register('size')} className="border-1" >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-800 text-white mt-3 w-full p-2 rounded-full hover:bg-blue-900 cursor-pointer">Submit</button>
      </form>
      </div>
        </div>
    </div>
  );
}

export default FavoritesPage
