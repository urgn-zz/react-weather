import { SET_ACTIVE_VIEW } from "./consts";

export const setActiveView = (viewName) => {
    return {
        type: SET_ACTIVE_VIEW,
        payload: {
            value: viewName
        }
    }
}