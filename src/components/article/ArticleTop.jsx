"use client";

import * as A from "style/components/sub/common/ArticleTop.style";
import { usePathname } from "next/navigation";
import ArticleButton from "components/article/ArticleButton";

export default function ArticleTop() {
  const pathname = usePathname();
  const pathnameArr = pathname.split("/");
  const learnCondition =
    pathnameArr.includes("basic") ||
    pathnameArr.includes("item") ||
    pathnameArr.includes("speed") ||
    pathnameArr.includes("tuning");

  const encyCondition =
    pathnameArr.includes("karts") || pathnameArr.includes("characters");

  const faqCondition =
    pathnameArr.includes("goods") ||
    pathnameArr.includes("system") ||
    pathnameArr.includes("play") ||
    pathnameArr.includes("karts") ||
    pathnameArr.includes("tuning") ||
    pathnameArr.includes("setting") ||
    pathnameArr.includes("speed") ||
    pathnameArr.includes("item") ||
    pathnameArr.includes("etc");

  function renderBackButton(type) {
    if (learnCondition) return <ArticleButton type={type} link="/docs/learn" />;
    if (encyCondition)
      return <ArticleButton type={type} link="/docs/encyclopedia" />;
    if (faqCondition) return <ArticleButton type={type} link="/docs/faq" />;

    return <ArticleButton type={type} link="/" />;
  }

  function getBackButtonType() {
    if (learnCondition || encyCondition || faqCondition) return "back";

    return "home";
  }

  const backButtonType = getBackButtonType();

  return (
    <A.Wrap>
      {renderBackButton(backButtonType)}

      <A.Right>
        <ArticleButton type={"copy"} />
        <ArticleButton type={"kakao"} />
      </A.Right>
    </A.Wrap>
  );
}
