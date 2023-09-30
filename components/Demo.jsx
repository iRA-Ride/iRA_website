import React from "react";

const Demo = () => {
  return (
    <div>
      <div className="p-5">
        <div className="p-5 lg:px-80 text-center text-3xl sm:text-3xl font-bold  dark:text-gray-300">
          <span>Demo</span>
        </div>
        <div className="max-w-screen-md mx-auto prose p-5 lg:prose-lg  md:px-[150px] lg:px-40">
          <div className="aspect-w-9 aspect-h-16">
            <iframe
              src="https://www.youtube.com/embed/UDIQwGb-4YQ"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
