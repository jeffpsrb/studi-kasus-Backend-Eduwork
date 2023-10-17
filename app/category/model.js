const mongoose = require('mongoose');
const {  model, Schema} = mongoose;

let categorySchema = Schema({
    name: {
        minlength: [3, 'Panjang nama kategori minimal 3 karakter'],
        maxlength: [20, 'Panjang nama kategori maksimal 20 karakter'],
        required: [true, 'Nama Kategori harus diisi']
    }
})

module.exports = model('Category', categorySchema)