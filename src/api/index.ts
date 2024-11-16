import axios from 'axios';
import type { Career } from '../types';

const api = axios.create({
  baseURL: 'https://futurefocusbackend.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const submitSkills = async (skillNames: string[]): Promise<Career> => {
  try {
    console.log('Sending skills to backend:', skillNames); // Debugging
    const { data } = await api.post<{ predicted_job_title: string }>(
      'predict-job-title',
      { skills: skillNames } // Send skill names
    );
    return { predicted_job_title: data.predicted_job_title }; // Map response to Career object
  } catch (error) {
    console.error('Error in submitSkills:', error.response?.data || error.message);
    throw error;
  }
};
