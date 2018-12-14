module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db')
        db.get_inventory().then(response => {
            res.status(200).send(response)
        })
    },
    addProduct: (req, res) => {
        const db = req.app.get('db')
        let {image, productName, price} = req.body
        db.create_product({image, productName, price})
        .then(response => {
            res.status(200).send(response)
        })
    }
}