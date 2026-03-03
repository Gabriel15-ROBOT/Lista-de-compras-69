// Importa a função de criação do client Supabase via CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Cria o client com a URL e a chave fornecidas
export const supabase = createClient(
  'https://sknnicbmtbtlpnkvklbu.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrbm5pY2JtdGJ0bHBua3ZrbGJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIxMTMyNDMsImV4cCI6MjA4NzY4OTI0M30.AeQQ8AlHVO8Qujv-3jzFmyAHrxZspoC8hL5qMMPOv-E'
)
    