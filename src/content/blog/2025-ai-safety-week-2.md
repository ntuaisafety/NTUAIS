---
title: "NTU AI Safety 讀書會：第二週 - 神經網路與深度學習基礎"
date: 2024-12-04T19:00:00+08:00
draft: false
summary: "本週深入探討 AI 系統的基礎技術：神經網路的運作原理、梯度下降學習機制，以及大型語言模型（LLM）的架構，為後續的 AI Safety 討論打下技術基礎。"
tags: ["AI Safety", "Reading Group", "Neural Networks", "LLM", "Deep Learning"]
categories: ["Weekly Notes"]
showAuthor: false
authors:
  - "ntu-ai-safety"
---

<!-- 大合照：請在此放置本週活動照片 -->
<!-- {{ figure src="week02-group-photo.jpg" caption="第二週大合照" }} -->

## 本週主題：理解 AI 的技術基礎

在討論 AI Safety 的挑戰之前，我們需要先理解現代 AI 系統是如何運作的。本週的閱讀材料帶我們從宏觀的 AI 影響出發，深入到神經網路的技術細節，再聚焦到大型語言模型（LLM）的運作原理。

課程連結：[AI Safety Fundamentals - Session 1](https://course.aisafetyfundamentals.com/alignment?session=1)

---

## 本週閱讀資源（約 2 小時）

### 1. AI 及其影響：簡介
**by Vojta Kovarik and Cara Selvarajah (2024) · 文章 · 6 分鐘**

從宏觀視角看 AI 系統如何與經濟、社會及世界互動，在深入神經網路細節前，先建立整體框架。

### 2. 什麼是神經網路？
**by 3Blue1Brown (2017) · 影片 · 17 分鐘**

探索神經網路的內部運作，包括權重（weights）、偏差（biases）、參數（parameters）、神經元（neurons）與激活值（activations）。

### 3. 梯度下降：神經網路如何學習
**by 3Blue1Brown (2017) · 影片 · 17 分鐘**

理解梯度下降——讓神經網路能夠學習的優化方法。

### 4. 大型語言模型入門
**by Andrej Karpathy (2023) · 影片 · 60 分鐘**

這堂完整講座涵蓋大型語言模型的基礎：架構、訓練流程與運作原理。

延伸視覺化資源：[Financial Times - Generative AI 互動圖解](https://ig.ft.com/generative-ai/)

### 5. 深度學習革命視覺化
**by Richard Ngo (2023) · Blog · 15 分鐘**

探索機器學習的現況，回顧過去十年 AI 的進展。思考：你是否低估或高估了 AI 的進步速度？

### 6. 為什麼人們要建構 AI 系統？
**by Adam Jones (2024) · 文章 · 4 分鐘**

探索 AI 公司追求變革性 AI 系統背後的動機，以及對社會的潛在影響。

---

## 核心概念小結

| 概念 | 說明 |
|------|------|
| 神經元 (Neuron) | 網路的基本計算單位，對輸入加權求和後通過激活函數 |
| 權重 (Weights) | 決定不同輸入重要性的可訓練參數 |
| 梯度下降 | 透過計算損失函數的梯度來更新權重的學習算法 |
| Transformer | 現代 LLM 的核心架構，使用注意力機制處理序列資料 |
| 預訓練 | 在大規模語料庫上進行的初始訓練，讓模型學習語言的統計規律 |