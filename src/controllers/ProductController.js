const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {

    /* 
        METHOD: GET

        Retorna todos os produtos cadastrados
    */
    async index(req, res){
        const products = await Product.find();

        return res.json(products);
    },

    
    /* 
        METHOD: GET

        Retorna um produto pelo id
    */
    async show(req, res){
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },
    
    /* 
        METHOD: POST

        Registra um produto
    */
    async store(req, res){
        const product = await Product.create(req.body);

        return res.json(product);
    },

    /* 
        METHOD: PUT

        Atualiza um produto
    */
   async update(req, res){
       const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

       return res.json(product);
   },

   /* 
        METHOD: PUT

        Atualiza um produto
    */
   async destroy(req, res){
    await Product.findByIdAndDelete(req.params.id);

    return res.json({
        message: 'Produto removido com sucesso !'
    });
}
}