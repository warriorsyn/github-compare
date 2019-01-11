import { call, put } from "redux-saga/effects";
import api from "../../service/api";
import { Creators as GithubActions } from "../ducks/github";

export function* addRepository(action) {

    try {
        const { data } = yield call(api.get, `/repos/${action.payload.repository}`);

         yield put(GithubActions.addRepositorySuccess(data));     
    } catch(e) {
        yield put(GithubActions.getError("Esse repositório é inexistente!"));
    }
}