import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ypcusbpsujyagxnoqond.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlwY3VzYnBzdWp5YWd4bm9xb25kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkzNjIyMTQsImV4cCI6MjA2NDkzODIxNH0.WUrzAcVIiABABpZK0dJtw5FXqOFbrIy6MO2rx0U11mw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
