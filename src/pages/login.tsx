import { FormEvent, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import Input from "../components/Input";
import { useRouter } from "next/router";
import { useAuthDispatch, useAuthState } from "../context/auth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<any>({});

  const dispatch = useAuthDispatch();
  const { authenticated } = useAuthState();

  const router = useRouter();

  if (authenticated) router.push("/");

  const submitForm = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/login", {
        username,
        password,
      });

      dispatch("LOGIN", res.data);

      router.push("/");
    } catch (error) {
      setErrors({ ...error.response.data });
    }
  };

  return (
    <div className="flex bg-white">
      <Head>
        <title>Login</title>
      </Head>

      <div
        className="h-screen bg-center bg-cover w-36"
        style={{ backgroundImage: "url('/images/bgImg.jpg')" }}
      ></div>
      <div className="flex flex-col justify-center pl-6">
        <div className="w-72">
          <h1 className="mb-3 text-xl font-medium">Login</h1>
          <p className="mb-3 text-xs">
            By continuing, you agree to our User Agreement and Privacy Policy.
          </p>
          <form onSubmit={submitForm}>
            <Input
              className="mb-2"
              type="text"
              value={username}
              setValue={setUsername}
              placeholder={"USERNAME"}
              error={errors.username}
            />
            <Input
              className="mb-2"
              type="password"
              value={password}
              setValue={setPassword}
              placeholder={"PASSWORD"}
              error={errors.password}
            />
            <button className="w-full py-2 mb-4 text-xs font-bold text-white uppercase bg-blue-500 border border-blue-500 rounded">
              LOGIN
            </button>
          </form>
          <small>
            New to ReadApp?
            <Link href="/register">
              <a className="ml-1 text-blue-500 uppercase">Sign Up</a>
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Login;
