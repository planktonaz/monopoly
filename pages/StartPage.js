import React from 'react';
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {setCurrentUser} from "../features/vars";
import {Link} from "react-router-dom";

const StartPage = () => {
    const vars = useSelector(state => state.vars)
    const dispatch = useDispatch()

    function setUser(index) {
        dispatch(setCurrentUser(index))
    }

    return (
        <div className="container d-flex flex-column j-center a-center">
            <div className="d-flex wrap gap10">
                {vars.users.map((x, i) =>
                    <div className="box d-flex j-center a-center"
                         key={i}
                         style={{backgroundColor: x.userColor}}
                         onClick={() => setUser(i)}
                    >
                        <h1>{x.userName} </h1>
                    </div>)}
            </div>
            {
                vars.currentUser.userName &&
                <Link to={"/main/" + vars.currentUser.userName}>
                    <button className="startBtn">
                        <h1>Start game {vars.currentUser.userName && " - " + vars.currentUser.userName}</h1>

                    </button>

                </Link>
            }
        </div>
    );
};

export default StartPage;