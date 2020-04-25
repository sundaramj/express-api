const {ProductList} = require('../helpers/helper');

const controllers = {
    getAllProduct : function(req,res){
        // for(let i =0;i<100000;i++){
        //     console.log(i);
        // }
        res.send(ProductList);
    },
    getProduct : function(req,res){
        if(!req.params.id){ 
            res.send('No id found'); 
            return;
        }        
        let response = ProductList.find(v=>v.id == req.params.id);
        if(!response) response = {error:"No product found"};
        res.send(response);
    },
    // Sample ejs example if u want to render data in html format
    renderHtml : (req,res) => { // you can use arrow functiona also
        
        res.render('sample',{ campground:{
            name : 'test',
            description:'desc test',
            comments: [
                {
                    author:"product1",
                    text : "text1"
                },
                {
                    author:"product2",
                    text : "text2"
                }
            ]
        }})
        
    }
    
}

module.exports = controllers;