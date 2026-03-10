---
title: "NTU AI Safety 讀書會：第一週 - AI Safety 入門導覽"
date: 2024-11-27T19:00:00+08:00
draft: false
summary: "NTU AI Safety 讀書會第二期正式啟動！本週從零開始介紹 AI Safety 是什麼、為什麼重要，以及讀書會的學習目標與規劃。"
tags: ["AI Safety", "Reading Group", "Introduction", "Alignment"]
categories: ["Weekly Notes"]
showAuthor: false
authors:
  - "ntu-ai-safety"
---

<!-- 大合照：請在此放置本週活動照片 -->
<!-- {{ figure src="week01-group-photo.jpg" caption="第一週大合照" }} -->

## 關於這個讀書會

NTU AI Safety 讀書會第二期於 2024 年 11 月正式啟動，在均一平台教育基金會舉行，每兩週一次，雙週實體聚會。本期課程參考 [BlueDot Impact](https://bluedot.org/)（劍橋大學學者成立的 NGO）的 AI Safety Fundamentals 課程，目標是讓參與者對 AI Safety 研究有入門等級的理解。

感謝 Open Phil 每位參與者 NTD 250 餐費補助，以及均一平台贊助場地費。

---

## 本週主題：AI Safety 是在討論什麼？

### ChatGPT 會不會毀滅人類？

研究中常用以下詞彙來界定討論範圍：

- **Artificial General Intelligence (AGI)**：能在 95% 以上的經濟相關任務上達到人類水準的 AI。
- **Transformative AI (TAI)**：能帶來相當於工業革命影響力的 AI，讓年均 GDP 成長從 0.2% 跳升至 20%。

### 強大 AI 帶來的風險

強大的 AI 可能導致：

1. **毀滅性的災難（Existential Catastrophe）**
2. **對社會的負面影響**：歧視、隱私侵犯、虛假資訊、生物武器研發加速等。
3. **但也有人認為會帶來史無前例的經濟成長**。

真實案例：
- Gemini 曾在正常對話後突然對用戶發出攻擊性言論。
- 英國部署的醫療聊天機器人建議心臟病發作的用戶「不要接受治療」。
- 2022 年研究人員調整藥物設計 AI 的目標後，六小時內生成了 40,000 種化學戰劑。

---

## AI Safety 與 Alignment 的核心概念

深度學習模型的運作方式更像是「訓練員工」而非「編寫程式」——我們通常對模型的內部運作所知甚少。

**Alignment** 指的是讓 AI 系統真正做到設計者想要它做的事：

- **Outer Alignment**：正確地指定目標（例如避免獎勵劫持）
- **Inner Alignment**：讓 AI 真正遵循這些目標（避免目標誤泛化）

各機構的定義略有不同，但共同核心是：確保 AI 系統的行為符合人類的真實意圖與價值觀。

---

## 本期讀書會預計介紹的研究方向

1. **機械可解釋性（Mechanistic Interpretability）**：理解 AI 內部運作
2. **獎勵學習（Reward Learning）**：讓 AI 準確理解人類偏好，如 RLHF
3. **穩健性研究（Robustness）**：確保 AI 在各種情況下的可預測行為
4. **可擴展性監督（Scalable Oversight）**：維持有效的人類監督
5. **目標結構保持（Goal Structure Preservation）**：防止自我改進時目標漂移
6. **事故預防（Accident Prevention）**：形式化驗證與應急關閉機制

---

## 延伸資源

- [BlueDot Impact AI Safety Fundamentals](https://bluedot.org/)
- [80,000 Hours AI Safety Job Board](https://jobs.80000hours.org/)