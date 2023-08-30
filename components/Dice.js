import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {updateAmountOfMoney, updateCounterRollDice, updatePosition, updateRollDice} from "../features/vars";

const Dice = () => {
    const vars = useSelector(state => state.vars)
    const dispatch = useDispatch()

    function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function roll() {
        const rnd = randomInteger(1, 3)
        dispatch(updateRollDice(rnd))
        if (vars.currentUser.position + rnd > 15) {
            dispatch(updateAmountOfMoney(vars.currentUser.amountOfMoney + 200))
            return dispatch(updatePosition(vars.currentUser.position + rnd - 15))
        }
        dispatch(updatePosition(vars.currentUser.position + rnd))
        dispatch(updateCounterRollDice(vars.currentUser.counterRollDice + 1))
    }

    return (
        <div className="dice d-flex j-center a-center w-100 h-100">
            <div className="diceBorder d-flex gap30"><h1>{vars.rollDice}</h1>
                <button className="rollBtn" onClick={roll}>
                    <h1>ROLL DICE</h1>
                </button>
            </div>
        </div>
    );
};

export default Dice;