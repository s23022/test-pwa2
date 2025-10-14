import styles from './page.module.css';

export default function Home() {
    return (
        <main className={styles.main}>{/* スマホのサイズに設定 */}
            <p className={styles.text}>hello</p> {/* とりあえず配置したテキスト、上下左右スマホのサイズになったら真ん中に来るようCSS書いてる */}
        </main>
    )
}
