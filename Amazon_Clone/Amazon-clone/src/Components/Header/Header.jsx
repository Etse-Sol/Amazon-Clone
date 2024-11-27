import React, { useContext } from 'react'
import { FaSearch } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import classes from "./header.module.css"
import { BiCart } from "react-icons/bi";
import LowerHeader from './LowerHeader';
import {Link} from "react-router-dom"
import { DataContext } from '../DataProvider/DataProvider';
LowerHeader
const Header = () => {
  const [{basket},dispatch]=useContext(DataContext)
  const totalItem=basket?.reduce((amount,item)=>{
    return item.amount+amount
  },0)
  return (
    <>
      <section className={classes.fixed}>
        <div className={classes.header_container}>
          <div className={classes.logo_container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </Link>
            {/* delivery */}
            <div className={classes.delivery}>
              <span>
                <CiLocationOn />
              </span>
              <div>
                <p>Deliverd to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          <div className={classes.search}>
            {/* sarch */}
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" name="" id="" placeholder="search product" />
            <FaSearch size={25} />
          </div>
          <div className={classes.order_container}>
            <Link t0="" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/de/Flag_of_the_United_States.png"
                alt=""
              />
              <select>
                <option value="">En</option>
              </select>
            </Link>

            {/* three component */}
            <Link to="/auth">
              <div>
                <p>Sign in</p>
                <span>Account & List</span>
              </div>
            </Link>
            {/* orders */}
            <a href="/orders">
              <p>returns</p>
              <span>& orders</span>
            </a>
            {/* cart */}
            <Link to="/cart" className={classes.cart}>
              <BiCart size={35} />
              <span>{totalItem}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
}

export default Header
