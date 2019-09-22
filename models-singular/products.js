'use strict';

// Where is our schema defined?
const Product = require('./products-schema');
// How do we get it in here so we can run methods on it?

class Products {

  constructor() {
  }

  get(_id) {
    if (_id) {
      return Product.findOne({_id: _id});
    } else {
      return Product.find({});
    }
    // Call the appropriate mongoose method to get
    // one or more records
    // If 1, return it as a plain object
    // If 2, return it as an object like this:
    // { count: ##, results: [{}, {}] }
  }

  create(record) {
    // Call the appropriate mongoose method to create a new record
    let newRecord = new Product(record);
    return newRecord.save();
  }

  update(_id, record) {
    // Call the appropriate mongoose method to update a record
    return Product.findByIdAndUpdate(_id, record, { new: true});
  }

  delete(_id) {
    // Call the appropriate mongoose method to delete a record
    return Product.findByIdAndDelete(_id);
  }

}

module.exports = Products;