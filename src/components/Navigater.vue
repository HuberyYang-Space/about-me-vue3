<script setup lang='ts' vapor>
const links = [
  {
    title: 'Vue',
    url: '',
    className: 'vue group',
  },
  {
    title: 'to React',
    url: 'https://react.huberyyang.site/',
    className: 'react',
  },
  {
    title: 'to Html',
    url: 'https://html.huberyyang.site/',
    className: 'html',
  },
]

function onNavigate(url: string) {
  if (!url)
    return false
  window.open(url, '_self')
}
</script>

<template>
  <div flex="~" left="10px" top="10px" absolute z-1000 items-center text-18px font600>
    <span>Build with</span>
    <span v-for="{ title, url, className } in links" :key="title" :class="[className]" transition="all ease 600" @click="onNavigate(url)">{{ title }}
      <span v-if="title === 'Vue'" left="50%" absolute bottom-6px h2px w0px translate-x--20px group-hover:w40px bg="#42b883" transition="width ease 600" />
    </span>
  </div>
</template>
