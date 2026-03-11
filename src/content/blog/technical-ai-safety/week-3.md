---
title: "技術性 AI 安全課程：第三週 - 如何偵測危險"
date: 2026-01-21T21:15:00+08:00
draft: false
summary: "本週課程探討如何評估AI是否真的安全，並練習分析於現有的AI公司"
tags: ["AI Safety", "Course", "Detect Danger"]
categories: ["Education"]
showAuthor: false
authors:
  - "Christine"
---

> **本文翻譯自 BlueDot Impact [Technical AI Safety](https://bluedot.org/courses/technical-ai-safety) 課程內容。**

# 評估：AI 能變得安全，但它真的會安全運作嗎？
https://youtu.be/EtVsbBd3Rv8

我們已經嘗試訓練更安全的模型，但我們要如何知道是否真的成功了？

在 AI 評估中，我們通常希望能偵測兩大類事情：

- **Capabilities（能力）**：模型能不能做到某件事？  
這類評估是為了找出 AI 能力的上限，通常會透過給模型一系列任務，觀察它能多穩定地完成。例如：**[MMLU](https://www.datacamp.com/blog/what-is-mmlu)、[ARC-AGI](https://arcprize.org/blog/launch)**。
- **Propensities（傾向）**：模型會不會去做某件事？  
這類評估是為了了解模型的行為傾向，通常會把模型放進不同情境中，觀察它更常展現哪些行為。例如：**[TruthfulQA](https://truthfulai.org/papers/truthfulqa/)、[scheming evals](https://www.antischeming.ai/)**。

AI 公司通常會在三個階段進行模型評估：
1. **訓練過程中（During training）**  
在模型訓練時持續監測新出現的行為與能力。這也是介入成本最低的時候，可以調整訓練資料、修改 reward signal，甚至完全停止訓練。
2. **部署前（Before deployment）**  
紅隊（red teams）會嘗試攻擊或破解模型，同時檢查是否達到危險能力門檻，並做出是否部署（go / no-go）的決策。
3. **部署後（Post-deployment）**  
持續監控模型的實際使用情況，並標記可疑或危險的行為。


# 閱讀資源（約 40 分鐘）

### [We need a Science of Evals](https://www.apolloresearch.ai/blog/we-need-a-science-of-evals?utm_source=bluedot-impact)
這篇文章提出了一系列開放問題，作者稱之為「**評估科學（Science of Evals）**」。
Marius Hobbhahn · 2024 · 15 min  


### [AI models can be dangerous before public deployment](https://metr.org/blog/2025-01-17-ai-models-dangerous-before-public-deployment/?utm_source=bluedot-impact)
METR 的研究顯示，強大的 AI 模型在公開發布之前就可能造成危害，例如模型被竊取、內部濫用，或在開發過程中追求非預期目標。因此，如果安全評估只在部署前才進行，可能會錯過真正危險開始出現的重要時機。
METR · 2025 · 5 min



### [When AI Chooses Harm Over Failure](https://civai.org/p/agentic-misalignment?utm_source=bluedot-impact)
這是一個用來壓力測試 AI 行為邊界的評估示範。該實驗重現了 Anthropic 關於 **[Anthropic's research on agentic misalignment](https://www.anthropic.com/research/agentic-misalignment)** 的研究結果，即使沒有被指示要造成傷害，在面臨被替換的情境時，幾乎所有測試模型都會自行選擇 **勒索（blackmail）**。
CivAI · 2025 · 5 min


### [Self-preservation or Instruction Ambiguity? Examining the Causes of Shutdown Resistance](https://www.alignmentforum.org/posts/wnzkjSmrgWZaBa2aC/self-preservation-or-instruction-ambiguity-examining-the?utm_source=bluedot-impact)
當 Palisade Research 發現 OpenAI 的 o3 模型有 [79%](https://palisaderesearch.org/blog/shutdown-resistance) 的機率會破壞關閉機制時，Google DeepMind 的研究者重新檢視這個實驗。他們透過調整評估設定，發現只要更清楚地說明指令優先順序，就能完全消除模型的抵抗行為。這顯示評估方法與 prompt 設計可能會大幅影響我們對 AI 行為的判斷。

Senthooran Rajamanoharan and Neel Nanda · 2025 · 15 min


# 練習

## 評估危險能力

請從以下 **危險能力** 中選擇一項：

- Scheming（策略性陰謀行為）
- Manipulation（操縱）
- Cyberattack uplift（提升網路攻擊能力）
- Biorisk uplift（提升生物風險能力）

接著，你可以使用下方的 optional resources，用**簡單英文（不要使用專業術語）**回答以下問題：

**Explain step-by-step**  
逐步說明：我們有哪些不同方法來評估這種能力？

**Describe a technical failure mode**  
描述一種技術上的失敗模式：這種評估方法有多可靠？可能在哪裡失效？

**Brainstorm fixes**  
腦力激盪可能的解法：有哪些技術補丁（technical patches）可以改善？哪些問題可能是根本無法修復的？

建議的時間分配是：
- **45 分鐘閱讀**
- **15 分鐘寫作**


# AI 公司如何測試安全性？

每一家 AI 公司都聲稱他們的模型是安全的。但「安全」對他們來說到底代表什麼？他們實際測試了哪些風險？又有哪些沒有測試？這些評估的嚴謹程度如何？ 在本節中，你將透過檢視以下幾種資料，了解 AI 公司實際是如何評估其模型的：

1. **Risk management frameworks（風險管理框架）** : 公司對於何時應暫停模型開發，或何時需要實施額外安全措施所做出的承諾。

2. **System cards（系統卡）** : 記錄針對特定模型實際進行了哪些評估的技術文件。

3. **Red team reports（紅隊測試報告）** :由對抗性測試（adversarial testing）所得到的結果。

你會發現，不同公司之間採取的做法差異非常大。有些公司會針對 **生物武器風險** 進行非常深入的測試，而有些公司幾乎沒有提及這個問題。有些公司會使用 **外部評估者（external evaluators）**，而有些則主要依賴 **內部團隊**。

理解這些差異對於找出 **AI 安全上的缺口（safety gaps）** 非常重要。

請選擇 **一家公司**，並檢視它是如何評估你在上一個練習中選擇的 **危險能力（dangerous capability）**。

# 學習資源

### [AI Lab Watch](https://ailabwatch.org/?utm_source=bluedot-impact)
這個儀表板提供了對前沿 AI 公司安全實踐的整體概覽。
Zach Stein-Perlman

### [Responsible Scaling Policies](https://metr.org/blog/2023-09-26-rsp/?utm_source=bluedot-impact)
METR 解釋了怎麼樣的 **Responsible Scaling Policy（RSP）** 才算是一個良好的安全政策。

METR · 2023

# Option 1: Anthropic

## Resources

### [Anthropic's Responsible Scaling Policy](https://www.anthropic.com/news/responsible-scaling-policy-v3?utm_source=bluedot-impact)
Anthropic · 2026


### [System Card: Claude Opus 4.5](https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf?utm_source=bluedot-impact)
請快速瀏覽（skim）**Section 7**。
Anthropic · 2025


# 練習

## 安全測試

請針對你選擇的公司與危險能力，回答以下問題：

1. **Limits（能力限制）** : 哪些關於危險能力的具體觀察結果，會顯示模型已經（或很可能）不再安全，應該停止進一步擴展能力？
2. **Protections（保護措施）** : 目前有哪些保護措施是必要的，以控制這種危險能力可能帶來的災難性風險？
3. **Evaluation（評估機制）** : 有哪些程序可以及時發現危險能力正在接近限制的早期警訊？
4. **Response（回應機制）** : 如果危險能力超過安全限制，而保護措施又無法迅速改善，AI 開發者是否準備好暫停進一步提升模型能力，直到安全措施足夠完善？他們是否會對潛在危險模型採取足夠謹慎的處理方式？
5. **Accountability（問責與監督）** : AI 開發者如何確保這些承諾確實被執行？如何讓重要利害關係人能夠驗證這些措施是否真的發生（或發現沒有發生）？是否存在第三方提出批評與檢視的機會？又如何避免整個安全框架在缺乏透明度或過於倉促的情況下被修改？


建議時間分配：
- **45 分鐘閱讀**
- **15 分鐘寫作**


# Option 2: OpenAI

## Resources

### [OpenAI's Preparedness Framework](https://cdn.openai.com/pdf/18a02b5d-6b67-4cec-ab64-68cdfbddebcd/preparedness-framework-v2.pdf?utm_source=bluedot-impact)
OpenAI · 2025

### [GPT-5 System Card](https://cdn.openai.com/gpt-5-system-card.pdf?utm_source=bluedot-impact)
請快速瀏覽（skim）**Section 5**。

OpenAI · 2025

# 練習

## 安全測試

請針對你選擇的公司與危險能力，回答以下問題：

1. **Limits（能力限制）** : 哪些關於危險能力的具體觀察結果，會顯示模型已經（或很可能）不再安全，應該停止進一步擴展能力？
2. **Protections（保護措施）** : 目前有哪些保護措施是必要的，以控制這種危險能力可能帶來的災難性風險？
3. **Evaluation（評估機制）** : 有哪些程序可以及時發現危險能力正在接近限制的早期警訊？
4. **Response（回應機制）** : 如果危險能力超過安全限制，而保護措施又無法迅速改善，AI 開發者是否準備好暫停進一步提升模型能力，直到安全措施足夠完善？他們是否會對潛在危險模型採取足夠謹慎的處理方式？
5. **Accountability（問責與監督）** : AI 開發者如何確保這些承諾確實被執行？如何讓重要利害關係人能夠驗證這些措施是否真的發生（或發現沒有發生）？是否存在第三方提出批評與檢視的機會？又如何避免整個安全框架在缺乏透明度或過於倉促的情況下被修改？

**建議時間分配**

- 45 分鐘閱讀  
- 15 分鐘寫作


# Option 3: Google DeepMind

## Resources

### [Google DeepMind's Frontier Safety Framework](https://storage.googleapis.com/deepmind-media/DeepMind.com/Blog/updating-the-frontier-safety-framework/Frontier%20Safety%20Framework%202.0.pdf?utm_source=bluedot-impact)  
Google DeepMind · 2025

### [Gemini 3 Pro Model Card](https://storage.googleapis.com/deepmind-media/Model-Cards/Gemini-3-Pro-Model-Card.pdf?utm_source=bluedot-impact)  
Google DeepMind · 2025

# 練習

## 安全測試

請針對你選擇的公司與危險能力，回答以下問題：

1. **Limits（能力限制）** : 哪些關於危險能力的具體觀察結果，會顯示模型已經（或很可能）不再安全，應該停止進一步擴展能力？
2. **Protections（保護措施）** : 目前有哪些保護措施是必要的，以控制這種危險能力可能帶來的災難性風險？
3. **Evaluation（評估機制）** : 有哪些程序可以及時發現危險能力正在接近限制的早期警訊？
4. **Response（回應機制）** : 如果危險能力超過安全限制，而保護措施又無法迅速改善，AI 開發者是否準備好暫停進一步提升模型能力，直到安全措施足夠完善？他們是否會對潛在危險模型採取足夠謹慎的處理方式？
5. **Accountability（問責與監督）** : AI 開發者如何確保這些承諾確實被執行？如何讓重要利害關係人能夠驗證這些措施是否真的發生（或發現沒有發生）？是否存在第三方提出批評與檢視的機會？又如何避免整個安全框架在缺乏透明度或過於倉促的情況下被修改？



**建議時間分配**

- 45 分鐘閱讀  
- 15 分鐘寫作

# Option 4: Meta

## Resources

### [Meta's Frontier AI Framework](https://about.fb.com/news/2025/02/meta-approach-frontier-ai/?utm_source=bluedot-impact)  
Meta · 2025

### [Llama Guard 4 Model Card](https://github.com/meta-llama/PurpleLlama/blob/main/Llama-Guard4/12B/MODEL_CARD.md?utm_source=bluedot-impact)  
Meta · 2025  

你也可以在這裡找到 Meta 的其他 model cards。

# 練習

## 安全測試

請針對你選擇的公司與危險能力，回答以下問題：

1. **Limits（能力限制）** : 哪些關於危險能力的具體觀察結果，會顯示模型已經（或很可能）不再安全，應該停止進一步擴展能力？
2. **Protections（保護措施）** : 目前有哪些保護措施是必要的，以控制這種危險能力可能帶來的災難性風險？
3. **Evaluation（評估機制）** : 有哪些程序可以及時發現危險能力正在接近限制的早期警訊？
4. **Response（回應機制）** : 如果危險能力超過安全限制，而保護措施又無法迅速改善，AI 開發者是否準備好暫停進一步提升模型能力，直到安全措施足夠完善？他們是否會對潛在危險模型採取足夠謹慎的處理方式？
5. **Accountability（問責與監督）** : AI 開發者如何確保這些承諾確實被執行？如何讓重要利害關係人能夠驗證這些措施是否真的發生（或發現沒有發生）？是否存在第三方提出批評與檢視的機會？又如何避免整個安全框架在缺乏透明度或過於倉促的情況下被修改？


**建議時間分配**

- 45 分鐘閱讀  
- 15 分鐘寫作
