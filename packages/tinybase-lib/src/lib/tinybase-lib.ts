import { Store } from "tinybase/cjs";

import { useRow } from "tinybase/cjs/ui-react";

export default class TinybaseWrapper {
  static useRowWrapper = useRow;

  constructor(public readonly tinyBase: Store) {}
}
