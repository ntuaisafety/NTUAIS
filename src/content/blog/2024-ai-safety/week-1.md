---
title: "讀書會第一週：人工通用智慧"
date: 2024-01-04T00:00:00+08:00
draft: false
summary: "NTU AI Safety 讀書會第一週，主題為人工通用智慧（AGI）。介紹 AI Safety 的基本概念，探討深度學習革命與 AGI 的潛在風險。"
tags: ["AGI", "AI Safety", "Deep Learning"]
categories: ["Reading Group Meetups"]
showAuthor: false
authors: ["ntu-ai-safety"]
---

## 本週資訊

- **日期**：2024 年 1 月 4 日
- **出席人數**：11 人
- **主題**：Artificial General Intelligence

## 📚 必讀篇目 Required Readings

> 建議於讀書會前讀完 We recommend finishing them before coming

- [Visualizing the deep learning revolution](https://medium.com/@richardcngo/visualizing-the-deep-learning-revolution-722098eb9c5) by Richard Ngo (2023)
- [Four Background Claims](https://www.lesswrong.com/posts/3kN79EuT27trGexsq/four-background-claims) by Nate Soares (2015)

## 📚 選讀篇目 Optional Readings

> 以下篇章可讀可不讀 These are totally optional

- [AGI safety from first principles](https://www.alignmentforum.org/posts/pRkFkzwKZ2zfa3R6H/without-specific-countermeasures-the-easiest-path-to) by Richard Ngo (2020)
  - 僅需閱讀以下兩節 Read only the following sections:
    - Section 1: Introduction
    - Section 2.1 Narrow and general intelligence
- [Future ML Systems Will Be Qualitatively Different](https://bounded-regret.ghost.io/future-ml-systems-will-be-qualitatively-different/) by Jacob Steinhardt (2022)
- [More Is Different for AI](https://bounded-regret.ghost.io/more-is-different-for-ai/) by Jacob Steinhardt (2022)

## Opening：什麼是 AI Safety？What is AI Safety?

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/pYXy-A4siMw"
  title="AI Safety Opening Talk"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
  loading="lazy"
></iframe>

## 感謝 Thanks to

- **場地提供：均一平台教育基金會 Junyi Academy**

- **讀書會運作經費：Central EA & Open Philanthropy**

  **What is EA**

  Effective altruism is a project that aims to find the best ways to help others, and put them into practice. It's both a **research field**, which aims to identify the world's most pressing problems and the best solutions to them, and a **practical community** that aims to use those findings to do good.

  This project matters because, while many attempts to do good fail, some are enormously effective. For instance, some charities help 100 or even 1,000 times as many people as others, when given the same amount of resources. This means that by thinking carefully about the best ways to help, we can do far more to tackle the world's biggest problems.

  **What is Open Philanthropy**

  Open Philanthropy is a philanthropic funder. Our mission is to help others as much as we can with the resources available to us. Our main funders are Cari Tuna and Dustin Moskovitz, a co-founder of Facebook and Asana.

---

## 本週筆記

### Visualizing the Deep Learning Revolution

1. **概述文章主旨**
   - 這是一篇闡述過去十年來，人工智慧特別是深度學習領域取得的巨大進展的文章。強調文章探討的是 AI 在視覺識別、遊戲、基於語言的任務和科學研究四個領域的發展。

2. **視覺領域**
   - 說明人工智慧如何從簡單的手寫識別進展到在許多數據集上超越人類表現。
   - 談論生成對抗網絡（GANs）、Transformer 和擴散模型等新算法的發展，以及計算和數據規模的擴大對這些進步的驅動作用。

3. **遊戲領域**
   - 從簡單的雅達利遊戲到複雜的電子競技（如 StarCraft 和 DOTA2），介紹 AI 如何超越人類。
   - 提及 AI 在開放式環境（如 Minecraft）中的發展。
   - **[補充] Deceptive behavior**：人工智能系統中的欺騙行為是指該系統採取的策略或行動，意圖誤導使用者或其他系統，從而達成特定目標。這可能是由於演算法的設計、數據偏差或非預期的學習結果。

4. **基於語言的任務**
   - 討論大型語言模型（如 GPT 系列和 Google 的 PaLM）如何發展，以及它們在文本生成、常識問答等方面的進步。
   - **[補充]** [LLM Arena](https://chat.lmsys.org/)：用於比較不同語言模型輸出品質的評測平台。

5. **科學領域**
   - 談論 AI 在編碼、數學、生命科學等領域的應用，例如 AlphaFold 2 在蛋白質結構預測方面的突破。

6. **結論和前瞻**
   - 總結過去十年 AI 的驚人進步，討論這對未來的潛在影響，包括技術、經濟和社會層面。
   - 強調 AI 發展速度超出許多專家預期，並提出對未來人工通用智慧（AGI）可能帶來的風險和機遇的思考。

---

### Four Background Claims

- **主張 #1**：人類具有在多元領域中解決問題和達成目標的非常通用的能力。
  - 來自 MIRI 的定義：general ability to solve problems and achieve goals across diverse domains
- **主張 #2**：人工智能系統可能會變得比人類更加聰明。
- **主張 #3**：如果我們創造出高度智能的人工智能系統，它們的決策將塑造未來。
- **主張 #4**：高度智能的人工智能系統並非預設即為有益。

---

## 討論問題

本週讀書會延伸討論了以下問題：

- 對你來說，AI 最大的威脅是什麼？
- 什麼是「智慧（intelligence）」？智慧會被複製嗎？
- When will AGI come?

---

## 禹彤的筆記摘要

### Visualizing the Deep Learning Revolution

1. AI 在過去十年有巨大進展（vision、games、language、science）
2. 主因是擴大 AI 模型的規模
3. 只有少數人預知到這件事，且他們也預測將來 AGI 可能威脅人類生存（existential risk）

<figure>
  <img src="week01-group-photo.png" alt="第一週大合照" />
  <figcaption>第一週大合照</figcaption>
</figure>