<template>
  <layout-default class="page-contact">
    <layout-introduction
      title="Contact"
      :subtitle="$t('intro-web-agency')"
      :fullscreen="false"
    />
    <form action="https://formspree.io/info@fugu.team" method="post" novalidate="novalidate">
      <div class="box box--wrapper">
        <div class="page--inner">

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

          <div class="page-confirm_form">
            <ul class="page-confirm_formWrap">
              <li class="page-contact_formList">
                <label class="page-content_formLabel">会社名</label>
                <div class="page-content_formBox">
                  <input name="会社名" type="text" value="" size="60" placeholder="例）株式会社フグチーム" />
                </div>
              </li>
              <li class="page-contact_formList">
                <label class="page-content_formLabel">ご担当者名</label>
                <div class="page-content_formBox">
                  <input name="ご担当者名" type="text" value="" size="60" placeholder="例）山田太郎" />
                </div>
              </li>
              <li class="page-contact_formList">
                <label class="page-content_formLabel">メールアドレス</label>
                <div class="page-content_formBox">
                  <input name="_replyto" type="email" value="" size="60" placeholder="example@fugu.team" />
                </div>
              </li>
              <li class="page-contact_formList">
                <label class="page-content_formLabel">電話番号</label>
                <div class="page-content_formBox">
                  <input name="電話番号" type="tel" value="" size="60" placeholder="123-4567-8912" />
                </div>
              </li>

              <li class="page-contact_formList">
                <label class="page-content_formLabel">お問い合わせ内容</label>
                <div class="page-content_formBox">
                  <textarea name="お問い合わせ内容" cols="40" rows="10"  placeholder="お問い合わせ内容ご入力"></textarea>
                </div>
              </li>
            </ul>

          </div>
        </div>

        <div class="page-contact_formSubmit">
          <input type="hidden" name="_language" :value="getLocale" />
          <input type="hidden" name="_subject" value="Fugu.teamお問い合わせ" />
          <input type="hidden" name="_next" value="http://localhost:8081/contact-thanks" />
          <button type="submit" class="ui-btn btn--main" value="この内容で送信">この内容で送信します</button>
        </div>
      </div>
    </form>
    <!-- <company-map /> -->
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
  }
};
</script>
