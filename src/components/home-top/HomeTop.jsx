import React, { useEffect } from 'react'
import './HomeTop.scss'
import Banner from '../../assets/images/Homepage.webp'
import { Button } from '../../utils/Utils'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadProducts } from '../../redux/actions/product-actions'
import CategoryItems from '../categoryItems/CategoryItems'
const HomeTop = () => {
  return (
    <div className='home-top'>
      <CategoryItems />
      <div className="home-top-wrapper">
        <div className="home-wrapper-details">
          <h3 className="additional-title">
            ANTI-AGING ESSENTIALS
          </h3>
          <h1 className="title">
            2 Free Deluxe Samples
          </h1>
          <p className="desc">
            Choose 2 free deluxe samples with every order! Select from 10 award-winning, clinically proven formulas.
          </p>
          <Button text="Shop Now" />
        </div>
        <div className="home-top-img">
          <Link to={"/collections/offers"}><img src={Banner} alt="" /></Link>
        </div>
      </div>
    </div>
  )
}

export default connect(null, { loadProducts })(HomeTop)