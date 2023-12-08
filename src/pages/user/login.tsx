import React from "react";
import { gql, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";

import { Button } from "../../components/button";
import { FormError } from "../../components/formError";
import { Link, useNavigate } from "react-router-dom";

const LOGIN_MUTATION = gql`
  mutation login($loginInput: LoginInput!) {
    login(input: $loginInput) {
      ok
      error
      token
    }
  }
`;

interface ILoginForm {
  email: string;
  password: string;
}

export const Login = () => {
  const navigate = useNavigate();
  // const { register, formState, getValues, handleSubmit } = useForm<ILoginForm>({
  //   mode: "onChange",
  // });




  return (
    <div>
      {/* <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("email", { required: true })}
            name="email"
            type="email"
            placeholder="아이디"
          />
          <input
            {...register("password", { required: true })}
            name="password"
            type="password"
            placeholder="비밀번호"
          />
          <Button
            canClick={formState.isValid}
            loading={loading}
            actionText={"로그인"}
          />
          {loginData?.login.error && (
            <FormError
              errorMessage={` 아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다. \n 입력하신 내용을 다시 확인해주세요.`}
            />
          )}
        </form>
      </div> */}
      <div>
        <Link to="/createuser" className=" text-blue-700 hover:underline">
          회원가입
        </Link>
      </div>
    </div>
  );
};
