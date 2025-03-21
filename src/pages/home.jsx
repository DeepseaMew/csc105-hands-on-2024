import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

function Home() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white px-12">
            <section class="flex ">
                <div class="flex-1 ">
                    <p className="text-xl  mt-8">Hello, It's me</p>
                    <h2 className="text-4xl font-bold mt-8">Artist Seamew</h2>
                    <p className="text-xl  font-bold mt-4">I'm a Cat Water</p>
                    <p class="text-base mt-4 text-gray-800">
                        Please hold your breath as we dive into the sea of seal with Cat Water Seamew.
                    </p>
                    <div className=" cursor-pointer flex gap-3 mt-5 ">
                        <FaSquareInstagram size={'2em'}/>
                        <FaSquareXTwitter size={'2em'}/>
                        <FaFacebook size={'2em'}/>
                    </div>
                    <button className=" cursor-pointer bg-cyan-950 hover:bg-cyan-700 mt-6 px-6 py-3 text-white font-bold rounded-full w-fit shadow-lg">
                        My Portfolio
                    </button>
                </div>

                <div class="w-1/2">
                    <img src="src\image\GeFu6tBaQAA5Sun.png" class="sm:w-77 lg:w-99"></img>
                </div>
            </section>
      </div>
    ) 
}

export default Home;

