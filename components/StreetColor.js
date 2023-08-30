import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {updateAmountOfMoney, addToMyStreets, updateStreetBuyFlagFalse} from "../features/vars";

const StreetColor = ({index, showBuyBtn}) => {
    const vars = useSelector(state => state.vars)
    const dispatch = useDispatch()

    function buyStreet(index) {
        if (vars.currentUser.amountOfMoney >= vars.street[index].price) {
            dispatch(updateAmountOfMoney(vars.currentUser.amountOfMoney - vars.street[index].price))
            dispatch(updateStreetBuyFlagFalse(index))
            dispatch(addToMyStreets(index))
        }
    }

    return (
        <div>
            {vars.street.map((x, i) => i === index &&
                <div key={i}>
                    {
                        index > 0 &&
                        <div
                            className="streetColor"
                            style={{backgroundColor: x.color}}
                        >
                            {index > 0 && `${x.color}`}
                        </div>
                    }
                    {index > 0 &&
                        <div>
                            {
                                index > 0 && x.buyFlag ?
                                    <div style={{color: "blue"}}>price: {x.price}</div> :
                                    <div style={{color: "darkslategray"}}>price: {x.price}</div>
                            }
                            {
                                x.buyFlag && showBuyBtn &&
                                <div>
                                    <button onClick={() => buyStreet(i)}>Buy</button>
                                </div>
                            }
                        </div>
                    }
                </div>
            )}
        </div>
    );
};

export default StreetColor;