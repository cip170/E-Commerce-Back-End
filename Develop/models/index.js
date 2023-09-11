// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {

});
// Categories have many Products
Product.hasMany(Product, {

});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {

});
// Tags belongToMany Products (through ProductTag)
Product.belongsToMany(Product, {

});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
