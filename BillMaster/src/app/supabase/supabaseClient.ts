// src/app/supabase/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bjtrxdyrglmteyhvqevy.supabase.co'; //This is the URL of your Supabase project.
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqdHJ4ZHlyZ2xtdGV5aHZxZXZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA4NTI5MTUsImV4cCI6MjA2NjQyODkxNX0.457sSBt-iLFO_UEYTH2H2Z47koOqddZWcmhDe3LR-Ic'; //This is your anonymous public API key, also known as the anon key.

/**
 * Configuration values to connect your frontend application to your Supabase project
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
