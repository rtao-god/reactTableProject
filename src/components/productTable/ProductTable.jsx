import React from 'react'
import TableDown from './TableDown'
import { addNameItemAction, textNameItemUpdateAction } from "../state"


let ProductTable = (props) => {

    let itemLink = props.productTable.itemLink.map(element => <TableDown link={element.link} />)

    let idItem = props.productTable.idItem.map(element => <TableDown id={element.id} />)

    let articleItem = props.productTable.articleItem.map(element => <TableDown article={element.article} />)

    let itemName = props.productTable.itemName.map(element => <TableDown name={element.name} />)

    let refGoods = React.createRef()

    let addItem = () => {
        props.dispatch(addNameItemAction ())
    }

    let updateNameItem = () => {
        let text = refGoods.current.value
        props.dispatch(textNameItemUpdateAction(text))
    }

    return (
        <div>
            <table className="mainTable">
                <tbody>
                    <tr>
                        <th> № </th>
                        <th> Article </th>
                        <th> Name </th>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className="number"> {idItem} </td>
                        <td> {articleItem} </td>
                        <td> {itemName} </td>
                    </tr>
                </tbody>
            </table>

            <div id="getGoods">
                <textarea onChange={updateNameItem} value={props.newNameItem} ref={refGoods} maxLength={1000} />
                <button onClick={addItem}> Send </button>
            </div>
        </div>
    )
}

export default ProductTable