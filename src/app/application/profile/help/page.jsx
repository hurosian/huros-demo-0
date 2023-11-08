"use client";

import React from "react";
import { useState, useEffect } from "react";

export default function Help({}) {
  const [title, setTitle] = useState("");
  const [username, setUsername] = useState("chloe_p");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("chloe@example.com");
  const [nationality, setNationality] = useState("SG");
  const [message, setMessage] = useState("");

  useEffect(() => {
    // const userTitle = funcToGetUserTitle();
    // setTitle(userTitle);

    // Temp assignment
    setTitle("ms");
  }, []);

  return (
    <section id="help">
      <form className="w-full">
        <div className="grid grid-cols-2 gap-10">
          <div className="grid w-full grid-rows-5">
            <div>
              <h4 className="text-slate-300">TITLE</h4>

              <div className="grid grid-cols-4">
                <div className=" flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    id="mr"
                    name="title"
                    value="mr"
                    onChange={(e) => setTitle(e.target.value)}
                    checked={title === "mr"}
                  />
                  <label className="mb-2 ml-3 text-lg font-thin text-white dark:text-gray-300">
                    Mr
                  </label>
                </div>
                <div className=" flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    id="ms"
                    name="title"
                    value="ms"
                    onChange={(e) => setTitle(e.target.value)}
                    checked={title === "ms"}
                  />
                  <label className="mb-2 ml-3 text-lg font-thin text-white dark:text-gray-300">
                    Ms
                  </label>
                </div>
                <div className=" flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    id="mrs"
                    name="title"
                    value="mrs"
                    onChange={(e) => setTitle(e.target.value)}
                    checked={title === "mrs"}
                  />
                  <label className="mb-2 ml-3 text-lg font-thin text-white dark:text-gray-300">
                    Mrs
                  </label>
                </div>
                <div className=" flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    id="mx"
                    name="title"
                    value="mx"
                    onChange={(e) => setTitle(e.target.value)}
                    checked={title === "mx"}
                  />
                  <label className="mb-2 ml-3 text-lg font-thin text-white dark:text-gray-300">
                    Mx
                  </label>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-slate-300">
                USERNAME
                <span className="text-sm text-huros-1"> Required </span>
              </h4>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div>
              <h4 className="text-slate-300">FIRST NAME</h4>
              <input
                id="firstname"
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div>
              <h4 className="text-slate-300">LAST NAME</h4>
              <input
                id="lastname"
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div>
              <h4 className="text-slate-300">
                EMAIL ADDRESS
                <span className="text-sm text-huros-1"> Required </span>
              </h4>
              <input
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="grid w-full grid-rows-5">
            <div className="row-span-2 w-full place-self-end pb-2">
              <h4 className="text-slate-300">NATIONALITY</h4>
              <select
                id="nationality"
                type="text"
                defaultValue={nationality || "choose-nationality"}
                onChange={(e) => setNationality(e.target.value)}
              >
                <option disabled value="choose-nationality">
                  CHOOSE NATIONALITY
                </option>
                <option value="MY"> MALAYSIA </option>
                <option value="SG"> SINGAPORE </option>
              </select>
            </div>

            <div className="row-span-2">
              <h4 className="text-slate-300">
                YOUR MESSAGE
                <span className="text-sm text-huros-1"> Required </span>
              </h4>
              <textarea
                name="message"
                id="message"
                rows="6"
                className="block h-fit resize-none border bg-transparent font-thin text-white focus:border-huros-1 focus:ring-huros-1 dark:border-huros-1 dark:bg-transparent dark:placeholder-gray-400 dark:focus:border-huros-1 dark:focus:ring-huros-1"
                placeholder="Leave your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <div className="flex items-center">
              <button
                type="submit"
                className="mt-1 w-full rounded bg-huros-1 p-2 font-normal text-slate-200"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
