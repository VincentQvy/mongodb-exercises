

//Donner par action le cours de clôture moyen, le cours de clôture minimum, le cours de clôture maximum et le nombre moyen d'actions négociées par jour.

db.bel20.aggregate([{$group: {_id: "$name",moyenneCoursCloture: { $avg: "$price.end" },minimumCoursCloture: { $min: "$price.end" },maximumCoursCloture: { $max: "$price.end" },moyenneNombreActions: { $avg: "$number" }}}])

//Indiquez par action le cours minimum de clôture et la semaine au cours de laquelle ce cours minimum de clôture est survenu. E.g.
//KBC: minprice = 39.1 ; week = 44
//Elia: minprice = 33.38 ; week = 46

db.bel20.aggregate([{
    $group: {
        _id: { name: "$name", week: { $isoWeek: "$date" } }, minPrice: { $min: "$price.end" }
    }},{$sort: {"_id.name": 1, minPrice: 1}},
        {$group: {_id: "$_id.name",minWeek: { $first: "$_id.week" },minPrice: { $first: "$minPrice" }}},
        {$project: {_id: 0,name: "$_id",minPrice: 1,minWeek: 1}}])
  