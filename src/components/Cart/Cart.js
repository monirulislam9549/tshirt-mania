import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    // conditional rendering option
    // 1. Element variable

    let command;
    if (cart.length === 0) {
        command = <p>Please at least one item</p>
    }
    else if (cart.length === 1) {
        command = <p>Please add more</p>
    }
    else {
        command = <p>Thanks adding item</p>
    }
    return (
        <div>
            <h1>This is Cart:{cart.length}</h1>

            {
                cart.map(tshirt =>
                    <p>{tshirt.name}
                        <button onClick={() => handleRemoveFromCart(tshirt)}>X</button>
                    </p>)
            }
            {/* 4. ||  */}
            {cart.length === 0 || <p className='orange'> Yay, you are buying</p>}

            {/* 3. && condition  */}
            {cart.length === 3 && <div className='orange'>
                <h3>Trigonal</h3>
                <p> tin jon k gift diba?</p>
            </div>}
            {command}

            {/* 2. Ternary Operator condition ? true : false */}
            {cart.length !== 4 ? <p>Keep Adding </p> : <button>Remove All</button>}
        </div>
    );
};

export default Cart;