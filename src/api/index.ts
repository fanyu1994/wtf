export const fetch_getMenu = (): Promise<sidebar_list_type[]> => {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      const list = [
        {
          title: "菜单一",
          id: 1,
        },
        {
          title: "菜单二",
          id: 2,
        },
        {
          title: "菜单三",
          id: 3,
        },
      ];
      resolve(list);
    }, 1000);
  });
}