import React from 'react';

const TableRow = ({ bill }) => {
    const { _id, name, email, phone, price } = bill;

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
                {_id ? <button className='btn btn-link '>Delete</button> : <p>Failed</p>}
            </td>
            
        </tr >

    );
};

export default TableRow;