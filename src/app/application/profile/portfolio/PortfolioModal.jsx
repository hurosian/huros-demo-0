import Image from "next/image";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  XMarkIcon,
} from "@heroicons/react/24/outline";

const dateStruct = {
  day: "numeric",
  month: "long",
  year: "numeric",
};

const PortfolioModal = ({ open, setOpen, cancelButtonRef, info }) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex h-4/6 items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="sm:min-w-lg relative w-full max-w-3xl transform overflow-hidden rounded-lg border border-huros-1 bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full">
                <div className="bg-black px-4 py-1 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto"
                    onClick={() => setOpen(false)}
                  >
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="bg-black px-4 pb-4 pt-5 sm:p-3 sm:pb-4">
                  <div className="">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <div className="mt-2 max-w-3xl">
                        <div className="grid w-full grid-cols-2 gap-4">
                          <div>
                            <div className="flex cursor-pointer flex-col items-center p-3">
                              <div className="relative mb-2 border border-huros-1">
                                <Image
                                  src={info.image_source}
                                  className="object-fit"
                                  width={200}
                                  height={200}
                                  alt={info.series}
                                />
                              </div>
                              <label>
                                {info.brand} {info.series}
                              </label>
                              <label>Ref: {info.model_number}</label>
                            </div>
                          </div>

                          <div className="p-3">
                            <div className="mb-4 flex justify-between">
                              <label>Eon Percentage Owned </label>
                              <label className="text-huros-1">
                                {info.eon_owned}
                              </label>
                            </div>

                            <div className="mb-4 flex justify-between">
                              <label>Eon Valuation </label>
                              <label className="text-huros-1">
                                {info.eon_valuation?.toLocaleString("en-US", {
                                  style: "currency",
                                  currency: "USD",
                                })}
                              </label>
                            </div>

                            <div className="mb-4 flex justify-between">
                              <label>Purchase Date </label>
                              <label className="text-huros-1">
                                {new Date(
                                  info.date_of_purchase,
                                ).toLocaleDateString(undefined, dateStruct)}
                              </label>
                            </div>

                            <div className="mb-4 flex justify-between">
                              <label>Available Eon</label>
                              <label className="text-huros-1">
                                {info.available_eon} / 100
                              </label>
                            </div>

                            <div className="mb-4 flex justify-between">
                              <button className="inline-flex w-full justify-center rounded-md bg-[#201c0f] pt-1 font-['Avenir'] text-slate-300 hover:bg-huros-1 hover:text-black">
                                SELL EONS
                              </button>
                              <button className="inline-flex w-full justify-center rounded-md bg-[#201c0f] pt-1 font-['Avenir'] text-slate-300 hover:bg-huros-1 hover:text-black">
                                BUY EONS
                              </button>
                            </div>

                            <div className="flex justify-between">
                              <button className="inline-flex w-full justify-center rounded-md bg-[#201c0f] pt-1 font-['Avenir'] text-slate-300 hover:bg-huros-1 hover:text-black">
                                BUY WATCH
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default PortfolioModal;
