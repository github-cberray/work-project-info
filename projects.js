const express = require('express');
const router = express();
const mongoose = require('mongoose');
const Project = require('../models/project.js');

router.get('/',(req, res, next)=>{
    Project.find()
    .exec()
    .then(docs=>{
        console.log(docs);
        //if (docs.length>0){
            res.status(200).json(docs);
        // } else {
        //     res.status(404).json({
        //         message:'no entries found'
        //     });
        // }
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
});

router.post('/',(req, res, next)=>{
    // Instantiate Project from schema in models folder
    const project = new Project({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        owner: req.body.owner
    });
    project.save().then(result=>{
        console.log(result);
        res.status(201).json({
            message: 'Here we post project info',
            createdProject: result
        });
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
});

router.get('/:projectId',(req, res, next)=>{
    const id=req.params.projectId;
    Project.findById(id)
        .exec()
        .then(doc=>{
            console.log('from database', doc);
            if (doc) {
                res.status(200).json(doc);
            } else {
                res.status(404).json({ message:'Project ID not found' });
            }
        })
        .catch(err=> {
            console.log(err);
            res.status(500).json({error:err});
        });
});

router.patch('/:projectId',(req, res, next)=>{
    const id=req.params.projectId;
    const updateOps = {};
    for (const ops of req.body){
        updateOps[ops.propName]=ops.value;
    }
    Project.updateOne({_id:id},{$set: updateOps})
    .exec()
    .then(result=>{
        console.log(result);
        res.status(200).json(result)
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.delete('/:projectId',(req, res, next)=>{
    const id=req.params.projectId;
    Project.remove({_id:id})
        .exec()
        .then(result=>{
            res.status(200).json(result);
        })
        .catch(err=> {
            console.log(err);
            res.status(500).json({error:err});
        });
});

module.exports = router;