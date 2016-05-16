angular.module('app').factory('ProductFactory', 

function ($resource) {

    return {
        getProducts:getProducts,
        getProduct:getProduct,
        getProductsByCategory:getProductsByCategory
    }
    
    function getProducts(){
        return $resource('http://smartninja.betoo.si/api/eshop/products').query({});
    };    
    
    
    function getProduct(id){
        return $resource('http://smartninja.betoo.si/api/eshop/products/' + id.toString()).get({});
    };
        
    
    function getProductsByCategory(category_id){
        return $resource('http://smartninja.betoo.si/api/eshop/categories/' + category_id.toString() +'/products').query({});
    };
    
    
    
});