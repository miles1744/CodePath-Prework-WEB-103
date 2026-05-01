import { createClient } from '@supabase/supabase-js';

const URL = 'https://xbuyqtijphxlgleqpubn.supabase.co';

const API_KEY = 'sb_publishable_p97f8LnsrCyPcs_EAoFzDA_lWm0jQ0m';

export const supabase = createClient(URL, API_KEY)