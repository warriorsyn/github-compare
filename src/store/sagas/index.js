import { all, takeLatest } from "redux-saga/effects";

import { Types as GithubActions } from "../ducks/github";

import { addRepository } from "./github";

export default function* rootSaga() {
    yield all([
        takeLatest(GithubActions.ADD_REPOSITORY_REQUEST, addRepository )
    ])
}