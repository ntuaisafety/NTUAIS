---
title: "讀書會第六週：可解釋性"
date: 2024-02-29T00:00:00+08:00
draft: false
summary: "NTU AI Safety 讀書會第六週，主題為可解釋性（Interpretability）。涵蓋機械可解釋性（Mechanistic Interpretability）、ROME 事實定位與編輯方法，以及發展可解釋性（Developmental Interpretability）與相變（Phase Transitions）理論。"
tags: ["Interpretability", "Mechanistic Interpretability", "ROME", "Phase Transitions", "AI Safety"]
categories: ["Reading Group Meetups"]
showAuthor: false
authors: ["ntu-ai-safety"]
---

<!-- {{ figure src="week06-group-photo.jpg" caption="第六週大合照" }} -->

## 本週資訊

- **日期**：2024 年 2 月 29 日
- **出席人數**：7 人
- **主題**：Interpretability

## 概覽

> **Interpretability**：研究 AI 系統為何做出特定行為，並嘗試以人類可理解的方式加以描述。
>
> - **Mechanistic Interpretability**：從學習到的權重對神經網路進行**逆向工程**，還原為人類可理解的演算法
>   - 代表研究：Locating and Editing Factual Associations in GPT
> - **Developmental Interpretability**：研究神經網路中的**相變（phase transitions）**及其與內部結構的關係

## 📚 必讀篇目 Required Readings

1. [What is mechanistic interpretability?](https://www.youtube.com/watch?v=sISodZSxNvc)（影片）
2. [Locating and Editing Factual Associations in GPT](https://rome.baulab.info/)
3. [Towards Developmental Interpretability](https://www.lesswrong.com/posts/TjaeCWvLZtEDAS5Ex/towards-developmental-interpretability)

## 📚 選讀篇目 Optional Readings

1. [Zoom In: An Introduction to Circuits](https://distill.pub/2020/circuits/zoom-in/)
2. [Towards Monosemanticity: Decomposing Language Models With Dictionary Learning](https://www.lesswrong.com/posts/TDqvQFks6TWutJEKu/towards-monosemanticity-decomposing-language-models-with)

---

## 本週筆記

### 一、機械可解釋性（Mechanistic Interpretability）

**定義**：從學習到的權重對神經網路進行**逆向工程**，還原為人類可理解的演算法。類比於將已編譯的程式二進位檔逆向還原為原始程式碼。（[ref](https://dynalist.io/d/n2ZWtnoYHrU1s4vnFSAQ519J#z=eL6tFQqNwd4LbYlO1DVIen8K)）

---

### 二、Locating and Editing Factual Associations in GPT

#### 研究動機

- **Locating facts**：進一步理解模型內部學到的知識
- **Editing facts**：未來可作為修改模型中錯誤資訊的方法

#### 核心結論

事實關聯可以沿三個維度定位：
1. **MLP** 模組的參數
2. 中間層的某個範圍（middle layers）
3. 在處理**主語（subject）最後一個 token** 時

單一事實關聯可以透過對單個 MLP 模組進行小幅的 rank-one 修改來改變。我們可以透過測試對同一事實的其他措辭的泛化能力，來區分「知識層面的改變」與「語言層面的表面改變」。

#### 方法一：定位事實（Causal Tracing）

利用因果追蹤（Causal Tracing）方法定位事實存儲的位置，通過比較乾淨運行（clean run）、損毀運行（corrupted run）和恢復運行（restored run）之間的差異，識別出對特定事實至關重要的模型組件。

#### 方法二：編輯事實（ROME — Rank-One Model Editing）

- 將 MLP 模組視為簡單的 key-value store
- ROME 使用 MLP 權重的 rank-one 修改，直接寫入一組新的 key-value pair
- 可以在不影響其他知識的情況下精確更新單一事實

---

### 三、發展可解釋性（Developmental Interpretability）

Developmental Interpretability 的目標是建立工具，用於**偵測、定位和解釋**神經網路中的相變（phase transitions）。

當神經網路形成某種結構時，會留下可解讀的**發展痕跡（developmental traces）**，讓我們可以藉此理解結構形成的位置與方式。研究工具之一：**Singular Learning Theory (SLT)**（奇異學習理論）。

#### 為什麼要研究相變？

**1. 相變確實存在**（在訓練過程中和/或在模型規模擴大時）

典型範例：

- **In-context Learning and Induction Heads**：在訓練的特定階段，induction heads 突然形成，導致 in-context learning 能力的急劇提升。

- **Toy Models of Superposition**（Transformer Circuits）：
  - **Superposition**：模型能表示的特徵數量多於其維度數量（類比：同一個詞「bank」可以表示「河岸」或「銀行」）
  - **Phase change**：一個特徵在訓練中有三種可能命運：(1) 根本沒學到；(2) 學到了，以 superposition 的方式表示；(3) 用一個專屬維度表示。這三種結果之間的轉換看起來是突然的——可能存在某種相變。

**2. 相變容易被發現**

**3. 相變是尋找普遍性（universality）的好候選**

> **假設**：我們不認為訓練好的神經網路中所有知識和計算都通過相變出現，但我們的工作假設是：有足夠多的知識這樣出現，使相變成為可解釋性研究的有效組織原則。驗證這個假設是我們眼前的優先工作。

#### 相變與對齊安全

在一個相中，事物**緩慢/連續地**變化。相變恰好是這種連續性**崩潰**的點——變化是突然的，外推迅速失效。因此，相變正是對安全而言**策略上至關重要**的偵測點。（引述自 johnswentworth 的評論）

#### 討論問題

- 你認為相變存在嗎？
- 你認為 developmental interpretability 行得通嗎？對對齊有幫助嗎？

---

## 參考資料

- [A Mathematical Framework for Transformer Circuits](https://transformer-circuits.pub/2021/framework/index.html)
- [Shallow review of live agendas in alignment & safety](https://www.lesswrong.com/posts/zaaGsFBeDTpCsYHef/shallow-review-of-live-agendas-in-alignment-and-safety)
- [EA Global London 2024](https://www.effectivealtruism.org/ea-global/events/ea-global-london-2024)