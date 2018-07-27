// Code your solution here:
//drvs is an array of objects
function driversWithRevenueOver(drvs,revenue){
  return drvs.filter(function (drv){
    return drv.revenue>revenue;
  });
  
}
