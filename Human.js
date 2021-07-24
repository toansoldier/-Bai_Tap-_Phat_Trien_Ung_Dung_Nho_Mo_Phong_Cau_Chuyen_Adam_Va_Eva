class Human {
    name;
    gender;
    weight;

    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }

    isMale() {
        if (this.gender) {
            return alert("Is Male")
        } else {
            return alert("Is Female")
        }
    }

    setGender(boolean) {
        this.gender = boolean;
    }

    checkApple(Apple) {
        Apple.isEmpty();
    }

    eat(Apple) {
        Apple.decrease();
        if (Apple.getWeight() > 0) {
            this.weight++;
        }
    }

    say(said) {
        alert(said)
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.setName = name;
    }

    getWeight() {
        return this.weight;
    }

    setWeight(weight) {
        this.weight = weight;
    }
}
