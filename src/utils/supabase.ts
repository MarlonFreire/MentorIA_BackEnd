import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabasePublishableKey = process.env.SUPABASE_PUBLISHABLE_KEY || '';

if (!supabaseUrl || !supabasePublishableKey) {
  throw new Error('As variáveis SUPABASE_URL e SUPABASE_PUBLISHABLE_KEY são obrigatórias no .env');
}

export const supabase = createClient(supabaseUrl, supabasePublishableKey);