import about from './about/index.js';

let files = [about];

let messages = {};

files.map((file) => {
  Object.assign(messages, file);
});

export default messages;
