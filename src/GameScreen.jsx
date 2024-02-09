import React from 'react'
import './GameScreen.css'
import TruckArea from './components/TruckArea'
import WasteArea from './components/WasteArea'

export default function GameScreen() {
    return (
        <div className="game-screen">
            <TruckArea />
            <WasteArea />
        </div>
    )
}