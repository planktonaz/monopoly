import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import StreetColor from "../components/StreetColor";
import Dice from "../components/Dice";
import MyStreets from "../components/MyStreets";
import {saveUsers, setCurrentUser, updateRollDice} from "../features/vars";
import Toolbar from "../components/Toolbar";

const MainPage = () => {
    const params = useParams()
    const vars = useSelector(state => state.vars)
    const dispatch = useDispatch()

    useEffect(() => {
        const userIndex = vars.users.findIndex(x => x.userName.length > 0 && x.userName === params.username)
        dispatch(setCurrentUser(userIndex))
        dispatch(updateRollDice(0))
    }, [params.username])

    useEffect(() => {
        const otherUsers = vars.users.filter(x => x.userName.length > 0 && x.userName !== vars.currentUser.userName)
        if (vars.currentUser.position > 0) dispatch(saveUsers([...otherUsers, vars.currentUser]))
    }, [vars.currentUser.position, vars.currentUser.myStreets])

    return (
        <div className="container d-flex flex-column gap10 bg">
            <Toolbar/>

            <div className="d-flex gap10">
                <div className="grow4 d-flex gap10 cells t-center relative">

                    {
                        vars.gameMap.map((x, i) =>
                            x >= 0 && vars.currentUser.position === x ?
                                <div className="cellSelected" key={i}
                                     style={{backgroundColor: vars.currentUser.userColor}}>
                                    <StreetColor index={x} showBuyBtn={true}/>
                                    {vars.currentUser.userName}
                                </div> :
                                x >= 0 && vars.currentUser.position !== x ?
                                    <div className="cell" key={i}>
                                        <StreetColor index={x} showBuyBtn={false}/>
                                        {x > 0 && x}
                                    </div> :
                                    <div className="cellEmpty" key={i}></div>
                        )
                    }
                    <Dice/>

                </div>
                <div className="grow1 d-flex gap10 border">
                    <MyStreets/>
                </div>
            </div>
        </div>
    );
};

export default MainPage;