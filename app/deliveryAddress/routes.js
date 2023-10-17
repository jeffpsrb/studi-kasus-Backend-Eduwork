const router = require('express').Router();
const { police_check } = require('../../middleware');
const deliveryAddressControl = require('./controller')


router.post(
    '/delivery-addresses',
    police_check('create', 'DeliveryAddress'),
    deliveryAddressControl.store
);
router.put(
    '/delivery-addresses/:id',
    deliveryAddressControl.update
);

router.delete(
    '/delivery-addresses/:id',
    deliveryAddressControl.update
);

router.get(
    '/delivery-addresses',
    police_check('view', 'DeliveryAddress'),
    deliveryAddressControl.index
);

module.exports = router;
