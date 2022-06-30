import React from 'react';

const Navbar = () => {

   

    return (
        <div>

            <div class="navbar bg-base-200 px-12 mb-10">
                <div class="flex-1">
                    <a className="btn btn-ghost normal-case text-2xl"> <span className='text-blue-500'>Power</span>Hack</a>
                </div>
                <div class="flex-none">
                    <ul class="menu menu-horizontal p-0">

                        <li>
                            <a className='text-xl'>Total Paid : 00</a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Navbar;