"use client";

import "./navbar.css";
import { useState } from "react";
import React from "react";
import Link from "next/link";

const FlyoutMenuSections = ({ sections }) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedItemIndex(index);
  };

  return (
    <div className="bg-white flex flex-row px-2 rounded-md">
      <div className="triangle-pointer"></div>
      {sections.map((section, index) => (
        <div key={index} className="bg-white text-black p-4 mb-2">
          <h3 className="font-bold text-lg mb-2">{section.heading}</h3>
          <hr />
          <ul className="mt-2">
            {section.items.map((item, i) => (
              <Link key={i} href={item.captionPath ? item.captionPath : "/"}>
                <li className="text-sm cursor-pointer">
                  {item.caption}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FlyoutMenuSections;
