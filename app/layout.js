

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        {/* headタグとその中にアイコンやテーマカラー、manifestを記述する */}
        <head>
            {/*appと同じ階層にあるpublicのmanifest_and_iconsが接続先*/}
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0" />
            <link
                rel="manifest"
                href="/manifest_and_icons/manifest.json" />
            <link
                rel="apple-touch-icon"
                href="/manifest_and_icons/icon512_rounded.png"/>
            <meta name="theme-color" content="#FFFFFF" />
        </head>
        <body>{children}</body>
        </html>
    );
}
