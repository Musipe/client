import React from 'react'
import { FaSearch } from 'react-icons/fa'

function Header() {
    return (
        <Header>
            <div>
                <h1>
                    <span className='text-slate-600'>Sahand</span>
                    <span>Estate</span>
                </h1>
                <form>
                    <input type="text" placeholder='Search...' />
                    <FaSearch className='text-slate-600' />
                </form>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Sign in</li>
                </ul>
            </div>
        </Header>
    )
}

export default Header
