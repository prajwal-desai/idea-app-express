const ideas=require('C:/Users/Hp/Desktop/ideapp/models/idea.models')
const express=require('express')

let id=3
exports.getallideas=(req,res)=>{
    res.status(200).send(ideas)
}

exports.getideabyid=(req,res)=>{
    ideaid=req.params.id
    
    if(ideas[ideaid]){
        res.status(200).send(ideas[ideaid])
    }
    else{
        res.status(404).send({
            message:"not found"
        })
    }
}


exports.createidea=(req,res)=>{
    
    ideaob=req.body
    id++
    ideaob["id"]=id
    ideas[id]=ideaob

    //send response
    res.status(201).send(ideaob)
}



exports.updateidea=(req,res)=>{
    ideaid=req.params.id

    if(ideas[ideaid]){
        ideaob=req.body
        ideas[ideaid]=ideaob

        res.status(200).send(ideaob)
    }
    else{
        res.status(404).send({
            message:"not found"
        })
        
    }
}


exports.deleteid=(req,res)=>{
    ideaid=req.params.id

    if(ideas[ideaid]){
        delete ideas[ideaid]
        res.status(200).send({
            message:"idea is deleted"
        })
    }
    else{
        res.status(404).send({
            ms:"error occ"
        })
    }
}