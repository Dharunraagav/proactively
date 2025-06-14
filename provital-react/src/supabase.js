import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://plljbtgzwvnitpezhknr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsbGpidGd6d3ZuaXRwZXpoa25yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2NzA2NDIsImV4cCI6MjA2NTI0NjY0Mn0.HqVBhWGDA1yqc372dyKjWltUONrfqgP2P-J5P0sp4tc'

export const supabase = createClient(supabaseUrl, supabaseKey)
