function calculateDamage(yourType, opponentType, attack, defense){
  return 50*(attack/defense)*(effectiveList[getDamageType(yourType, opponentType)]);
}

function getDamageType(yourType, opponent) {
  let now = compatibilityList[yourType];
  for(let type of Object.keys(now)) {
    if(Array.isArray(now[type])) {
      for(let i=0; i<now[type].length; i++) {
        if(now[type][i] === opponent)
          return type;
      }
    } else {
      if(now[type] === opponent)
        return type;
    }
  }
  
  return "default";
}

const compatibilityList = {};
const effectiveList = {};

function addItem(target, key, obj) {
  target[key] = obj;
}

addItem( compatibilityList, "fire", { weak:"water", strong: "grass", equal: "electric"} );
addItem( compatibilityList, "electric", { weak:"", strong: "water", equal: ["grass", "fire"]} );
addItem( compatibilityList, "water", { weak:["grass", "electric"], strong: "fire", equal: ""} );
addItem( compatibilityList, "grass", { weak:"fire", strong: "water", equal: "electric"} );
addItem( effectiveList, "weak", 0.5 );
addItem( effectiveList, "default", 0.5);
addItem( effectiveList, "equal", 1);
addItem( effectiveList, "strong", 2 );
