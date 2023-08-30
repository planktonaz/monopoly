import {createSlice} from "@reduxjs/toolkit";

export const varsSlice = createSlice({
    name: "vars",
    initialState: {
        users: [
            {
                userName: "DOG",
                userColor: "aqua",
                position: 0,
                myStreets: [],
                amountOfMoney: 200,
                counterRollDice: 0,
            },
            {
                userName: "CAT",
                userColor: "deeppink",
                position: 0,
                myStreets: [],
                amountOfMoney: 200,
                counterRollDice: 0,
            },
            {
                userName: "CAR",
                userColor: "lime",
                position: 0,
                myStreets: [],
                amountOfMoney: 200,
                counterRollDice: 0,
            },
            {
                userName: "DUCK",
                userColor: "skyblue",
                position: 0,
                myStreets: [],
                amountOfMoney: 200,
                counterRollDice: 0,
            },
        ],
        currentUser: {
            userName: "",
            userColor: "",
            position: 0,
            myStreets: [],
            amountOfMoney: 0,
            counterRollDice: 0,
        },
        gameMap: [
            0, 1, 2, 3, 4, 5,
            15, -1, -1, -1, -1, 6,
            14, -1, -1, -1, -1, 7,
            13, 12, 11, 10, 9, 8,
        ],
        street: [
            {id: 0, color: "", price: null, buyFlag: false},
            {id: 1, color: "Khaki", price: 100, buyFlag: true},
            {id: 2, color: "Lavender", price: 200, buyFlag: true},
            {id: 3, color: "LightBlue", price: 150, buyFlag: true},
            {id: 4, color: "LightSalmon", price: 120, buyFlag: true},
            {id: 5, color: "GoldenRod", price: 80, buyFlag: true},
            {id: 6, color: "LightSkyBlue", price: 30, buyFlag: true},
            {id: 7, color: "LightSteelBlue", price: 60, buyFlag: true},
            {id: 8, color: "Moccasin", price: 100, buyFlag: true},
            {id: 9, color: "PaleTurquoise", price: 70, buyFlag: true},
            {id: 10, color: "Peru", price: 60, buyFlag: true},
            {id: 11, color: "Coral", price: 40, buyFlag: true},
            {id: 12, color: "Aquamarine", price: 60, buyFlag: true},
            {id: 13, color: "AliceBlue", price: 50, buyFlag: true},
            {id: 14, color: "PaleGoldenRod", price: 30, buyFlag: true},
            {id: 15, color: "Plum", price: 20, buyFlag: true},
        ],
        rollDice: 0,
    },
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = state.users[action.payload]
        },
        saveUsers: (state, action) => {
            state.users = action.payload
        },
        updatePosition: (state, action) => {
            state.currentUser.position = action.payload
        },
        addToMyStreets: (state, action) => {
            state.currentUser.myStreets.push(state.street[action.payload])
        },
        removeFromMyStreets: (state, action) => {
            state.currentUser.myStreets = state.currentUser.myStreets.filter((x, i) => i !== action.payload)
        },
        updateRollDice: (state, action) => {
            state.rollDice = action.payload
        },
        updateCounterRollDice: (state, action) => {
            state.currentUser.counterRollDice = action.payload
        },
        updateStreetBuyFlagFalse: (state, action) => {
            state.street[action.payload].buyFlag = false
        },
        updateStreetBuyFlagTrue: (state, action) => {

            state.street[action.payload].buyFlag = true
        },
        updateAmountOfMoney: (state, action) => {
            state.currentUser.amountOfMoney = action.payload
        },
    }
})

export const {
    setCurrentUser,
    updatePosition,
    addToMyStreets,
    removeFromMyStreets,
    saveUsers,
    updateRollDice,
    updateCounterRollDice,
    updateStreetBuyFlagFalse,
    updateStreetBuyFlagTrue,
    updateAmountOfMoney,
} = varsSlice.actions

export default varsSlice.reducer;