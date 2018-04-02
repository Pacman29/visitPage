import {ADD_CHAR, ADD_CURSOR, DELETE_CURSOR} from '../constants/actiontypes';

function *generator(text) {
  for(let i = 0; i<text.length; ++i){
    yield text[i];
  }
  return false;
}

let content = '<span id="a">team@sas</span>:<span id="b">~</span><span id="c">$</span> cat teaminfo.txt<br/><br/>\n' +
    'Привет!' +
    ' <!-- laglaglaglaglaglaglaglaglaglaglaglag -->' +
    '<p>Это визитка нашей команды для Хакатона BEST</p>' +
    '<!-- qowifjqwoeijfoqweijfqweoifjqweofijqweoqwoijefoqwijefoijfqiwoefjj -->\n' +
    '<p>Мы все являемся учащимися кафедры ИУ7.</p>' +
    '<!-- oqwipjefqwioefjwioqfjoiqwjfeioqwjefoi -->\n' +
    '<p>Нам нравится программировать и создавать что-то новое и необычное</p>' +
    '<!-- owlsqweoifjqwoefijqwoeifjqwoefijwef -->\n' +
    '<!-- longlongcomment -->' +
    '<ul>Состав комманды: ' +
    '<li><a href="/teampage?user=asriyan">Эдуард Асриян</a></li>' +
    '<li><a href="/teampage?user=balyakin">Данила Балякин</a></li>' +
    '<li><a href="/teampage?user=kamakin">Андрей Камакин</a></li>' +
    '<li><a href="/teampage?user=kapustin">Алексей Капустин</a></li></ul>'+
    '<span id="a">team@sas</span>:<span id="b">~</span><span id="c">$</span>|';
let gen = generator(content);

let initialState = '';

export default function adder(state = initialState, action) {
  switch (action.type) {
  case ADD_CHAR: {
    let str = '';
    for(let i = 0; i<2; ++i){
      let char = gen.next();
      if(!char.done){
        if(char === '<')
          i -=2;
        str += char.value;
      }
    }
    if(str)
      return state + str;
    else
      return state;
  }
  case ADD_CURSOR: {
    return state + '|';
  }
  case DELETE_CURSOR: {
    if(state !== '' && state[state.length-1] === '|'){
      return state.slice(0,state.length-1);
    } else {
      return state;
    }
  }
  default:
    return state;
  }
}