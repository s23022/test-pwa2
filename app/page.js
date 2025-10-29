"use client";

import styles from './page.module.css';
import {useRouter} from 'next/navigation';
import {useEffect, useState} from "react";
import {HealthKit} from "@perfood/capacitor-healthkit";

export default function Home() {
    const router = useRouter();

    //今日の日付を取得するnew Dataを格納
    const today = new Date();
    //年・月・日・曜日を取得
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const day  = today.getDate();
    const weekday = ["日","月","火","水","木","金","土"];
    const dayText = weekday[today.getDay()]; // 例えば水曜日なら "水" になる


    // 歩数データ用 state
    const [steps, setSteps] = useState(null);

    useEffect(() => {
        async function fetchSteps() {
            try {
                // 権限リクエスト（歩数データのみ）
                await HealthKit.requestAuthorization({
                    read: ["steps"],
                });

                // 過去24時間の歩数を取得
                const result = await HealthKit.querySampleType({
                    sampleType: "steps",
                    startDate: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
                    endDate: new Date().toISOString(),
                });

                // 配列の合計を計算して表示
                const totalSteps = result.reduce(
                    (acc, item) => acc + Number(item.quantity),
                    0
                );

                setSteps(totalSteps);
            } catch (err) {
                console.log("歩数取得エラー：", err);
            }
        }

        fetchSteps();
    }, []);

    return (
        <main className={styles.main}>

            {/*年月日曜日の表示*/}
            <div className={styles.days}>
                {year + "年" + month + "月" + date + "日" + "(" + dayText + ")"}
            </div>
            <div className={styles.data}>
                {steps !== null ? (
                    <p>歩数： {steps} 歩</p>
                ) : (
                    <p>歩数データ取得中．．．</p>
                )}
            </div>

            {/*下部のナビゲーション*/}
            <div className={styles.nav}>
                <button
                    className={styles.button01}
                    onClick={() => router.push('/recode')}
                >
                    <img
                        className={styles.home_img03}
                        src="/images/recode.png"
                        alt="記録ボタン用の画像"
                    />
                </button>

                <button className={styles.button02}>
                    <img
                        className={styles.home_img02}
                        src="/images/run_human.png"
                        alt="ホームボタン用の画像"
                    />
                </button>

                <button
                    className={styles.button03}
                    onClick={() => router.push('/ranking')}
                >
                    <img
                        className={styles.home_img03}
                        src="/images/ranking.png"
                        alt="ランキングボタン用の画像"
                    />
                </button>
            </div>
        </main>
    );
}
