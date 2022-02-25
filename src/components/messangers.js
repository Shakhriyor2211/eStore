import React from "react";
import { Facebook } from "@styled-icons/boxicons-logos/Facebook";
import { Instagram } from "@styled-icons/boxicons-logos/Instagram";
import { Twitter } from "@styled-icons/boxicons-logos/Twitter";
import { Youtube } from "@styled-icons/boxicons-logos/Youtube";

function Messanger() {
  return (
    <ul className="gap-x-4 lg:gap-x-10 text-white flex">
      <li>
        <Twitter
          className="w-5 sm:w-8 hover:text-blue-500 cursor-pointer"
          // size="30"
          title="Twitter"
        />
      </li>

      <li>
        <Facebook
          className="w-5 sm:w-8 hover:text-blue-500 cursor-pointer"
          // size="30"
          title="Facebook"
        />
      </li>
      <li>
        <Youtube
          className="w-5 sm:w-8 hover:text-blue-500 cursor-pointer"
          // size="30"
          title="Youtube"
        />
      </li>
      <li>
        <Instagram
          className="w-5 sm:w-8 hover:text-blue-500 cursor-pointer"
          // size="30"
          title="Instagram"
        />
      </li>
    </ul>
  );
}

export default Messanger;
