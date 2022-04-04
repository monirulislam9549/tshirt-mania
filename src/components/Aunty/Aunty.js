import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = ({ house }) => {
    const diamond = useContext(RingContext)
    return (
        <div>
            <h2>Aunty</h2>
            <p>House:{house}</p>
            <p>Special:{diamond}</p>
        </div>
    );
};

export default Aunty;