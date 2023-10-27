import Note from "../models/note.js"
export const postNote = async(req,res)=>{
    const {
        title,category,description
    } = req.body
    try {
        await Note.create({
            title:title,category:category,
            description:description,
            trash_status:1
        })
        res.status(200).json({
            msg:"Catatan Berhasil Dibuat"
        })
    } catch (error) {
        console.log(error)
    }
}
export const updateNote = async(req,res)=>{
    const {
        title,category,description
    } = req.body
    const postId = req.params.id
    try {
        const updateData = await Note.findOne({
            where:{id:postId}
        })
        updateData.title = title
        updateData.category = category
        updateData.description = description
        await updateData.save()
        res.status(200).json({
            msg:"Catatan Berhasil Diubah"
        })
    } catch (error) {
        console.log(error)
    }
}
export const allNote = async(req,res)=>{
    try {
        const dataNote = await Note.findAll()
        res.status(200).json(dataNote)
    } catch (error) {
        console.log(error)
    }
}
export const findNote = async(req,res)=>{
    const postId = req.params.id
    try {
        const findData = await Note.findOne({
            where:{id:postId}
        })
        res.status(200).json(findData)
    } catch (error) {
        console.log(error)
    }
}
export const deletePermanentNote = async(req,res)=>{
    const postId = req.params.id
    try {
        await Note.destroy({
            where:{id:postId}
        })
        res.status(200).json({
            msg:"Catatan Berhasil Dihapus"
        })
    } catch (error) {
        console.log(error)
    }
}