import React from 'react'
import Nav from '../../Components/Nav/Nav'
import Banner from '../../Components/Banner/Banner'

const NotFoundPage = () => {
  return (
    <div>NotFoundPage
        <Nav />
        <Banner 
        title='This is not the Page you are looking for'
        subtitle='Go back to the homepage'
        />
    </div>
  )
}

export default NotFoundPage