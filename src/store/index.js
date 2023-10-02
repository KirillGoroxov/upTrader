import { createStore } from "redux";

const items =
  localStorage.getItem("boards") !== null
    ? JSON.parse(localStorage.getItem("boards")).boards
    : [
        {
          id: 1,
          title: "Queve",
          items: [
            {
              id: 1,
              title: "Go to shop",
              description: "Пойти в магазин днем во вторник",
              dateCreate: "12/09/2023",
              dateEnd: null,
              dayWork: null,
              priority: 1,
              checked: false,
              comments: [
                {
                  id: 1,
                  text: "Hello!!",
                  comments: [
                    {
                      id: 1,
                      text: "asdasdmalks!!",
                      comments: [{ id: 1, text: "Hello!!" }],
                    },
                  ],
                },
              ],
              subtasks: [
                {
                  id: 1,
                  text: "go",
                  checked: false,
                },
              ],
            },
            {
              id: 2,
              title: "buy apples",
              description: "Купить килограмм красный яблок в пятерочке",
              dateCreate: "10/09/2023",
              dateEnd: null,
              dayWork: null,
              priority: 2,
              checked: false,
              comments: [
                {
                  id: 1,
                  text: "Hello!!",
                  comments: [
                    {
                      id: 1,
                      text: "Hello!!",
                      comments: [
                        { id: 1, text: "Hello!!" },
                        { id: 2, text: "Good Luck bro" },
                      ],
                    },
                    {
                      id: 2,
                      text: "Good Luck bro",
                      comments: [
                        { id: 1, text: "Hello!!" },
                        { id: 2, text: "Good Luck bro" },
                      ],
                    },
                  ],
                },
                {
                  id: 2,
                  text: "Hello!!",
                  comments: [
                    {
                      id: 1,
                      text: "Hello!!",
                      comments: [
                        { id: 1, text: "Hello!!" },
                        { id: 2, text: "Good Luck bro" },
                      ],
                    },
                    {
                      id: 2,
                      text: "Good Luck bro",
                      comments: [
                        { id: 1, text: "Hello!!" },
                        { id: 2, text: "Good Luck bro" },
                      ],
                    },
                  ],
                },
              ],
              subtasks: [
                {
                  id: 1,
                  text: "go",
                  checked: false,
                },
              ],
            },
            {
              id: 3,
              title: "read book",
              description: "Почитать книгу Джека Лондона 'Мартин Иден'",
              dateCreate: "05/09/2023",
              dateEnd: null,
              dayWork: null,
              priority: 3,
              checked: false,
              comments: [
                {
                  id: 1,
                  text: "Hello!!",
                  comments: [
                    {
                      id: 1,
                      text: "Hello!!",
                      comments: [
                        { id: 1, text: "Hello!!" },
                        { id: 2, text: "Good Luck bro" },
                      ],
                    },
                    {
                      id: 2,
                      text: "Good Luck bro",
                      comments: [
                        { id: 1, text: "Hello!!" },
                        { id: 2, text: "Good Luck bro" },
                      ],
                    },
                  ],
                },
                {
                  id: 2,
                  text: "Hello!!",
                  comments: [
                    {
                      id: 1,
                      text: "Hello!!",
                      comments: [
                        { id: 1, text: "Hello!!" },
                        { id: 2, text: "Good Luck bro" },
                      ],
                    },
                    {
                      id: 2,
                      text: "Good Luck bro",
                      comments: [
                        { id: 1, text: "Hello!!" },
                        { id: 2, text: "Good Luck bro" },
                      ],
                    },
                  ],
                },
              ],
              subtasks: [
                {
                  id: 1,
                  text: "go",
                  checked: false,
                },
              ],
            },
          ],
        },
        {
          id: 2,
          title: "Development",
          items: [
            {
              id: 4,
              title: "look youtube",
              description: "Посмотреть туториалы по DND",
              dateCreate: "29/08/2023",
              dateEnd: null,
              dayWork: null,
              priority: 1,
              checked: false,
              comments: [
                {
                  id: 1,
                  text: "Hello!!",
                  comments: [
                    {
                      id: 1,
                      text: "Hello!!",
                      comments: [
                        { id: 1, text: "Hello!!" },
                        { id: 2, text: "Good Luck bro" },
                      ],
                    },
                    {
                      id: 2,
                      text: "Good Luck bro",
                      comments: [
                        { id: 1, text: "Hello!!" },
                        { id: 2, text: "Good Luck bro" },
                      ],
                    },
                  ],
                },
                {
                  id: 2,
                  text: "Hello!!",
                  comments: [
                    {
                      id: 1,
                      text: "Hello!!",
                      comments: [
                        { id: 1, text: "Hello!!" },
                        { id: 2, text: "Good Luck bro" },
                      ],
                    },
                    {
                      id: 2,
                      text: "Good Luck bro",
                      comments: [
                        { id: 1, text: "Hello!!" },
                        { id: 2, text: "Good Luck bro" },
                      ],
                    },
                  ],
                },
              ],
              subtasks: [
                {
                  id: 1,
                  text: "go",
                  checked: false,
                },
              ],
            },
            {
              id: 5,
              title: "buy clothers",
              description: "Купить шмоточки",
              dateCreate: "22/08/2023",
              dateEnd: null,
              dayWork: null,
              priority: 2,
              checked: false,
              comments: [
                {
                  id: 1,
                  text: "Hello!!",
                  comments: [
                    {
                      id: 1,
                      text: "Hello!!",
                      comments: [
                        { id: 1, text: "Hello!!" },
                        { id: 2, text: "Good Luck bro" },
                      ],
                    },
                    {
                      id: 2,
                      text: "Good Luck bro",
                      comments: [
                        { id: 1, text: "Hello!!" },
                        { id: 2, text: "Good Luck bro" },
                      ],
                    },
                  ],
                },
                {
                  id: 2,
                  text: "Hello!!",
                  comments: [
                    {
                      id: 1,
                      text: "Hello!!",
                      comments: [
                        { id: 1, text: "Hello!!" },
                        { id: 2, text: "Good Luck bro" },
                      ],
                    },
                    {
                      id: 2,
                      text: "Good Luck bro",
                      comments: [
                        { id: 1, text: "Hello!!" },
                        { id: 2, text: "Good Luck bro" },
                      ],
                    },
                  ],
                },
              ],
              subtasks: [
                {
                  id: 1,
                  text: "go",
                  checked: false,
                },
              ],
            },
            {
              id: 6,
              title: "clean room",
              description: "Убраться в квартире",
              dateCreate: "01/09/2023",
              dateEnd: null,
              dayWork: null,
              priority: 3,
              checked: false,
              comments: [
                {
                  id: 1,
                  text: "Hello!!",
                  comments: [
                    {
                      id: 1,
                      text: "Hello!!",
                      comments: [
                        { id: 1, text: "Hello!!" },
                        { id: 2, text: "Good Luck bro" },
                      ],
                    },
                    {
                      id: 2,
                      text: "Good Luck bro",
                      comments: [
                        { id: 1, text: "Hello!!" },
                        { id: 2, text: "Good Luck bro" },
                      ],
                    },
                  ],
                },
                {
                  id: 2,
                  text: "Hello!!",
                  comments: [
                    {
                      id: 1,
                      text: "Hello!!",
                      comments: [
                        { id: 1, text: "Hello!!" },
                        { id: 2, text: "Good Luck bro" },
                      ],
                    },
                    {
                      id: 2,
                      text: "Good Luck bro",
                      comments: [
                        { id: 1, text: "Hello!!" },
                        { id: 2, text: "Good Luck bro" },
                      ],
                    },
                  ],
                },
              ],
              subtasks: [
                {
                  id: 1,
                  text: "go",
                  checked: false,
                },
              ],
            },
          ],
        },
        {
          id: 3,
          title: "Done",
          items: [
            {
              id: 7,
              title: "programming",
              description: "Сделать тестовое задание",
              dateCreate: "25/09/2023",
              dateEnd: "28/09/2023",
              dayWork: 3,
              priority: null,
              checked: true,
              comments: [
                {
                  id: 1,
                  text: "Hello!!",
                  comments: [
                    {
                      id: 1,
                      text: "Hello!!",
                      comments: [
                        { id: 1, text: "Hello!!" },
                        { id: 2, text: "Good Luck bro" },
                      ],
                    },
                    {
                      id: 2,
                      text: "Good Luck bro",
                      comments: [
                        { id: 1, text: "Hello!!" },
                        { id: 2, text: "Good Luck bro" },
                      ],
                    },
                  ],
                },
                {
                  id: 2,
                  text: "Hello!!",
                  comments: [
                    {
                      id: 1,
                      text: "Hello!!",
                      comments: [
                        { id: 1, text: "Hello!!" },
                        { id: 2, text: "Good Luck bro" },
                      ],
                    },
                    {
                      id: 2,
                      text: "Good Luck bro",
                      comments: [
                        { id: 1, text: "Hello!!" },
                        { id: 2, text: "Good Luck bro" },
                      ],
                    },
                  ],
                },
              ],
              subtasks: [
                {
                  id: 1,
                  text: "go",
                  checked: false,
                },
              ],
            },
            {
              id: 8,
              title: "create todolist",
              description: "Создать тудулист",
              dateCreate: "25/09/2023",
              dateEnd: "28/09/2023",
              dayWork: 3,
              priority: null,
              checked: true,
              comments: [
                {
                  id: 1,
                  text: "Hello!!",
                  comments: [
                    { id: 1, text: "Hello!!" },
                    { id: 2, text: "Good Luck bro" },
                  ],
                },
                {
                  id: 2,
                  text: "Good Luck bro",
                  comments: [
                    { id: 1, text: "Hello!!" },
                    { id: 2, text: "Good Luck bro" },
                  ],
                },
              ],
              subtasks: [
                {
                  id: 1,
                  text: "go",
                  checked: false,
                },
              ],
            },
            {
              id: 9,
              title: "cook meat",
              description: "Приготовить мясо на ужин",
              dateCreate: "03/09/2023",
              dateEnd: "28/09/2023",
              dayWork: 25,
              priority: null,
              checked: true,
              comments: [
                {
                  id: 1,
                  text: "Hello!!",
                  comments: [
                    {
                      id: 1,
                      text: "Hello!!",
                      comments: [
                        { id: 1, text: "Hello!!" },
                        { id: 2, text: "Good Luck bro" },
                      ],
                    },
                    {
                      id: 2,
                      text: "Good Luck bro",
                      comments: [
                        { id: 1, text: "Hello!!" },
                        { id: 2, text: "Good Luck bro" },
                      ],
                    },
                  ],
                },
                {
                  id: 2,
                  text: "Hello!!",
                  comments: [
                    {
                      id: 1,
                      text: "Hello!!",
                      comments: [
                        { id: 1, text: "Hello!!" },
                        { id: 2, text: "Good Luck bro" },
                      ],
                    },
                    {
                      id: 2,
                      text: "Good Luck bro",
                      comments: [
                        { id: 1, text: "Hello!!" },
                        { id: 2, text: "Good Luck bro" },
                      ],
                    },
                  ],
                },
              ],
              subtasks: [
                {
                  id: 1,
                  text: "go",
                  checked: false,
                },
              ],
            },
          ],
        },
      ];
const defaultState = {
  boards: items,
  filterBoards: [],
};

const reducer = (state = defaultState, action) => {
  const boards = [...state.boards];
  switch (action.type) {
    case "ADD_TASK":
      boards[0].items.push(action.payload);
      return {
        ...state,
        boards: boards,
      };
    case "SEARCH":
      const filter = state.boards.map((board) => {
        board = JSON.parse(JSON.stringify(board));
        const newItems = board.items.filter((item) => {
          const search = action.payload.search;
          if (action.payload.typeSearch === 1) {
            return item.id == search;
          } else {
            return item.title.toLowerCase().startsWith(search.toLowerCase());
          }
        });
        board.items = newItems;
        return board;
      });
      return { ...state, filterBoards: filter };
    case "CHECK":
      const board = boards[action.payload.boardId - 1];
      const item = action.payload.item;
      const index = board.items.indexOf(item);
      item.checked = true;
      board.items.splice(index, 1);
      boards[2].items.push(item);
      return { ...state, boards: boards };
    case "CHECK_SUBTASK":
      const board_1 = boards[action.payload.boardId - 1];
      const item_1 = action.payload.item;
      let value =
        board_1.items[board_1.items.indexOf(item_1)].subtasks[action.payload.id]
          .checked;
      value = !value;
      console.log(value);
      return { ...state, boards: boards };
    case "PRIORITY":
      return { ...state, boards: boards };
    case "DROP": {
      return { ...state, boards: boards };
    }
    default:
      return state;
  }
};
const store = createStore(reducer);

store.subscribe(() => {
  localStorage.setItem("boards", JSON.stringify(store.getState()));
});
export default store;
