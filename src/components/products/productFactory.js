angular.module('app').factory('ProductFactory', 

function ($resource) {

    return {
        getProducts:getProducts,
        getProduct:getProduct
    }
    
    function getProducts(){
        
            return $resource('http://smartninja.betoo.si/api/eshop/products').query({});   

    };  
    
    /*
    function getProducts(categor_id){
        if (categor_id == null) {
            return $resource('http://smartninja.betoo.si/api/eshop/products').query({});
        }
        else {
            return $resource('http://smartninja.betoo.si/api/eshop/categories/' + category_id.toString() +'/products').query({});    
        }
    };    */
    
    function getProduct(id){
        if (id != "undefined") {
            return $resource('http://smartninja.betoo.si/api/eshop/products/' + id.toString()).get({});
        }
    };    
    
    
});