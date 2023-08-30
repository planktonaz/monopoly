import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {updateAmountOfMoney, removeFromMyStreets, updateStreetBuyFlagTrue} from "../features/vars";

const MyStreets = () => {
    const vars = useSelector(state => state.vars)
    const dispatch = useDispatch()

    function sellStreet(index, id) {
        dispatch(updateAmountOfMoney(vars.currentUser.amountOfMoney + (vars.currentUser.myStreets[index].price / 2)))
        dispatch(updateStreetBuyFlagTrue(id))
        dispatch(removeFromMyStreets(index))
    }

    return (
        <div className="w-100">
            {
                <div className="total">
                    Money: {vars.currentUser.amountOfMoney}
                </div>
            }
            {
                vars.currentUser.myStreets.map((x, i) =>
                    <div className="streetColor d-flex j-between" key={i} style={{backgroundColor: x.color}}>
                        <div>{x.color} {x.price}</div>
                        <div>
                            <button onClick={() => sellStreet(i, x.id)}> Sell</button>
                        </div>
                    </div>)
            }

        </div>
    );
};

export default MyStreets;