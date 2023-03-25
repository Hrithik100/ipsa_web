import { CheckroomOutlined, ContentCutRounded, HotelOutlined, LocalCafeOutlined, LocalCarWashOutlined, LocationOnOutlined, SearchOutlined, SpaOutlined } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/header/Header'
import "./home.css"

export const Home = () => {
  return (
    <>
    <Header/>
     <div className='homesection'>
      <div className='homesectionheader'>
        <h2>Experience convenience at your fingertips!</h2>
        <h3>Discover, Book, and Enjoy Local Services with ease.</h3>
      </div>
      <div className='homesectionfilter'>
        <div className='homesectionfilterleft'>
          <Link to="/shop">
          <SearchOutlined style={{color:"#434343",fontSize:28}}/>
          </Link>
          <input id='whatinput' type="text" placeholder='What' />
        </div>
        <div className='homesectionfilterright'>
          <Link to="/shop">
          <LocationOnOutlined style={{color:"#434343",fontSize:28}}/>
          </Link>
          <input type="text" id='where' placeholder='Where' />
        </div>
      </div>
      <div className='categories'>
        <div className='categoriesheader'>
          <h1>Browse by Categories</h1>
        </div>
        <div className='categoriesitems'>
          <div className='categoriesitem'>
          <ContentCutRounded style={{transform:"rotate(-90deg)",fontSize:45,color:"#ADADAD"}}/>
              <span>Salon</span>
          </div>
          <div className='categoriesitem'>
          <SpaOutlined style={{fontSize:45,color:"#ADADAD"}}/>
              <span>Spa</span>
          </div>
          <div className='categoriesitem'>
            <LocalCarWashOutlined style={{fontSize:45,color:"#ADADAD"}}/>
              <span>Car Wash</span>
          </div>
          <div className='categoriesitem'>
            <CheckroomOutlined style={{fontSize:45,color:"#ADADAD"}}/>
              <span>Boutique</span>
          </div>
          <div className='categoriesitem'>
            <LocalCafeOutlined style={{fontSize:45,color:"#ADADAD"}}/>
              <span>Cafe</span>
          </div>
          <div className='categoriesitem'>
            <HotelOutlined style={{fontSize:45,color:"#ADADAD"}}/>
              <span>Hotel</span>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
