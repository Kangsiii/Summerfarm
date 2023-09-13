import React from 'react';
import { Menu } from 'antd';
import './css/Menubar.css';
import {Link} from 'react-router-dom';
import Searchbar from './Searchbar';

function Menubar() {
  return (
    <div>
        <div className='menubar-container'>
            <Menu mode="horizontal" theme="light" className='Navbar'>
                <Menu.Item style={{marginRight:"1%"}}> <Link to="/work">일자리FARM</Link></Menu.Item>
                <Menu.Item style={{marginRight:"1%"}}><Link to="/buy">직거래FARM</Link></Menu.Item>
                <Menu.Item style={{marginRight:"1%"}}><Link to="/talk">소통FARM</Link></Menu.Item>
                <Menu.Item style={{marginRight:"1%"}}><Link to="/policy">정책FARM</Link></Menu.Item>            
            </Menu> 
            <div className='searchbar'>
                <Searchbar />
            </div>           
        </div>
    </div>
  )
}

export default Menubar