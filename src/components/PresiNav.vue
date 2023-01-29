<template>
<div v-if="showNav">
  <router-link v-if="previousLink" :to="previousLink" tag="button">Back</router-link>
  <router-link v-if="nextLink" :to="nextLink" tag="button">Forward</router-link>
</div>
</template>

<script>

import { routes } from "@/router";

const presentationRoutes = routes
    .filter(r => r.path.startsWith('/presenting'))
    .map(r => r.path);

const routeReducer = (currentPath , accumulator, presentationPath) => {
  if (accumulator && accumulator.next) {
    return accumulator;
  }
  if (currentPath === presentationPath) {
    return {
      previous: accumulator.previous,
      triggerNext: true,
    };
  }
  if (accumulator.triggerNext) {
    return {
      previous: accumulator.previous,
      next: presentationPath
    };
  }
  return {
    previous: presentationPath
  };
}

export default {
  name: "PresiNav",
  computed: {
    isInNav () {
       return presentationRoutes.find(v => v === this.$route.path);
    },
    relativeLocation () {
      if(this.isInNav) {
        const reducer = routeReducer.bind(undefined, this.$route.path)
        return presentationRoutes.reduce(reducer,{});
      }
      return {};
    },
    previousLink () {
      return this.relativeLocation.previous || '';
    },
    nextLink () {
      return this.relativeLocation.next || '';
    },
    showNav () {
      return this.isInNav;
    }
  }
}
</script>

<style scoped>
  div {
    position: fixed;
    right: 0px;
  }
</style>