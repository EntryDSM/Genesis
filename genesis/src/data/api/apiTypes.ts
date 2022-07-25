export interface responseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

export interface GetSchedulesPayload {
  type: string;
  date: string;
  process: string;
}

export interface UpdateSchedulesPayload {
  type: string;
  date: string;
}

export interface GetSchedulesResponse {
  schedule: GetSchedulesPayload[];
  current_status: string;
}

export interface UpdateScheduleStatusPayload {
  schedules: UpdateSchedulesPayload[];
}

export interface CommonScoreDistribution {
  //일반전형 점수
  "158-170": number;
  "145-157": number;
  "132-144": number;
  "119-131": number;
  "106-118": number;
  "93-105": number;
  "80-92": number;
  "-79": number;
  application_type: "COMMON";
  daejeon: boolean;
  /* common_count: number;
    common_competition_rate: number; */
}

export interface SpecialScoreDistribution {
  //특별전형 점수
  "98-110": number;
  "85-97": number;
  "72-84": number;
  "59-71": number;
  "46-58": number;
  "33-45": number;
  "20-32": number;
  "-19": number;
  application_type: "MEISTER" | "SOCIAL";
  daejeon: boolean;
  /* special_count: number,
    special_competition_rate: number, */
}

export interface CommonCountDistribution {
  //일반전형 숫자
  count: number,
  application_type: "COMMON";
  daejeon: boolean;
  /* common_count: number;
    common_competition_rate: number; */
}

export interface SpecialCountDistribution {
  //특별전형 숫자
  count: number,
  application_type: "MEISTER" | "SOCIAL";
  daejeon: boolean;
  /* special_count: number,
    special_competition_rate: number, */
}

/* export interface GetEachStatisticsResponse { //응답받는 형식..?
     total_applicant_count: number;
    total_competition_rate: number;
    total_submitted_applicant_count: number;
    common_score: CommonScoreDistribution;
    meister_score: SpecialScoreDistribution;
    social_score: SpecialScoreDistribution; 
  } */

export interface GetScoreStatisticsResponse {
  //응답받는 형식..? 점수
  0: CommonScoreDistribution,
  1: CommonScoreDistribution,
  2: SpecialScoreDistribution,
  3: SpecialScoreDistribution,
  4: SpecialScoreDistribution,
  5: SpecialScoreDistribution,
}

export interface GetCountStatisticsResponse {
  //응답받는 형식..? 숫자
  0: CommonCountDistribution,
  1: CommonCountDistribution,
  2: SpecialCountDistribution,
  3: SpecialCountDistribution,
  4: SpecialCountDistribution,
  5: SpecialCountDistribution,
}

export interface StaticDistribution {
  count: GetCountStatisticsResponse,
  score: GetScoreStatisticsResponse;
}

export interface GetApplicantsListPayload {
  size?: number;
  page?: number;
  isDaejeon?: boolean;
  isNationwide?: boolean;
  isSubmitted?: boolean;
  isNotSubmitted?: boolean;
  isCommon?: boolean;
  isMeister?: boolean;
  isSocial?: boolean;
  inOfHeadcount?: boolean;
  outOfHeadcount?: boolean;
  receiptCode?: number;
  schoolName?: number;
  name?: string;
}

export interface ApplicantListItem {
  receipt_code: number;
  name: string;
  email: string;
  is_daejeon: boolean;
  application_type: string;
  is_prints_arrived: boolean;
  is_submitted: boolean;
  headcount: string;
}

export interface GetApplicantsListResponse {
  total_elements: number;
  total_pages: number;
  applicants: ApplicantListItem[];
}

export interface GetApplicantInfoPayload {
  receipt_code?: number;
}

export interface GetApplicantInfoResponse {
  status?: {
    is_prints_arrived: boolean;
    is_submit: boolean;
  },
  common_information?: {
    name: string;
    school_name: string;
    email: string;
    telephone_number: string;
    school_tel?: string;
    parent_tel: string;
  },
  more_information?: {
    photo_url: string;
    birthday: string;
    education_status: string;
    application_type: string;
    application_remark: string;
    address: string;
    detail_address: string;
    head_count: string
  },
  evaluation?: {
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

export interface UpdateApplicantStatusPayload {
  receipt_code?: number;
  is_prints_arrived?: boolean;
}

export interface UpdateApplicantPaidStatusPayload {
  receipt_code?: number;
}

export interface UpdateApplicantSubmitStatusPayload {
  receipt_code?: number;
}

export interface CheckPasswordRequest {
  password: string;
}
