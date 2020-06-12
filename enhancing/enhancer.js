module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if(item.enhancement === 20){
    item.enhancement = 20
  } else {
    item.enhancement++
  }
  return {
    ...item
  };
}

function fail(item) {

  if(item.enhancement < 15) {
     item.durability -= 5;
     return { ...item}
      } else { 
        if(item.enhancement > 16) {
            item.enhancement -= 1;
            item.durability -= 10;
              return{...item  }
        }else{
          if (item.enhancement >= 15){
              item.durability -= 10;
              return {...item}
          } 
        }
     }
} 

function repair(item) {
  item.durability = 100;
  
  return {
    ...item
    };
}

function get(item) {
  return { ...item };
}
