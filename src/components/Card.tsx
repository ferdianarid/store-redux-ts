import React from 'react'
import '../components/stylesheets/card.css'

function Card( details: any ) {
       const {productName, description} = details
       return (
              <div>
                     <div className="card">
                            <div className="imgBx">
                                   <img src="https://assets.codepen.io/4164355/shoes.png" />
                            </div>
                            <div className="contentBx">
                                   <h2>{ details.productName }</h2>
                                   <p style={{ color: "#FFF", fontWeight: "bold" }}>{ details.description }</p>
                                   <div className="size">
                                          <h3>Size :</h3>
                                          <span>7</span>
                                          <span>8</span>
                                          <span>9</span>
                                          <span>10</span>
                                   </div>
                                   <div className="color">
                                          <h3>Color :</h3>
                                          <span></span>
                                          <span></span>
                                          <span></span>
                                   </div>
                                   <a href="#">Buy Now</a>
                            </div>
                     </div>
              </div>
       )
}

export default Card
