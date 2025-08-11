<script setup lang="ts">
const priorities = ref(['高', '中', '低']);
const toast = useToast();

const addTicket = () => {
  toast.add({
    title: 'チケットが追加されました',
    description: '新しいチケットが正常に追加されました。',
    icon: 'i-mdi-check-circle',
  });
};

const status = ref<string>('対応中');

const statusColor = computed(() => {
  switch (status.value) {
    case '対応中':
      return 'info';
    case '完了':
      return 'primary';
    case '破棄':
      return 'neutral';
    default:
      return 'secondary';
  }
});
</script>

<template>
  <div>
    <div class="mb-4">
      <h1 class="text-3xl font-bold mb-6">チケット一覧</h1>
      <UModal title="チケットを追加" description="新たにチケットを追加します。">
        <UButton icon="i-mdi-plus-circle" class="w-full" size="lg">
          チケットを追加
        </UButton>

        <template #body>
          <UForm class="space-y-6 w-full max-w-md mx-auto">
            <UFormField label="件名" class="w-full">
              <UInput placeholder="件名を入力" class="w-full" />
            </UFormField>
            <UFormField label="内容" class="w-full">
              <UTextarea placeholder="内容を入力" class="w-full" />
            </UFormField>
            <UFormField label="依頼者名" class="w-full">
              <UInput placeholder="依頼者名を入力" class="w-full" />
            </UFormField>
            <UFormField label="優先度" class="w-full">
              <USelect :items="priorities" class="w-full" />
            </UFormField>
          </UForm>
        </template>

        <template #footer="{ close }">
          <div class="flex gap-3 justify-end w-full">
            <UButton color="primary" @click="addTicket"> 追加 </UButton>
            <UButton color="error" variant="outline" @click="close">
              閉じる
            </UButton>
          </div>
        </template>
      </UModal>
    </div>
    <USeparator icon="i-mdi-ticket-confirmation" />
    <div class="mt-9">
      <UCard class="text-sm shadow-neutral-100">
        <template #header>
          <div class="flex flex-col gap-4">
            <div class="flex items-center gap-2 w-full">
              <h3 class="text-xl font-bold mr-auto">サンプル件名</h3>
              <UButton
                icon="i-mdi-arrow-right"
                variant="ghost"
                color="gray"
                size="lg"
                aria-label="詳細へ"
                class="text-xl"
              />
            </div>
            <div class="flex gap-2 w-full">
              <div class="flex gap-2">
                <div class="font-semibold">担当者</div>
                <UBadge variant="subtle" class="text-gray-900">山田太郎</UBadge>
              </div>
            </div>
          </div>
        </template>
        <div class="flex flex-col gap-4">
          <div class="flex gap-4 w-full">
            <div class="flex gap-2">
              <div class="font-semibold">チケットID</div>
              <UBadge variant="outline">12345</UBadge>
            </div>
            <div class="flex gap-2">
              <div class="font-semibold">ステータス</div>
              <UBadge :color="statusColor">{{ status }}</UBadge>
            </div>
          </div>
        </div>
      </UCard>
    </div>
  </div>
</template>

<style scoped></style>
