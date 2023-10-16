<template>
  <StickySideBar>
      <!-- 새 포스트 작성하기 -->
      <q-btn
        padding="8px 12px 8px 8px"
        unelevated
        class="bg-primary text-white full-width"
      >
        <q-avatar
          class="q-mr-sm bg-white text-primary"
          size="22px"
        >
          <q-icon name="edit" size="14px" />
        </q-avatar>
        <span class="text-weight-bold">새 포스트 작성하기</span>
      </q-btn>
    
      <!-- 태그 검색하기  -->
      <q-card class="q-mt-md bg-grey-1" bordered flat>
        <q-card-section class="flex items-center q-pb-none">
          <div class="text-weight-bold">태그</div>
          <q-space />
          <q-btn icon="refresh" flat round color="grey" dense/>
        </q-card-section>
        <!-- 태그 검색란 -->
        <q-card-section class="q-pb-sm">
          <q-card class="q-px-sm" bordered flat square>
            <q-input
              borderless
              dense
              input-style="font-size: 12px"
              placeholder="태그로 검색해보세요"
            />
            <!-- 검색된 태그 목록 -->
            <div class="q-pb-sm q-gutter-sm">
              <q-btn
                size="10px"
                padding="2px 4px 2px 7px"
                class="bg-grey-3 text-dark"
                unelevated
              >
                vuejs
                <q-icon name="clear" size="12px" color="grey"></q-icon>
              </q-btn>
              <q-btn
                size="10px"
                padding="2px 4px 2px 7px"
                class="bg-grey-3 text-dark"
                unelevated
              >
                react
                <q-icon name="clear" size="12px" color="grey"></q-icon>
              </q-btn>
            </div>
          </q-card>
        </q-card-section>
    
        <q-list padding>
          <q-item v-for="tag in tags" :key="tag.name" dense clickable>
            <q-item-section class="text-teal text-caption">
              #{{ tag.name }}
            </q-item-section>
            <q-item-section side class="text-teal text-caption">
              {{ tag.count }}
            </q-item-section>
          </q-item>
        </q-list>
      </q-card>
  </StickySideBar>
</template>

<script setup>
import StickySideBar from 'src/components/StickySideBar.vue';
import { ref } from 'vue';

const tags = ref([
  {name: 'vuejs', count: 10},
  {name: 'react', count: 8},
  {name: 'angular', count: 1},
  {name: 'html', count: 3},
  {name: 'css', count: 12},
])
</script>

<style lang="scss" scoped>

</style>