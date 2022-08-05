const Books=require("../models/book")

// Adds new Book
exports.addBook=async(req,res)=>{
    const {title,author,category}=req.body;
    if(!title || !author || !category) return res.status(400).json({message:"Please fill all fields"})

    try {
        const newTasks= await Books.create({
            title,
            author,
            category
    })
        res.status(201).json({message:`New Book, ${title}, added!`})
     } catch (err) {
        res.status(500).json({'message':err.message})
     }
  }

  // Retrieve all Books
exports.fetchAllTasks=async(req,res)=>{
    try {
       const {page,perPage}=req.query;
       const options={
         page:parseInt(page,10) || 1,
         limit:parseInt(perPage,10) || 10
       } 
       const result=await Books.paginate({},options)
      return  res.status(200).json(result)
     //   return res.status(400).json({message:'No available tasks'})
  
    } catch (err) {
     res.status(500).json({'message':err.message})
    }
  }

  // Update a particular Todo task
exports.updateTask=async(req,res)=>{
    try {
       const found=await Books.findByIdAndUpdate(
          { _id: req.params.id },
          {$set :{title: req.body.title, author: req.body.author,category: req.body.category }},
       )
       if(found) return res.status(200).json({message:`Book of id: ${req.params.id} has been updated successfully`}) 
       return res.status(400).json({message:`Book of id: ${req.params.id} not found`})
    } catch (error) {
       res.status(500).json({'message':error})
    }
 }


 // Delete Todo task
exports.deleteTask=async(req,res)=>{
    try {
       const removedPost=await Books.findByIdAndDelete({_id:req.params.id})
       if(removedPost) {
          return res.status(200).json({message:`Book of id: ${req.params.id} has been deleted successfully`}) 
       }
       return res.status(400).json({message:`Book of id: ${req.params.id} not found`})
    } catch (error) {
       res.json({'message':error.message})
    }
 }


 // Search  book category
 exports.searchCategory=async(req,res)=>{
    try {
        const result=await Books.find({category:req.query.category})
       if(result) {
          return res.json({result}) 
       }
       return res.status(400).json({message:`Books of category: ${req.query.category} not found`})
    } catch (error) {
       res.json({'message':error.message})
    }
 }