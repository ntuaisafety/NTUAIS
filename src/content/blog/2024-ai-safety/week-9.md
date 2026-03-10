---
title: "讀書會第九週：RLHF 前景與挑戰"
date: 2024-03-28T00:00:00+08:00
draft: false
summary: "NTU AI Safety 讀書會第九週，主題為強化學習人類反饋（RLHF）的前景與挑戰。涵蓋 RLHF 概念、挑戰分類（人類反饋、獎勵模型、策略三大類）、DPO（直接偏好最佳化）與 Constitutional AI 等對齊新方法。"
tags: ["RLHF", "DPO", "Constitutional AI", "Human Feedback", "Alignment", "AI Safety"]
categories: ["Reading Group Meetups"]
showAuthor: false
authors: ["ntu-ai-safety"]
---

<!-- {{ figure src="week09-group-photo.jpg" caption="第九週大合照" }} -->

## 本週資訊

- **日期**：2024 年 3 月 28 日
- **主題**：Quick Tour of Alignment with Human Preference via Human Feedback: Prospects and Challenges

## Roadmap

本週聚焦於 AI 對齊中的重要技術——**強化學習人類反饋（RLHF）**。RLHF 是 ChatGPT 等現代生成模型中使用的重要工具。本次讀書會將快速回顧 RLHF 及其相關技術的概念，探討 RLHF 的現有挑戰與未來改進方向。

**前情提要：邱天異邀請演講（第五週）**

以對齊循環（alignment cycle）框架說明 AI 對齊的範疇，包括 forward alignment、backward alignment，以及對齊目標（RICE）。前沿研究方向包括：**learning from feedback**、**learning under distribution shift**、**assurance**、**governance**。

**本週重點**：如何透過 **learning from feedback** 將生成模型與人類偏好對齊？
- RLHF 概念：什麼是 RLHF？為何需要 RLHF？RLHF 使生成模型更 helpful、harmless、honest。
- RLHF 的挑戰：包括 sycophancy、deception、不理想的偏好、複雜任務的困難，以及過度或不足審查。
- 對齊人類偏好的方法：從 RLHF、DPO 到 Constitutional AI。


## 📚 必讀篇目 Required Readings

1. **（RLHF 概念）** [Illustrating Reinforcement Learning from Human Feedback (RLHF)](https://huggingface.co/blog/rlhf) by Nathan Lambert et al. (2022)
2. **（RLHF 挑戰）** [Fine-Tuning Language Models from Human Preferences](https://arxiv.org/pdf/1909.08593.pdf) by Daniel M. Ziegler et al. (2019)
   - 請讀 Section 4.4
3. **（RLHF 挑戰）** [Open Problems and Fundamental Limitations of Reinforcement Learning from Human Feedback](https://arxiv.org/abs/2307.15217) by Stephen Casper et al. (2023)
   - 請讀 Section 3
4. **（對齊方法）** [Direct Preference Optimization: Your Language Model is Secretly a Reward Model](https://arxiv.org/abs/2305.18290) by Rafael Rafailov et al. (2023)
   - 可跳過 Section 5
5. **（對齊方法）** [Constitutional AI: Harmlessness from AI Feedback](https://arxiv.org/abs/2212.08073) by Yuntao Bai et al. (2022)
   - 請讀所有章節，若時間有限請專注於 sections 1.2, 3.1, 3.4, 4.1, 6.1, 6.2

## 📚 選讀篇目 Optional Readings

若不熟悉 RLHF，可閱讀以下資源：

1. [An introduction to Policy Gradient methods](https://www.youtube.com/watch?v=5P7I-xPq8u8)（前置知識）
2. [RLHF: How to Learn from Human Feedback with Reinforcement Learning](https://www.youtube.com/watch?v=56PlUikhB3o)（RLHF 概念）
3. [Deep reinforcement learning from human preferences](https://arxiv.org/abs/1706.03741) — [DeepMind Blog](https://deepmind.google/discover/blog/learning-through-human-feedback/)
4. [Learning to summarize with human feedback](https://openai.com/research/learning-to-summarize-with-human-feedback)
5. [The Horrific Content a Kenyan Worker Had to See While Training ChatGPT](https://slate.com/technology/2023/05/openai-chatgpt-training-kenya-traumatic.html)（RLHF 的挑戰）
6. [Thoughts on the impact of RLHF research](https://www.alignmentforum.org/posts/vwu4kegAEZTBtpT6p/thoughts-on-the-impact-of-rlhf-research)

前沿進階主題：

1. [Adversarial Attacks on LLMs](https://lilianweng.github.io/posts/2023-10-25-adv-attack-llm/) by Lilian Weng
   - Universal and Transferable Adversarial Attacks on Aligned Language Models（Focus: abstract, sections 2–3）
   - [Universal Jailbreak Backdoors from Poisoned Human Feedback](https://github.com/ethz-spylab/rlhf-poisoning)（Focus: abstract, sections 1, 3, 4, 7）
2. Learning from diverse preferences:
   - [Fine-tuning language models to find agreement among humans with diverse preferences](https://proceedings.neurips.cc/paper_files/paper/2022/hash/f978c8f3b5f399cae464e85f72e28503-Abstract-Conference.html)
   - [AlignDiff: Aligning Diverse Human Preferences via Behaviour-Customisable Diffusion Model](https://openreview.net/forum?id=bxfKIYfHyx)
   - [Beyond Reverse KL: Generalizing Direct Preference Optimization with Diverse Divergence Constraints](https://openreview.net/forum?id=2cRzmWXK9N)
   - [Diversity from Human Feedback](https://arxiv.org/abs/2310.06648)

---

## 本週筆記

### 一、人類偏好對齊概述

**人類偏好（Human Preference）**

- **動機**：現代生成模型生成「好的」文字、圖像、音訊等，以滿足人類在現實世界中的需求。
- **問題**：「好的」文字難以定義，因為它是主觀的且與語境相關（例如：創意/有趣、真實/安全、可執行的程式碼等）。
- **挑戰**：如果我們手工設計或用簡單規則定義目標函數：
  - 目標函數可能不可微分（例如：分類的 AUC、排序的 NDCG）
  - 目標函數可能未知（例如：人類調查）
- **方法**：OpenAI 發現，互動式地向人類詢問並提取資訊，可以使生成模型與人類偏好對齊，這稱為**人類反饋（human feedback）**。

> RLHF 的核心思想：使用人類對生成文本的反饋作為性能衡量標準，甚至更進一步將其用作最佳化模型的損失函數。
>
> 提示：當目標不可微分時，RL 可以幫忙！

---

### 二、RLHF 概念

#### Illustrating Reinforcement Learning from Human Feedback (RLHF)

**目標**：
1. 獲取反映人類偏好的獎勵模型
2. 將生成模型對齊至人類偏好

**三個步驟**（忽略第一步）：

**Step 2. 使用收集的人類反饋訓練獎勵模型**

- **人類反饋的類型**：配對排序 $y_1 \succ y_2$（輸出 1 優於輸出 2）
  - 使用 [Bradley–Terry model](https://en.wikipedia.org/wiki/Bradley%E2%80%93Terry_model)——一種成對比較結果的概率模型
- **反饋的來源**：人類反饋 vs AI 反饋（RLAIF）
  - RLAIF 在摘要、對話生成等任務上表現與 RLHF 相當或更優（如 Google 的 RLAIF 論文所示）
- **獎勵模型的實作**：通常透過在語言模型後附加一個線性層來預測一個 logit，或移除最後的解碼層並用線性層替換
- 工具推薦：[RewardBench: Evaluating Reward Models](https://github.com/allenai/reward-bench)、[Leaderboard](https://huggingface.co/spaces/allenai/reward-bench)

**Step 3. 使用獎勵模型以 RL（PPO）微調生成模型**

用策略梯度 RL 算法 PPO（Proximal Policy Optimization）微調初始語言模型的副本。

將微調任務形式化為 RL 問題：
- **Policy**：生成模型，接受提示並返回回應（文字序列或文字上的概率分布）
- **Action space**：所有可能的回應單位，例如語言模型詞彙表中的 token（通常約 5 萬個 token）
- **Observation space**：可能的輸入提示分布（token 序列）
- **Reward function**：偏好模型與策略偏移約束的組合

PPO 更新規則：最大化當前批次資料中的獎勵指標（PPO 是 on-policy 的，意味著參數只用當前批次的提示-生成對更新）。

高效微調：**LoRA family**

**討論**：
1. 定義和收集「高品質」人類反饋仍在探索中
2. 改進 RL 最佳化器——我們真的需要獎勵模型嗎？→ 引出 DPO（直接偏好最佳化）
3. 模型雖然更好，但仍可能在沒有任何不確定性的情況下輸出有害或事實不正確的文字

---

### 三、RLHF 的挑戰

#### 3.1 Fine-Tuning Language Models from Human Preferences — 案例研究

**方法**：引入一個翻轉獎勵符號的 bug。

**結果**：這個 bug 非常引人注目——結果不是亂碼，而是最大化錯誤的輸出，即色情回應。

**討論**：
- 學習速度非常快。我們仍然缺乏監控或正則化方法來抑制意外缺陷。
- 在這個案例中操作錯誤及其輸出很容易被發現，但對於複雜任務呢？

---

#### 3.2 Open Problems and Fundamental Limitations of RLHF

**核心發現**：
1. RLHF 的一些問題是**可處理的（tractable）**，另一些是**根本性的（fundamental）**
2. RLHF = 重複歷史失敗的教訓？
   - 舊問題（可處理）：聯合訓練獎勵模型和策略
   - 新問題（根本性）：在多元社會中決定誰的價值觀被編碼進 AI

**問題分類**（三個主要類別）：

<details>
<summary>人類反饋（Human Feedback）的挑戰</summary>

1. **錯位的人類：評估者可能追求錯誤的目標**
   - 🟣 可處理：選擇代表性人類並讓他們提供高品質反饋很困難
   - 🟣 可處理：部分評估者有有害偏見和觀點
   - 🟣 可處理：個別人類評估者可能毒化資料
2. **良好監督的困難**
   - 🟣 可處理：人類因時間、注意力或責任心有限而犯簡單錯誤
   - 🟣 可處理：部分可觀測性限制了人類評估者
   - 🟠 根本性：人類無法對困難任務進行良好評估
   - 🟠 根本性：人類可能被誤導，因此其評估可能被博弈
3. **資料品質**
   - 🟣 可處理：資料收集可能引入有害偏見
   - 🟠 根本性：收集人類反饋時存在固有的成本/品質取捨
4. **反饋類型的限制**（本讀書組的研究興趣）
   - 🟠 根本性：RLHF 在反饋類型的豐富性和效率之間存在取捨
</details>

<details>
<summary>獎勵模型（Reward Model）的挑戰</summary>

1. **問題誤規範（Problem Misspecification）**（本讀書組的研究興趣）
   - 🟠 根本性：個體人類的價值觀難以用獎勵函數表示
   - 🟠 根本性：單一獎勵函數無法代表多元人類社會
2. **獎勵誤泛化與獎勵操縱（Reward Hacking）**
   - 🟠 根本性：獎勵模型可能泛化為劣質獎勵代理，即使來自正確標記的訓練資料
   - 🟠 根本性：最佳化不完美的獎勵代理導致獎勵操縱
3. **評估獎勵模型**
   - 🟣 可處理：評估獎勵模型困難且昂貴
</details>

<details>
<summary>策略（Policy）的挑戰</summary>

1. **健壯強化學習的困難**
   - 🟣 可處理：有效最佳化策略仍具挑戰性
   - 🟣 可處理：策略往往容易受到對抗性利用
2. **策略誤泛化（Policy Misgeneralization）**
   - 🟠 根本性：即使訓練時看到的獎勵完全正確，策略在部署中表現也可能很差
   - 🟠 根本性：最優 RL agent 傾向於追求權力（power-seeking）
3. **分布挑戰**
   - 🟣 可處理：預訓練模型將偏見引入策略最佳化
   - 🟣 可處理：RL 導致模式崩潰（mode collapse）
4. **聯合訓練獎勵模型和策略的挑戰**
   - 🟣 可處理：聯合訓練引起分布偏移
   - 🟣 可處理：難以平衡效率和避免策略過擬合
</details>

**讀書組討論**：在讀書會中，我們學到了幾個 RLHF 的根本性限制。了解這些很有用但難以入手。建議可以從可處理的挑戰開始，再重新思考其與根本性限制的連結和影響。

---

### 四、對齊人類偏好的方法

資源：[The Alignment Handbook from HuggingFace](https://github.com/huggingface/alignment-handbook)

#### 4.1 Direct Preference Optimization (DPO)

**核心發現**：
1. DPO 跳過獎勵建模步驟，直接使用偏好資料最佳化語言模型
2. 將 RLHF 流程轉換為監督式學習（SL）——通過觀察目標函數來簡化/減少問題
3. 使用「隱式獎勵模型（implicit reward model）」訓練 DPO

**動機**：
1. RLHF 流程比監督式學習複雜，且模型仍可能輸出有害或事實不正確的文字
2. PPO 的計算成本高——每個 mini-batch 需要從模型生成文字並用獎勵模型評估

**目標**：在不訓練獎勵模型的情況下微調生成模型（使用隱式獎勵估計）。

**從 RL 到 SL 的推導**：

1. 使用 Bradley–Terry model 建模配對排序：$p(y_1 \succ y_2 \mid x) = \frac{\exp(r(x, y_1))}{\exp(r(x, y_1))+\exp(r(x, y_2))}$

2. RLHF 中的目標函數：$\max_{\pi_{\theta}} \mathbb{E}_{x \sim D, y \sim \pi_{\theta}} \{r_{\phi}(x, y) - \beta \mathbb{D}_{\text{KL}}[\pi_{\theta}(y \mid x) \| \pi_{\text{ref}}(y \mid x)]\}$

3. RLHF 中獎勵最大化目標的最優解：$r(x, y) = \beta \log \left(\frac{\pi_{\theta}(y \mid x)}{\pi_{\text{ref}}(y \mid x)}\right) + \beta \log Z(x)$

4. 最終 DPO 目標函數：$\min_{\pi_{\theta}} - \mathbb{E}_{(x, y_w, y_l) \sim D} \left[ \log \sigma \left( \beta \log \frac{\pi_{\theta}(y_w \mid x)}{\pi_{\text{ref}}(y_w \mid x)} - \beta \log \frac{\pi_{\theta}(y_l \mid x)}{\pi_{\text{ref}}(y_l \mid x)} \right) \right]$

**DPO 的優點（梯度分析）**：

$$\nabla_{\theta} \mathcal{L}_{\text{DPO}}(\pi_{\theta}) = -\beta \mathbb{E} \left[ \sigma(\hat{r}_{\theta}(x, y_l) - \hat{r}_{\theta}(x, y_{w})) \right] \left[ \nabla_{\theta} \log \pi(y_w \mid x) - \nabla_{\theta} \log \pi(y_l \mid x) \right]$$

1. 第一項：提高對估計錯誤的獎勵的修正權重
2. 第二項：選擇更符合人類偏好的詞彙

---

#### 4.2 Constitutional AI: Harmlessness from AI Feedback

**核心發現**：
1. Constitutional AI = SL 自我批評 + RLAIF
   - 透過 Constitutional AI 更精確地控制 AI 行為，使用少得多的人類標籤——幫助實踐者將開源模型對齊到一套**使用者定義的原則**
2. 預訓練模型的有用性可以在 Constitutional 方法下增強，同時也實現無害性的微調

**挑戰**：在消費者應用中部署 LLM 面臨多項挑戰，包括需要添加防護欄，防止模型生成不理想的回應（例如：在給孩子的 AI 家教中，你不希望它生成有毒答案或教他們寫詐騙郵件！）

**目標**：Constitutional AI (CAI) 讓模型根據一套**使用者定義的原則**批評其輸出並**自我改進**。
→ 實踐者只需定義原則，而不必收集昂貴的人類反饋。

**方法（兩個階段）**：

**Stage 1（監督階段）**：Critique → Revision → Supervised Learning（步驟 1-4）
- 改變模型回應的分布，以減少第二 RL 階段的探索需求和訓練長度

**Stage 2（RL 階段）**：AI Comparison Evaluations → Preference Model → Reinforcement Learning（步驟 5-6）
- 將語言模型對一套原則的解釋提煉回混合人類/AI PM 中（對有用性使用人類標籤，對無害性只使用 AI 標籤）
- AI 生成無害性的 AI 生成偏好資料集，與人類反饋有用性資料集混合
- RLAIF（而非 RLHF）：AI 根據一套從原則池中隨機取樣的 Constitutional Principles 評估回應

**結果**：
- **Result 2**：修訂實現了逐漸更高的無害性分數，表明進行更多修訂有益
- **Result 3**：Constitution 的數量對無害性分數沒有顯著影響

**未來方向**：
1. **引導語言模型**：改變模型的寫作風格、語氣或個性，或改變其對特定類別問題的回應
2. **研究不同 AI 行為的泛化和干擾模式**：通過取消人類反饋，降低了實驗門檻；預訓練注入的泛化模式目前仍是黑盒子
3. **健壯性**：使模型對 red-team 攻擊本質上免疫；使有用性和無害性更加相容，以大規模提升自動化 red teaming
4. **迭代在線訓練**：使用 AI 監督進行在線訓練，用新的 AI 反饋更新偏好模型以保持其與策略產出的分布一致

**更廣泛的影響**：
- 降低按照創造者意圖行事的 AI 模型的訓練門檻，同時也讓有害系統更容易訓練
- 減少對人類反饋的需求可能導致開發者部署具有未預見失敗模式的模型；但另一方面，不再需要大量人類 red-teamer 進行不雅的工作

---

### 結論

1. RLHF 使生成模型與人類偏好對齊，效果優於監督式學習（SL）
2. 然而，RLHF 存在多項挑戰，如標記成本和訓練範式
3. DPO 和 Constitutional AI（以及更多方法）是改善現有 RLHF 對齊問題的兩種途徑