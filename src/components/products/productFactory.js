angular.module('app').factory('ProductFactory', 

function ($resource) {

    return {
        getProducts:getProducts,
        getProduct:getProduct
    }
    
    /*
    function getProducts(){
        
            return $resource('http://smartninja.betoo.si/api/eshop/products').query({});   

    };*/  
    
    
    function getProducts(id){
        if (id == null) {
            return $resource('http://smartninja.betoo.si/api/eshop/products').query({});
        }
        else {
            return $resource('http://smartninja.betoo.si/api/eshop/categories/' + id.toString() +'/products').query({});    
        }
    }; 
    
    function getProduct(id){
        if (id != null) {
            return $resource('http://smartninja.betoo.si/api/eshop/products/' + id.toString()).get({});
        }
    };    
    
    
});