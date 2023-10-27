import Activity from "../models/activity.js"

export const postActivity = async(req,res)=>{
    const {
        title,category,schedule,
        description,status
    } = req.body
    try {
        await Activity.create({
            title:title,category:category,
            schedule:schedule,
            description:description,status:status,
            trash_status:1
        })
        res.status(200).json({
            msg:"Aktifitas Berhasil Dibuat"
        })
    } catch (error) {
        console.log(error)
    }
}
export const updateActivity = async(req,res)=>{
    const postId = req.params.id
    const{
        title,category,
        description,status
    } = req.body
    try {
        const updateFind = await Activity.findOne({
            where:{id:postId}
        })
        updateFind.title = title, updateFind.category = category,
        updateFind.description = description, updateFind.status = status
        await updateFind.save()
        res.status(200).json({
            msg:"Aktifitas berhasil Diubah"
        })
    } catch (error) {
        console.log(error)
    }
}
export const allActivity = async(req,res)=>{
    try {
        const data = await Activity.findAll()
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
    }
}
export const findActivity = async(req,res)=>{
    const postId = req.params.id
    try {
        const find = await Activity.findOne({
            where:{id:postId}
        })
        res.status(200).json({find})
    } catch (error) {
        console.log(error)
    }
}