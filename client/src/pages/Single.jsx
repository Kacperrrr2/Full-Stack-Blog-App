import React from 'react'
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';
const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src='https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
        <div className="user">
          <img src='https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
        </div>
        <div className="info">
          <span>John</span>
          <p>Posted 2 days ago</p>
        </div>
        <div className='edit'>
          <Link to={`/write?edit=2`}>
          <img src={Edit}/>
          <img src={Delete}/>
          </Link>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
           A possimus excepturi aliquid nihil cumque ipsam facere aperiam
            at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!</p>
      </div>
      <div className="menu">
      <Menu/>

      </div>
    </div>
  )
}

export default Single