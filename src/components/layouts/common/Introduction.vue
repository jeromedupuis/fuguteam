<template>
  <div class="layout-intro" ref="LayoutIntro" id="layoutIntro" :class="[{ 'is--fullscreen': fullscreen }]">
    <div class="layout-intro_inner" :class="[{'has--animation':animation }, {'is--animated':animated}]">
      <h1 v-if="title">
        <small v-if="subtitle">{{ subtitle }}</small>
        {{ title }}
      </h1>
      <p v-if="lead && fullscreen">{{ lead }}</p>


      <div v-if="animation && fullscreen" class="layout-intro_animation" ref="logoAnimation">
        <span>.</span><span>f</span><span>u</span><span>g</span><span>u</span><span>T</span><span>e</span><span>a</span><span>m</span><span>&nbsp;{</span>

        <template v-if="!displayAnimationLogo">
          <span>d</span><span>i</span><span>s</span><span>p</span><span>l</span><span>a</span><span>y</span><span>: </span><span>b</span><span>l</span><span>o</span><span>c</span><span>k</span><span>;</span>
        </template>
        <template v-else>
          <span class="layout-intro_animationLogo fade">
            <img src="/static/img/svg/moonfish.svg" />
          </span>
        </template>

        <span>}</span>
      </div>
    </div>

    <a class="layout-introScroller" @click.prevent="scrollOnclick" v-if="!noScroller && fullscreen">
      <img src="/static/img/svg/hook.svg" />
    </a>
  </div>
</template>

<script>
import _ from 'lodash';
export default {
  data() {
    return {
      displayAnimationLogo: false,
      animated: true
    };
  },
  props: {
    title: {
      type: String,
      default: null
    },
    subtitle: {
      type: String,
      default: null
    },
    lead: {
      type: String,
      default: null
    },
    noScroller: {
      type: Boolean,
      default: false
    },
    animation: {
      type: Boolean,
      default: false
    },
    fullscreen: {
      type: Boolean,
      default: true,
      required: false
    }
  },
  methods: {
    scrollOnclick() {
      let LayoutIntro = this.$refs.LayoutIntro;

      let offset = 85;
      if(window.innerWidth < 782) {
        offset = 135;
      }
      if(window.innerWidth < 572) {
        offset = 70;
      }

      this.$scrollTo('#layoutIntro', 400, {
        offset: LayoutIntro.clientHeight-offset,
        easing: 'ease-in'
      });
      return false;
    }
  },
  mounted() {
    let logoAnimation = this.$refs.logoAnimation;

    if(this.animated) {
      let i = 0;
      let interval = setInterval(() => {
        let span = _.get(logoAnimation, `children.${i}`, null);
        if(span) {
          span.style.opacity = 1;
        } else {
          setTimeout(() => {
            this.displayAnimationLogo = true;
          }, 2000);
          clearInterval(interval);
        }

        i++;
      }, 100);
    } else {
      this.displayAnimationLogo = true;
    }
  }
};
</script>
