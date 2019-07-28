import DefaultLayout from '~/layouts/Default.vue'
import VueScrollTo from 'vue-scrollto'
import VueFuse from 'vue-fuse'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);

  Vue.use(VueScrollTo, {
    duration: 500,
    easing: "ease",
  });

  Vue.use(VueFuse);

  head.meta.push({
    name: 'keywords',
    content: 'Java,Spring,Mcronaut,Docker,Jenkins,Angular'
  });

  head.meta.push({
    name: 'description',
    content: 'Microflash'
  });

  head.meta.push({
    name: 'author',
    content: 'Naiyer Asif'
  });

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap'
  });

  head.link.push({
    rel: 'stylesheet',
    href: 'https://rsms.me/inter/inter.css'
  });
}


