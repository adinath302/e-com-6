import React from 'react'
import img1 from "../../assets/category/earphone.png"
import img2 from "../../assets/category/macbook.png"
import img3 from "../../assets/category/watch.png"
import Button from '../Shared/Button'

const Category = () => {
    return (
        <div className='py-8 bg-red-300'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {/* first col  */}
                    <div>
                        <div>
                            <div>
                                <p>Enjoy</p>
                                <p>with</p>
                                <p>Earphone</p>
                                <Button
                                    text='Browse'
                                    bgColor={'bg-primary'}
                                    textColor={'text-white'}
                                />
                            </div>
                        </div>
                    </div>
                    {/* second col  */}

                    {/* third col  */}
                </div>
            </div>
        </div>
    )
}

export default Category