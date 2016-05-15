angular.module('app').factory('ProductFactory', 

function ($resource) {

    return {
        getProducts:getProducts,
        getProduct:getProduct
    }
    
    function getProducts(){
        return $resource('http://smartninja.betoo.si/api/eshop/products').query({});
    };
    
    
    function getProduct(){
        return $resource('http://smartninja.betoo.si/api/eshop/products/' + '1').query({});
    };
    
});