const express = require('express');
const {CreateUser, verifyUser} = require('../controllers/user.controller.js')
const upload = require('../middlewares/multer.js');
// const { verify } = require('../utils/sendMail.js');
const router = express.Router();

router.get('/create-user', upload.single('file'),CreateUser )


router.post('/CreateUser',upload.single('file'),CreateUser);
router.get('/activation/:token',)/*async(req,res)=>{
    const {token} = req.params;
    try{
        if(verifyUser(token)){
            return res.status(200).cookie();
            
        }
        return res.status(403).send({message: 'token expired'});

    }catch(er){

    return res.status(403).send({message: er.message});
    }
})*/




module.exports = router; 