const vm = function(initVersion) {
    let versions = [0, 0, 1];
    let prevStatus = [], l = -1;
    let setPrev = function(arr) {
      let pv = [];
      for(let i=0; i<3; i++)
        pv[i] = arr[i];
      prevStatus.push(pv);
      l++;
    }
    
    if(initVersion){    
      let a = initVersion.split`.`.slice(0, 3);
      for(let i=0; i<3; i++) {
        if((a[i]||'').match(/[a-z]/gi))
          throw new Error("Error occured while parsing version!");
        
        versions[i] = +a[i] || 0;
      }
    }
    
    return {
     major() {
      setPrev(versions);
      versions[0]++;
      versions[1] = 0;
      versions[2] = 0;
      return this;
     },
     minor() {
      setPrev(versions);
      versions[1]++;
      versions[2] = 0;
      return this;
     },
     patch() {
      setPrev(versions);
      versions[2]++;
      return this;
     },
     rollback() {
       if(!prevStatus.length) throw new Error("Cannot rollback!");
       versions.forEach( (v, i, o) => o[i] = prevStatus[l][i] );
       prevStatus.pop();
       l--;
       return this;
     },
     release: () => versions.join`.`
    }
  }