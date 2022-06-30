import React from 'react';
import logo from '../../images/logo.png';

const Navbar = () => {



    return (
        <div>

            <div class="navbar bg-base-200  mb-10">

                <div class="flex-1">
                    <a href='/' className="btn btn-ghost normal-case text-xl"> <img className='w-16' src={logo} alt="logo" /> Power Hack </a>
                </div>

                <div>
                    <p className='text-xl px-4'>Total Paid : 00</p>
                </div>
                
            </div>

        </div>
    );
};

export default Navbar;