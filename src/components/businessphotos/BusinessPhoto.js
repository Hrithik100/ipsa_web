import React from 'react'
import BusinesscoverImage from '../businessimages/BusinesscoverImage'
import BusinessProfileImg from '../businessprofileimage/BusinessProfileImg'
import "./businessphoto.css"

const BusinessPhoto = () => {
  return (
    <div className='businessphotocontainer'>
        <div className='businessphotocontainertop'>
            <div className='businesscoverimage'>
               <BusinesscoverImage/>
            </div>
            <div className='businessprofileimage'>
                
            </div>
        </div>
        <div className='businessphotocontainermid'>
            <BusinessProfileImg/>
        </div>
    </div>
  )
}

export default BusinessPhoto