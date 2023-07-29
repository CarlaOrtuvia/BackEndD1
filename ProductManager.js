
class ProductManager{
    constructor(){
        this.products = []
    }
    
    // Método getProducts//
getProducts(){
    return this.products
}
   
    // Método addProducts//
addProducts(title, description, price, thumbail, stock){
    const producto = {
        id: this.#nuevoId() +1,
        title,
        description,
        price,
        thumbail,
        stock
    }
}

#nuevoId(){
    let maxId = 0;
    this.products.map((product) => {
        if(product.id > maxId) maxId = product.id
    });
    return maxId;
}

   //Método getProductsById//

getProductById(id){
    const product = this.products.find((product) => product.id === id);

    if(product){
        return product
    } else{
        console.log("Not found");
        return null;
    }
    }
}

// Instancias//

const ProductManager = new ProductManager();
ProductManager.addProducts("Remeras", "Blancas de Mujer", 3000, "thumb1.jpg", 50);
ProductManager.addProducts("Pantalones", "Negros de Mujer", 14000, "thumb2.jpg, 30");
console.log(ProductManager.getProducts());

const productById = ProductManager.getProductById(1);
console.log(productById);