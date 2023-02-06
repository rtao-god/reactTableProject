import React from 'react'
import { NavLink } from 'react-router-dom'

let ProductView = (props) => {
    return (
        <div id="productView">
            <div id="productViewBlock">
                <p>
                    Product: <span> [ Beet ] </span>
                </p>

                <div id="product">

                    <div id="article">
                        <p> Article </p>
                        <input type="text" value="Vegetables" readonly />
                    </div>

                    <div id="nameProduct">
                        <p> Name </p>
                        <textarea value="beet" name="nameProduct" rows="3" maxlength="100" readonly> Beet </textarea>
                    </div>

                    <div id="quantity">
                        <p> Quantity </p>
                        <input type="text" value="45" readonly />
                        <button id="plus">+</button>
                        <button id="minus">-</button>
                    </div>

                    <div id="spoilageAndReturn">
                        <div id="spoilage">
                            <p> Spoilage </p>
                            <input type="text" value="455" readonly />
                        </div>

                        <div id="return">
                            <p> Return </p>
                            <input type="text" value="500" readonly />
                        </div>
                    </div>

                </div>

                <div id="navbar">
                    <button id="sell"> Sell </button>
                    <button id="spoilage"> Spoilage </button>
                    <button id="write off"> Write off </button>
                    <button id="union"> Union </button>
                </div>
            </div>


            <NavLink to="/"> BACK </NavLink>
        </div>
    )
}

export default ProductView


