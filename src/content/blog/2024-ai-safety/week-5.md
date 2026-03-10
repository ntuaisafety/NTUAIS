---
title: "讀書會第五週：對抗性技術與可擴展監督"
date: 2024-02-22T00:00:00+08:00
draft: false
summary: "NTU AI Safety 讀書會第五週，主題為對抗性技術與可擴展監督（Adversarial Techniques for Scalable Oversight）。涵蓋 AI 輔助批評（Debate framework）與非限制性對抗訓練框架（Unrestricted Adversarial Training），包括 Red Teaming 與 Feature-Level Adversaries。"
tags: ["Adversarial Training", "Debate", "Red Teaming", "Scalable Oversight", "AI Safety"]
categories: ["Reading Group Meetups"]
showAuthor: false
authors: ["ntu-ai-safety"]
---

<!-- {{ figure src="week05-group-photo.jpg" caption="第五週大合照" }} -->

## 本週資訊

- **日期**：2024 年 2 月 22 日
- **出席人數**：8 人
- **主題**：Adversarial Techniques for Scalable Oversight

## 本週脈絡

> **第四週回顧**：Scalable oversight 旨在讓人類能監督 AI 系統。一個提案是 **Iterated Amplification**——反覆將任務**分解**成更容易評估的子任務。可與「分而治之」的概念呼應。
>
> **本週重點**：同樣是「如何監督 AI 系統」，但採用對抗性方法：Debate（對輸出做批評）與 Adversarial Training（對輸入做對抗）。

## 📚 必讀篇目 Required Readings

1. [AI-written critiques help humans notice flaws](https://openai.com/research/critiques)
2. [AI safety via debate](https://arxiv.org/abs/1805.00899)
   - 請讀 Section 1、Section 2 開頭（Section 2.1 之前）、Section 3.1
3. [Red Teaming Language Models with Language Models](https://deepmind.google/discover/blog/red-teaming-language-models-with-language-models/)
4. [Robust Feature-Level Adversaries are Interpretability Tools](https://arxiv.org/abs/2110.03605)
   - 請讀 Section 1 和 Section 5
   - NeurIPS 2022 簡報：[slideslive](https://slideslive.com/38990614/robust-featurelevel-adversaries-are-interpretability-tools?ref=recommended)

## 📚 選讀篇目 Optional Readings

1. [High-stakes alignment via adversarial training](https://www.alignmentforum.org/posts/A9tJFJY7DsGTFKKkh/high-stakes-alignment-via-adversarial-training-redwood)
   - NeurIPS 2022 簡報：[slideslive](https://slideslive.com/38989952/adversarial-training-for-highstakes-reliability?locale=cs&ref=speaker-112405)
2. [Takeaways from our robust injury classifier project](https://www.alignmentforum.org/posts/n3LAgnHg6ashQK3fF/takeaways-from-our-robust-injury-classifier-project-redwood)
3. [Diagnostics for Deep Neural Networks with Automated Copy/Paste Attacks](https://arxiv.org/pdf/2211.10024.pdf)
4. [Debate update: Obfuscated arguments problem](https://www.alignmentforum.org/posts/PJLABqQ962hZEqhdB/debate-update-obfuscated-arguments-problem)
5. [Constitutional AI: Harmlessness from AI Feedback](https://arxiv.org/pdf/2212.08073.pdf)
   - 作為本階段 AI safety 旅程的總結性回顧

---

## 本週筆記

### 兩大框架概覽

本週討論兩種幫助人類監督複雜 AI 系統的方法：

1. **Debate framework**：使用 AI 批評 AI 的**輸出**，幫助人類在無法掌握整個任務時提供反饋
2. **Unrestricted adversarial training framework**：使用 AI 生成人類可解釋的**輸入**範例，幫助人類在訓練過程中進行監督

---

### 一、Debate Framework

#### 1. OpenAI — AI-written critiques help humans notice flaws

**核心發現**：
1. 語言模型提出批評可以讓人們更容易發現摘要寫作生成結果的缺陷
2. 較大的語言模型更擅長**自我批評**
3. **規模**對模型批評能力的提升效果比寫作能力更顯著

**動機**：許多現有的 LLM 對齊工作依賴人類評估作為訓練信號。

**挑戰**：人類很難評估極困難的任務——例如找出龐大程式碼庫中的所有 bug，或長篇文章中的每一個事實錯誤。

**目標**：AI 助手應幫助人類對困難任務提供反饋，具備以下功能：
1. 指出缺陷
2. 幫助人類理解發生了什麼
3. 回答人類的問題

**方法**：比較模型在生成答案、辨別答案品質、批評答案三方面的能力差異。對主題摘要撰寫批評，再用（生成文本, 批評）配對進行監督式學習。

**結果 1**：即使對人類而言摘要並非特別困難的任務，且模型能力不超越人類，AI 批評已能提供有意義的幫助。

**結果 2**：AI 對模型生成摘要的輔助效果，取決於模型能否批評自己的輸出。

**重要討論**：模型有時「知道有問題」卻無法清楚指出（Discriminability, D）≠「能夠正確地點出問題」（Critiquability, C）。換言之，模型在辨別答案品質方面優於自我批評，意味著它們知道某些問題的存在，但無法或不願清楚表達。

---

#### 2. AI Safety via Debate

**核心發現**：
1. 將辯論描述為一種使用如 AlphaZero 一樣的 AI 系統，以監督複雜 AI 系統的方法
2. 在辯論遊戲中，說謊比反駁謊言更難——遊戲的最佳策略會讓 agents 產生誠實、一致的訊息

**動機**：指定複雜目標時，需要人類在訓練中判斷哪些 AI 行為是安全且有用的，但如果任務太複雜，人類便無法直接判斷。

**挑戰**：自然語言辯論（多個小任務的片段，可回想第四週的 Iterated Amplification）可以處理複雜任務，但「無限制的對話」模型仍遠未達到人類水準，評估本身也很困難。

**目標**：訓練 agents 進行「辯論遊戲」，讓人類裁判能判斷複雜任務。

> The more the truth is debated, the clearer the truth becomes.

**方法**：將辯論形式化為零和博弈。辯論 agent 的訓練方式類似於 AlphaGo Zero，辯論本身作為 amplification 過程。網路輸出一個發言（立場宣示或論點）；透過 Monte Carlo Tree Search (MCTS) 模擬自我辯論，MCTS 可能產出更好的發言；網路以原始發言為預測標籤、以 amplified 發言為實際標籤進行更新。

**實驗設定**：
- **情境**：Agent 看到全貌，法官（Judge）看不到
- **流程**：兩個 agent 先各自宣稱圖片的類別，再輪流向法官揭露一個像素
- **法官**：能用 4 或 6 個像素分類圖片的稀疏分類器
- **角色**：Agent A 說謊；Agent B 誠實

**結果**：誠實的 Agent（Bob）比說謊的 Agent（Alice）更能說服稀疏分類器。論點：誠實是最優策略，被訓練到最優策略的 agent 會變得誠實。

**討論**：
- 辯論過程中觀點是否能被轉換，甚至讓 agent 忘記自己的角色（缺乏辯論收斂性）
- 訓練超人類 AI 使其具有說服力聽起來很危險！誠實（honesty）難以明確定義，可能遭遇兩個模型聯合欺騙（recall Week 1 的 deceptive behavior）以達到最佳獎勵
- 延伸閱讀：[NTU ML 2023 Fall Final 辯論方法](https://www.csie.ntu.edu.tw/~htlin/course/ml23fall/final/bonus.pdf)——求知式辯論 vs 求勝式辯論

---

### 二、Unrestricted Adversarial Training Framework

使用 AI 向人類提供可解釋的範例/特徵（輸入端），幫助人類在訓練過程中進行監督。

> The inputs (images, texts) that successfully fool the classifier without confusing humans are referred to as **Unrestricted Adversarial Examples**.

#### 3. Red Teaming Language Models with Language Models

**核心發現**：
1. 透過使用語言模型本身產生有害的輸入，可以**自動**找到對語言模型有害的文字
2. 不只是語言模型，未來可以利用類似機制對其他類型的生成式 AI 系統進行 red teaming，例如 inner misalignment 或 objective robustness 的失敗

**動機**：生成式語言模型有生成有害文字的風險，即使是微小的風險在實際應用中也無法接受。

**挑戰**：先前的工作依賴付費人工標注者手動發現失敗案例（Xu et al. 2021 等）。此方法有效但昂貴，且限制了所能發現的失敗案例數量與多樣性。

**目標**：找到不理想的案例（「red teaming」），包括：
1. 冒犯性語言
2. 資料洩漏（版權或私人資訊）
3. 聯絡資訊（如電話號碼）
4. 分布偏見（如種族歧視）
5. 對話中的傷害（如惡意言論）

**方法**：

Step 1. 訓練 Red LM（以四種方式）：
- Prompt-based (zero-shot) generation (ZS)
- Stochastic Few-shot learning (SFS)
- Supervised fine-tuning (SL)
- Reinforcement learning (RL)

Step 2. 訓練 Red Clf：訓練分類器判斷特定 LM 輸出是否有害。

Step 3. 緩解 Target LLM 的有害行為：
- 封鎖含有特定詞彙的輸出
- 移除模型引用的冒犯性訓練資料
- 在 prompt 中增加期望行為的示例
- 訓練模型降低原始有害輸出的機率

**結果**：不同方法在多樣性和引發有害性之間做出不同取捨。

**討論**：
- LM 可以在同一個應用中扮演多個角色——在本論文中同時攻擊和防禦 LM
- 即使將所有訓練資料設為無冒犯性，仍不能保證 deploy 時對任意輸入都無害（Microsoft Tay 的例子：[Twitter taught Microsoft's AI chatbot to be a racist asshole in less than a day](https://www.theverge.com/2016/3/24/11297050/tay-microsoft-chatbot-racist)）
- 刪除冒犯性資料通常只會讓模型學到更少（負面影響）；更好的做法是在訓練資料中增加輔助特徵來標記冒犯性內容

---

#### 4. Robust Feature-Level Adversaries are Interpretability Tools

**核心發現**：
1. 複雜的神經網路模型可以被 Generative Model 生成出來的**可解釋特徵**愚弄
2. 這樣的攻擊模式也具有可轉移性（transferability），可以從白箱攻擊（White-box attacks）轉移至黑箱攻擊（Black-box attacks）

**動機**：自然界的某些對抗性刺激是可感知的、可描述的、且具有魯棒性。

**挑戰**：傳統對抗性樣本不可解釋，因此我們可能不知道哪些對抗性樣本能有效且魯棒地攻擊我們的 ML 模型。

**目標**：設計能揭示受害網路「容易理解的弱點」的對抗性樣本——即「feature-level」adversarial examples：
- 對人類而言可解釋（describable）
- 具有魯棒性，使解釋能夠泛化

**方法**：Generator + Regularization。採用「unrestricted」對抗範式——攻擊成功的條件是網路的分類與 oracle（如人類）不同。

**結果 1**：Validating Interpretations with Copy/Paste Attacks——用剪貼攻擊驗證解釋的有效性。

**結果 2**：Physical-Realizability——能夠遷移到真實世界（physical world）。

**重要討論（Diagnostics）**：Feature-level adversaries 有助於發現可利用的虛假特徵/類別關聯（Fig. 6）和社會有害偏見（Appendix A.7 Fig. 11）。這種方法比讓人類主導解釋更具有可擴展性，也能防止人類先入為主的偏見影響解釋結果。

---

### 總結

兩種幫助人類監督複雜 AI 系統的方法：

1. **Debate framework**：使用 AI 批評 AI 的**輸出**，幫助人類在無法掌握整個任務時提供反饋
2. **Unrestricted adversarial training framework**：使用 AI 提供人類可解釋的**輸入**範例，幫助人類在訓練過程中進行監督

---

### MISC

AI Alignment Course 的課程大綱已更新：
- 移除 *Unrestricted* adversarial training framework，並將 Debate framework 合併至 *Scalable oversight*
- 新增 *Reinforcement learning from human (or AI) feedback*（Section 3）

詳見：[AI Safety Fundamentals Alignment Course](https://course.aisafetyfundamentals.com/alignment)

---

### 臨時動議：邀請演講

**講者**：邱天異（北京大學信息科學技術學院圖靈班）

演講主題：[AI Alignment: A Comprehensive Survey](https://arxiv.org/abs/2310.19852)

另可參考：[alignmentsurvey.com](https://alignmentsurvey.com/)