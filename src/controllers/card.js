const Cards = require('../models/cardSchema');


const cards = async (req, res) => {
  try {
    const cards = await Cards.find()

    res.status(200).json({success: true, cards : cards})
} catch (error) {
    console.log(error)
    res.status(500).json({success: false, error : error})
}

};

const allCards = async (req, res) => {
  try {
    const card = await Cards.create(req.body)
    const populateCard = await card.populate('customerID')


    res.status(201).json({success: true, card : populateCard})
} catch (error) {
    console.log(error)
    res.status(500).json({success: false, error : error})
}
};

module.exports = { cards, allCards };
