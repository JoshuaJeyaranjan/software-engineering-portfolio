import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Nav from '../../Components/Nav/Nav'

 

const BlogPage = () => {
  return (
    <div className='blog'>
        <Nav/>
            <Banner
            title='Check out my blog'
            subtitle='Thanks for reading!'
            />
    </div>
  )
}

export default BlogPage