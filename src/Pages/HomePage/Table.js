import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import TableRow from './TableRow';

const Table = () => {

    const [bills, setBills] = useState([]);
    useEffect( ()=>{
        fetch('http://localhost:5000/bill')
        .then(res => res.json())
        .then(data => setBills(data))
    } ,[])

    const { register, handleSubmit } = useForm();


    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/bill`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)  
        })
        .then(res => res.json())
        .then(result => console.log(result));
       
    };




    return (
        <div>



            {/* Table navbar start */}
            <div class="navbar bg-blue-200 px-12">
                <div class="flex-1 gap-6">
                    <a className="normal-case text-xl">Billings</a>

                    <div class="form-control ">
                        <input type="text" placeholder="Search" class="input input-bordered input-sm w-full max-w-xs" />
                    </div>
                </div>

                <div>

                    <label for="my-modal-3" class="btn btn-primary  text-white modal-button">Add New Bill</label>

                    <input type="checkbox" id="my-modal-3" class="modal-toggle" />
                    <div class="modal">
                        <div class="modal-box relative">
                            <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                        <form className='text-center mt-6' onSubmit={handleSubmit(onSubmit)}>
                                <input type="text" placeholder='Full Name' className='mb-3 input input-bordered input-sm w-full max-w-xs'  {...register("name", { required: true, })} />

                                <input type="email" placeholder='Enter Your Email' className='mb-3 input input-bordered input-sm w-full max-w-xs' {...register("email",)} />

                                <input placeholder='Enter Phone Number' className='mb-3 input input-bordered input-sm w-full max-w-xs' type="number" {...register("phone",)} />

                                <input placeholder='Enter Paid Amount' className='mb-3 input input-bordered input-sm w-full max-w-xs' type="number" {...register("price",)} />
                                <br />
                                <input className='btn btn-success text-white' type="submit" value="Add New Bill" />



                            </form>

                        </div>
                    </div>

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
                            <th></th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                         {
                            bills.map(bill => <TableRow
                                key={bill._id}
                                bill={bill}
                            ></TableRow>)
                         }
                        
                    </tbody>
                </table>
            </div>

            <div class="btn-group flex justify-center mt-20">
                <button class="btn btn-outline">1</button>
                <button class="btn btn-outline">2</button>
                <button class="btn btn-outline">3</button>
                <button class="btn btn-outline">Next</button>
            </div>

        </div >
    );
};

export default Table;