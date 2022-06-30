import React from 'react';

const Table = () => {
    return (
        <div>
            <div class="navbar bg-base-100 px-12">
                <div class="flex-1 gap-6">
                    <a className="normal-case text-2xl">Billings</a>
                    <div class="form-control ">
                        <input type="text" placeholder="Search" class="input input-bordered input-sm w-full max-w-xs" />
                    </div>
                </div>

                <div >
                    <button class="btn btn-primary btn-wide text-white">Add New Bill</button>
                </div>
            </div>
        </div>
    );
};

export default Table;