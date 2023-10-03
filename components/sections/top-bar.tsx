import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  MessageSquare,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import React from "react";

import { info } from "@/components/data/info";

function TopBar() {
  return (
    <div className="top-bar bg-zinc-300 dark:bg-zinc-700 container flex flex-row justify-between content-center py-1">
      <div className="left-top flex flex-row gap-4">
        <div className="address">
          <Link
            href={info.map}
            className="flex flex-row justify-center"
            target="_blank"
          >
            <MapPin className="w-4 h-4 mt-1 mr-2 text-zinc-600 dark:text-white" />
            <p className="text-sm text-bold">{info.address}</p>
          </Link>
        </div>
        <div className="email">
          <Link
            href={`mailto:${info.email}`}
            className="flex flex-row justify-center"
          >
            <Mail className="w-4 h-4 mt-1 mr-2 text-zinc-600 dark:text-white" />
            <p className="text-sm text-bold">{info.email}</p>
          </Link>
        </div>
        <div className="phone">
          <Link
            href={`tel:${info.phone.replace(" ", "")}`}
            className="flex flex-row justify-center"
          >
            <Phone className="w-4 h-4 mt-1 mr-2 text-zinc-600 dark:text-white" />
            <p className="text-sm text-bold">{info.phone}</p>
          </Link>
        </div>
      </div>
      <div className="right-top flex flex-row gap-4">
        {info.facebook && (
          <Link href={info.facebook} target="_blank">
            <Facebook className="h-4 w-4 text-zinc-600 cursor-pointer hover:text-zinc-800 dark:text-white" />
          </Link>
        )}
        {info.instagram && (
          <Link href={info.instagram} target="_blank">
            <Instagram className="h-4 w-4 text-zinc-600 cursor-pointer hover:text-zinc-800 dark:text-white" />
          </Link>
        )}
        {info.linkedin && (
          <Link href={info.linkedin} target="_blank">
            <Linkedin className="h-4 w-4 text-zinc-600 cursor-pointer hover:text-zinc-800 dark:text-white" />
          </Link>
        )}
        {info.twitter && (
          <Link href={info.twitter} target="_blank">
            <Twitter className="h-4 w-4 text-zinc-600 cursor-pointer hover:text-zinc-800 dark:text-white" />
          </Link>
        )}
        {info.viber && (
          <Link href={info.viber} target="_blank">
            <MessageSquare className="h-4 w-4 text-zinc-600 cursor-pointer hover:text-zinc-800 dark:text-white" />
          </Link>
        )}
        {info.whatsapp && (
          <Link href={info.whatsapp} target="_blank">
            <MessageCircle className="h-4 w-4 text-zinc-600 cursor-pointer hover:text-zinc-800 dark:text-white" />
          </Link>
        )}
      </div>
    </div>
  );
}

export default TopBar;
