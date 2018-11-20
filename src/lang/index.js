import common from './common/index.js';
import index from './index/index.js';
import about from './about/index.js';
import meta from './meta/index.js';
let files = [meta, common, index, about];

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

export default messages;
