var _ = require("underscore");

class Dinglemouse {

    constructor() {
        this.name = this.age = this.sex = 0
        this.order = []
    }

    setAge(age) {
        this.age = age
        this.setProperty('age')
        return this
    }

    setSex(sex) {
        this.sex = sex
        this.setProperty('sex')
        return this
    }

    setName(name) {
        this.name = name
        this.setProperty('name')
        return this
    }
    
    setProperty(prop_name) {
      if( this.order.findIndex( (v, i) => v === prop_name ) < 0 )
        this.order.push(prop_name);
    }
    
    make(s) {
      switch(s) {
        case "age" :
          return `I am ${this.age}.`;
        case "sex" :
          return `I am ${this.sex == 'M' ? "male" : "female"}.`;
        case "name" :
          return `My name is ${this.name}.`;
      }
      return "";
    }

    hello() {
        return 'Hello.' + (this.order.length ? " " : "") + this.order.reduce( (arr, s, i) => _.chain(arr).push(this.make(s)).value(), []).join(" ");
    }
}