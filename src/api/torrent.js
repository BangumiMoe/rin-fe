import * as uri from "../helper/uri";
import * as http from "../helper/http";

export default {
  item: ({id}) => http.post("/api/torrent/fetch", {_id: id}),
  list: ({page}) => http.get(uri.escape`/api/v2/torrent/page/${page}`)
};
