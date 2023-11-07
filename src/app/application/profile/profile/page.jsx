"use client"

import { CalendarIcon } from "lucide-react";
import React from "react";
import { useState, useEffect } from "react";
import Datepicker from "tailwind-datepicker-react"

const options = {
	title: "Date of Birth",
	autoHide: true,
	todayBtn: false,
	maxDate: new Date(),
	minDate: new Date("1930-01-01"),
	theme: {
		background: "bg-gray-700 dark:bg-gray-800",
		disabledText: "bg-red-500",
	},
	icons: {
		prev: () => <span>Prev</span>,
		next: () => <span>Next</span>,
	},
	datepickerClassNames: "top-15",
	inputNameProp: "date",
	inputIdProp: "date",
}

const dateStruct = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
};

export default function Profile({}) {
  const [title, setTitle] = useState('');
  const [username, setUsername] = useState('chloe_p');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('chloe@example.com');
  const [nationality, setNationality] = useState('SG');
  const [walletAddress, setWalletAddress] = useState('x26...CD');

  // Datepicker state
  const [isShown, setIsShown] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date().toLocaleDateString(undefined, dateStruct));
	const handleDateChange = (selectedDate) => {
    setSelectedDate(selectedDate.toLocaleDateString(undefined, dateStruct));
	}
	const handleClose = (state) => {
		setIsShown(state);
	}

  useEffect(() => {
    // const userTitle = funcToGetUserTitle();
    // setTitle(userTitle);

    // Temp assignment
    setTitle('ms');
  }, []);

  return (
    <section id="profile">
      <form className="w-full">
        <div className="grid grid-cols-1 gap-10"> 
          <div className="w-full">
            <div className="mb-4 grid">
              <div>
                <h4 className="text-slate-300">TITLE</h4>

                <div className="grid grid-cols-8">
                  <div className="mb-4 flex items-center">
                    <input 
                      type="radio"
                      className="form-radio"
                      id="mr"
                      name="title"
                      value="mr"
                      onChange={ (e) => setTitle(e.target.value) }
                      checked={ title === "mr"}
                    />
                    <label className="mb-2 ml-3 font-thin text-lg text-white dark:text-gray-300"> Mr </label>
                  </div>
                  <div className="mb-4 flex items-center">
                    <input 
                      type="radio"
                      className="form-radio"
                      id="ms"
                      name="title"
                      value="ms"
                      onChange={ (e) => setTitle(e.target.value) }
                      checked={ title === "ms"}
                    />
                    <label className="mb-2 ml-3 font-thin text-lg text-white dark:text-gray-300"> Ms </label>
                  </div>
                  <div className="mb-4 flex items-center">
                    <input 
                      type="radio"
                      className="form-radio"
                      id="mrs"
                      name="title"
                      value="mrs"
                      onChange={ (e) => setTitle(e.target.value)  }
                      checked={ title === "mrs"}
                    />
                    <label className="mb-2 ml-3 font-thin text-lg text-white dark:text-gray-300"> Mrs </label>
                  </div>
                  <div className="mb-4 flex items-center">
                    <input 
                      type="radio"
                      className="form-radio"
                      id="mx"
                      name="title"
                      value="mx"
                      onChange={ (e) => setTitle(e.target.value) }
                      checked={ title === "mx"}
                    />
                    <label className="mb-2 ml-3 font-thin text-lg text-white dark:text-gray-300"> Mx </label> 
                  </div>
                </div>
              </div>
            </div> 
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10"> 
          <div className="w-full">
            <div className="mb-4 grid">
              <div>
                <h4 className="text-slate-300">
                  USERNAME <span> * </span>
                </h4>
                <input 
                  id="username"
                  type="text"
                  value={ username }
                  onChange={ (e) => setUsername(e.target.value) }
                />
              </div>
            </div> 

            <div className="mb-4 grid">
              <div>
                <h4 className="text-slate-300">
                  FIRST NAME
                </h4>
                <input 
                  id="firstname"
                  type="text"
                  value={ firstName }
                  onChange={ (e) => setFirstName(e.target.value) }
                />
              </div>
            </div> 

            <div className="mb-4 grid">
              <div>
                <h4 className="text-slate-300">
                  LAST NAME
                </h4>
                <input 
                  id="lastname"
                  type="text"
                  value={ lastName }
                  onChange={ (e) => setLastName(e.target.value) }
                />
              </div>
            </div> 

            <div className="mb-4 grid">
              <div>
                <h4 className="text-slate-300">
                  EMAIL ADDRESS <span> * </span>
                </h4>
                <input 
                  id="email"
                  type="text"
                  value={ email }
                  onChange={ (e) => setEmail(e.target.value) }
                />
              </div>
            </div> 
          </div>

          <div className="w-full">
            <div className="mb-4 grid">
              <div>
                <h4 className="text-slate-300">
                  DATE OF BIRTH
                </h4>

                <Datepicker 
                  options={ options } 
                  onChange={ handleDateChange } 
                  show={ isShown } 
                  setShow={ handleClose } 
                >
                  <div className="flex justify-start">
                    <div className="pt-4 pr-3">
                      <CalendarIcon className="text-slate-300"/>
                    </div>
                    <input 
                      type="text"
                      className="border-b border-huros-1 bg-transparent text-slate-300"
                      placeholder="Select Date"
                      value={ selectedDate } 
                      onFocus={() => setIsShown(true)} 
                      readOnly 
                    />
                  </div>
                </Datepicker>
              </div> 
            </div> 

            <div className="mb-4 grid">
              <div>
                <h4 className="text-slate-300">
                  NATIONALITY
                </h4>
                <select 
                  id="nationality"
                  type="text"
                  defaultValue={ nationality || "choose-nationality"}
                  onChange={ (e) => setNationality(e.target.value) }
                >
                  <option disabled value="choose-nationality"> CHOOSE NATIONALITY </option>
                  <option value="MY"> MALAYSIA </option>
                  <option value="SG"> SINGAPORE </option>
                </select>
              </div> 
            </div> 

            <div className="mb-4 grid">
              <div>
                <h4 className="text-slate-300">
                  WALLET ADDRESS <span> * </span>
                </h4>
                <input 
                  id="wallet_address"
                  type="text"
                  value={ walletAddress }
                  onChange={ (e) => setWalletAddress(e.target.value) }
                />
              </div> 
            </div> 

            <div className="mb-4 grid">
              <div>
                <button type="submit"className="mt-10 rounded p-2 w-full bg-huros-1 font-normal text-slate-200">
                  Save
                </button>
              </div> 
            </div> 
          </div>
        </div>
      </form>
    </section>
  );
}
