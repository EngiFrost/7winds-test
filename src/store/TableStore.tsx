import { makeAutoObservable } from 'mobx';
import { NewRowData, RowData } from '../model/row';

class TableStore {
  rows: RowData[] = [
    {
      id: 1,
      title: 'Test title 1',
      unit: 'Litres',
      quantity: 1234,
      unitPrice: 22323,
      price: 123425,
      parent: null,
      type: 'level',
    },
    {
      id: 2,
      title: 'Test title 2',
      unit: 'Adasd',
      quantity: 232,
      unitPrice: 1,
      price: 1232123,
      parent: 1,
      type: 'level',
    },
    {
      id: 3,
      title: 'Test title 3',
      unit: 'Aaaaa',
      quantity: 1,
      unitPrice: 2,
      price: 3,
      parent: 1,
      type: 'row',
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  // получение строки по id
  getRow(rowId: number) {
    return this.rows.find(row => row.id === rowId)!
  }

  // получение позиции строки для отрисовки коннектора
  getRowPosition(rowId: number, parentId: number) {
    // TODO: get row position by parent id
  }

  // иерархическая сортировка строк
  sortRows() {
    /* TODO: 
      step1: l1 -> (l2 -> files) or files
      step2: parent: null -> parent(l1 id) (levels b4 files)
      step3: parent(l2 id) -> files
    */
  }

  // сохранение строки
  saveRow(rowData: NewRowData) {
    const index = Math.max(...this.rows.map((v) => v.id), 0) + 1;
    const row: RowData = { id: index, ...rowData };

    this.rows.push(row);
    this.sortRows();

    return {
      current: row,
      changed: this.recalculation(row.parent, this.rows),
    };
  }

  // изменение строки
  editRow(row: RowData) {
    const index = this.rows.findIndex((v) => v.id === row.id);

    this.rows.splice(index, 1, row);
    this.sortRows();

    return {
      current: row,
      changed: this.recalculation(row.parent, this.rows),
    };
  }

  recalculation(parentID: number | null, storage: RowData[]) { // TODO: use for price change
    const rows = [...storage];
    const changedRows: RowData[] = [];

    if (parentID == null) return changedRows;
    let currentParentIndex = rows.findIndex((v) => v.id === parentID);
    if (currentParentIndex === -1) return changedRows;

    do {
      const currentParent = rows[currentParentIndex];
      const children = rows.filter((v) => v.parent == currentParent.id);
      const newPrice = children.reduce((acc, v) => acc + v.price, 0);

      if (currentParent.price !== newPrice) {
        rows[currentParentIndex].price = newPrice;
        changedRows.push(rows[currentParentIndex]);

        currentParentIndex = rows.findIndex((v) => v.id === currentParent.parent);
        continue;
      }

      break;
    } while (currentParentIndex !== -1);

    return changedRows;
  }
}

export const tableStore = new TableStore();
