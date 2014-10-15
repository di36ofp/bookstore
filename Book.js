var Book = function (name, pages, lenguage, editorial, author, gender, price) {
  var isbn = Math.random().toString().substr(2);
  var author = author || '';
  this.name = name || '';
  this.pages = pages || 1;
  this.lenguage = lenguage || '';
  this.editorial = editorial || '';
  this.gender = gender || '';
  this.price = price || 0;
  this.getIsbn = function () {
    return isbn;
  }
  this.getAuthor = function () {
    return author;
  }
}
Book.prototype = {
  applyIva : function (tax) {
    return this.price *= tax/100;
  },
  setEditorial : function (editorial){
    this.editorial = editorial;
  },
  setPrice : function (price){
    this.price = price;
  },
};