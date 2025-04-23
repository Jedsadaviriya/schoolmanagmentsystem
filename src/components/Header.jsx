import ThemeSwitcher from "./ThemeSwitcher";
import styles from "./Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <Link href="/" className="flex-1">
          <div className="bg-content1 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
            <button>
              <h1>SMS</h1>
            </button>
          </div>
        </Link>
      </header>
      <ThemeSwitcher />
    </>
  );
}
