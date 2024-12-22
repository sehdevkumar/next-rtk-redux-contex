export default function Header() {


  return (
    <header className="bg-gray-800 text-white py-4 px-8 flex justify-between">
      <div className="font-bold text-2xl">Next-RTK-Redux-Context</div>
      <div className="flex items-center">
        <div className="mr-4">{"Sehdev"}</div>
        <div className="bg-gray-700 rounded-full h-10 w-10 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
      </div>
    </header>
  );
}
