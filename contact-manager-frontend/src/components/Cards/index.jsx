import React from 'react'

function Cards({contacts}) {

    return (
        <div className="table-container">
            <div id="product-list" className="photo-and-desc">

                {contacts.map((contacts,index)=>(
                    <div className="back" key={index}>
                        <ul className="product_description_list"><b>{contacts.name}</b>
                            <li>Phone: {contacts.phone}</li>
                            <li>Address: {contacts.latitude},{contacts.longitude}</li>
                        </ul>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Cards