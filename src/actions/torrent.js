import {createAction} from "../helper/redux";

import api from "../api";

export const loadItem = createAction("torrent-item", id => (
  api.torrent.item(id)
));

export const loadList = createAction("torrent-list", page => (
  api.torrent.list(page)
));
