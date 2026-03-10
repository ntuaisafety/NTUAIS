---
title: "NTU AI Safety 讀書會：第六週 - 對抗性稳健、機器遺忘與 AI 控制"
date: 2025-02-12T19:00:00+08:00
draft: false
summary: "本週探討如何防止對齊後的 AI 系統被過度優化或產生欺騙行為，介紹三種互補方法：對抗性稳健（Adversarial Robustness）、機器遺忘（Machine Unlearning）與 AI 控制（AI Control）。"
tags: ["AI Safety", "Reading Group", "Adversarial Robustness", "Machine Unlearning", "AI Control"]
categories: ["Weekly Notes"]
showAuthor: false
authors:
  - "ntu-ai-safety"
---

<!-- 大合照：請在此放置本週活動照片 -->
<!-- {{ figure src="week06-group-photo.jpg" caption="第六週大合照" }} -->

## 本週主題：防止對齊系統被攻破

本週聚焦於 AI 對齊領域的一個核心大哉問：**我們如何防止監督方法被 AI 系統攻略（gamed）？**

即使經過 RLHF 或 CAI 訓練的模型，也可能找到獎勵模型的漏洞，或在被監督時表現出欺騙行為。本週介紹三種應對方法：

::: callout
**Session 3 & 4 的 RLXF 與可擴展性監督**聚焦於從人類（通常透過獎勵模型）取得反饋信號。本週（Session 5）則問：如何防止微調後的 AI 系統過度優化或產生欺騙行為？
:::

三種方法：
1. **對抗性稳健**：理解並直接防禦對抗性輸入
2. **機器遺忘**：從模型中移除特定能力（例如欺騙行為）
3. **AI 控制**：在 AI 系統周圍建立架構，以更好地偵測和攔截欺騙

---

## 必讀篇目

1. [對抗性機器學習範例解說](https://www.youtube.com/watch?v=YyTyWGUUhmo)（影片）
2. [針對對齊語言模型的通用可遷移對抗攻擊](https://llm-attacks.org/)（只讀概覽和範例節）
3. [深度遺忘與遺忘學習：實現安全範疇的 LLM](https://www.alignmentforum.org/posts/mFAvspg4sXkrfZ7FA/deep-forgetting-and-unlearning-for-safely-scoped-llms)
4. [用遺忘學習衡量並降低惡意使用](https://arxiv.org/pdf/2403.03218#page=8)（讀第 4、5.2、5.3 節和附錄 B6）
5. [AI 控制：在故意破壞的情況下提升安全性](https://www.alignmentforum.org/posts/d9FJHawgkiMSPjagR/ai-control-improving-safety-despite-intentional-subversion)（讀論壇貼文，非論文本身）

---

## 1. 對抗性稳健（Adversarial Robustness）

### 核心概念

對抗攻擊是指：在原始圖片上加入人眼幾乎看不出的雜訊，卻讓模型做出完全不同的判斷。

**FGSM（Fast Gradient Sign Method）**：
```
X_adv = X + ε · sign(∇_X L(X, Y))
```

透過沿著最大化損失的方向前進，讓模型容易錯誤分類。

**攻擊類型：**
- **Untargeted（白盒）**：讓模型分類結果錯誤，但不指定成哪類
- **Targeted（黑盒）**：讓模型將輸入誤分類為特定標籤；攻擊者訓練替代模型後利用對抗樣本的**可遷移性（Transferability）**

**防禦方式：**
- **Heuristic Defense**：在訓練時加入對抗樣本（對抗訓練），但無理論保證
- **Certified Defense**：透過加入隨機雜訊提供數學保證，確保模型在一定範圍內對所有對抗擾動都是穩健的

---

## 2. 機器遺忘（Machine Unlearning）

### 為什麼微調不夠？

**GPT-4 只需要 10 個範例**就能變得「不安全」。微調只是改變模型行為，而不會讓模型「真正忘記」學過的東西，因為 LLM 的核心機制主要由預訓練決定，微調只是套了一層新規則。

### 應該遺忘的三類知識

1. **事實（Facts）**：如何製造生化武器、如何製造假證件
2. **傾向（Tendencies）**：操縱、欺騙、散播假資訊的能力
3. **技能（Skills）**：駭客技術

### RMU（Representation Misdirection for Unlearning）

傳統方法修改損失函數，RMU 直接修改模型的**表示（隱藏層激活值）**：

- **Forget Loss**：將危險資料的激活值扭曲成無意義的方向
- **Retain Loss**：維持良性資料的激活值不變

**實驗結果：**
- WMDP-Bio（生物安全）：從 ~60% 降至 ~30%（隨機猜測為 25%）
- WMDP-Cyber（網路安全）：從 ~40% 降至 ~20%
- MMLU（通用知識）：從 ~58% 僅降至 ~55-57%（副作用極小）

**待解問題：** RMU 無法阻止透過微調讓已遺忘的知識再被學回來。

---

## 3. AI 控制（AI Control）

### 研究問題

如果模型本身故意想要破壞安全措施，現有的安全技術還能有效嗎？

### 實驗設置

- **任務**：解決 5,000 個 APPS 程式設計題
- **不可信任的強模型（U）**：GPT-4（可能故意埋入後門）
- **可信任的弱模型（T）**：GPT-3.5
- **人類審查預算**：僅能審查 2% 的提交解答

### 各協議的安全性與有用性比較

| 協議 | 有用性 | 安全性 |
|------|--------|--------|
| 只使用可信任模型 | 2% | 100% |
| 預先審計 | 100% | 15% |
| 可信任監控 | 97% | 62% |
| 可信任監控 + 20% 退回 | 83% | **92%** |
| 可信任編輯 (20%) | 94% | **92%** |

**結論：** *可信任編輯*（Trusted Editing）與*可信任監控加退回機制*能在 90% 以上的時間防止災難，同時維持大部分有用性。

---

## 本週討論問題

1. 對抗性稳健、機器遺忘與 AI 控制，如何各自為對齊問題作出貢獻？
2. 在開源模型的情境下，這三種方法各自面臨哪些額外挑戰？
3. 什麼是 FGSM，對抗訓練又如何防禦它？