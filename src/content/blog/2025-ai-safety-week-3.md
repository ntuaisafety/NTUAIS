---
title: "NTU AI Safety 讀書會：第三週 - AI 對齊問題與潛在風險"
date: 2024-12-18T19:00:00+08:00
draft: false
summary: "本週深入探討 AI 對齊的核心問題：為什麼對齊很困難、AI 可能帶來哪些風險，以及「聖人、應聲蟲與陰謀者」框架如何幫助我們理解未來 AI 系統的行為模式。"
tags: ["AI Safety", "Reading Group", "Alignment", "Risk", "Misalignment"]
categories: ["Weekly Notes"]
showAuthor: false
authors:
  - "ntu-ai-safety"
---

<!-- 大合照：請在此放置本週活動照片 -->
<!-- {{ figure src="week03-group-photo.jpg" caption="第三週大合照" }} -->

## 本週主題：AI 對齊為何如此困難？

課程連結：[AI Safety Fundamentals - Session 2](https://course.aisafetyfundamentals.com/alignment?session=2)

上週我們建立了神經網路的技術基礎。本週我們要面對核心問題：為什麼讓 AI 做我們真正想要它做的事，比想像中困難得多？

---

## 本週閱讀資源（約 2 小時 10 分鐘）

### 1. 什麼是 AI 對齊？
**by Adam Jones (2024) · 文章 · 15 分鐘**

介紹 AI Safety 與「對齊」的定義，並將其拆解為**外部對齊（Outer Alignment）**與**內部對齊（Inner Alignment）**兩個子問題。

建議：先思考你自己對「對齊」的定義，再對照文章中的定義，看看有哪些異同。

### 2. AI Safety 入門
**by Robert Miles (2021) · 影片 · 20 分鐘**

介紹 AI Safety 的關鍵概念，聚焦於對齊問題，包含代理人（agents）、智能（intelligence）、通用性（generality）、優化器（optimisers）與**收斂工具性目標（convergent instrumental goals）**的討論。

### 3. AI 的「量變引起質變」
**by Jacob Steinhardt (2022) · Blog · 4 分鐘**

Steinhardt 討論在思考機器學習時，實驗工作與哲學思想實驗各自的優缺點。這篇文章幫助我們理解為什麼課程中有些論點偏哲學、有些則基於實驗結果。

### 4. 四個背景主張
**by Nate Soares (2015) · 文章 · 15 分鐘**

介紹關於 AI 系統的四個高層次主張，包含是否可能建構出來，以及它們如何影響未來。

> 📝 注意：這篇文章寫於現代 Transformer 模型問世之前，可以對照當今的發展來評估其預測。

### 5. AI 帶來哪些風險？
**by Adam Jones (2024) · 文章 · 15 分鐘**

介紹當前與未來 AI 系統帶來的各種風險，思考若不同風險組合同時發生，未來可能如何演變。

### 6. 我們如何跌入 AI 災難？
**by Holden Karnofsky (2023) · 文章 · 36 分鐘**

描述一個可能的未來故事：如果在沒有足夠保障措施的情況下，變革性 AI 在近期被開發出來，事情可能如何演變。閱讀時思考：你認為這個故事有多可信？

### 7. 為什麼對齊在現代深度學習中可能很困難？
**by Ajeya Cotra (2021) · Blog · 25 分鐘**

引入一個關於先進 AI 系統的對齊框架：**聖人（Saints）、應聲蟲（Sycophants）與陰謀者（Schemers）**，並討論其現實世界的影響。

---

## 核心框架：聖人、應聲蟲與陰謀者

| 類型 | 描述 | 危險程度 |
|------|------|----------|
| **聖人 (Saints)** | 真正理解並追求人類想要的目標 | 低 |
| **應聲蟲 (Sycophants)** | 表面上配合人類，實際上只是最大化表面認可 | 中 |
| **陰謀者 (Schemers)** | 表面上合作，暗中追求自己的目標 | 高 |

理解這個框架對於思考如何評估和訓練 AI 系統至關重要。