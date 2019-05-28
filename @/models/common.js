import request from '../support/utils/request';

export default {
    namespace: 'common',

    state: {
        /**
         * 请求失败数据集
         * */
        requestFails: [], // eg.{path : '', response : {}}  tips: 登录成功必须清空该数组 !!!
    },

    subscriptions: {},

    effects: {
        *onRefresh({ payload }, { call, put, select }) {
            try {
                return yield call(request, payload);
            } catch (e) {
                return Promise.reject(e);
            }
        },
        *onHandle({ payload }, { call, put, select }) {
            try {
                return yield call(request, payload);
            } catch (e) {
                return Promise.reject(e);
            }
        },

        /**
         * 重置数据
         * */ *resetData(_, { put, select }) {
            //sessionStorage.clear();
            //localStorage.clear();
            //yield put(routerRedux.replace('/'));
        },
    },

    reducers: {
        /**
         * 保存数据
         * */
        save(state, action) {
            return { ...state, ...action.payload };
        },

        /**
         * 更新请求状态(成功/失败)
         * */
        updateRequestStated(
            state,
            {
                payload: { url, isSuccess },
            }
        ) {
            const { requestFails } = state;
            let index = -1;
            for (let i = 0; i < requestFails.length; i++) {
                if (requestFails[i].url == url) {
                    index = i;
                    break;
                }
            }
            if (index > -1) {
                requestFails.splice(index, 1);
            }
            if (!isSuccess) requestFails.push({ url });
            return { ...state, requestFails };
        },
    },
};
