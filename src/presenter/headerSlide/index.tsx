/*
  ==============================================================================
    (c) 2022. quantum universe All rights reserved.
    author : EUNHYE KIM
    start date : 12/16/2022
  ==============================================================================
*/
import React, { FC } from "react";
import Logo from "../../commons/logo";
import * as HS from "./styled";
import { navItem } from "../../container/main/navItems";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";

export const HeaderSlide: FC = () => {
  const [checkedItem, setCheckedItem] = useState<Set<number>>(new Set());

  const onHandleCheck = (id: number) => {
    // 해당 id가 이미 있다면
    if (checkedItem.has(id)) {
      const changeItem = new Set(checkedItem);
      // id 를 Set에서 지워줌
      changeItem.delete(id);
      setCheckedItem(changeItem);
      // 해당 id가 이미 없다면
    } else {
      const changeItem = new Set(checkedItem);
      // id 를 Set에 추가해줌
      changeItem.add(id);
      setCheckedItem(changeItem);
    }
    console.log(checkedItem);
  };

  return (
    <HS.Article>
      <Logo />
      <nav>
        <HS.List>
          {navItem.map((item) => {
            return (
              <HS.Item key={item.id}>
                <HS.ItemBox>
                  <HS.Title>
                    <Link href={item.path}>{item.title}</Link>
                  </HS.Title>
                  {/* 제작 버튼 */}
                  <div>
                    {item.title !== "글꼴" ? (
                      <>
                        {checkedItem.has(item.id) ? (
                          <HS.Arrow
                            onClick={() => {
                              onHandleCheck(item.id);
                            }}
                          />
                        ) : (
                          <HS.UnderArrow
                            onClick={() => {
                              onHandleCheck(item.id);
                            }}
                          />
                        )}
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </HS.ItemBox>
                <HS.DropDownItem dropDown={checkedItem.has(item.id)}>
                  {checkedItem.has(item.id) && (
                    <>
                      <HS.DropDownList dropDown={checkedItem.has(item.id)}>
                        {item.subTitle.map((item) => {
                          return (
                            <>
                              <HS.SubTitle key={item}>{item}</HS.SubTitle>
                            </>
                          );
                        })}
                      </HS.DropDownList>
                    </>
                  )}
                </HS.DropDownItem>
              </HS.Item>
            );
          })}
        </HS.List>
      </nav>
      <HS.SubNav>
        <ul>
          <HS.SubNavItem className="first">
            <HS.SubNavLink className="first">배민다움</HS.SubNavLink>
          </HS.SubNavItem>
          <HS.SubNavItem className="first">
            <HS.SubNavLink className="first">인재영입</HS.SubNavLink>
          </HS.SubNavItem>
          <HS.SubNavItem>
            <HS.SubNavLink>우유안부</HS.SubNavLink>
          </HS.SubNavItem>
          <HS.SubNavItem>
            <HS.SubNavLink>기술 블로그</HS.SubNavLink>
          </HS.SubNavItem>
          <HS.SubNavItem>
            <HS.SubNavLink>주간 배짱이</HS.SubNavLink>
          </HS.SubNavItem>
        </ul>
      </HS.SubNav>
      <HS.SubNavFootBox>
        <ul>
          <HS.SubNavFootItem>
            <a className="foot">공지사항</a>
          </HS.SubNavFootItem>
          <HS.SubNavFootItem>
            <a className="foot">오시는 길</a>
          </HS.SubNavFootItem>
        </ul>
        <ul>
          <HS.SubNavFootItem>
            <button className="line">한</button>
          </HS.SubNavFootItem>
          <HS.SubNavFootItem>
            <button className="foot">A</button>
          </HS.SubNavFootItem>
        </ul>
      </HS.SubNavFootBox>
    </HS.Article>
  );
};
