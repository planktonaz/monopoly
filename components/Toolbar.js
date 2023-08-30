import React from 'react';
import {useSelector} from "react-redux";
import {Link, useHref} from "react-router-dom";

const Toolbar = () => {
    const vars = useSelector(state => state.vars)

    return (
        <div className="toolbar d-flex gap10 a-center j-between">
            {
                vars.users.map((x, i) =>
                    <div style={{backgroundColor: x.color}} key={i}>
                        <Link to={"/main/" + x.userName}>
                            <b>{x.userName}</b> -
                            step {x.counterRollDice},
                            pos {x.position},
                            streets {x.myStreets.length}
                        </Link>
                    </div>
                )
            }
        </div>
    );
};

export default Toolbar;