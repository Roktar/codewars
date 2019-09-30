const messages = {
  'FIRE' : {
    prefix: 'You',
    suffix: 'and you',
    postfix: 'are fired!'
  },
  'FURY' : {
    prefix: 'I am',
    suffix: 'really',
    postfix: 'furious.'
  }
}

var fireAndFury = function(tweet) {
  let arr = tweet.match(/FURY|FIRE/g);
  
  if(!arr || !/^[F|U|R|Y|I|R|E]/.test(tweet) || tweet.includes(' '))
    return "Fake tweet."
  else {
    let cnt = 0;
    let result = [];
    
    for(let i=0; i<arr.length+1; i++) {
      cnt++;
      if(arr[i] != arr[i+1]){
        result.push( makeString(messages[arr[i]], cnt) );
        cnt = 0;
      }
    }
    return result.join(" ");
  }
}

function makeString(obj, cnt) {
  if(cnt === 1)
    return [obj['prefix'], obj['postfix']].join(" ");
  else
    return [obj['prefix'], obj['suffix'].repeatText(cnt-1, " "), obj['postfix']].join(" ");
}

String.prototype.repeatText = function(cnt, delimeter) {
  return [].range(0, cnt-1).apply((v, i, arr) => arr.push(this)).done(array => array.join(delimeter));
}

Array.prototype.range = function(start, end) {
  if( start > end )
    throw new Error("start is greater than end");
  if(!end) {
    end = start;
    start = 0;
  }
  
  let that = this;
  
  return {
    apply: function(func) {
      for(let i=start; i<=end; i++)
        func(that[i], i, that);
      return this;
    },
    done: function(func) {
      return func(that);
    }
  }
}