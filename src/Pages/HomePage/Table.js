import React from 'react';

const Table = () => {
    return (
        <div>

            {/* Table navbar start */}
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
            {/* Table navbar end */}


            {/* Main table start */}

            <div class="overflow-x-auto px-12 mt-4">
                <table class="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>Billing ID</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Paid Amount</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Littel, Schaden and Vandervort</td>
                            <td>Canada</td>
                            <td>12/16/2020</td>
                            
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Zemlak, Daniel and Leannon</td>
                            <td>United States</td>
                            <td>12/5/2020</td>
                            
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Carroll Group</td>
                            <td>China</td>
                            <td>8/15/2020</td>
                        </tr>
                        <tr>
                            <th>4</th>
                            <td>Marjy Ferencz</td>
                            <td>Office Assistant I</td>
                            <td>Rowe-Schoen</td>
                            <td>Russia</td>
                            <td>3/25/2021</td>
                        </tr>
                        <tr>
                            <th>5</th>
                            <td>Yancy Tear</td>
                            <td>Community Outreach Specialist</td>
                            <td>Wyman-Ledner</td>
                            <td>Brazil</td>
                            <td>5/22/2020</td>
                        </tr>
                      
                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default Table;