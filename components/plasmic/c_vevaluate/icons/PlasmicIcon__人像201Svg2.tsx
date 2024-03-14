// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type 人像201Svg2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function 人像201Svg2Icon(props: 人像201Svg2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 200 200"}
      xmlSpace={"preserve"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle cx={"100"} cy={"100"} r={"100"} fill={"#fff"}></circle>

      <path
        d={
          "M166 145h-54.3c-.8 0-.8 0-1.7-.8-.8-8.4-2.5-17.5-5-26.7v-1.7c.8-2.5 2.5-4.2 3.3-6.7-1.7-.8-3.3-1.7-4.2-2.5-1.7-1.7-3.3-1.7-5 0l-5 2.5c.8.8.8 2.5 1.7 3.3 1.7 2.5 1.7 5.8 1.7 9.2-1.7 8.4-2.5 15.9-3.3 24.2v.8H34.8c-.8-4.2-.8-7.5-.8-11.7v-7.5c0-3.3 1.7-5.8 4.2-7.5l5-2.5c7.5-3.3 14.2-5.8 21.7-9.2 4.2-1.7 7.5-3.3 11.7-4.2.8 0 1.7-.8 1.7-1.7 1.7-1.7 2.5-4.2 3.3-5.8.8-1.7 1.7-2.5 2.5-2.5h.9c0-1.7-.8-2.5-1.7-3.3-.8-.8-1.7-1.7-1.7-3.3 0-2.5-.8-5.8-.8-8.4 0-.8 0-.8-.8-.8-2.5-.8-3.3-1.7-4.2-4.2-1.7-2.5-1.7-5.8-1.7-9.2v-1.7c0-.8 0-2.5.8-3.3.8-.8.8-2.5 0-4.2-.8-5-1.7-10-.8-15 .8-5.8 2.5-10.9 8.4-13.4 6.7-3.3 13.4-5.8 20.9-5 3.3 0 7.5.8 10 3.3.8.8 1.7 1.7 2.5 1.7s.8.8 1.7.8h.8c2.5 0 3.3 1.7 4.2 3.3 1.7 4.2 2.5 8.4 2.5 12.5 0 3.3-.8 7.5-.8 10.9 0 1.7 0 2.5.8 4.2 1.7 3.3 1.7 6.7.8 10 0 1.7-.8 3.3-1.7 5 0 1.7-.8 2.5-2.5 2.5-2.5.8-3.3 2.5-3.3 5v3.3c0 2.5-.8 4.2-2.5 5.8-.8.8-1.7 2.5-1.7 4.2h2.5c.8 0 .8 0 1.7.8.8 2.5 2.5 4.2 3.3 6.7.8.8 1.7 1.7 3.3 2.5 5 .8 10 3.3 14.2 5 6.7 2.5 13.4 5 19.2 7.5 2.5.8 5 2.5 6.7 5 0 .8.8 1.7.8 2.5V145h.1z"
        }
        fill={"#c1c1c1"}
      ></path>
    </svg>
  );
}

export default 人像201Svg2Icon;
/* prettier-ignore-end */
