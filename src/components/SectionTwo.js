import React from 'react'

const SectionTwo = () => {
  return (
    <>
    <div className="container-xl mt-16">
        <div>
            <h3 className='text-2xl text-green-700'>WHAT WE DO</h3>
            <h2 className='text-3xl font-semibold mt-2'>We help thousands of people <br/> reduce food waste. </h2>

            <div className="gap-16 columns-3 mt-2 p-6">
                <div className="w-72 h-64 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto bg-green-100 shadow-lg rounded-2xl overflow-hidden">
                    <div className="p-6">
                        <img src="quality_image.jpg" className="rounded-2xl"/>
                        <h2 className="mt-2 font-semibold text-xl">Quality Recipes</h2>
                    </div>
                </div>
                
                <div className="w-72 h-64 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto bg-green-100 shadow-lg rounded-2xl overflow-hidden">
                    <div className="p-6">
                        <img src="save.jpg" className="rounded-2xl"/>

                        <h2 className="mt-2 font-semibold text-xl">Save on Groceries </h2>

                    </div>
                </div>

                <div className="w-72 h-64 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto bg-green-100 shadow-lg rounded-2xl overflow-hidden">
                    <div className="p-6">
                        <img src="zero.webp" className="rounded-2xl img-fluid w-60 h-40"/>

                        <h2 className="mt-2 font-semibold text-xl">Zero Food Waste</h2>

                    </div>
                </div>
            </div>

        </div>

    </div>

        
    </>
  )
}

export default SectionTwo