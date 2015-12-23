import {createAction, ignore} from "../helper/redux";

import api from "../api";

export default {
  item: {
    load: createAction("torrent-item-load", (params, dispatch, getState) => (
      getState().torrent.item.has(params.id) ? ignore : api.torrent.item(params)
    ))
  },
  list: {
    load: createAction("torrent-list-load", (params) => (
      api.torrent.list(params).then(data => ({
        list: data.torrents,
        page: {
          current: params.page,
          total: data.page_count
        }
      }))
    )),
    clear: createAction("torrent-list-clear")
  }
};
