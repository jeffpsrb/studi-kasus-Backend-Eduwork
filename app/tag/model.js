const mongoose = require('mongoose');
const {model, Schema} = mongoose;

let tagSchema = Schema ({
    name: {
        minlength: [3, 'Panjang nama kategori minimal 3 karakter'],
        maxlength: [20, 'Panjang nama kategori minimal 20 karakter'],
        required: [true, 'Nama tag harus diisi']
    } 
})

module.exports = model('Tag', tagSchema)