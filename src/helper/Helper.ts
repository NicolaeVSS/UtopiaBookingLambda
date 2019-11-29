export const isFalsey = (obj) => {
  for(var o in obj)
      if(!obj[o]) {
        console.log("falsey")
        return false;
    }
    
  return true;
}