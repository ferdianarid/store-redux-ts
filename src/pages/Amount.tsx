import React from 'react'
import Card from '../components/Card';
import Wallet from '../components/Wallet'

function Amount( ) {
       const users  = [
              {
                     name: "Ferdian",
                     description: "Jombang, Indonesia"
              },
              {
                     name: "Reni Fadhila",
                     description: "Kediri, Indonesia"
              },
              {
                     name: "Reni Ferdian",
                     description: "Malang, Indonesia"
              }
       ]
       return (
              <div>
                     <div className="container">
                            <Wallet />
                            <div className="cardss">
                                   { users.map( user => (
                                          <Card productName={user.name} description={user.description} />
                                   ))}
                            </div>
                     </div>
              </div>
       )
}

export default Amount
