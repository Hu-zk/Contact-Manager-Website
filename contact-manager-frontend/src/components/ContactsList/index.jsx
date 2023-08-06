import React from 'react'

function List({contacts}) {

    return (
        <div className="table-container">
        <table id="contactsTable">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>longitude</th>
                    <th>latitude</th>
                </tr>
            </thead>
            <tbody id="contactsBody">
                {contacts.map((contacts,index)=>(
                    <tr key={index}>
                        <td>{contacts.id}</td>
                        <td>{contacts.name}</td>
                        <td>{contacts.phone}</td>
                        <td>{contacts.latitude}</td>
                        <td>{contacts.longitude}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    )
}

export default List