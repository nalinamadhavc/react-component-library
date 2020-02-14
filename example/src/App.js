import React, { Component } from 'react'
import ProductCard from 'flight-deals'


export default class App extends Component {
  render () {
     const flights= [
      {
          id: 10,
          image:'./assets/images/destinations/goa.jpg',
          location: 'Goa',
          date:'Sun, 16 Feb ',
          price:' 1,569 INR '
      
      },
      {
          id: 11,
          image:'./assets/images/destinations/delhi.jpg',
          location: 'New Delhi',
          date:'Sun, 16 Feb ',
          price:' 3,230 INR '
      
      },
     
      {
          id: 12,
          image:'./assets/images/destinations/kochi.jpg',
          location: 'Kochi',
          date:'Sun, 16 Feb ',
          price:' 2,054 INR '
      
      },
      {
          id: 13,
          image:'./assets/images/destinations/mumbai.jpg',
          location: 'Mumbai',
          date:'Sun, 16 Feb ',
          price:' 1,800 INR '
      
      }
  ]
    return (
      <div>
        <ProductCard title="Flight promo to Asia and beyond" subTitle="Seats are limited. Book now before they're all gone." location={flights}></ProductCard>
        
      </div>
    )
  }
}
