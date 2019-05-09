const regions = {
  A:"Anglia",
  B:"Birmingham",
  C:"Cymru (Wales)",
  D:"Deeside",
  E:"Essex",
  F:"Forest and Fens",
  G:"Garden of England",
  H:"Hampshire and Dorset",
  K:"Milton Keynes",
  L:"London",
  M:"Manchester and Merseyside",
  N:"North",
  O:"Oxford",
  P:"Preston",
  R:"Reading",
  S:"Scotland",
  V:"Severn Valley",
  W:"West of England",
  Y:"Yorkshire"
};

function check(plate) {
  if(!plate || !plate.length)
    return "Error! Invalid number plate";
  
  plate = plate.replace(/ /g, "");
    
  let ageIdentiferCodes = [10, 50];
  let obj = {
    plate: plate,
    region: plate.substring(0, 2),
    year: (!/[A-Za-z]/g.test(plate.substring(2, 4)) ? parseInt(plate.substring(2, 4))+2000 : plate.substring(2, 4)),
    letter: plate.substr(4)
  }

  let validList = [];
  validList.push( data => !/[a-z]/g.test(data.plate) );
  validList.push( data => !/[0-9|!|?]/g.test(data.region) );
  validList.push( data => !/^[J|T|U|X]|[I|Q|Z]/g.test(data.region) );
  validList.push( (data, nowYear, list) => nowYear >= data.year || list.every((v, i) => (data.year-v) >= 2001 && (data.year-v) <= 2069) );
  validList.push( data => data.year >= 2001 && data.year <= 2069 );
  validList.push( data => data.letter.length === 3 );
  validList.push( data => !/[I|Q]/g.test(data.letter) );
    
  if(validate(validList, obj, 2019, ageIdentiferCodes))
    return `${getYear(obj.year, ageIdentiferCodes)}, ${regions[obj.region.substring(0, 1)]}`;
  else
    return "Error! Invalid number plate";
}

function getYear(plateYear, ageIdentiferCodes) {
  let year = plateYear;
  if(plateYear > 2019) {
    for(let v of ageIdentiferCodes) {
      let y = plateYear-v;
      if(y >= 2001 && y <= 2069)
        year = y;
    }
  }
  return year;
}

function validate(validator, ...data) {
  if(Array.isArray(validator))
    return validator.every( (validate, i) => validate(...data) );
}