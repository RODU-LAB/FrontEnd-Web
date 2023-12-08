import { gql, useLazyQuery, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Banner } from "../components/banner";
import { getPosts } from "../services/post";
import postsRoute from "../images/postsRoute.png";
import lock from "../images/lock.png";
import { Foot } from "../components/foot";

export const Posts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    getPosts(0);
  }, []);

  return (
    <div style={{}}>
      <Helmet>
        <title>Board | RODU</title>
      </Helmet>
      <Banner
        routeDot1="•"
        routeName1="커뮤니티"
        route1=""
        route1Opacity={0.7}
        routeDot2="•"
        routeName2="문의게시판"
        route2="/posts"
        route2Opacity={1}
        title="문의 게시판"
        subtitle="Education inquiry board"
        content="문의 답변을 확인할 수 있습니다"
        contentClass="Subtitle-bigFont"
        rightImg="none"
      />
    </div>
  );
};
