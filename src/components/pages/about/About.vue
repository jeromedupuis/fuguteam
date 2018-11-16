<template>
  <layout-default>
    <layout-introduction
      title="About"
      subtitle="Web Agency"
      :fullscreen="false"
    />

    <ul>
      <template v-for="(consonne, i1) in consonnes">
        <template v-for="(voyelle, i2) in voyelles">
          <template v-if="!isIranai(`FUGU{{consonne}}{{voyelle}}`)">
            <li onclick="this.remove()" :key="`${i1}-${i2}-1`">FUGU{{consonne}}{{voyelle}}</li>
          </template>
          <template v-if="!isIranai(`FUGU{{consonne}}{{voyelle}}`)">
            <li onclick="this.remove()" :key="`${i1}-${i2}-2`">FUGU{{voyelle}}{{consonne}}</li>
          </template>
        </template>
      </template>
    </ul>

  </layout-default>
</template>

<script>
import LayoutDefault from '@/components/layouts/default/Layout';
import LayoutIntroduction from '@/components/layouts/common/Introduction';

export default {
  data() {
    return {
      consonnes: ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Z'],
      voyelles: ['A', 'E', 'I', 'O', 'U', 'Y'],
      iranai: ['FUGUBA'],
      favorites: ['FUGUBU']
    };
  },
  methods: {
    isIranai(word) {
      return this.iranai.indexOf(word) > -1;
    }
  },
  components: {
    LayoutDefault,
    LayoutIntroduction
  }
};
</script>
