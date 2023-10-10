export interface LaravelPagination {
  current_page: number;
  firts_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}

export interface DataAI {
  id: number;
  job_data: JobData;
  validated: boolean;
  csv_competences: {
    optional_competences: string[];
    required_competences: string[];
  } | null;
  created_at: string;
}

export type DataAIForm = {
  job_data_ai_id: number;
} & Omit<DataAI, "csv_competences" | "created_at">;

export interface JobData {
  name: string;
  description: string;
  profile_name: string;
  technology_name: string;
  job_type: string;
  english_level: string;
  softskills_needed: string;
  personality: string;
  location: string;
  experience_years: string;
  required_competences: string;
  optional_competences?: string;
}
