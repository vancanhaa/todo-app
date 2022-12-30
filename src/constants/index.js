export const STATUS = {
  NEW: "New",
  DOING: "Doing",
  DONE: "Done",
};

export const MODE = {
  SHOW_LIST: "showList",
  ADD_NEW: "addNew",
  DETAIL_TASK: "detailTask",
};

export const POSITION_KEYWORD = 9;

export const ROUTER = {
  ALL: "/",
  NEW: "/new",
  DOING: "/doing",
  DONE: "/done",
  ADD_NEW: "/add-new",
  DETAIL_TASK: "/detail/:idTask",
  DETAIL: "/detail",
  NOT_FOUND: "*",
};

export const SIDEBAR_ITEM = [
  {
    url: "/",
    title: "All Task",
  },
  {
    url: "/new",
    title: "New Task",
  },
  {
    url: "/doing",
    title: "Doing Task",
  },
  {
    url: "/done",
    title: "Done Task",
  },
];

export const LIST_TO_DO_KEY = "l_t_d_k";

export const ITEM_PER_PAGE = 4;
