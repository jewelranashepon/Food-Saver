import React from 'react';
import ReactStars from "react-rating-stars-component";



const SectionThree = () => {
  return (
    <>
    <div className="container-xl mt-16">
        <div>
            <h3 className='text-2xl text-green-700'>WHAT THEY SAY </h3>
            <h2 className='text-3xl font-semibold mt-2'>What our customers say about us ? </h2>

            <div className="gap-8 columns-3 mt-2 p-10">
                <div className="bg-green-100 shadow-lg rounded-lg overflow-hidden">
                    <div className="p-10">
                        <p className="text-lg text-left">I used to throw away veggies that were about to expire. Now I save money  and reduce food waste “</p>
                        <div className="mt-2">
                        <ReactStars
                            count={5}
                            size={24}
                            activeColor="#ffd700"
                            value={5}
                        />

                        <h3 className="font-semibold text-left mt-2 text-md">-Jessica from Canada</h3>
                        
                        </div>
                    </div>
                </div>

                <div className="bg-green-100 shadow-lg rounded-lg overflow-hidden">
                    <div className="p-10">
                        <p className="text-lg text-left">I feel that I eat out less and get better at cooking by using their easy websites.</p>
                        <div className="mt-2">
                        <ReactStars
                            count={5}
                            size={24}
                            activeColor="#ffd700"
                            value={5}
                        />

                        <h3 className="font-semibold text-left mt-2 text-md">-Mark from USA</h3>
                        
                        </div>
                    </div>
                </div>

                <div className="bg-green-100 shadow-lg rounded-lg overflow-hidden">
                    <div className="p-10">
                        <p className="text-lg text-left">Its easy to use! I love that I can select my ingredients (:</p>
                        <div className="mt-2">
                        <ReactStars
                            count={5}
                            size={24}
                            activeColor="#ffd700"
                            value={4}
                        />

                        <h3 className="font-semibold text-left mt-2 text-md">-Sophia from India</h3>
                        
                        </div>
                    </div>
                </div>

            </div>


        </div>
       
    </div>
   
        
    </>
  )
}

export default SectionThree