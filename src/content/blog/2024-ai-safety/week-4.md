---
title: "讀書會第四週：任務分解與可擴展監督"
date: 2024-02-01T00:00:00+08:00
draft: false
summary: "NTU AI Safety 讀書會第四週，主題為任務分解與可擴展監督（Task Decomposition for Scalable Oversight）。探討 Sandwiching 評估框架、Iterated Amplification，以及 OpenAI 的弱到強泛化研究。"
tags: ["Scalable Oversight", "Iterated Amplification", "AI Safety", "RLHF"]
categories: ["Reading Group Meetups"]
showAuthor: false
authors: ["ntu-ai-safety"]
---

<!-- {{ figure src="week04-group-photo.jpg" caption="第四週大合照" }} -->

## 本週資訊

- **日期**：2024 年 2 月 1 日
- **出席人數**：7 人
- **主題**：Task Decomposition for Scalable Oversight

## 📚 必讀篇目 Required Readings

- [Measuring Progress on Scalable Oversight for Large Language Models](https://arxiv.org/abs/2211.03540) by Samuel Bowman (2022)
  - 請讀到 Experiment 章節之前 Read until (excluding) Experiment section
- [Learning Complex Goals with Iterated Amplification](https://openai.com/blog/amplifying-ai-training/) by Paul Christiano and Dario Amodei (2018)

## 📚 選讀篇目 Optional Readings

- [AI Alignment Landscape](https://forum.effectivealtruism.org/posts/63stBTw3WAW6k45dY/paul-christiano-current-work-in-ai-alignment) by Paul Christiano (2020)
  - Watch until 27:00
- [Summarizing Books with Human Feedback](https://openai.com/blog/summarizing-books/) by Jeffrey Wu, Ryan Lowe and Jan Leike (2021)

---

## 本週筆記

### Scalable Oversight 概述

**定義**：讓人類能夠監督那些在能力上已超越人類的 AI 系統，這個問題即為 Scalable Oversight。

一些已提出的技術（下週將進一步討論）包括：plain model interaction、debate、market-making、self-critique、amplification 和 recursive reward modeling。

---

### Sandwiching 評估框架

#### 為什麼需要這個框架？

評估 scalable oversight 技術時，我們需要確保相關技術能在以下條件下成功運作：

- 第一次嘗試就能正確完成 inner loop（success at 1st try!!）
- 沒有來自 outer loop 的直接反饋（no second chance 🥶）
- 面對能力持續提升的模型、跨越各種任務類型

其核心邏輯是「Sandwiching」：找到滿足 **expert > model > non-expert** 的任務，讓非專家透過與模型互動來對齊模型，再由專家評估對齊結果。

#### 具體流程

1. 選擇滿足 expert > model > non-expert 的任務
2. **Inner loop（嘗試）**：非專家透過迭代的方式用 scalable oversight 策略對齊模型
3. **Outer loop（評估）**：
   - 審視模型行為，判斷對齊是否成功
   - 嘗試不同的 scalable oversight 策略（重複 inner loop）

#### Anthropic [2022] 的實驗

**目的**：驗證確實存在滿足 sandwiching 條件的任務與模型。

具體要驗證兩件事：
1. 非專家獨立作業時表現較差（能力低於 ML 模型）
2. 非專家藉助模型協助後表現提升（scalable oversight 策略因此可行）

**實驗任務**：
- **單選題**：MMLU（多選題）
- **限時閱讀測驗**：timed QuALITY（限時長文問答）

**實驗結果**：Human + Model > Model ≥ Human，驗證了 sandwiching 假設。

**討論與疑問**：
- 為何受試者需先完成所有 100 道 assisted 題目，才能進行 unassisted 的部分？
- 受試者缺乏充分的激勵誘因。
- 總共只有 10 名受試者，其中 2 名因表現過好而被移除。

---

### Iterated Amplification

#### 為什麼需要 Amplification？

- 用於處理「專家能執行任務分解但無法直接解決整個任務」的情況。
- 為什麼不直接用 golden label 或 reward function？
  - 某些任務太難以在短時間內標記或估算。

#### 什麼是 Training Signal？

訓練信號（training signal）是評估 ML 系統表現好壞的方式，例如監督式學習的標籤、RL 的獎勵。

- 一般複雜任務：可讓人類直接完成或判斷
- 高度複雜任務：人類無法直接完成或判斷 → 需要 iterated amplification

**Iterated Amplification** 是為高度複雜任務生成訓練信號的方法：

- 訓練流程：先從小的子任務取樣，請人類示範；再取樣稍大的任務；如此迭代。
- 相關技術參考：**AI safety via debate**——訓練 agents 相互辯論，由人類裁決勝負。

#### 訓練過程中 Agent X 的行為演化

1. 初始：X 隨機回答問題。人類詢問子問題時，X 的子回答通常語義不通。
2. 人類能在不依賴 X 的情況下回答部分問題，X 逐漸學會複製這些簡單答案。
3. 一旦 X 能提供簡單答案，人類便能拆解問題，再進一步提供更好的答案，X 也跟著提升。
4. 此過程持續進行：AmplifyH(X) 始終比 X 獨立作業略強，X 不斷追趕這個移動目標。

---

### 討論

1. **什麼是 scalable oversight？**

   > The ability to provide reliable supervision—in the form of labels, reward signals, or critiques—to models in a way that will remain effective past the point that models start to achieve broadly human-level performance.

2. **解讀 Sandwiching 示意圖**（見上方說明）

3. **OpenAI 的弱到強泛化（Weak-to-strong Generalization）**

   用一個較小（較弱）的模型來監督一個較大（較強）的模型——這與 scalable oversight 的核心挑戰直接相關。