var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('mongodb://hossain:hossain24@ds141654.mlab.com:41654/webshop');

var products = [
    new Product({
        imagePath: 'https://mosaic03.ztat.net/vgs/media/packshot/pdp-zoom/SC/74/2F/03/VK/11/SC742F03V-K11@16.jpg',
        title: 'Jacket',
        price: 799
    }),
    new Product({
        imagePath: 'https://mosaic03.ztat.net/vgs/media/packshot/pdp-zoom/6M/O2/3G/00/GA/11/6MO23G00G-A11@6.jpg',
        title: 'T-shirt Full Sleeve',
        price: 299
    }),
    new Product({
        imagePath: 'https://ean-images.booztcdn.com/polo-ralph-lauren/183x239/raf710723610_crlnavy_v10155662wde.jpg',
        title: 'Shirt Full Sleeve',
        price: 399
    }),
    new Product({
        imagePath: 'https://ean-images.booztcdn.com/gant-clothing/183x239/gcl2003004_cponderosapine.jpg',
        title: 'T-shirt',
        price: 199
    }),
    new Product({
        imagePath: 'https://ean-images.booztcdn.com/blend/183x239/ble700069_pittman.jpg',
        title: 'Jeans',
        price: 399
    }),
    new Product({
        imagePath: 'https://ean-images.booztcdn.com/adidas-originals/183x239/adidh0997_cntnavy.jpg',
        title: 'Backpack',
        price: 499
    })
];

// Saving it to the database
/* for (var i = 0; i < products.length; i++) {
    products[i].save(function (err) {
        if (err)
            console.log('Error on save!')
    });
} */

// Saving it to the database
var allFinished = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save((err, result) => {
        allFinished++;
        if (allFinished === products.lenght) {
            exit();
        }
    });
}

exit = () => {
    mongoose.disconnect();
}