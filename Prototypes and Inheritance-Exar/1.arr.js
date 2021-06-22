(function(){
    Array.prototype.last = function (){
        return this[this.length - 1]
    }

    Array.prototype.sum = function (){
        return this.reduce((acc, el)=> acc + el)
    }

    Array.prototype.average = function (){
        return this.sum() / this.length
    }

    Array.prototype.skip = function (n){
        return this.slice(n)
    }
    Array.prototype.take = function (n){
        return this.slice(0, n)
    }

}())