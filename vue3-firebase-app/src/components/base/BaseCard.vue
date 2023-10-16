<template>
  <!-- 
    v-bind="$attrs" **
    flat 및 bordered와 같은 명시적으로 선언된 속성 이외에도
    부모 컴포넌트에서 추가적으로 전달된 모든 속성이 q-card 컴포넌트로 전파됨 -->
  <q-card  :flat="flat" :bordered="bordered" v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name">
        <slot :name="name"></slot>
    </template>
  </q-card>
</template>

<script setup>
defineProps({
  flat: {
    type: Boolean,
    default: true,
  },
  bordered: {
    type: Boolean,
    default: true,
  }
})
</script>

<style lang="scss" scoped>

</style>