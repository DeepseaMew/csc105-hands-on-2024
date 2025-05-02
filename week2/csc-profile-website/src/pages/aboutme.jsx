import React from 'react'

const AboutMe = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white px-12">
            <section class="flex ">
                <div class="w-1/2 mr-8 ">
                    <img src="src\image\1c7155f928b1b9dcf71f054be08c7f3c.jpg" class="sm:w-77 lg:w-99"></img>
                </div>
                <div className="flex flex-col justify-center max-w-xl mx-auto">
                    <h2 className="text-3xl font-bold mb-2">About Me</h2>
                    <p className="text-lg font-semibold mb-4">Artist & Cat Water</p>
                    <p className="text-gray-800">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, 
                        repudiandae. Placeat deserunt impedit error cum libero consequuntur quibusdam nihil itaque amet ratione, possimus 
                        voluptatum in quidem molestiae. Esse, inventore provident!.
                    </p>
                </div>
            </section>
      </div>
    )
}

export default AboutMe
