import { defineRouting } from "next-intl/routing";
import { i18n } from "./config";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: i18n.locales,
  defaultLocale: i18n.defaultLocale,
  localePrefix: 'as-needed',
  localeDetection: true,
  localeCookie: {
    secure: true,
    sameSite: 'strict',
    maxAge: 60 * 60 * 24 * 365,
  },
})

export const { Link, usePathname, useRouter, redirect } =
  createNavigation(routing);
