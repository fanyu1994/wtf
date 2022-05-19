import React from "react";

type Props = {
  pointsPros: Array<{ maxW: number; minW: number; date: string }>;
};
type State = {
  svgStyle: string;
  pointsMAX: string;
  pointsMIN: string;
};
class Svg extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      svgStyle: 'fill: none; strokeWidth: 1; stroke: rgb(0,0,0)',
      pointsMAX: "",
      pointsMIN: "",
    };
  }
  refCanvas = React.createRef<HTMLCanvasElement>();
  refSvg = React.createRef<HTMLDivElement>();
  componentDidMount() {
    this.dorwCanvas();
    this.drawSvg();
  }
  dorwCanvas = (): void => {
    const c: any = this.refCanvas.current;
    const ctx: any = c.getContext("2d");
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, 150, 75);
  };
  makeSvg = (tag: string, attribute: object | string) => {
    let el = document.createElementNS("http://www.w3.org/2000/svg", tag);
    if (typeof attribute === "object") {
      for (const key in attribute) {
        el.setAttribute(key, attribute[key]);
      }
    } else {
      el.setAttribute(tag, attribute);
    }

    return el;
  };
  drawSvg = async (): Promise<void> => {
    const base: number = (document?.querySelector('.test-canvas')?.getBoundingClientRect()?.width || 0) /7
    const svgWidth: number = base * 7
    const minVal: number = this.props.pointsPros.reduce((acc, cur) => acc < cur.minW ? acc : cur.minW,1000)
    const maxVal: number = this.props.pointsPros.reduce((acc, cur) => acc > cur.maxW ? acc : cur.maxW,-1000)
    const baseY: number = 5
    let pointsMAX = this.props.pointsPros.map((e, index) => {
      return `${index * base},${e.maxW * baseY}`;
    });
    let pointsMIN = this.props.pointsPros.map((e, index) => {
      return `${index * base},${e.minW * baseY}`;
    });
    await this.setState({
      pointsMAX: pointsMAX.join(" "),
      pointsMIN: pointsMIN.join(" "),
    });

    const svg = this.makeSvg("svg", {
      width: `${svgWidth}px`,
      height: '500px',
      version: "1.1",
      style: 'font-size:1.6rem',
      xmlns: "http://www.w3.org/2000/svg",
    });

    const g = this.makeSvg("g", {});
    const polyLineMax = this.makeSvg("polyline", {
      points: this.state.pointsMAX,
      style: this.state.svgStyle,
    });
    g.appendChild(polyLineMax);

    const polyLineMin = this.makeSvg("polyline", {
      points: this.state.pointsMIN,
      style: this.state.svgStyle,
    });
    g.appendChild(polyLineMin);

    const maxvAL = this.props.pointsPros.reduce((acc, cur) => {
      return acc > cur.maxW ? acc : cur.maxW;
    }, 0);
    this.props.pointsPros.forEach((e, index) => {
      const textmaxW = this.makeSvg("text", {
        x: `${index * base}`,
        y: `${e.maxW * baseY}`,
        fill: "skyblue",
      });
      const xTextmaxW = document.createTextNode(`${e.maxW}`);
      textmaxW.appendChild(xTextmaxW);

      const textminW = this.makeSvg("text", {
        x: `${index * base}`,
        y: `${e.minW * baseY} `,
        fill: "red",
      });
      const xTextminW = document.createTextNode(`${e.minW}`);
      textminW.appendChild(xTextminW);

      const lineText = this.makeSvg("text", {
        x: `${index * base}`,
        y: maxvAL,
        fill: "#000",
      });
      const XlineText = document.createTextNode(`${e.date}`);
      lineText.appendChild(XlineText);

      g.appendChild(textmaxW);
      g.appendChild(textminW);
      g.appendChild(lineText);
    });
    console.log(this.refSvg.current);
    svg.appendChild(g)
    this.refSvg.current?.appendChild(svg);
  };
  render() {
    return (
      <div className="test-canvas">
        <div className="canvas">
          <canvas
            id="myCanvas"
            ref={this.refCanvas}
            width="200"
            height="100"
          ></canvas>
        </div>
        <div id="svg" ref={this.refSvg}></div>
      </div>
    );
  }
}

export default Svg;
