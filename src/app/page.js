import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <iframe
      src="/LABIRINTO_DEMO/index.html"
      style={{
        width: "100vw",
        height: "100vh",
        border: "none",
      }}
    />
  );
}
