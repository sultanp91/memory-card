import React from 'react'

function Nav({score, maxScore}) {
    return (
        <nav className="nav">
            <h1>
                Current score: {score} Max Score: {maxScore}
            </h1>
        </nav>
    )
}

export default Nav
