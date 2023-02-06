const ADD_NAME_ITEM = "ADD_NAME_ITEM"
const TEXT_NAME_ITEM_UPDATE = "TEXT_NAME_ITEM_UPDATE"

let store = {
    _state: {
        productTable: {
            itemLink: [
                { link: "/beet" },
                { link: "/apple" },
                { link: "/Walnut" },
            ],

            idItem: [
                { id: "1" },
                { id: "2" },
                { id: "3" },
            ],

            articleItem: [
                { article: "vegetables" },
                { article: "fruits" },
                { article: "nuts" },
            ],

            itemName: [
                { name: "beet" },
                { name: "apple" },
                { name: "Walnut" },
            ],

            newNameItemUpdate: ""
        },

        sidebar: {}
    },


    _renderTree() { console.log(" ") },

    addItemName() {

    },

    itemNameUpdate() {

    },

    dispatch(action) {
        if (action.type == ADD_NAME_ITEM) {
            let newItemName = {
                name: this._state.productTable.newNameItemUpdate
            }
            this._state.productTable.itemName.push(newItemName)
            this._state.productTable.newNameItemUpdate = ""
            this._renderTree(this._state)

        } else if (action.type == TEXT_NAME_ITEM_UPDATE) {
            this._state.productTable.newNameItemUpdate = action.newItemName
        }

        this._renderTree(this._state)
    },


    getState() {
        return this._state
    },

    subscride(observer) {
        this._renderTree = observer
    }
}

export const addNameItemAction = () => ({ type: ADD_NAME_ITEM })
export const textNameItemUpdateAction = (text) => ({ type: TEXT_NAME_ITEM_UPDATE, newItemName: text })

export default store