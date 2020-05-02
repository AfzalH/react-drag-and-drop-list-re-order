const List = {
  list: [
    {
      id: 1,
      title: "Fake Title one",
    },
    {
      id: 2,
      title: "Fake Title two",
    },
    {
      id: 3,
      title: "Fake Title three",
    },
    {
      id: 4,
      title: "Fake Title four",
    },
    {
      id: 5,
      title: "Fake Title five",
    },
    {
      id: 6,
      title: "Fake Title six",
    },
  ],
  getList: function () {
    return (
      (localStorage.getItem("theList") &&
        JSON.parse(localStorage.getItem("theList"))) ||
      this.list
    );
  },
  saveList: (list) => {
    localStorage.setItem("theList", JSON.stringify(list));
  },
};

export default List;
