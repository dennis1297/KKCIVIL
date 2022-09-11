import React from 'react'
import './Sidebar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";




function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebar_wrapper">
            <div className="sidebar_menu">
                <h3 className="sidebar_title">Dashboard</h3>
                <ul className="sidebar_list">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <li className="sidebar_list_item active">
                    <LineStyleIcon className='sidebar-icon'/>
                        Home
                    </li>
                    </Link>
                    {/* <li className="sidebar_list_item">
                        <TimelineIcon className='sidebar-icon'/>
                        Anlytics
                    </li>
                    <li className="sidebar_list_item">
                        <TrendingUpIcon className='sidebar-icon'/>
                        Sales
                    </li> */}
                    <Link to="users" style={{ textDecoration: 'none' }}>
                    <li className="sidebar_list_item ">
                        <PersonOutlineIcon className='sidebar-icon'/>
                        User Job Creation
                    </li>
                    </Link>
                    <Link to="employee" style={{ textDecoration: 'none' }}>
                    <li className="sidebar_list_item ">
                     <PersonOutlineIcon className='sidebar-icon'/>
                        Candidate Details
                    </li>
                    </Link>
                </ul>
            </div>
            {/* <div className="sidebar_menu">
                <h3 className="sidebar_title">Quick Menu</h3>
                <ul className="sidebar_list">
                    <li className="sidebar_list_item ">
                        <LineStyleIcon className='sidebar-icon'/><Link to="users">
                        User</Link>
                    </li>
                    <li className="sidebar_list_item">
                        <TimelineIcon className='sidebar-icon'/>
                        Products
                    </li>
                    <li className="sidebar_list_item">
                        <TrendingUpIcon className='sidebar-icon'/>
                        Transaction
                    </li>
                    <li className="sidebar_list_item">
                        <TrendingUpIcon className='sidebar-icon'/>
                        Reports
                    </li>
                </ul>
            </div> */}
            {/* <div className="sidebar_menu">
                <h3 className="sidebar_title">Notification</h3>
                <ul className="sidebar_list">
                    <li className="sidebar_list_item ">
                        <LineStyleIcon className='sidebar-icon'/>
                        Mail
                    </li>
                    <li className="sidebar_list_item">
                        <TimelineIcon className='sidebar-icon'/>
                        Feedback
                    </li>
                    <li className="sidebar_list_item">
                        <TrendingUpIcon className='sidebar-icon'/>
                        Messages
                    </li>
                </ul>
            </div> */}
            {/* <div className="sidebar_menu">
                <h3 className="sidebar_title">Staff</h3>
                <ul className="sidebar_list">
                    <li className="sidebar_list_item ">
                        <LineStyleIcon className='sidebar-icon'/>
                        Manage
                    </li>
                    <li className="sidebar_list_item">
                        <TimelineIcon className='sidebar-icon'/>
                        Anlytics
                    </li>
                    <li className="sidebar_list_item">
                        <TrendingUpIcon className='sidebar-icon'/>
                        Report
                    </li>
                </ul>
            </div> */}
            
        </div>
    </div>
  )
}

export default Sidebar