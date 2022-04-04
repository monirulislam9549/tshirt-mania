import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'
export const RingContext = createContext('diamond')


//  context Api
//  1.call createContext with a default value
//  2.set a variable of the context with uppercase
//  3.Make sure you export the context to use it in other places
//  4.wrap you child content using RingContext.Provider
//  5.provide a value
//  6.to consume the context from child component
//  7.useContext hook and you will need to pass the contextName
//  make sure you take...



const Grandpa = () => {
    const [house, setHouse] = useState(1)

    const ornament = 'Diamond Ring'

    const handleBuyAHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount)
    }
    return (
        <RingContext.Provider value={ornament}>
            <div className='grandpa'>
                <h4>Grandpa</h4>
                <p>House:{house}  <button onClick={handleBuyAHouse}>Buy a House</button> </p>

                <section style={{ display: 'flex' }}>
                    <Father house={house}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </section>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;