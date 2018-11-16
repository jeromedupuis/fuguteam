import common from './common/index.js';
import about from './about/index.js';
let files = [common, about];

let messages = {
  fr: {},
  en: {},
  ja: {}
};

files.map((file) => {
  for(var lang in file) {
    Object.assign(messages[lang], file[lang]);
  }
});
console.log('messages', messages);

export default messages;
