// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mwGzpoHinpZ8pmKKQjKC6Q
// Component: pPy5gcUgNxaW

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import TextInput from "../../TextInput"; // plasmic-import: LzH8N_mpnwME/component
import { NavigationBar } from "@plasmicpkgs/plasmic-nav";
import 按钮 from "../../\u6309\u94AE"; // plasmic-import: NoWChVjfQ1hX/component
import Button from "../../Button"; // plasmic-import: O-sjQ-BfXg_q/component
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: mwGzpoHinpZ8pmKKQjKC6Q/projectcss
import sty from "./Plasmic小程序登录页面手机验证码.module.css"; // plasmic-import: pPy5gcUgNxaW/css

import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: I0J4Nz9jr2l5/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: CwTBZ1IwI4if/icon
import 家康lOgo5画板1SvgIcon from "./icons/PlasmicIcon__\u5BB6\u5EB7lOgo5\u753B\u677F1Svg"; // plasmic-import: XFiodx7YYYgt/icon
import 微信头上组件svgIcon from "./icons/PlasmicIcon__\u5FAE\u4FE1\u5934\u4E0A\u7EC4\u4EF6svg"; // plasmic-import: 2urmVQ_gGgJw/icon
import StatusBarsvgIcon from "./icons/PlasmicIcon__StatusBarsvg"; // plasmic-import: EesfGyxQueq1/icon
import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: 2dD8tiAwY1Ar/icon

createPlasmicElementProxy;

export type Plasmic小程序登录页面手机验证码__VariantMembers = {};
export type Plasmic小程序登录页面手机验证码__VariantsArgs = {};
type VariantPropType = keyof Plasmic小程序登录页面手机验证码__VariantsArgs;
export const Plasmic小程序登录页面手机验证码__VariantProps =
  new Array<VariantPropType>();

export type Plasmic小程序登录页面手机验证码__ArgsType = {};
type ArgPropType = keyof Plasmic小程序登录页面手机验证码__ArgsType;
export const Plasmic小程序登录页面手机验证码__ArgProps =
  new Array<ArgPropType>();

export type Plasmic小程序登录页面手机验证码__OverridesType = {
  root?: Flex__<"div">;
  section?: Flex__<"section">;
  验证码?: Flex__<typeof TextInput>;
  navigationBar?: Flex__<typeof NavigationBar>;
  获取验证码?: Flex__<typeof 按钮>;
  button?: Flex__<typeof Button>;
  授权登录?: Flex__<typeof AntdButton>;
  其他手机登录?: Flex__<typeof AntdButton>;
  其他手机登录2?: Flex__<typeof AntdButton>;
  手机号?: Flex__<typeof TextInput>;
};

export interface Default小程序登录页面手机验证码Props {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function Plasmic小程序登录页面手机验证码__RenderFunc(props: {
  variants: Plasmic小程序登录页面手机验证码__VariantsArgs;
  args: Plasmic小程序登录页面手机验证码__ArgsType;
  overrides: Plasmic小程序登录页面手机验证码__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "手机号.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ``
      },
      {
        path: "验证码.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ``
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.root
          )}
        >
          <section
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            className={classNames(projectcss.all, sty.section)}
          >
            <TextInput
              data-plasmic-name={"\u9a8c\u8bc1\u7801"}
              data-plasmic-override={overrides.验证码}
              className={classNames("__wab_instance", sty.验证码)}
              name={``}
              onChange={(...eventArgs) => {
                generateStateOnChangeProp($state, ["验证码", "value"])(
                  (e => e.target?.value).apply(null, eventArgs)
                );
              }}
              placeholder={"\u9a8c\u8bc1\u7801"}
              value={generateStateValueProp($state, ["验证码", "value"]) ?? ""}
            />

            <家康lOgo5画板1SvgIcon
              className={classNames(projectcss.all, sty.svg__c2R2D)}
              role={"img"}
            />

            <NavigationBar
              data-plasmic-name={"navigationBar"}
              data-plasmic-override={overrides.navigationBar}
              brand={
                <PlasmicLink__
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link___3Bgdw
                  )}
                  component={Link}
                  href={"#"}
                  platform={"nextjs"}
                >
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img___3EuBs)}
                    displayHeight={"55px"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"none"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"auto"}
                    src={{
                      src: "/plasmic/c_vevaluate/images/人像201Svg.svg",
                      fullWidth: 150,
                      fullHeight: 150,
                      aspectRatio: 1
                    }}
                  />
                </PlasmicLink__>
              }
              className={classNames("__wab_instance", sty.navigationBar)}
              closeButton={
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__g8EBj)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"none"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  src={"https://static1.plasmic.app/close.svg"}
                />
              }
              forceOpenMenu={false}
              itemsGap={0}
              menuItems={
                <PlasmicLink__
                  aria-hidden={"true"}
                  aria-labelledby={"\u672a\u767b\u5f55"}
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__iHxDa,
                    "\u672a\u767b\u5f55"
                  )}
                  component={Link}
                  href={"/"}
                  platform={"nextjs"}
                  target={undefined}
                >
                  <React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ color: "var(--token-jgohepLVeKvh)" }}
                    >
                      {"\u672a\u767b\u5f55"}
                    </span>
                  </React.Fragment>
                </PlasmicLink__>
              }
              openButton={
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__rUDjk)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"none"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  src={"https://static1.plasmic.app/menu.svg"}
                />
              }
              responsiveBreakpoint={0}
            />

            <微信头上组件svgIcon
              className={classNames(projectcss.all, sty.svg__p6Aq)}
              role={"img"}
            />

            <StatusBarsvgIcon
              className={classNames(projectcss.all, sty.svg__qvrpP)}
              role={"img"}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__tUkiu
              )}
            >
              {"\u7533\u8bf7\u83b7\u53d6\u4ee5\u4e0b\u6743\u9650\uff1a"}
            </div>
            <按钮
              data-plasmic-name={"\u83b7\u53d6\u9a8c\u8bc1\u7801"}
              data-plasmic-override={overrides.获取验证码}
              className={classNames("__wab_instance", sty.获取验证码)}
            >
              <Button
                data-plasmic-name={"button"}
                data-plasmic-override={overrides.button}
                className={classNames("__wab_instance", sty.button)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___4RdW
                  )}
                >
                  <React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ color: "var(--token-jgohepLVeKvh)" }}
                    >
                      {"\u83b7\u53d6\u9a8c\u8bc1\u7801"}
                    </span>
                  </React.Fragment>
                </div>
              </Button>
            </按钮>
            <AntdButton
              data-plasmic-name={"\u6388\u6743\u767b\u5f55"}
              data-plasmic-override={overrides.授权登录}
              className={classNames("__wab_instance", sty.授权登录)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__gcSlN
                )}
              >
                <React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ color: "var(--token-jgohepLVeKvh)" }}
                  >
                    {"\u6388\u6743\u767b\u5f55"}
                  </span>
                </React.Fragment>
              </div>
            </AntdButton>
            <AntdButton
              data-plasmic-name={"\u5176\u4ed6\u624b\u673a\u767b\u5f55"}
              data-plasmic-override={overrides.其他手机登录}
              className={classNames("__wab_instance", sty.其他手机登录)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__eSQrL
                )}
              >
                <React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ color: "var(--token-jgohepLVeKvh)" }}
                  >
                    {"\u5176\u4ed6\u624b\u673a\u767b\u5f55"}
                  </span>
                </React.Fragment>
              </div>
            </AntdButton>
            <AntdButton
              data-plasmic-name={"\u5176\u4ed6\u624b\u673a\u767b\u5f552"}
              data-plasmic-override={overrides.其他手机登录2}
              className={classNames("__wab_instance", sty.其他手机登录2)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__hF7Tq
                )}
              >
                <React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ color: "var(--token-jgohepLVeKvh)" }}
                  >
                    {"\u624b\u673a\u53f7\u767b\u5f55"}
                  </span>
                </React.Fragment>
              </div>
            </AntdButton>
            <TextInput
              data-plasmic-name={"\u624b\u673a\u53f7"}
              data-plasmic-override={overrides.手机号}
              className={classNames("__wab_instance", sty.手机号)}
              name={``}
              onChange={(...eventArgs) => {
                generateStateOnChangeProp($state, ["手机号", "value"])(
                  (e => e.target?.value).apply(null, eventArgs)
                );
              }}
              placeholder={"\u624b\u673a\u53f7"}
              value={generateStateValueProp($state, ["手机号", "value"]) ?? ""}
            />
          </section>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "section",
    "\u9a8c\u8bc1\u7801",
    "navigationBar",
    "\u83b7\u53d6\u9a8c\u8bc1\u7801",
    "button",
    "\u6388\u6743\u767b\u5f55",
    "\u5176\u4ed6\u624b\u673a\u767b\u5f55",
    "\u5176\u4ed6\u624b\u673a\u767b\u5f552",
    "\u624b\u673a\u53f7"
  ],
  section: [
    "section",
    "\u9a8c\u8bc1\u7801",
    "navigationBar",
    "\u83b7\u53d6\u9a8c\u8bc1\u7801",
    "button",
    "\u6388\u6743\u767b\u5f55",
    "\u5176\u4ed6\u624b\u673a\u767b\u5f55",
    "\u5176\u4ed6\u624b\u673a\u767b\u5f552",
    "\u624b\u673a\u53f7"
  ],
  验证码: ["\u9a8c\u8bc1\u7801"],
  navigationBar: ["navigationBar"],
  获取验证码: ["\u83b7\u53d6\u9a8c\u8bc1\u7801", "button"],
  button: ["button"],
  授权登录: ["\u6388\u6743\u767b\u5f55"],
  其他手机登录: ["\u5176\u4ed6\u624b\u673a\u767b\u5f55"],
  其他手机登录2: ["\u5176\u4ed6\u624b\u673a\u767b\u5f552"],
  手机号: ["\u624b\u673a\u53f7"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  section: "section";
  验证码: typeof TextInput;
  navigationBar: typeof NavigationBar;
  获取验证码: typeof 按钮;
  button: typeof Button;
  授权登录: typeof AntdButton;
  其他手机登录: typeof AntdButton;
  其他手机登录2: typeof AntdButton;
  手机号: typeof TextInput;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  Plasmic小程序登录页面手机验证码__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: Plasmic小程序登录页面手机验证码__VariantsArgs;
    args?: Plasmic小程序登录页面手机验证码__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<Plasmic小程序登录页面手机验证码__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      Plasmic小程序登录页面手机验证码__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: Plasmic小程序登录页面手机验证码__ArgProps,
          internalVariantPropNames:
            Plasmic小程序登录页面手机验证码__VariantProps
        }),
      [props, nodeName]
    );
    return Plasmic小程序登录页面手机验证码__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName =
      "Plasmic\u5c0f\u7a0b\u5e8f\u767b\u5f55\u9875\u9762\u624b\u673a\u9a8c\u8bc1\u7801";
  } else {
    func.displayName = `Plasmic小程序登录页面手机验证码.${nodeName}`;
  }
  return func;
}

export const Plasmic小程序登录页面手机验证码 = Object.assign(
  // Top-level Plasmic小程序登录页面手机验证码 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    section: makeNodeComponent("section"),
    验证码: makeNodeComponent("\u9a8c\u8bc1\u7801"),
    navigationBar: makeNodeComponent("navigationBar"),
    获取验证码: makeNodeComponent("\u83b7\u53d6\u9a8c\u8bc1\u7801"),
    button: makeNodeComponent("button"),
    授权登录: makeNodeComponent("\u6388\u6743\u767b\u5f55"),
    其他手机登录: makeNodeComponent("\u5176\u4ed6\u624b\u673a\u767b\u5f55"),
    其他手机登录2: makeNodeComponent("\u5176\u4ed6\u624b\u673a\u767b\u5f552"),
    手机号: makeNodeComponent("\u624b\u673a\u53f7"),

    // Metadata about props expected for Plasmic小程序登录页面手机验证码
    internalVariantProps: Plasmic小程序登录页面手机验证码__VariantProps,
    internalArgProps: Plasmic小程序登录页面手机验证码__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default Plasmic小程序登录页面手机验证码;
/* prettier-ignore-end */
