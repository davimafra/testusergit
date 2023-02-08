const router = require('express').Router();



router.get('/users', (req,res) => {  
    var since = 0;
    if(req.query?.since){
        since = req.query.since;
    }
    var nextpage = (+since+10);
    axios(`https://api.github.com/users?since=${since}&per_page=10`, {
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github.v3+json',
    },
   })
   .then((response) =>{
     console.log(typeof response);
     res.status(200).json(
        {
            "list of users": response.data,
            "next page " : `http://localhost:8000/api/users?since=${nextpage}`
        });
   })   
   .catch((err) =>{
    console.log('error:' + err)
    res.status(500).json({error: err});
   })



});
router.get('/users/:username/details', async (req,res) => {  
    const username = req.params.username;
    console.log(username);
    axios(`https://api.github.com/users/${username}`, {
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github+json',
    },
   })
   .then((response) =>{
     console.log(typeof response);
     res.status(200).json(response.data);
   })   
   .catch((err) =>{
    console.log('error:' + err)
    res.status(500).json({error: err});
   })

});
router.get('/users/:username/repos', async (req,res) => {  
    const username = req.params.username;
    console.log(username);
    axios(`https://api.github.com/users/${username}/repos`, {
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github+json',
    },
   })
   .then((response) =>{
     console.log(typeof response);
     res.status(200).json(response.data);
   })   
   .catch((err) =>{
    console.log('error:' + err)
    res.status(500).json({error: err});
   })
});


module.exports = router;