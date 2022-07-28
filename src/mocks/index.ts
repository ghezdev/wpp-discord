type ChatType = {
  urlImage: string;
  username: string;
  message: string;
  dateLastMessage: string;
  quantityMessages: number;
};

export const CHATS_MOCK: ChatType[] = [
  {
    urlImage:
      "https://th.bing.com/th/id/R.546c4007b56f6592d467198d86b9b120?rik=YqsvKRc8VbPz6Q&pid=ImgRaw&r=0",
    username: "Maia",
    message: "Este es un nuevo mensaje de Maia",
    dateLastMessage: "2022-07-27T22:23:23.000-03:00",
    quantityMessages: 2,
  },
  {
    urlImage:
      "https://th.bing.com/th/id/R.546c4007b56f6592d467198d86b9b120?rik=YqsvKRc8VbPz6Q&pid=ImgRaw&r=0",
    username: "Guille",
    message: "Este es un mensaje de Guille",
    dateLastMessage: "2022-07-27T21:43:23.000-03:00",
    quantityMessages: 0,
  },
  {
    urlImage:
      "https://th.bing.com/th/id/R.546c4007b56f6592d467198d86b9b120?rik=YqsvKRc8VbPz6Q&pid=ImgRaw&r=0",
    username: "Cotti",
    message: "Este es un mensaje de Cotti",
    dateLastMessage: "2022-07-27T13:23:23.000-03:00",
    quantityMessages: 0,
  },
  {
    urlImage:
      "https://th.bing.com/th/id/R.546c4007b56f6592d467198d86b9b120?rik=YqsvKRc8VbPz6Q&pid=ImgRaw&r=0",
    username: "Maikhol",
    message: "Este es un mensaje de Maikhol",
    dateLastMessage: "2022-07-25T13:23:23.000-03:00",
    quantityMessages: 0,
  },
];
