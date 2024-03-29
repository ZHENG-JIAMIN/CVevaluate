// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type 神经svgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function 神经svgIcon(props: 神经svgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      t={"1709713497512"}
      className={classNames("plasmic-default__svg", className, "icon")}
      viewBox={"0 0 1024 1024"}
      version={"1.1"}
      pId={"22209"}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M428.4 422.9a22.5 22.5 0 1045 0 22.5 22.5 0 10-45 0z"}
        fill={"currentColor"}
        pId={"22210"}
      ></path>

      <path
        d={
          "M888.3 821.5c-39.2-1.7-71.6-3.8-98.9-7.2l40.1-39.9c.4-.3.7-.7 1-1l53.7-53.4c3.8-3.8 3.8-9.9 0-13.6-3.8-3.8-9.9-3.8-13.6 0l-39.1 39-3.7-58.1c-.3-5.3-4.9-9.4-10.2-9-5.3.3-9.3 4.9-9 10.2l4.8 74.9-47.7 47.5c-32-5.6-56.1-14-76.2-27.3-36.2-24-61.1-64.8-101.4-136-.2-.4-.4-.9-.7-1.3-.2-.3-.3-.5-.5-.8-3.3-5.8-6.6-11.7-10.1-17.9-4.9-8.7-10-17.8-15.4-27.3-1.1-2-2.3-3.9-3.4-5.9-10.7-22.1-17.9-42.1-21.5-59.9-4.9-24.8-2.7-45.3 6.5-60.9 25.8-43.6 100.1-39.2 101.4-39.2h1.2c2.1 0 4.2.1 6.2.1 18.4 0 33.6-1.7 41.4-2.8l45.3 52.2c1.9 2.2 4.6 3.3 7.3 3.3 2.2 0 4.5-.8 6.3-2.4 4-3.5 4.4-9.6 1-13.6l-42.8-49.3 42.2-40.6c3.8-3.7 3.9-9.8.3-13.6-3.7-3.8-9.8-3.9-13.6-.3l-46.6 44.9c-17 2.4-106 12.7-142.3-30.9-20-24-20.9-61.6-2.7-111.6 7.7-12.2 13.1-23.2 16.1-29.7h61.9l29.8 31.9c1.9 2 4.5 3 7 3 2.4 0 4.7-.9 6.6-2.6 3.9-3.6 4.1-9.7.4-13.6l-26.6-28.3 26.6-28.6c3.6-3.9 3.4-10-.5-13.6-3.9-3.6-10-3.4-13.6.5L625.5 221H567v-59.8l33-25.5c4.2-3.3 5-9.3 1.7-13.5-3.3-4.2-9.3-5-13.5-1.7l-30.7 23.8-29.9-23.7c-4.2-3.3-10.2-2.6-13.5 1.6-3.3 4.2-2.6 10.2 1.6 13.5l32.2 25.5v67.5c-5.1 11.7-37.5 81.6-87.2 88.2-30.1 3.9-62.1-16.3-95.2-60-5.4-12.9-11.8-26.5-19.4-40.6-.9-1.6-1.7-3.2-2.6-4.8l22.8-80.6c1.4-5.1-1.5-10.5-6.7-11.9a9.68 9.68 0 00-11.9 6.7L329.9 188c-5.6-9.2-10.7-17-14.7-22.9-15.5-23-17.2-23.4-20.5-24.2-5.2-1.2-10.4 1.9-11.6 7.1-.8 3.5.4 7.1 2.9 9.4 3 3.5 15.5 20.6 29.5 43.9l-76.6-6.4c-5.3-.4-10 3.5-10.4 8.8-.4 5.3 3.5 10 8.8 10.4l89.9 7.5c3.4 6.3 6.9 12.9 10.1 19.6 19 39 38.3 93.2 22.4 129.8-12.3 28.4-45.4 43.2-98.2 43.9-.7 0-1.3.1-2 .2-1.9-.1-3.7-.2-5.6-.2h-58.5L152.9 368c-3.6-3.9-9.7-4.3-13.6-.7-3.9 3.6-4.3 9.7-.7 13.6l30.7 34h-33.2c-5.3 0-9.6 4.3-9.6 9.6s4.3 9.6 9.6 9.6h32.7l-28.1 30.1c-3.6 3.9-3.4 10 .5 13.6 1.9 1.7 4.2 2.6 6.6 2.6 2.6 0 5.2-1 7.1-3.1l40.3-43.2h58.2c52.4 1.6 86.1 16 100.2 42.8 14.6 27.6 6.4 64.7-3.1 91-5.2 14.6-11.4 27.5-16.4 37-3.3 5.4-5.9 9.8-7.5 12.8l-83.5 21.1c-5.2 1.3-8.3 6.5-7 11.7a9.588 9.588 0 0011.7 7l78-19.7 14 63.7-33.5 29.6c-4 3.5-4.4 9.6-.8 13.6 3.5 4 9.6 4.4 13.6.8l32.3-28.7 33.6 19.8c1.5.9 3.2 1.3 4.9 1.3 3.3 0 6.5-1.7 8.3-4.7 2.7-4.6 1.2-10.5-3.4-13.2l-35.7-21-15.7-71.2c1.7-2.9 4.4-7.4 7.5-13.2 5.7-9.2 14-21.2 24.1-33.2 18.1-21.5 46.3-47.2 77.6-47.9 30.8-.6 60.6 23 88.7 70.3 7.9 16.2 17.6 33.3 29 51.3 42.3 74.9 68.3 117.7 108.5 144.3 23 15.2 49.9 24.5 85.6 30.6l74.9 72.8c1.9 1.8 4.3 2.7 6.7 2.7 2.5 0 5-1 6.9-2.9 3.7-3.8 3.6-9.9-.2-13.6l-56.1-54.6c25.9 2.8 55.8 4.7 91 6.2h.4c5.1 0 9.4-4 9.6-9.2.2-5.2-4-9.7-9.3-9.9zm-507.7-518c-.1-.3-.2-.7-.2-1 .2.2.5.4.7.7-.2.1-.4.2-.5.3zm70.3 161.1c-23 0-41.7-18.7-41.7-41.7s18.7-41.7 41.7-41.7 41.7 18.7 41.7 41.7-18.7 41.7-41.7 41.7z"
        }
        fill={"currentColor"}
        pId={"22211"}
      ></path>
    </svg>
  );
}

export default 神经svgIcon;
/* prettier-ignore-end */
