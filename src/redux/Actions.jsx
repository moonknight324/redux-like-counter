const increment = "INCREMENT";
const decrement = "DECREMENT";

export function incrementLike(){
  return {
    type: increment,
  }
}
export function decrementLike(){
  return {
    type: decrement,
  }
}


