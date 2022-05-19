import React, { useState } from "react";
import Indexjs from "./home";
import Svg from "./svg-page";
import "../css/index.css";
import indxTs from './indx'

console.log(indxTs);

function Index() {
  const list: Array<Number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const pointsPros: Array<{date:string,maxW:number,minW:number}> = [
    { date: "2021-1-10", maxW: 25,minW: 15 },
    { date: "2021-1-11", maxW: 23,minW: 12  },
    { date: "2021-1-12", maxW: 38,minW: 14  },
    { date: "2021-1-13", maxW: 35,minW: 16  },
    { date: "2021-1-14", maxW: 48,minW: 12  },
    { date: "2021-1-15", maxW: 35 ,minW: 11 },
    { date: "2021-1-16", maxW: 32,minW: 10  },
    { date: "2021-1-17", maxW: 30 ,minW: 13 },
    { date: "2021-1-18", maxW: 50 ,minW: 12 },
  ];
  // function sleep(time: number) {
  //   return new Promise<number>((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(time);
  //     }, time * 1000);
  //   });
  // }
  // (async () => {
  //   for (let i = 0; i < 5; i++) {
  //     console.log(await sleep(i));
  //   }
  // })();


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const changeBtn = (type: string, e: { target: { value: any } }): void => {
    type === "username"
      ? setUsername(e.target.value)
      : setPassword(e.target.value);
  };

  return (
    <div id="index-page">
      <h1>svg</h1>
      <Indexjs />
      <Svg pointsPros={pointsPros} />
      <div className="test-grid">
        <div className="container">
          {list.map((item, index) => {
            return (
              <div className="item" key={index}>
                {item}
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <input type="text" value={username} readOnly aria-label="kml" />
        <input type="text" value={password} readOnly />
        <button
          onClick={() => {
            changeBtn("username", { target: { value: Math.random() * 100 } });
            changeBtn("password", { target: { value: Math.random() * 100 } });
          }}
        >
          click me
        </button>
      </div>
    </div>
  );
}

// class Index extends React.Component<any, any> {
//   constructor(props: object) {
//     super(props);
//     this.state = {
//       list: [],
//       username: "",
//       password: "",
//     };
//   }
//   handleChange = (type: string, e: { target: { value: any } }) => {
//     this.setState({
//       [type]: e.target.value,
//     });
//   };
//   handleSubmit = (e: any) => {
//     e.preventDefault()
//     const {username, password} = this.state
//     console.log(`${username},${password}`)
//   };
//   render() {
//     return (
//       <div id="index-page">
//         <h1>svg</h1>
//         <div className="test-canvas"></div>
//         <div className="test-grid">
//           <div className="container">
//             {this.state.list.map(
//               (
//                 item:
//                   | boolean
//                   | React.ReactChild
//                   | React.ReactFragment
//                   | React.ReactPortal
//                   | null
//                   | undefined,
//                 index: React.Key | null | undefined
//               ) => {
//                 return (
//                   <div className="item" key={index}>
//                     {item}
//                   </div>
//                 );
//               }
//             )}
//           </div>
//         </div>

//         <form onSubmit={this.handleSubmit}>
//           <input
//             type="text"
//             onChange={(e) => this.handleChange("username", e)}
//           />
//           <input
//             type="password"
//             onChange={(e) => this.handleChange("password", e)}
//           />
//           <button> submit </button>
//         </form>
//       </div>
//     );
//   }
// }

export default Index;
