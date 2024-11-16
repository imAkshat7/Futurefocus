export interface Skill {
  id: string;
  name: string;
  icon: string;
  category: string;
}

export interface Career {
  predicted_job_title: string;
  id: string; // Unique identifier for the career match (optional)
};