
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true});


// new schema
const fruitSchema = new mongoose.Schema ({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
    name: "apple",
    rating: 7,
    review: "Pretty solid as a fruit."
});

fruit.save();


// const insertDocuments = function(db, callback){
//     const collection = db.collection('fruits');
//     collection.insertMany([
//         {
//             name: "apple",
//             score: 8,
//             review: "great fruit"
//         },{
//             name: "orange",
//             score:6,
//             review:"kinda sour"
//         },{
//             name:"banana",
//             score:9,
//             review:"great stuff!"
//         }
//     ], function(err, result){
//         assert.equal(err, null);
//         assert.equal(3, result.result.n);
//         assert.equal(3, result.ops.length);
//         console.log("Inserted 3 documents into teh colletion");
//         callback(result);
//     });
// };