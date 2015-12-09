import {createAction, ignore} from "../helper/redux";

import api from "../api";

export const loadItem = createAction("torrent-item", (params, dispatch, getState) => (
  getState().torrent.item.has(params.id) ? ignore : api.torrent.item(params)
));

export const loadList = createAction("torrent-list", (params) => (
  api.torrent.list(params)
));
