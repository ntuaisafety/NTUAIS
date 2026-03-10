---
title: "NTU AI Safety 讀書會：第四週 - RLHF 與憲法式 AI"
date: 2025-01-08T19:00:00+08:00
draft: false
summary: "本週聚焦於讓 AI 對齊人類價值觀的主流技術：從人類反饋強化學習（RLHF）的基礎原理，到 Anthropic 的憲法式 AI（Constitutional AI），以及這些方法的根本限制與開放問題。"
tags: ["AI Safety", "Reading Group", "RLHF", "Constitutional AI", "Alignment"]
categories: ["Weekly Notes"]
showAuthor: false
authors:
  - "ntu-ai-safety"
---

<!-- 大合照：請在此放置本週活動照片 -->
<!-- {{ figure src="week04-group-photo.jpg" caption="第四週大合照" }} -->

## 本週主題：如何讓 AI 學習人類價值觀？

課程連結：[AI Safety Fundamentals - Session 4](https://course.aisafetyfundamentals.com/alignment?session=4)

上週我們了解了 AI 對齊問題的本質與難度。本週我們要探討目前最主流的對齊技術：從人類反饋強化學習（RLHF），以及其更進階的版本——憲法式 AI（Constitutional AI）。

---

## 本週閱讀資源（約 2 小時 15 分鐘）

### 1. GPT-2 如何變得極度不雅的真實故事
**by Rational Animations (2024) · 影片 · 15 分鐘**

這支易懂的影片以高層次介紹 RLHF 的技術與實際概覽，並以一個 RLHF 出錯的案例研究作說明。

### 2. RLHF 圖解
**by Nathan Lambert et al. (2022) · Blog · 30 分鐘**

這篇技術文章解釋 RLHF 的動機，並詳細說明 RLHF 如何實際應用於神經網路訓練。

閱讀時思考：技術實作中哪些部分對應到前一個影片中的「價值教練」與「一致性教練」？

### 3. 憲法式 AI：來自 AI 反饋的無害性
**by Yuntao Bai and Jared Kaplan, Anthropic (2022) · 論文 · 60 分鐘**

這篇論文解釋 Anthropic 的憲法式 AI 方法——本質上是 RLHF 的延伸，但將人類示範者與人類評估者替換為 AI。

論文涵蓋：
- 傳統 RLHF 的限制
- 憲法式 AI 方法說明
- 效能評估
- 未來研究方向

> 若時間有限，建議優先閱讀 1.2、3.1、3.4、4.1、6.1、6.2 節。

### 4. RLHF 的開放問題與根本限制
**by Stephen Casper and Xander Davies (2023) · 論文 · 30 分鐘（讀第 3 節）**

這篇論文整理了改進 RLHF 技術的多個開放問題。閱讀時思考：這些問題背後的技術因素是什麼？

---

## RLHF 核心流程

```
1. 收集示範資料 → 訓練監督學習基礎模型
2. 收集人類偏好資料 → 訓練獎勵模型
3. 用強化學習（PPO）優化語言模型，最大化獎勵模型的分數
```

## 憲法式 AI 的改進

憲法式 AI 的關鍵創新是用 **AI 替代人類**進行兩個步驟：
- **SL-CAI**：用 AI 生成批評與修訂，替代人類示範
- **RL-CAI**：用 AI 偏好替代人類評估（RLAIF）

## RLHF 的根本限制（開放問題）

- 獎勵劫持（Reward Hacking）
- 人類評估者本身的偏見與不一致
- 可擴展性：人類無法有效評估超人類能力的輸出
- 分布偏移：訓練分布與部署分布的差異