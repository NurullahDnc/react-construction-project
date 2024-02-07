// src/components/MyComponent.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyComponent = () => {
    const [items, setItems] = useState();

    useEffect(() => {
        axios.get('http://127.0.0.1:8000')
            .then(response => {
                setItems(response.data);
                console.log(response.data);
             })
           
    }, []);


     return (
        <div>
        
            <h1>Items</h1>
            {/* <ul>
                {items.map(item => (
                    // <li key={item.id}> {item.name}  </li>
                    <p>{item}</p>
                ))}
            </ul> */}

            <p>{items} </p>
        </div>
    );
};

export default MyComponent;
