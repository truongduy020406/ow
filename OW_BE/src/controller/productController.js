const { poolData } = require('../database/index')

const getProductById = async (req, res) => {
  const productid = 63
  const q = 'SELECT * FROM product WHERE Product_Id = 63'

  try {
    const [rows] = await poolData.execute(q)
    console.log(typeof JSON.parse(rows[0].images))
  } catch (error) {}
}

const getAllProduct = async (req, res) => {
  const q = 'SELECT * from product'
  try {
    const [rows] = await poolData.execute(q)
    res.status(200).json(rows)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

const getProductBySubCategory = async (req, res) => {
  const q = 'SELECT * FROM product WHERE SubCategory_id=?'
  const id = req.params?.id

  try {
    const [rows] = await poolData.execute(q, [id])
    res.status(200).json(rows)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

module.exports = { getProductById, getAllProduct, getProductBySubCategory }
