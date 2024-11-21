import React from 'react'
import {Link} from 'react-router-dom'

function Sidebar() {
  return (
    <div className='bg-gray-800 text-white w-64 h-full'>
        <div className='p-4 text-2xl font-bold'>Admin Dashboard</div>
        <nav>
            <ul>
                <li className='p-4 hover:bg-gray-700'>
                    <Link to={'/dashboard'}></Link>
                </li>
                <li className='p-4 hover:bg-gray-700'>
                  <Link to={'users'}>Users</Link>
                </li>
                <li className='p-4 hover:bg-gray-700'>
                  <Link to={'settings'}>Settings</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Sidebar