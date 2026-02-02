import { createClient } from '@supabase/supabase-js';


// Initialize database client
const supabaseUrl = 'https://hufnzvsktpvmkcxxomcz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh1Zm56dnNrdHB2bWtjeHhvbWN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk3NzIxMzAsImV4cCI6MjA4NTM0ODEzMH0.HkD9kU-5e_uZ59lvW3Aqw759yvTpATgvKAPYSxhCtnE';
const supabase = createClient(supabaseUrl, supabaseKey);


export { supabase };
