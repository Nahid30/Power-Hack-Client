import React from 'react';
import { useForm } from 'react-hook-form';

const TableRow = ({ bill }) => {
    const { _id, name, email, phone, price } = bill;
    const { register, handleSubmit } = useForm();


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure You want to Delete?')
        if (proceed) {
            const url = `http://localhost:5000/bill/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
        }
    }

    const onSubmit = _id =>{
        
        const url = `http://localhost:5000/bill/${_id}`
        fetch(url, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bill)
        })
            .then(res => res.json())
            .then(data => {
                console.log('Successfully Updated');

            })
    }
    


    return (

        <tr>
            <td>{_id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{price}</td>
            <td>
                {_id ? <div>
                    
                    <label for="my-modal" class="btn  btn-link  modal-button">Edit</label>
                    <input type="checkbox" id="my-modal" class="modal-toggle" />

                    <div class="modal">
                        <div class="modal-box relative">
                            <label for="my-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                            <form className='text-center mt-6 ' onSubmit={handleSubmit(onSubmit)}>
                                <input type="text" placeholder='Full Name' className='mb-3 input input-bordered input-sm w-full max-w-xs'  {...register("name", { required: true, })} required /> <br />

                                <input type="email" placeholder='Enter Your Email' className='mb-3 input input-bordered input-sm w-full max-w-xs' {...register("email",)} required />
                                <br />

                                <input placeholder='Enter Phone Number' className='mb-3 input input-bordered input-sm w-full max-w-xs' type="number" {...register("phone",)} required />
                                <br />

                                <input placeholder='Enter Paid Amount' className='mb-3 input input-bordered input-sm w-full max-w-xs' type="number" {...register("price",)} required />
                                <br />

                                <input  className='btn btn-success text-white' type="submit" value="Update Bill" />
                            </form>

                        </div>
                    </div>
                </div> : <p>Failed</p>}
            </td>

            <td>
                {_id ? <button onClick={() => handleDelete(_id)} className='btn btn-link '>Delete</button> : <p>Failed</p>}
            </td>

        </tr >

    );
};

export default TableRow;



