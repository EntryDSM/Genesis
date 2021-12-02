import { error } from "src/models/error";
import { ApplicantListItem } from "src/data/api/apiTypes";

export interface ApplicantState {
 getApplicantsListStatus: 0 | 200| 400 | 401 | 403 | 404;
 getApplicantInfoStatus: 0 | 200 | 401 | 403 | 423;
 updateApplicantStatusStatus: 0 | 204 | 400 | 401 | 403;
 filters: getApplicantsLists;
 applicantsList: getApplicantsListResponse;
 currnetApplicantInfo: getApplicantInfoResponse;
 updateApplicantStatus: updateApplicantStatusResponse;
 updateApplicantSubmitStatus: updateApplicantSubmitStatusResponse;
 password: string;
 error: error;
}

export interface getApplicantsLists {
 size?: number;
 page?: number;
 is_daejeon?: boolean;
 is_nationwide?: boolean;
 is_submitted?: boolean;
 is_common?: boolean;
 is_meister?: boolean;
 is_social?: boolean;
 is_in?: boolean;
 is_out?: boolean;
 receipt_code?: number;
 school_name?: number;
 name?: string;
}

export interface getApplicantsListResponse {
 total_elements: number;
 total_pages: number;
 applicants: Array<ApplicantListItem>;
}

export interface getApplicantInfoResponse {
   status: {
      is_printed_arrived: boolean;
      is_submit: boolean;
    },
    common_information:{  
      name: string;
      school_name: string;
      email: string;
      telephone_number: string;
      school_tel?: string;
      parent_tel: string;
    },
    more_information: {
      photo_url: string;
        birthday: string;
        education_status: string;
        application_type: string;
        application_remark: string;
        address: string;
        detail_address: string;
        head_count: string
    },
    evaluation: {
      volunteer_time: number;
      conversion_score: number;
      day_absence_count: number;
      lecture_absence_count: number;
      early_leave_count: number;
      lateness_count: number;
      self_introduce: string;
      study_plan: string;
      average_score: number;
    }
}

export interface updateApplicantStatusResponse {
   receipt_code?: number;
   is_printed_arrived?: boolean;
}

export interface updateApplicantSubmitStatusResponse {
   receipt_code?: number;
 }

export interface checkPasswordResponse {
   password: string;
}
