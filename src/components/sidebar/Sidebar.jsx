import React from 'react'
import "./sidebar.css"
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
 
export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebarWrapper'>
          <div className='sidebarMenu'>
            <h3 className='sidebarTitle'>Dashboard</h3>
            <ul className='sidebarList'>
              <li className='sidebarListItem active'>
                <LineStyleIcon className='sidebarIcon'/>
                Home
              </li>
              <li className='sidebarListItem'>
                 <TimelineIcon className='sidebarIcon'/>
                 Analytics
              </li>
              <li className='sidebarListItem'>
                <TrendingUpIcon className='sidebarIcon'/>
                Sales
              </li>
            </ul>
          </div>
          <div className='sidebarMenu'>
            <h3 className='sidebarTitle'>Quick Menu</h3>
            <ul className='sidebarList'>
              <li className='sidebarListItem active'>
                <LineStyleIcon className='sidebarIcon'/>
                Home
              </li>
              <li className='sidebarListItem'>
                 <TimelineIcon className='sidebarIcon'/>
                 Analytics
              </li>
              <li className='sidebarListItem'>
                <TrendingUpIcon className='sidebarIcon'/>
                Sales
              </li>
            </ul>
          </div>
          <div className='sidebarMenu'>
            <h3 className='sidebarTitle'>Notifications</h3>
            <ul className='sidebarList'>
              <li className='sidebarListItem active'>
                <LineStyleIcon className='sidebarIcon'/>
                Home
              </li>
              <li className='sidebarListItem'>
                 <TimelineIcon className='sidebarIcon'/>
                 Analytics
              </li>
              <li className='sidebarListItem'>
                <TrendingUpIcon className='sidebarIcon'/>
                Sales
              </li>
            </ul>
          </div>
          <div className='sidebarMenu'>
            <h3 className='sidebarTitle'>Staff</h3>
            <ul className='sidebarList'>
              <li className='sidebarListItem active'>
                <LineStyleIcon className='sidebarIcon'/>
                Home
              </li>
              <li className='sidebarListItem'>
                 <TimelineIcon className='sidebarIcon'/>
                 Analytics
              </li>
              <li className='sidebarListItem'>
                <TrendingUpIcon className='sidebarIcon'/>
                Sales
              </li>
            </ul>
          </div>
        </div>
    </div>
  )
}
