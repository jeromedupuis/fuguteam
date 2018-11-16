<template>
  <layout-default class="page-contact">
    <layout-introduction
      title="Contact"
      subtitle="Web Agency"
      :fullscreen="false"
    />
    <div class="box box--wrapper">
      <div class="page--inner">

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

        <form action="/contact/#wpcf7-f842-o1" method="post" class="wpcf7-form" novalidate="novalidate">
          <ul class="page-confirm_formWrap">
            <li class="page-contact_formList">
              <label class="page-content_formLabel">会社名</label>
              <div class="page-content_formBox">
                <input type="text" value="" size="60" placeholder="例）株式会社フグコード" />
              </div>
            </li>
            <li class="page-contact_formList">
              <label class="page-content_formLabel">ご担当者名</label>
              <div class="page-content_formBox">
                <input type="text" value="" size="60" placeholder="例）山田太郎" />
              </div>
            </li>
            <li class="page-contact_formList">
              <label class="page-content_formLabel">メールアドレス</label>
              <div class="page-content_formBox">
                <input type="email" value="" size="60" placeholder="example@fugucode.com" />
              </div>
            </li>
            <li class="page-contact_formList">
              <label class="page-content_formLabel">電話番号</label>
              <div class="page-content_formBox">
                <input type="tel" value="" size="60" placeholder="123-4567-8912" />
              </div>
            </li>

            <li class="page-contact_formList">
              <label class="page-content_formLabel">お問い合わせ内容</label>
              <div class="page-content_formBox">
                <textarea name="your-message" cols="40" rows="10"  placeholder="お問い合わせ内容ご入力"></textarea>
              </div>
            </li>
          </ul>

        </form>

      </div>

      <div class="page-contact_formSubmit">
        <button type="submit" class="ui-btn btn--main" value="この内容で送信">この内容で送信します</button>
      </div>
    </div>
    <company-map />
  </layout-default>
</template>

<script>
import LayoutDefault from '@/components/layouts/default/Layout';
import LayoutIntroduction from '@/components/layouts/common/Introduction';
import CompanyMap from '../common/Map';

export default {
  components: {
    LayoutDefault,
    LayoutIntroduction,
    CompanyMap
  },
  data() {
    return {
      subtitle: 'Web Agency',
      title: 'Contact us',
      lead: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    };
  }
};
</script>
