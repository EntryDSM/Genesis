export interface statusResponse {
  schedule: { type: string; date: string; process: string }[];
  current_status: string;
}
