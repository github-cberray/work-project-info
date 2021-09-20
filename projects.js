const express = require('express');
const router = express();

router.get('/',(req, res, next)=>{
    res.status(200).json({
        message: 'Here we get project info'
    });
});

router.post('/',(req, res, next)=>{
    res.status(201).json({
        message: 'Here we post project info'
    });
});

router.get('/:projectId',(req, res, next)=>{
    const id=req.params.projectId;
    if (id==='special') {
        res.status(200).json({
            message: 'You selected the special id',
            id: id
        });
     } else {
         res.status(200).json({
            message: 'You passed a project ID'
        });
     }
});

router.patch('/:projectId',(req, res, next)=>{
    res.status(201).json({
        message: 'Udpated project!'
    });
});

router.delete('/:projectId',(req, res, next)=>{
    res.status(201).json({
        message: 'Deleted project!'
    });
});

module.exports = router;