const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const productSchema = Schema({

    name: {
        type: String,
        minlength: [3, 'Panjang nama makanan minimal 3 karaktrer'],
        require: [true, 'Nama Makanan harus diisi']
    },

    description: {
        type: String,
        maxlength: [1000, 'Panjang deskripsi maksimal 1000 karakter']
    },

    price: {
        type: Number,
        default: 0
    },

    image_url: String,

    category: {
        type: Schema.type.objectId,
        ref: 'Category'
    },
    tags: {
        type: Schema.type.objectId,
        ref: 'Tag'
    }



}, { timestamps: true });

module.exports = model('Product', productSchema);