class Apple {
    weight;

    constructor() {
        this.weight = 0;
    }

    decrease() {
        this.weight--;
    }

    isEmpty(){
        if(this.weight > 0){
            return alert("con "+this.weight +" mieng tao")
        }else {
            return alert("het con me no tao roi")
        }
    }

    getWeight(){
        return this.weight;
    }
}
