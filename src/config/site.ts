import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const siteMetadata: Metadata = {
    title: {
        default: SITE_CONFIG.title,
        template: `%s | ${SITE_CONFIG.name}`,
    },
    description: SITE_CONFIG.description,
    metadataBase: new URL(SITE_CONFIG.url),
    openGraph: {
        type: "website",
        locale: "en_US",
        url: SITE_CONFIG.url,
        title: SITE_CONFIG.title,
        description: SITE_CONFIG.description,
        siteName: SITE_CONFIG.name,
    },
    twitter: {
        card: "summary_large_image",
        title: SITE_CONFIG.title,
        description: SITE_CONFIG.description,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};
