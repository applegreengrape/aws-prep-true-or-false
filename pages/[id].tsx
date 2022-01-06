import React from "react";
import ErrorPage from "next/error";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import img from "../img/1.png";

const url = process.env.URL;

const ID: NextPage<{ data }> = (props) => {
  const router = useRouter();
  const { id } = router.query;

  const [c, setCheck] = React.useState(String);
  const [msg, setMsg] = React.useState(String);
  if (!props.data) {
    return <ErrorPage statusCode={404} />;
  }

  function next() {
    if (Number(id) + 1 > 3) {
      alert("oops, no more items. ");
    } else {
      setCheck("");
      setMsg("");
      router.push(`${url}/${Number(id) + 1}`);
    }
  }

  function check(val) {
    console.log(val, props.data.ans);
    if (val === `${props.data.ans}`) {
      setCheck(`🎉 correct`);
      setMsg(props.data.reason);
    } else {
      setCheck(`❌ Oops Wrong Answer`);
      setMsg(props.data.reason);
    }
  }
  return (
    <>
      <div className="bg-gradient-to-r from-green-400 to-blue-500 h-screen w-full">
        <div className="items-center text-white text-xl p-6 font-mono w-full bg-gradient-to-r from-pink-500 to-yellow-500 ">
          <p>AWS SA Pro Quiz: True or False</p>
        </div>

        <div className="flex flex-col items-center text-base p-12 text-gray-100 font-mono">
          {props.data.item}
          <div className="flex p-8">
            <div className="flex-1 px-8">
              <button
                type="button"
                value="true"
                className="bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 w-40 py-2 rounded-md"
                onClick={(e) => check((e.target as HTMLInputElement).value)}
              >
                True
              </button>
            </div>
            <div className="flex-1 px-8">
              <button
                type="button"
                value="false"
                className="bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 w-40 py-2 rounded-md"
                onClick={(e) => check((e.target as HTMLInputElement).value)}
              >
                False
              </button>
            </div>
          </div>
          <button
            type="button"
            className="w-auto bg-gradient-to-r from-green-600 to-blue-600 hover:from-pink-600 hover:to-yellow-600 w-1/3 py-2 rounded-md"
            onClick={() => next()}
          >
            Next
          </button>
        </div>
        <div className="flex flex-col items-center text-base p-12 text-gray-100 font-mono">
          {c}
          <br />
          {msg}
        </div>
      </div>
      <footer className="footer p-3 bg-gradient-to-r from-pink-500 to-yellow-500 h-auto">
        special thanks to <a href="https://twitter.com/alazycoder2">🧑🏻‍💻</a>
        <div className="flex w-auto justify-end">
          <div className="px-8">
            <a
              href="https://github.com/applegreengrape/aws-prep-true-or-false"
              target="_blank"
              rel="noopener"
              title="github.com"
            >
              <svg
                className="w-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 480 512"
              >
                <path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"></path>
              </svg>
            </a>
          </div>

          <div className="px-8">
            <a
              href="https://discord.gg/gXgAMnThcU"
              target="_blank"
              rel="noopener"
              title="discord.gg"
            >
              <svg
                className="w-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M297.216 243.2c0 15.616-11.52 28.416-26.112 28.416-14.336 0-26.112-12.8-26.112-28.416s11.52-28.416 26.112-28.416c14.592 0 26.112 12.8 26.112 28.416zm-119.552-28.416c-14.592 0-26.112 12.8-26.112 28.416s11.776 28.416 26.112 28.416c14.592 0 26.112-12.8 26.112-28.416.256-15.616-11.52-28.416-26.112-28.416zM448 52.736V512c-64.494-56.994-43.868-38.128-118.784-107.776l13.568 47.36H52.48C23.552 451.584 0 428.032 0 398.848V52.736C0 23.552 23.552 0 52.48 0h343.04C424.448 0 448 23.552 448 52.736zm-72.96 242.688c0-82.432-36.864-149.248-36.864-149.248-36.864-27.648-71.936-26.88-71.936-26.88l-3.584 4.096c43.52 13.312 63.744 32.512 63.744 32.512-60.811-33.329-132.244-33.335-191.232-7.424-9.472 4.352-15.104 7.424-15.104 7.424s21.248-20.224 67.328-33.536l-2.56-3.072s-35.072-.768-71.936 26.88c0 0-36.864 66.816-36.864 149.248 0 0 21.504 37.12 78.08 38.912 0 0 9.472-11.52 17.152-21.248-32.512-9.728-44.8-30.208-44.8-30.208 3.766 2.636 9.976 6.053 10.496 6.4 43.21 24.198 104.588 32.126 159.744 8.96 8.96-3.328 18.944-8.192 29.44-15.104 0 0-12.8 20.992-46.336 30.464 7.68 9.728 16.896 20.736 16.896 20.736 56.576-1.792 78.336-38.912 78.336-38.912z"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  res,
  params,
}) => {
  try {
    const { id } = params;
    const result = await fetch(`${url}/api?id=${id}`);
    const data = await result.json();

    return {
      props: { data },
    };
  } catch {
    res.statusCode = 404;
    return {
      props: {},
    };
  }
};

export default ID;
