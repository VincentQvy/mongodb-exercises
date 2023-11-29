// 1 Donnez liste des ordinateurs portables avec un prix compris entre 500 et 1000 euros ou avec un disque dur de 750 Go.

/*

[
  {
    _id: ObjectId('65670cdebb2341fb8bcaabbb'),
    name: 'Acer Aspire F5-573G-57GD',
    price: 749,
    properties: {
      processor: 'Intel Core i5',
      RAM: '8GB',
      HD: '650GB',
      OS: 'Windows 10',
      USB: { USB2_0: 0, USB3_0: 2, USB3_1: 1 }
    },
    LanguageOS: [ 'Dutch', 'French', 'English' ],
    reviews: [
      { by: 'Aline', score: 4, text: 'Very well' },
      { by: 'Me', score: 3.5, text: 'Compact' }
    ]
  },
  {
    _id: ObjectId('65670cdebb2341fb8bcaabbc'),
    name: 'HP Pavilion 17-g101nd',
    price: 534,
    properties: {
      processor: 'Intel Pentium N3700',
      RAM: '4GB',
      HD: '1000GB',
      HDSpeed: 5400,
      OS: 'Windows 10',
      displayType: 'Shiny',
      USB: { USB2_0: 0, USB3_0: 3 }
    },
    LanguageOS: [ 'Dutch', 'French', 'English', 'German' ],
    networkConnections: [ 'bluetooth', 'wi-fi', 'ethernet' ],
    reviews: [
      { by: 'Melanie', score: 4.3, text: 'Very good' },
      { by: 'Eric', score: 4.5, text: 'Nice' }
    ]
  }
]

db.laptops.find(( { $or: [ {'properties.HD': {$eq: 750}},{'price': { $gt: 500 , $lt: 1000}} ]}))
*/

// 2 Changez Windows 10 vers Windows 8

// db.laptops.updateMany({'properties.OS': 'Windows 10'}, {$set: { 'properties.OS': 'Windows 8' }})

// 3 Donnez le nom, le prix et le système d'exploitation des 2 ordinateurs portables les moins chers.

//db.laptops.find({}, { name: 1, price: 1, "properties.OS": 1 }).sort({ price: 1 }).limit(2)

// 4 Donnez à tous les ordinateurs portables avec au moins 1 avis avec une note comprise entre 4 et 4,2

//db.laptops.find({"reviews": {$elemMatch: {"score": {$gte: 4,$lte: 4.2}}}})

// Donnez à tous les ordinateurs portables dotés de 2 ports USB 3_0 et prenant en charge au moins 2 langues, dont le "Dutch"

//db.laptops.find({"properties.USB.USB3_0": 2,$expr: {$and: [{ $in: ["Dutch", "$LanguageOS"] },{ $gte: [{ $size: "$LanguageOS" }, 2] }]}})
  




