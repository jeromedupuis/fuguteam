<template>
  <div class="layout-default_footer">

    <nav class="layout-default_nav">
      <ul>
        <li>
          <router-link :to="{ name: 'PageIndex' }">Top</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'PageCompany' }">Company</router-link>
        </li>
        <!-- <li>
          <router-link :to="{ name: 'PageServices' }">Services</router-link>
        </li> -->
        <li>
          <router-link :to="{ name: 'PageWorks' }">Works</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'PageNewsList' }">News</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'PageContact' }">Contact us</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
