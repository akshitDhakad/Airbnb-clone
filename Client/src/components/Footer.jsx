import React from "react";
import { Link } from "react-router-dom";
// icons
import { AiOutlineGlobal } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer>
      <div className="max-w-7xl bg-gray-100 px-4 pt-10 grid grid-cols-3 gap-y-5 gap-x-3">
        {/* uppper footer  */}
        <div>
          <p className="mb-3 text-black font-semibold">Support</p>
          <ul className="flex flex-col gap-y-2 text-gray-800 text-sm ">
            <li>
              <Link>Help Center</Link>
            </li>
            <li>
              <Link>AirCover</Link>
            </li>
            <li>
              <Link>Anti-discrimination</Link>
            </li>
            <li>
              <Link>Disability support</Link>
            </li>
            <li>
              <Link>Cancellation options</Link>
            </li>
            <li>
              <Link>Report neighbourhood concern</Link>
            </li>
          </ul>
        </div>
        {/* Hosting */}
        <div>
          <p className="mb-3 text-black font-semibold">Hosting</p>
          <ul className="flex flex-col gap-y-2 text-gray-800 text-sm">
            <li>
              <Link>Havenhub your home</Link>
            </li>
            <li>
              <Link>AirCover for Hosts</Link>
            </li>
            <li>
              <Link>Hosting resources</Link>
            </li>
            <li>
              <Link>Community forum</Link>
            </li>
            <li>
              <Link>Hosting responsibly</Link>
            </li>
            <li>
              <Link>Join a free Hosting class</Link>
            </li>
          </ul>
        </div>
        {/* Havenhub */}
        <div>
          <p className="mb-3 text-black font-semibold">Havenhub</p>
          <ul className="flex flex-col gap-y-2 text-gray-800 text-sm">
            <li>
              <Link>Newsroom</Link>
            </li>
            <li>
              <Link>New features</Link>
            </li>
            <li>
              <Link>Careers</Link>
            </li>
            <li>
              <Link>Investors</Link>
            </li>
            <li>
              <Link>Havenhub.org emergency stays</Link>
            </li>
          </ul>
        </div>
        {/* lower footer */}
        <div className="col-span-3 py-3 flex justify-between border-t border-gray-400 ">
          <div className="flex items-center gap-x-2 text-sm">
            <div>© 2024 Havenhub, Inc.</div>
            <div>.</div>
            <div>Privacy</div>
            <div>.</div>
            <div>Terms</div>
            <div>.</div>
            <div>Sitemap</div>
            <div>.</div>
            <div>Company details</div>
          </div>
          <div className="flex items-center gap-x-5">
            <div className="flex items-center gap-x-2">
              <AiOutlineGlobal />
              <p>English(IN)</p>
            </div>
            <div className="flex items-center gap-x-2">
              <span>₹</span>
              <span>INR</span>
            </div>
            <div className="flex items-center gap-x-4">
              <FaFacebook className="text-xl" />
              <FaInstagram className="text-xl" />
              <FaSquareXTwitter className="text-xl" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
