import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Lato } from 'next/font/google';

const lato = Lato({
	subsets: [ 'latin' ],
	weight: [ "100", "300", "400", "700", "900" ],
	style: [ 'normal', 'italic' ],
	variable: "--font-lato",
	display: 'swap',
});

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Higor Ferreira",
	description: "",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt_BR" className="hfas">
			<body className={`${lato.variable} ${geistSans.variable} ${geistMono.variable}`}>
				<style>{`
					.text-primary {
						color: var(--primary);
					}

					._100vh {
						height: 100vh;
					}

					.flex {
						display: flex;
					}

					.jus-center {
						justify-content: center;
					}

					.aln-center {
						align-items: center;
					}

					.jus-start {
						justify-content: flex-start;
					}

					.jus-end {
						justify-content: flex-end;
					}

					.aln-start {
						align-items: flex-start;
					}

					.aln-end {
						align-items: flex-end;
					}

					.tl {
						text-align: left;
					}

					.tc {
						text-align: center;
					}

					.tr {
						text-align: right;
					}

					.flex-wrap {
						flex-wrap: wrap;
					}

					${Array.from({ length: 60 }, (_, i) => i).reduce((a,b) => {
						return a + `._${b}p{ padding: ${b}px }\n\t`
							+ `._${b}pt{ padding-top: ${b}px }\n\t`
							+ `._${b}pr{ padding-right: ${b}px }\n\t`
							+ `._${b}pb{ padding-bottom: ${b}px }\n\t`
							+ `._${b}pl{ padding-left: ${b}px }\n\t`

							+ `._${b}m{ margin: ${b}px }\n\t`
							+ `._${b}mt{ margin-top: ${b}px }\n\t`
							+ `._${b}mr{ margin-right: ${b}px }\n\t`
							+ `._${b}mb{ margin-bottom: ${b}px }\n\t`
							+ `._${b}ml{ margin-left: ${b}px }\n\t`

							+ `._${b}gap{ gap: ${b}px }\n\t`
					}, '')}
				`.replace(/(\s*?)(\.)/g, '$1.hfas $2')}</style>
				{children}
			</body>
		</html>
	);
}
