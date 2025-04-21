<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'
const { setLocale, locale, t } = useI18n();

const items = computed<DropdownMenuItem[]>(() => [
  {
    label: t('english'),
    type: 'checkbox' as const,
    checked: locale.value === "en-US",
    onUpdateChecked() {
      setLocale("en-US");
    }
  },
  {
    label: t('swedish'),
    type: 'checkbox' as const,
    checked: locale.value === "sv-SE",
    onUpdateChecked() {
      setLocale("sv-SE");
    }
  }
])
</script>


<template>
  <UDropdownMenu
    :items="items"
    :ui="{
      content: 'w-32 cursor-pointer'
    }"
  >
    <UTooltip :text="t('choose_language')">
        <UButton icon="i-lucide-globe" color="neutral" size="xl" variant="ghost" class="cursor-pointer"/>
    </UTooltip>
  </UDropdownMenu>
</template>
