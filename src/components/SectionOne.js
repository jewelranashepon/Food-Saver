import React from 'react';


const SectionOne = () => {
  return (
    <>
    <div className='container-xl mt-16'>
        <div className="flex gap-2 px-2">
            <div className="w-1/2 flex justify-center">
                <div>
                    <h1 className='text-6xl text-left font-semibold'>Reduce Food <br/> Waste and <span className="text-green-600"> Save<br/> Money</span></h1>
                    <p className='text-left text-xl mt-6 text-black'>We want to tackle food waste by recommending<br/> recipes based on leftover ingredients in the<br/> fridge at home.</p>
                    <div className='text-left mt-6'>
                        <button className="bg-green-700 py-2 px-6 rounded-full text-white font-semibold">Get Started</button>
                    </div>

                    <div className='mt-6 flex gap-2'>
                        <img src='diet.png' className="h-10 w-10 rounded-full"/>
                        <div>
                            <h3 className='font-semibold'>Our Happy Customers</h3>
                            <div className="flex gap-2">
                                <img src='star.png' className="w-4 h-4 mt-1"/>
                                <p>4.8 (450 reviews)</p>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

            <div className="w-1/2">
                <img src='girl.avif' className="rounded-3xl p-3"/>

            </div>

        </div>

    </div>
        
    </>
  )
}

export default SectionOne