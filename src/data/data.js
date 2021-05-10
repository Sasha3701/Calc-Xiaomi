import { Divide, Multi, Del, Pi } from './dataSpetial'

export const buttonNumbers = [
  { id: 0, value: 0, view: 0, type: "number", gridAria: "zero" },
  { id: 1, value: 1, view: 1, type: "number", gridAria: "one" },
  { id: 2, value: 2, view: 2, type: "number", gridAria: "two" },
  { id: 3, value: 3, view: 3, type: "number", gridAria: "three" },
  { id: 4, value: 4, view: 4, type: "number", gridAria: "four" },
  { id: 5, value: 5, view: 5, type: "number", gridAria: "five" },
  { id: 6, value: 6, view: 6, type: "number", gridAria: "six" },
  { id: 7, value: 7, view: 7, type: "number", gridAria: "seven" },
  { id: 8, value: 8, view: 8, type: "number", gridAria: "eight" },
  { id: 9, value: 9, view: 9, type: "number", gridAria: "nine" },
];

export const buttonOperators = [
  {
    id: 10,
    view: <Divide />,
    value: '/',
    type: "sign",
    gridAria: "divide",
  },
  {
    id: 11,
    view: <Multi />,
    value: '*',
    type: "sign",
    gridAria: "multi",
  },
  {
    id: 12,
    view: '-',
    value: '-',
    type: "sign",
    gridAria: "sub",
  },
  {
    id: 13,
    view: '+',
    value: '+',
    type: "sign",
    gridAria: "add",
  },
  {
    id: 14,
    view: '=',
    value: '=',
    type: "equally",
    gridAria: "equa",
  },
  {
    id: 15,
    view: <Pi />,
    value: '3.14',
    type: "sign",
    gridAria: "per",
  },
  {
    id: 16,
    view: <Del />,
    value: 'delete',
    type: "sign",
    gridAria: "del",
  },
  {
    id: 17,
    view: 'C',
    value: 'C',
    type: "sign",
    gridAria: "clear",
  },
  {
    id: 18,
    view: ' ',
    value: ' ',
    type: "plug",
    gridAria: "plug",
  },
  {
    id: 19,
    view: ',',
    value: '.',
    type: "sign",
    gridAria: "comma",
  },
];
