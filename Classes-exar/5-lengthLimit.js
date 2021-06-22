class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = Number(innerLength);
        this.result = ''
    }

    increase(value) {
        if (value > 0) {
            this.innerLength += value
        }

    }

    decrease(value) {
        if (value > 0) {
            this.innerLength -= value
            if(this.innerLength < 0){
                this.innerLength = 0
            }
        }
    }
    toString() {
        this.result = this.innerString

        if(this.innerString.length <= this.innerLength){
            return this.result
        }else if(this.innerLength <= 0){
            this.innerLength = 0
            return this.result = '...'

        }else{
            this.result = this.innerString.slice(0, this.innerLength) + '...'
            return this.result
        }

    }

}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test
