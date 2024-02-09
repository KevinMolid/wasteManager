import React from 'react'

export default function Display() {
    return (
        <section className="display">
            <ul className='display--lives'>
                <li>
                    <i className="fa-solid fa-heart display--heart-icon"></i>
                </li>
                <li>
                    <i className="fa-solid fa-heart display--heart-icon"></i>
                </li>
                <li>
                    <i className="fa-solid fa-heart display--heart-icon"></i>
                </li>
                <li>
                    <i class="fa-solid fa-heart-crack display--heart-icon broken"></i>
                </li>
                <li>
                    <i class="fa-solid fa-heart-crack display--heart-icon broken"></i>
                </li>
            </ul>
            <h1>Score: <span className="display--score">69</span></h1>
        </section>
    )
}