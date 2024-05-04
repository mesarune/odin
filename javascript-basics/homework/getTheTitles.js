"use strict";

const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]

const getTheTitles = function(books) {
  return books.map((book) => book.title)
};

// materials.map((material) => material.length)

console.log(getTheTitles(books));