class List{

    constructor() {
        this.list = [];
        this.size = 0;
    }
     
    add(num){
        this.list.push(num);
        this.list.sort((a, b) => a - b);
        this.size += 1;
    }
    get(index){
        if(index < 0 || index >= this.list.length){
            throw new Error('Invalid index')
        }
        return this.list[index]
    }
    remove(index){
        if(index < 0 || index >= this.list.length){
            throw new Error('Invalid index')
        }
        return this.list.splice(index, 1)
    }
    

}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));

