import { createClient } from '@supabase/supabase-js'

export default defineNuxtPlugin(() => {
  const runtimeConfig = useRuntimeConfig()

  const supabase = createClient(runtimeConfig.public.supabase_url, runtimeConfig.public.supabase_key)

  return {
    provide: {
      supabase
    }
  }
})
