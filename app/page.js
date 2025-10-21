"use client";

import styles from './page.module.css';
import {useRouter} from 'next/navigation';
import {useEffect, useState} from "react";
import {HealthKit} from "@perfood/capacitor-healthkit";

export default function Home() {
    const router = useRouter();

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

            <div className={styles.data}>
                {steps !== null ? (
                    <p>歩数： {steps} 歩</p>
                ) : (
                    <p>歩数データ取得中．．．</p>
                )}
            </div>
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
