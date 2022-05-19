import { useEffect, useState } from "react";

import { fetch_getMenu } from "../../api";

export default function Sidebar() {
  const [menuList, setmenuList] = useState<sidebar_list_type[]>([]);
  const [loading, setLoding] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoding(true);
      setError(false);
      try {
        const res = await fetch_getMenu();
        setmenuList(res);
        setLoding(false);
      } catch (error) {
        setLoding(false);
        setError(true);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="side_bar">
      <div>
        {error && <div>出错误了...</div>}
        {loading ? (
          <div>...Loding</div>
        ) : (
          <div>
            {menuList.map((item, key) => {
              return (
                <div key={item.id} className="item">
                  {item.title}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
