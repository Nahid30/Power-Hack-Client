import React from 'react';

const TableRow = ({ bill }) => {
    const { _id, name, email, phone, price } = bill;

    // const handleDelete = id => {
    //     console.log('mama deleted');
    // }

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

    return (

        <tr>
            <td>{_id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{price}</td>
            <td>
                {_id ? <button className='btn btn-link '>Edit</button> : <p>Failed</p>}
            </td> 
            <td>
                {_id ? <button onClick={ ()=>handleDelete(_id) } className='btn btn-link '>Delete</button> : <p>Failed</p>}
            </td>
            
        </tr >

    );
};

export default TableRow;