import { Disclosure } from "@headlessui/react";
import { BiSolidChevronDown } from "react-icons/bi";

export default function Faq() {
  return (
    <section className="max-w-[1180px] w-full px-6">
      <h2 className="text-3xl text-center font-semibold text-blue-950 mb-5">
        Frequently Asked Questions
      </h2>
      <div className=" w-full  rounded-2xl bg-white p-2">
        {/* <Disclosure className="mt-2 w-full">
          {({ open }) => (
            <>
              <Disclosure.Button className="font-semibold text-xl inline-flex items-center cursor-pointer justify-between w-full mb-1 text-neutral-800">
                <span className="font-semibold">How do I become a Capital Partner?</span>
                <BiSolidChevronDown
                  className={`${
                    open ? "rotate-0 transform" : "rotate-[-90deg]"
                  } h-5 w-5 text-blue-600`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2  text-gray-500 bg-[#F9F9F9]">
                Invest your capital in a rapidly growing financial ecosystem
                that offers high returns, secure investment options, and
                transparent, real-time reporting.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure> */}
        <Disclosure as="div" className="mt-0 w-full">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-[#F9F9F9] px-4 py-4 mt-0 text-left  font-medium text-zinc-600 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-600 focus-visible:ring-opacity-75">
                <span className="font-semibold">
                  How do I become a Capital Partner?
                </span>
                <BiSolidChevronDown
                  className={`${
                    open ? "rotate-0 transform" : "rotate-[-90deg]"
                  } h-5 w-5 text-blue-600 `}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2  text-gray-500 bg-[#F9F9F9]">
                Invest your capital in a rapidly growing financial ecosystem
                that offers high returns, secure investment options, and
                transparent, real-time reporting.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2 w-full">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-[#F9F9F9] px-4 py-4 mt-2 text-left  font-medium text-zinc-600 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-600 focus-visible:ring-opacity-75">
                <span className="font-semibold">
                  How secure is my investment as a Capital Partner?
                </span>
                <BiSolidChevronDown
                  className={`${
                    open ? "rotate-0 transform" : "rotate-[-90deg]"
                  } h-5 w-5 text-blue-600`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2  text-gray-500 bg-[#F9F9F9]">
                We prioritize the security of your investment. All transactions
                are encrypted and comply with international financial
                regulations. We also provide transparent, real-time reporting so
                you can monitor your investment at any time.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-[#F9F9F9] px-4 py-4 mt-2 text-left  font-medium text-zinc-600 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-600 focus-visible:ring-opacity-75">
                <span className="font-semibold">
                  What are the benefits for Clients?
                </span>
                <BiSolidChevronDown
                  className={`${
                    open ? "rotate-0 transform" : "rotate-[-90deg]"
                  } h-5 w-5 text-blue-600`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2  text-gray-500 bg-[#F9F9F9]">
                Money Movers can take advantage of competitive exchange rates,
                quick settlements, and secure transactions. Our API is designed
                for easy integration, offering features like real-time fund
                availability and comprehensive reporting.{" "}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-[#F9F9F9] px-4 py-4 mt-2 text-left  font-medium text-zinc-600 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-600 focus-visible:ring-opacity-75">
                <span className="font-semibold">
                  Can I integrate your service into my existing POS system?
                </span>
                <BiSolidChevronDown
                  className={`${
                    open ? "rotate-0 transform" : "rotate-[-90deg]"
                  } h-5 w-5 text-blue-600`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2  text-gray-500 bg-[#F9F9F9]">
                Yes, our API is designed for seamless integration with existing
                POS systems. You can view our comprehensive API documentation
                for step-by-step guides and sample code to help you integrate
                our services.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-[#F9F9F9] px-4 py-4 mt-2 text-left  font-medium text-zinc-600 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-600 focus-visible:ring-opacity-75">
                <span className="font-semibold">
                  How quickly are transactions settled?{" "}
                </span>
                <BiSolidChevronDown
                  className={`${
                    open ? "rotate-0 transform" : "rotate-[-90deg]"
                  } h-5 w-5 text-blue-600`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2  text-gray-500 bg-[#F9F9F9]">
                Transactions are typically settled within a few minutes.
                However, the exact time may vary depending on various factors
                such as network latency and the financial institutions involved.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </section>
  );
}
