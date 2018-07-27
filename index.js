// Code your solution here:
//drvs is an array of objects
function driversWithRevenueOver(drvs,revenue){
  return drvs.filter(function (drv){
    return drv.revenue>revenue;
  });
}


function driverNamesWithRevenueOver(drvs,revenue){
  return driversWithRevenueOver(drvs,revenue).map(function(drv){
    return drv.name;
  });
}


