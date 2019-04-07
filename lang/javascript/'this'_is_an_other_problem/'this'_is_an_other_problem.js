// #1
function NamedOne(first, last) {
// -- SHOULD be changed --
    
  Object.defineProperty(this, "firstName", {
    set: function(value) {
      this._firstName = value;
      this.fullName = this._firstName + ' ' + this._lastName;
    },
    get: function() {
      return this._firstName;
    }
  });
  
  Object.defineProperty(this, "lastName", {
    set: function(value) {
      this._lastName = value;
      this.fullName = this._firstName + ' ' + this._lastName;
    },
    get: function() {
      return this._lastName;
    }
  });
  
  Object.defineProperty(this, "fullName", {
    set: function(value) {
      let sub = value.split(" ");
      if(sub.length === 2) {
        this._fullName = value;
        this._firstName = sub[0];
        this._lastName = sub[1];
      }
    },
    get: function() {
      return this._fullName;
    }
  });
  
  if(first)
    this.firstName = first;
  if(last)
    this.lastName = last;
}

// #2
function NamedOne(first, last) {
  // -- SHOULD be changed --
      
  Object.defineProperty(this, "firstName", {
    set: setValue(this, "_firstName"),
    get: getValue(this, "_firstName")
  });
  
  Object.defineProperty(this, "lastName", {
    set: setValue(this, "_lastName"),
    get: getValue(this, "_lastName")
  });
  
  Object.defineProperty(this, "fullName", {
    set: setValue(this, "_fullName", true, 'Y'), // 세번째 파라미터 추가
    get: getValue(this, "_fullName")
  });
  
  if(first)
    this.firstName = first;
  if(last)
    this.lastName = last;
}

function setValue(obj, name, isChain, fullYn) { // 파라미터 isChain 추가
  if(!fullYn) {
    return function(value) {
      if(!name.includes("_")) // 추가
        name = "_"+name; // 추가
      obj[name] = value;
      if(!isChain) // 추가
        obj.fullName = this._firstName + ' ' + this._lastName;
    }
  } else {
    return function(value) {
      let sub = value.split(" ");
      if(sub.length === 2) {
        this._fullName = value;
        setValue(this, "firstName", isChain)(sub[0]); // 프로퍼티 호출 방법 변경
        setValue(this, "lastName", isChain)(sub[1]); // 프로퍼티 호출 방법 변경
      }
    }
  }
}

function getValue(obj, name) {
  return function() {
    return obj[name];
  }
}  