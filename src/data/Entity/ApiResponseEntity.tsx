// types.ts
export interface ApiResponse {
    message: string;
    detail: string | null;
    success: boolean;
    status: number;
  }

export const initialStateApiResponse : ApiResponse = {
  message: '',
  detail: '',
  success: false,
  status: 0,
}