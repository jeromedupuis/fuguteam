import Vue from 'vue';

import UtilMixins from './Util';
import LayoutMixins from './Layout';
import MomentMixins from './Moment';
import LangMixins from './Lang';

Vue.mixin(UtilMixins);
Vue.mixin(LayoutMixins);
Vue.mixin(MomentMixins);
Vue.mixin(LangMixins);
