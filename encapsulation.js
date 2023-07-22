function counter(){
    let count = 10
    
    function increment(){
        count++
    }

    function getCount(){
        return count
    }

    return {
        increment: increment,
        getCount: getCount
      };
}

const counterObj = counter()

let a = counterObj.increment()
let b = counterObj.getCount()

console.log(a)
console.log(b)