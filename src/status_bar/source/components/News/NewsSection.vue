<script lang="ts" setup>
import CommonStatus from '../common/CommonStatus.vue';

interface Props {
  /** 新闻标题 */
  title: string;
  /** 新闻内容 */
  content?: Record<string, string>;
  /** 空状态提示文本 */
  emptyMessage?: string;
  /** 标题样式类名 */
  titleClass?: string;
}

const props = withDefaults(defineProps<Props>(), {
  content: () => ({}),
  emptyMessage: '暂无内容',
  titleClass: '',
});

// 判断内容是否为空
const isEmpty = computed(() => {
  if (!props.content) return true;
  return Object.values(props.content).every(val => !val || val.trim() === '');
});

// 获取新闻条目列表
const newsItems = computed(() => {
  if (isEmpty.value) return [];

  return Object.entries(props.content)
    .filter(([_, value]) => value && value.trim() !== '')
    .map(([key, value]) => ({
      title: key,
      content: value,
    }));
});
</script>

<template>
  <CommonStatus
    :title="title"
    variant="sub-section"
    :default-open="true"
    custom-class="news-section"
  >
    <template #title>
      <span :class="titleClass">{{ title }}</span>
    </template>

    <div v-if="!isEmpty" class="news-items">
      <div v-for="item in newsItems" :key="item.title" class="news-item">
        <div class="news-item-title">{{ item.title }}</div>
        <div class="news-item-content value-main">{{ item.content }}</div>
      </div>
    </div>

    <div v-else class="news-content value-main">
      {{ emptyMessage }}
    </div>
  </CommonStatus>
</template>

<style lang="scss" scoped>
.news-items {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.news-item {
  &:not(:last-child) {
    padding-bottom: 8px;
    border-bottom: 1px solid var(--theme-border-secondary);
  }
}

.news-item-title {
  font-weight: 700;
  color: var(--theme-text-tertiary);
  font-size: 1em;
  letter-spacing: 0.3px;
}

.news-item-content {
  white-space: pre-wrap;
  line-height: 1.5;
  color: var(--theme-text-primary);
  padding-left: 8px;
  font-size: 0.95em;
}
</style>
