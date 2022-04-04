import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    const diamond = useContext(RingContext)
    return (
        <div>
            <h5>Special gift:{diamond}</h5>
        </div>
    );
};

export default Special;