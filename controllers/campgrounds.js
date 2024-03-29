//@desc   Get all campgrounds
//@route  GET /api/v1/campgrounds

const Campground = require("../models/Campground");

//@access Public
exports.getCampgrounds= async(req,res,next)=>{
    try{
        const campgrounds = await Campground.find();

        res.status(200).json({
            success:true,
            count:campgrounds.length,
            data:campgrounds
        });
    }catch(err){
        res.status(400).json({success:false})
    }
    
};

//@desc   Get single campground
//@route  GET /api/v1/campgrounds/:id
//@access Public
exports.getCampground= async(req,res,next)=>{
    try{
        const campground = await Campground.findById(req.params.id);

        if(!campground){
            return res.status(400).json({success:false})
        }

        res.status(200).json({
            success:true,
            data:campground
        });
    }catch(err){
        res.status(400).json({success:false})
    }
    
};

//@desc   Create new campground
//@route  POST /api/v1/campgrounds
//@access Private
exports.createCampground = async(req,res,next)=>{
    const campground = await Campground.create(req.body);
    res.status(200).json({
        success:true,
        data:campground
    });
};

//@desc   Update single campground
//@route  PUT /api/v1/campgrounds/:id
//@access Private
exports.updateCampground= async(req,res,next)=>{
    try{
        const campground = await Campground.findByIdAndUpdate(req.params.id,req.body,{
            new: true,
            runValidators:true
        });
        if(!campground){
            return res.status(400).json({success:false});
        }
        res.status(200).json({success:true, data:campground});
    }catch(err){
        res.status(400).json({success:false});
    }
};

//@desc   Delete single campground
//@route  DELETE /api/v1/campground/:id
//@access Private
exports.deleteCampground= async(req,res,next)=>{
    try{
        const campground = await Campground.findByIdAndDelete(req.params.id);
        if(!campground){
            return res.status(400).json({
                success:false
            });
        }
        res.status(200).json({success:true, data:{}});
    }catch(err){
        res.status(400).json({success:false});
    }
};