import { createClient } from '@supabase/supabase-js'

export default defineNuxtPlugin(() => {
  const supabaseUrl = 'https://rnjdfumzpujebumaphdw.supabase.co'
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJuamRmdW16cHVqZWJ1bWFwaGR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUyMjc4OTEsImV4cCI6MjA2MDgwMzg5MX0.08fk7SOomCMO20SX2dzBUnr0-xtSOjW4jeijweLPjkk'

  const supabase = createClient(supabaseUrl, supabaseKey)

  return {
    provide: {
      supabase
    }
  }
})
