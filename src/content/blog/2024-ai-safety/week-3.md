---
title: "讀書會第三週：目標誤泛化"
date: 2024-01-25T00:00:00+08:00
draft: false
summary: "NTU AI Safety 讀書會第三週，主題為目標誤泛化（Goal Misgeneralization）。探討 AI 系統為何即使在訓練環境中表現正常，部署後仍可能追求非預期目標，並討論其成因、定義與緩解策略。"
tags: ["Goal Misgeneralization", "AI Safety", "Deep RL", "Inner Alignment"]
categories: ["Reading Group Meetups"]
showAuthor: false
authors: ["ntu-ai-safety"]
---

<!-- {{ figure src="week03-group-photo.jpg" caption="第三週大合照" }} -->

## 本週資訊

- **日期**：2024 年 1 月 25 日
- **出席人數**：7 人
- **主題**：Goal Misgeneralization

## 📚 必讀篇目 Required Readings

> 建議於讀書會前讀完 We recommend finishing them before coming

- [Goal Misgeneralisation: Why Correct Specifications Aren't Enough For Correct Goals](https://deepmindsafetyresearch.medium.com/goal-misgeneralisation-why-correct-specifications-arent-enough-for-correct-goals-cf96ebc60924) by Rohin Shah (2022)
- [Goal Misgeneralization in Deep Reinforcement Learning](https://arxiv.org/abs/2105.14111) by Langosco et al. (2023)
  - 請讀到（含）第 3.3 節 Read up to (including) sec 3.3

## 📚 選讀篇目 Optional Readings

> 以下篇章可讀可不讀 These are totally optional

- [The Alignment Problem from a Deep Learning Perspective](https://arxiv.org/abs/2209.00626) by Richard Ngo, Soeren Mindermann and Lawrence Chan (2022)
  - 僅需閱讀第 3、4 節 Read only secs 3 and 4

---

## 本週筆記

### 1. 幾個目標誤泛化的例子

1. **Sphere**（球形環境）
2. **Tree GridWorld**（樹狀格世界）
3. **Evaluating Expressions**（表達式求值）

---

### 2. 目標誤泛化的定義

> Goal misgeneralization occurs when we learn a function that has **robust capabilities** but pursues an **undesired goal**.

**什麼是「capability（能力）」？**

> We say that the model is capable of some task X in setting Y if it can be quickly tuned to perform task X well in setting Y (relative to learning X from scratch).

即：模型在某情境下，只需少量調整就能完成任務——相對於從頭學習。

#### 形式化定義

獎勵值偏低，但遵循獎勵函數的概率高於遵循策略的概率。換言之：模型在訓練中靠「錯誤原因」達到了高獎勵，一旦分佈改變，行為就偏離預期。

#### 與獎勵誤規格的關係

|  | 描述 |
|--|------|
| **Outer Alignment（外部對齊）** | 獎勵函數是否正確地捕捉了人類意圖？ |
| **Inner Alignment（內部對齊）** | 訓練出的策略是否真的在優化獎勵函數？ |
| **Misspecification（誤規格）** | 獎勵函數本身有問題（outer alignment 失敗） |
| **Underspecification（欠規格）** | 多種策略都能滿足獎勵，但泛化行為不同（inner alignment 問題的來源之一） |

目標誤泛化主要屬於 **inner alignment** 的失敗。

---

### 3. 目標誤泛化的成因

以下三個原因並非完全互斥：

1. **Consistent reward misspecification（持續的獎勵誤規格）**  
   獎勵函數在訓練環境中持續強化了錯誤目標（例：Sphere 例子）

2. **Fixation on feedback mechanisms（固著於反饋機制）**  
   模型學到的是「如何觸發正向反饋」而非「達成真正目標」

3. **Spurious correlations between rewards and environmental features（獎勵與環境特徵的虛假相關性）**  
   訓練環境中目標行為與某些無關特徵高度共現，模型誤以為後者即為目標（例：Evaluating Expressions）

---

### 4. 為什麼要研究目標誤泛化？

> Goal misgeneralization is particularly important to study because it is a mechanism by which AI systems may pursue undesired goals, and such AI systems can lead to **catastrophic risk** when they are very powerful and intelligent.

---

### 5. 如何防止目標誤泛化

#### 通用緩解方法

- 更多樣化的訓練資料（More diverse training data）
- 維持不確定性（Maintaining uncertainty）
- 理解並改善歸納偏差與泛化方式（Understanding and improving inductive biases and generalization）

#### 針對欺騙性行為的技術

- **Interpretability（可解釋性）**：透過理解模型內部表徵，檢驗其是否學到正確目標
- **Recursive evaluation（遞迴評估）**：以更強的評估者（人類或更強模型）驗證較弱模型的行為

---

### 6. 來自《The Alignment Problem from a Deep Learning Perspective》的延伸思考

1. 對於尚未被乾淨觀察或形式化的現象，謹慎推理是必要的。然而，在嚴重風險出現之前進行「前形式化分析（pre-formal analysis）」至關重要。
2. 若要形式化地定義對齊問題，需要明確指定具體的環境設定。

---

### 7. 附錄與開放問題

- **No Free Lunch Theorem（無免費午餐定理）**：是否存在某個演算法，能以某種收斂速率（與資料量相關）保證目標誤泛化的誤差趨向於零？
- **如何形式化地定義目標誤泛化？** 目前仍缺乏嚴謹的數學定義，使研究難以精確量化與比較。

---

## 相關資源

- [Supervised Program for Alignment Research (SPAR)](https://sparai.notion.site/Supervised-Program-for-Alignment-Research-SPAR-4da6be132e974823961abfdd0c218536)