import pack from "../models/pack"

const getPacks = (req,res) => {
    try {
        const packs = await Pack.find()
        res.status(200).json({
            success: true,
            packs: packs,
            total: pack.length
        })        
    } catch (error) {
        res.status(400).json({
            success: false,
            err: error.message
        })
    }
}

const addPack = async(req, res) =>{
    try {
        const pack = await Pack.create(req.body)
        res.status(200).json({
            success: true,
            pack: pack
        })        
    } catch (error) {
        res.status(400).json({
            success: false,
            err: error.message
        })
    }
}

const getPackById = async(req, res) =>{
    try {
        const pack = await Pack.findById(req.query.id)
        if (!pack){
        return res.status(400).json({
            success: false,
            err: "Invalid id. No data found."
        })
        }
        res.status(200).json({
            success: true,
            pack: pack
        })        
    } catch (error) {
        res.status(400).json({
            success: false,
            err: error.message
        })
    }

    
}

const updatePack = async(req, res) =>{
    try {
        let pack = await Pack.findById(req.query.id)
        if (!pack){
        return res.status(400).json({
            success: false,
            err: "Invalid id. No data found."
        })
        }
        pack = await Pack.findByIdAndUpdate(req.query.id, {
            new: true,
            useFindAndModify: true,
            runValidators: true
        })
        res.status(200).json({
            success: true,
            pack: pack
        })        
    } catch (error) {
        res.status(400).json({
            success: false,
            err: error.message
        })
    }

    
}

export{
    addPack,
    getPacks,
    getPackById,
    updatePack
}