import React, { Props, useEffect, useState } from "react";
import "./App.css";

class App extends React.Component<Record<string, any>, Record<string, any>> {
  windowHeight: number;
  domAmount: number;
  constructor(props: Record<string, any>) {
    super(props);
    this.state = {
      list: [],
      sliceList: [],
      defaultHeight: 60,
      wimdowDomAmount: 0,
    };
    this.init = this.init.bind(this);
    this.windowHeight = window.document.documentElement.clientHeight;
    this.domAmount = 69000;
  }
  init() {
    this.api().then((res) => {
      let len = Math.ceil(this.windowHeight / this.state.defaultHeight);
      res = res.map((e, inde) => {
        return inde;
      });
      this.setState({
        list: res,
        sliceList: res.slice(0, len),
      });
      const containerDom = document.querySelector("#data") as HTMLElement;
      if (containerDom.firstChild?.nodeName === "BUTTON")
        containerDom.removeChild(containerDom.firstChild);

      const FIRSTDom = document.querySelector(".list")
        ?.firstChild as HTMLElement;
      const FIRSTHeight = FIRSTDom.getBoundingClientRect();

      this.setState({
        defaultHeight: FIRSTHeight.height,
      });
      document.body.style.height =
        this.domAmount * this.state.defaultHeight + "px";
      this.setState({
        wimdowDomAmount: Math.ceil(
          this.windowHeight / this.state.defaultHeight
        ),
      });
      this.setState({
        sliceList: res.slice(0, this.state.wimdowDomAmount),
      });
      window.addEventListener(
        "scroll",
        this.throttle(this.updataList.bind(this), 20)
      );
    });
  }
  updataList() {
    let topHeight = document.documentElement.scrollTop;
    let pre = Math.floor(topHeight / this.state.defaultHeight);
    let dataDom = document.querySelector("#data") as HTMLElement;
    dataDom.style.paddingTop = pre * this.state.defaultHeight + "px";
    this.setState({
      sliceList: this.state.list.slice(pre, this.state.wimdowDomAmount + pre),
    });
  }
  throttle(fn: () => void, delaytime: number) {
    let STARTTIME = +new Date();
    return () => {
      if (+new Date() - STARTTIME > delaytime) {
        fn();
        STARTTIME = +new Date();
      }
    };
  }
  api() {
    return new Promise<number[]>((resolve) => {
      setTimeout(() => {
        const arr: number[] = new Array(this.domAmount).fill(0);
        resolve(arr);
      }, 2000);
    });
  }
  render() {
    return (
      <div id="data">
        <button
          onClick={() => {
            this.init();
          }}
        >
          获取数据
        </button>
        <div className="list">
          {this.state.sliceList.map((e: any, index: number) => {
            return (
              <div
                style={{
                  backgroundImage: "url(../assets/9.jpg)",
                  padding: "5px 10px",
                  height: "80px",
                  textAlign: "center",
                }}
                key={e + index}
              >
                <div className="inner">
                  <div className="inner-text">
                    {e}LOREM IPSUM
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
