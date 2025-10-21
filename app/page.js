import styles from './page.module.css';


export default function Home() {
    return (
        <main className={styles.main}>{/* スマホのサイズに設定 */}

            <p className={styles.text}>hello world</p> {/* とりあえず配置したテキスト、上下左右スマホのサイズになったら真ん中に来るようCSS書いてる */}
            <div className={styles.nav}>
                <button className={styles.button01}>
                    <img className={styles.home_img03} src="/images/recode.png" alt="記録ボタン用の画像"/>
                </button>
                <button className={styles.button02}>
                    <img className={styles.home_img02} src="/images/run_human.png" alt="ホームボタン用の画像"/>
                </button>
                <button className={styles.button03}>
                    <img className={styles.home_img03} src="/images/ranking.png" alt="ランキングボタン用の画像"/>
                </button>
            </div>
        </main>
    )
}