const express = require('express');
const router = express();

router.get('/',(req, res, next)=>{
    res.status(200).json({
        message: 'Here we get resource info'
    });
});

router.post('/',(req, res, next)=>{
    res.status(201).json({
        message: 'Here we post resource info'
    });
});

router.get('/:resourceId',(req, res, next)=>{
    const id=req.params.resourceId;
    if (id==='special') {
        res.status(200).json({
            message: 'You selected the special resource id',
            id: id
        });
     } else {
         res.status(200).json({
            message: 'You passed a resource ID'
        });
     }
});

router.patch('/:resourceId',(req, res, next)=>{
    res.status(201).json({
        message: 'Udpated resource!'
    });
});

router.delete('/:resourceId',(req, res, next)=>{
    res.status(201).json({
        message: 'Deleted resource!'
    });
});

module.exports = router;