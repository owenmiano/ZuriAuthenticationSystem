const router=require('express').Router();
const {userAuth,checkRole}=require('../utils/Auth')
const bookController=require("../controllers/bookController")


// Adds new book    Authorised Personell(ADMIN)
router.post('/addBook',userAuth,checkRole(["admin"]),bookController.addBook)

// Retrieve all books    All Authorised Personell (users,admin,staff,manager)
router.get('/fetchAllBooks',userAuth, bookController.fetchAllTasks)

// Update a particular Book  Authorised Personell(ADMIN,MANAGER)
router.put('/updateBook/:id',userAuth,checkRole(["admin","manager"]), bookController.updateTask)

// Permanently remove a book    Authorised Personell(ADMIN)
router.delete('/deleteTask/:id',userAuth,checkRole(["admin"]), bookController.deleteTask)

// Search Book Category   All Authorised Personell (users,admin,staff,manager)
router.get('/searchCategory',userAuth, bookController.searchCategory)


module.exports=router;