import axios from "axios";
import { DataAIForm } from "../types";
const apiUrl = "https://develop-api.thincrs.com/api";

export async function getJobDataIA() {
  const response = await axios.get(`${apiUrl}/v3/job/data-ai`);
  return response.data;
}

interface GenerateInfo {
  search: string;
  actor: string;
}

export async function generateInfo(data: GenerateInfo) {
  const response = await axios.post(`${apiUrl}/v3/job/data-ai/generate`, data);
  return response.data;
}

interface GenerateInfoCustom {
  title: string;
  location: string;
  ddescription: string;
}

export async function generateInfoCustom(data: GenerateInfoCustom) {
  const response = await axios.post(
    `${apiUrl}/v3/job/data-ai/generate/custom`,
    data
  );
  return response.data;
}

export async function getJobDataAIDetail(jobDataAIID: number) {
  const response = await axios.get(`${apiUrl}/v3/job/data-ai/detail`, {
    params: {
      job_data_ai_id: jobDataAIID
    }
  });

  return response.data;
}

export async function updateJobData(data: DataAIForm) {
  const response = await axios.put(`${apiUrl}/v3/job/data-ai`, data);

  return response.data;
}

export async function generateJobDataAICSVS(jobDataAIID: number) {
  const response = await axios.get(`${apiUrl}/v3/job/data-ai/generate/csv`, {
    params: {
      job_data_ai_id: jobDataAIID
    }
  });

  return response.data;
}

export interface JobData {
  job_data_ai_id: number;
  validated: boolean;
  job_data: JobData;
}

export interface JobDataItem {
  name: string;
  description: string;
  profile_name: string;
  technology_name: string;
  job_type: string;
  english_level: string;
  softskills_needed: string[];
  personality: string;
  location: string;
  experience_years: string;
  required_competences: string[];
  optional_competences: string[];
}
