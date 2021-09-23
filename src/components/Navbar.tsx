import React from 'react'

function Navbar() {
       return (
              <div className="navbar">
                     <div className="brand">
                            <h1>Market</h1>
                     </div>
                     <div className="nav-link">
                            <a className="link" href="/">Homepage</a>
                            <a className="link" href="/transaction">Transaction</a>
                            <a className="link" href="/amount">Amount</a>
                            <a className="link"href="">Account</a>
                     </div>
              </div>
       )
}

export default Navbar
