import React from 'react';
import {
  render,
  RenderResult,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DataTable, { DataTableProps } from './index';

function renderDataTable<T>({
  items = [],
  selectedItem = undefined,
  metaData = [],
  onRowClick = undefined
}: DataTableProps<T>): RenderResult {
  return render(
    <DataTable items={items}
      selectedItem={selectedItem}
      metaData={metaData}
      onRowClick={onRowClick}
    />
  );
}

function propsExample() {
  const items = [
    { id: 100, name: 'bob', email: 'bob@bb.bb', login: 'reddevil' },
    { id: 200, name: 'ed', email: 'ed@bb.bb', login: 'imba' },
    { id: 300, name: 'kate', email: 'kate@bb.bb', login: 'katie' },
  ];
  const metaData = [
    { text: 'User Emails', value: 'email' },
    { text: 'Full Name', value: 'name' },
  ];
  const onRowClick = jest.fn();
  return {
    items,
    metaData,
    onRowClick,
  };
}

describe('DataTable', () => {
  describe('undefined selectedItem', () => {
    it('should render as many headers as specified in meta data', () => {
      const { items, metaData } = propsExample();
      const { container } = renderDataTable({ items, metaData });
      const headers = container.querySelectorAll('table thead td');
      expect(headers.length).toEqual(metaData.length);
    });

    it('should render headers with texts from meta data', () => {
      const { items, metaData } = propsExample();
      const { container } = renderDataTable({ items, metaData });
      const headers = container.querySelectorAll('table thead td');
      metaData.forEach((meta, i) => {
        const expectedText = meta.text;
        const header = headers.item(i);
        expect(header).toHaveTextContent(expectedText);
      });
    });

    it('should render as many rows as passed items', () => {
      const { items, metaData } = propsExample();
      const { container } = renderDataTable({ items, metaData });
      const rows = container.querySelectorAll('table tbody tr');
      expect(rows.length).toEqual(items.length);
    });

    it('should render each item data in separate row', () => {
      const { items, metaData } = propsExample();
      const { container } = renderDataTable({ items, metaData });
      const rows = container.querySelectorAll('table tbody tr');

      items.forEach((item, i) => {
        const row = rows.item(i);
        const expectedText = item.email;
        expect(row).toHaveTextContent(expectedText);
      });
    });

    it('should in each row render cells specified in meta data', () => {
      const { items, metaData } = propsExample();
      const { container } = renderDataTable({ items, metaData });
      const rows = container.querySelectorAll('table tbody tr');

      rows.forEach((row, i) => {
        const cells = row.querySelectorAll('td');
        cells.forEach((cell, j) => {
          const item = items[i];
          const propName = metaData[j].value as keyof typeof item;
          const expectedText = item[propName] as string;
          expect(cell).toHaveTextContent(expectedText);
        });
      });
    });

    it('should highlight no row', () => {
      const { items, metaData } = propsExample();
      const { container } = renderDataTable({ items, metaData });
      const row = container.querySelector('table tbody tr.highlighted');

      expect(row).toBeNull();
    });
  });

  describe('passed selectedItem', () => {

    it('should highlight exactly one row', () => {
      const { items, metaData } = propsExample();
      const selectedItem = items[1];
      const { container } = renderDataTable({ items, metaData, selectedItem });
      const rows = container.querySelectorAll('table tbody tr.highlighted');

      expect(rows.length).toEqual(1);
    });

    it('should highlight row by selectedItem', () => {
      const { items, metaData } = propsExample();
      const selectedItem = items[1];
      const { container } = renderDataTable({ items, metaData, selectedItem });
      const row = container.querySelector('table tbody tr.highlighted');

      const expectedText = selectedItem.email;
      expect(row).toHaveTextContent(expectedText);
    });
  });

  describe('row click', () => {
    it('should call passed event listener once', () => {
      const { items, metaData, onRowClick } = propsExample();
      const { container } = renderDataTable({ items, metaData, onRowClick });

      const row = container.querySelector(`table tbody tr`);
      userEvent.click(row as Element);

      expect(onRowClick).toBeCalledTimes(1);
    });

    it('should call passed event listener with item corresponding to clicked row', () => {
      const clickedItemIndex = 1;
      const { items, metaData, onRowClick } = propsExample();
      const { container } = renderDataTable({ items, metaData, onRowClick });

      const cssChildNo = clickedItemIndex + 1;
      const row = container.querySelector(`table tbody tr:nth-child(${cssChildNo})`);
      userEvent.click(row as Element);

      const expectedItem = items[clickedItemIndex];
      expect(onRowClick).toBeCalledWith(expectedItem);
    });
  });

});
