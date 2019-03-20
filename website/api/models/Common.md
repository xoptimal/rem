# CommonModel

> 通用网络请求Control

```js
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

        /**
         * 查询请求
         * */
        * onRefresh({payload}, {call, put, select}) {
            yield call(requestPost, payload);
        },

        /**
         * 提交请求
         * */
        * onHandle({payload}, {call, put, select}) {
            yield call(requestPost, payload);
        },

        /**
         * 重置数据
         * */
        * resetData(_, {put, select}) {
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
            return {...state, ...action.payload};
        },
        
        /**
         * 更新请求失败数据集
         * */
        updateRequestFails(state, {payload: {response, result}}) {
            const {requestFails} = state;
            let index = -1;
            for (let i = 0; i < requestFails.length; i++) {
                if (requestFails[i].path == response.path) {
                    index = i;
                    break;
                }
            }
            if (index > -1) {
                requestFails.splice(index, 1);
            }
            if (!result) requestFails.push(response);
            return {...state, requestFails};
        },
    },
};

```
