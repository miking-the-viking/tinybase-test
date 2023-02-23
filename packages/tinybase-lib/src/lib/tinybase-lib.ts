/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createQueries, createStore, Store } from "tinybase/cjs";
import { useRow } from "tinybase/cjs/ui-react";
export class TinybaseWrapper {
  public readonly tinyBase!: Store;
  public useRow!: typeof useRow;
  queries!: ReturnType<typeof createQueries>;

  constructor() {
    this.tinyBase = createStore();
    this.queries = createQueries(this.tinyBase);
    this.useRow = (tableId, rowId) =>
      useRow(tableId as string, rowId as string, this.tinyBase as Store) as any;
  }
}
