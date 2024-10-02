import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
	return (
		<div className={styles.page}>
			<h1>Higor</h1>
			<Image alt="Profile photo" width={200} height={200} src={'/higor.jpg'} />
		</div>
	);
}
