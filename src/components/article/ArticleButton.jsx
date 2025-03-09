"use client";

import * as B from "style/common/Button.style";
import Link from "next/link";
import SCback from "svg/ico-back.svg";
import SChome from "svg/ico-home.svg";
import SCclip from "svg/ico-clip.svg";
import SCkakao from "svg/ico-kakao.svg";
import SCedit from "svg/ico-edit.svg";
import React, { Fragment } from "react";
import useCopyUrl from "hooks/useCopyUrl";
import useKakaoShare from "hooks/useKakaoShare";

export default function ArticleButton({ link = "/", type }) {
  const { handleCopy } = useCopyUrl();
  const { onKakao } = useKakaoShare();

  function renderSvg(type) {
    if (type === "back")
      return (
        <Link href={link}>
          <SCback width="20" height="20" />
          <span className="hidden">뒤로가기</span>
        </Link>
      );

    if (type === "home")
      return (
        <Link href={link}>
          <SChome width="20" height="20" />
          <span className="hidden">메인으로 가기</span>
        </Link>
      );

    if (type === "copy")
      return (
        <Fragment>
          <SCclip width="20" height="20" />
          <span className="hidden">URL 복사</span>
        </Fragment>
      );

    if (type === "kakao")
      return (
        <Fragment>
          <SCkakao width="20" height="20" />
          <span className="hidden">카카오톡 공유하기</span>
        </Fragment>
      );
  }

  const renderTypeCondition =
    type === "copy" || type === "kakao" || type === "edit";

  function onClickCondition() {
    if (type === "copy") handleCopy();
    if (type === "kakao") onKakao();

    return null;
  }

  return (
    <B.Button
      as={renderTypeCondition ? "button" : "div"}
      type={renderTypeCondition ? "button" : null}
      onClick={onClickCondition}
      className={type}
      typeProp={"article"}
      hasProp={"anchor"}
    >
      {renderSvg(type)}
    </B.Button>
  );
}
