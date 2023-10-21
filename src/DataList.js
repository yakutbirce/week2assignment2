import React from 'react';

function DataList({ title, data, text, number }) {
    return (
        <div>
            <h1>{title}</h1>
            <p>{text}</p>
            <ul>
                <li>{data[0].name}</li>
                <li>{number}</li>
            </ul>
        </div>
    );
}

export default DataList;
