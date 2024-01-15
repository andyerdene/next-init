import { Button, TextField, Card } from "@/components";
import Link from "next/link";
import styles from "@/styles/pages/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Home</h1>
      <Link href={"/abc"}>Move To Abc</Link>
      <Button />
      <TextField />
      <Card text="card text" />
    </div>
  );
}
