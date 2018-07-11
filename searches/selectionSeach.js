let selectionSearch = (x) => {
  let array = [3,6,9,12,15,45,52,78,92,120]
    , found = false
    , message = ''
    , midValueIndex = Math.round((array.length - 1) / 2);

  for(let i = 0; i < array.length; i++) {
    if(x > array[array.length - 1]) {
      return found;
    } else if(x === array[i]) {
      found = true;
      break;
    } else {
      if(x < array[midValueIndex]) {
        midValueIndex = Math.round(midValueIndex / 2);
      } else if(x > array[midValueIndex]) {
        midValueIndex += Math.round(((array.length -1) - midValueIndex) / 2);
      } else {
        found = true;
        break;
      }
    }
  }

  return found;
}

module.exports = {
  selectionSearch
}