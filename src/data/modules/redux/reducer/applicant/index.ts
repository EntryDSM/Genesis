import { ApplicantState } from "./interface";
import { applicantActionType } from "src/data/modules/redux/action/applicant";
import {
  SET_FILTER,
  GET_APPLICANT_INFO_SUCCESS,
  GET_APPLICANT_INFO_FAILURE,
  GET_APPLICANTS_LIST_SUCCESS,
  GET_APPLICANTS_LIST_FAILURE,
  UPDATE_APPLICANT_STATUS,
  UPDATE_APPLICANT_STATUS_SUCCESS,
  UPDATE_APPLICANT_STATUS_FAILURE,
  UPDATE_APPLICANT_PAID_STATUS,
  UPDATE_APPLICANT_PAID_STATUS_SUCCESS,
  UPDATE_APPLICANT_PAID_STATUS_FAILURE,
  UPDATE_APPLICANT_SUBMIT_STATUS,
  UPDATE_APPLICANT_SUBMIT_STATUS_SUCCESS,
  UPDATE_APPLICANT_SUBMIT_STATUS_FAILURE,
  PASSWORD,
  CHECK_PASSWORD_SUCCESS,
  CHECK_PASSWORD_FAILURE,
  DELETE_APPLICANT_TABLE_SUCCESS,
  DELETE_APPLICANT_TABLE_FAILURE,
} from "../../action/applicant/interface";

const InitialState: ApplicantState = {
  getApplicantsListStatus: 0,
  getApplicantInfoStatus: 0,
  updateApplicantStatusStatus: 0,
  password: "",
  filters: {
    size: 10,
    page: 0,
    isDaejeon: false,
    isNationwide: false,
    isSubmitted: null,
    isNotSubmitted: null,
    isCommon: false,
    isMeister: false,
    isSocial: false,
    inOfHeadcount: false,
    outOfHeadcount: false,
    receiptCode: null,
    schoolName: null,
    name: null,
  },
  applicantsList: {
    total_elements: 0,
    total_pages: 0,
    applicants: [],
  },
  currnetApplicantInfo: {
    status: {
      is_prints_arrived: false,
      is_submit: false,
    },
    common_information: {
      name: "",
      school_name: "",
      email: "",
      telephone_number: "",
      school_tel: "",
      parent_tel: "",
    },
    more_information: {
      photo_url: "",
      birthday: "",
      education_status: "",
      application_type: "",
      application_remark: "",
      address: "",
      detail_address: "",
      head_count: "",
    },
    evaluation: {
      volunteer_time: 0,
      conversion_score: 0,
      day_absence_count: 0,
      lecture_absence_count: 0,
      early_leave_count: 0,
      lateness_count: 0,
      self_introduce: "",
      study_plan: "",
      average_score: 0,
    },
  },
  updateApplicantStatus: {
    is_prints_arrived: false,
    receipt_code: null,
  },
  updateApplicantPaidStatus: {
    receipt_code: null,
  },
  updateApplicantSubmitStatus: {
    receipt_code: null,
  },
  error: {
    status: 0,
    message: "",
    type: "",
  },
};

const applicantReducer = (
  state: ApplicantState = InitialState,
  action: applicantActionType
) => {
  switch (action.type) {
    case SET_FILTER: {
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload,
        },
      };
    }
    case GET_APPLICANTS_LIST_SUCCESS: {
      return {
        ...state,
        applicantsList: {
          total_elements: action.payload.total_elements,
          total_pages: action.payload.total_pages,
          applicants: action.payload.applicants,
        },
      };
    }
    case GET_APPLICANTS_LIST_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case GET_APPLICANT_INFO_SUCCESS: {
      return {
        ...state,
        currnetApplicantInfo: {
          status: action.payload.status,
          common_information: action.payload.common_information,
          more_information: action.payload.more_information,
          evaluation: action.payload.evaluation,
        },
      };
    }
    case GET_APPLICANT_INFO_FAILURE: {
      return {
        ...state,
        currnetApplicantInfo: {
          status: action.payload.status,
          common_information: action.payload.common_information,
        },
      };
    }
    case UPDATE_APPLICANT_STATUS: {
      return {
        ...state,
        updateApplicantStatus: {
          is_prints_arrived: action.payload.is_prints_arrived,
          receipt_code: action.payload.receipt_code,
        },
      };
    }
    case UPDATE_APPLICANT_STATUS_SUCCESS: {
      return {
        ...state,
      };
    }
    case UPDATE_APPLICANT_STATUS_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case UPDATE_APPLICANT_PAID_STATUS: {
      return {
        ...state,
        updateApplicantPaidStatus: {
          receipt_code: action.payload.receipt_code,
        },
      };
    }
    case UPDATE_APPLICANT_PAID_STATUS_SUCCESS: {
      return {
        ...state,
      };
    }
    case UPDATE_APPLICANT_PAID_STATUS_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case UPDATE_APPLICANT_SUBMIT_STATUS: {
      return {
        ...state,
        updateApplicantSubmitStatus: action.payload.receipt_code,
      };
    }
    case UPDATE_APPLICANT_SUBMIT_STATUS_SUCCESS: {
      return {
        ...state,
      };
    }
    case UPDATE_APPLICANT_SUBMIT_STATUS_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case PASSWORD: {
      return {
        ...state,
        password: action.payload,
      };
    }
    case CHECK_PASSWORD_SUCCESS: {
      return {
        ...state,
      };
    }
    case CHECK_PASSWORD_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case DELETE_APPLICANT_TABLE_SUCCESS: {
      return {
        ...state,
      };
    }
    case DELETE_APPLICANT_TABLE_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default applicantReducer;
