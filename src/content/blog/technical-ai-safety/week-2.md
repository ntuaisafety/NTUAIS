---
title: "技術性 AI 安全課程：第二週 - AI 面臨的技術挑戰"
date: 2026-01-21T21:15:00+08:00
draft: false
summary: "本週課程探討 AI 面臨的技術挑戰（the technical challenge with AI）：我們該如何讓AI進行良好的發展?"
tags: ["AI Safety", "Course", "Technical Challenge"]
categories: ["Education"]
showAuthor: false
authors:
  - "Christine"
---

> **本文翻譯自 BlueDot Impact [Technical AI Safety](https://bluedot.org/courses/technical-ai-safety) 課程內容。**

# 我們能夠訓練出安全的模型嗎?
https://youtu.be/o1jxMLEFr9I

AI 的行為是由 資料（data）、演算法（algorithms）以及算力（compute） 所共同建立的。然而，訓練安全的 AI 並不像傳統程式設計那樣簡單。我們無法為每一種可能情境都寫下明確的規則。相反地，我們通常使用一些方法來引導（nudge）AI 的行為與能力發展：

- 輸入資料過濾（Input data filtering）： 仔細篩選與整理模型學習的資料來源。

- 人類回饋（Human feedback）： 透過人類的評估與回饋，教導模型哪些行為是我們希望看到的。

- 可擴展監督（Scalable oversight）：在模型能力逐漸超越人類的情況下，仍然能維持對其行為的監督與控制。

在這個單元中，你將學習三種主要用來訓練更安全 AI 模型的方法。
你會了解前沿 AI 實驗室如何實際運用這些技術、如何評估它們的效果，以及為什麼即使是目前最好的方法仍然存在限制。

在完成本單元後，你將能夠辨識出目前在訓練安全 AI 時仍然存在的關鍵缺口。

# 餵給 AI「好的資料」

## 如果我們只用「好的資料」來訓練 AI 會怎麼樣呢？
如果我們仔細過濾訓練資料，移除危險知識與有害模式，我們就應該能得到更安全的模型，畢竟只要能控制輸入，就能控制輸出。

輸入資料過濾有三個主要目標：
- **移除危險資訊**，例如如何合成致命病原體、製造爆炸物、入侵關鍵基礎設施，或進行高階社交工程攻擊。如果模型從未接觸這些資訊，它就無法學會做這些事情。
- **防止有害行為**，例如包含有毒語言、有害刻板印象與惡意推理模式的例子。透過建立能展現我們希望 AI 表現出的行為的訓練資料。
- **防範資料下毒（data poisoning）**，也就是惡意行為者透過污染訓練資料，在模型中植入後門或漏洞。

在本單元中，我們將探討目前的輸入資料過濾技術，在提升 AI 安全性方面究竟有多可靠。


# 學習資源（約 35 分鐘）

### [What is input data filtration in AI safety?](https://blog.bluedot.org/p/data-filtration?utm_source=bluedot-impact&_gl=1*100um3y*_gcl_au*MTczMzM0MjA5OC4xNzczMDcwNjIy)

這篇文章介紹 AI 公司如何從訓練資料中過濾有害內容，同時也說明一個根本性的挑戰：我們無法預測模型會如何從資料中學習，而同一種知識既可能帶來有益的應用（例如疫苗設計），也可能帶來有害用途（例如生物武器製造）。

Sarah Hastings-Woodhouse · 2025 · 5 min


### [Deep Ignorance](https://deepignorance.ai/?utm_source=bluedot-impact)

UK AISI 與 EleutherAI 的研究顯示，從訓練資料中移除有害內容（例如生物武器資訊）可以建立一種較難被篡改的安全機制，即使惡意行為者試圖破壞安全措施，它仍然能維持效果。相比之下，某些安全方法只是讓 AI 拒絕回答問題，但危險知識其實仍然存在於模型內部。

O'Brien et al. · 2025 · 10 min


### [Enhancing Model Safety through Pretraining Data Filtering](https://alignment.anthropic.com/2025/pretraining-data-filtering/?utm_source=bluedot-impact)

Anthropic 展示了如何透過從訓練資料中過濾危險武器知識，使模型的有害能力降低 **33%**，同時仍然保留其實用性。

Chen et al. · 2025 · 10 min


### [A small number of samples can poison LLMs of any size](https://www.anthropic.com/research/small-samples-poison?utm_source=bluedot-impact)

Anthropic 與 UK AISI 的研究顯示，攻擊者只需要 **250 份惡意文件** 就能在 AI 模型中植入隱藏漏洞，而且這與模型大小無關。這說明過濾訓練資料其實比想像中更困難，因為惡意行為者只需要比預期更少的污染資料就能破壞 AI 的安全性。

Souly et al. · 2025 · 10 min



# 練習

## Limitations of input filtering

哪一個敘述最能描述輸入資料過濾作為安全技術的整體可靠性？

* 它可以對所有類型的有害 AI 行為提供完全的保護。
* 它能帶來有意義的安全提升，但仍然面臨一些根本性的限制，例如雙重用途知識（dual-use knowledge）以及資料投毒漏洞（data poisoning vulnerabilities）。
* 它只適用於小型語言模型，而不適用於大型語言模型。
* 它可以消除對其他安全措施（例如輸出過濾）的需求。


## 評估如何過濾輸入資料

某個新的 AI 新創公司宣稱，他們透過「**完美的輸入資料過濾（perfect input data filtration）**」已經解決了 AI 安全問題。他們表示已從訓練資料中移除所有危險內容，包括武器資訊、網路攻擊方法與有害行為，並認為這使他們的模型完全安全，因此不需要任何其他安全措施。

根據你對輸入資料過濾的理解，請評估這個說法。你的回答應該：
- 指出 **至少兩個輸入資料過濾的具體限制或漏洞**，以說明為何「完美安全」的說法並不成立（並使用資源中的證據）。
- 解釋 **為什麼單靠輸入資料過濾不足以確保 AI 安全**。
- 描述 **一個具體情境**，說明即使是「完美過濾」的模型仍然可能造成傷害。

請寫 **200–300 字**。
```




```


# 教 AI 分辨對錯
訓練模型讓它們按照我們的意圖行事（也就是與我們的需求「對齊」，aligned）的經典方法之一，是 **人類回饋強化學習（Reinforcement Learning with Human Feedback, RLHF）**。在 RLHF 的過程中，人類會對模型的輸出進行評分，而模型會根據這些評分進行訓練，以學習哪些是「好」或「壞」的回應。但如果只依賴人類評分效率太低，因此在實務上也會使用 AI 來協助提供評分（稱為RLAIF: Reinforcement Learning from AI Feedback）。大多數其他訓練技術其實都是建立在這個方法之上，因此理解RLHF 的運作方式與其限制是非常重要的。


# 學習資源（約 35 分鐘）

### [The True Story of How GPT-2 Became Maximally Lewd](https://www.youtube.com/watch?v=qV_rOlHjvvs&utm_source=bluedot-impact)

這個影片以容易理解的方式，提供了 RLHF 在技術與實務上的高層次介紹，並探討了一個 RLHF 出問題的案例研究。

Rational Animations · 2024 · 15 min

### [A simple technical explanation of RLH(AI)F](https://kairos.fm/simple-technical-rlhaif/?utm_source=bluedot-impact)

這篇技術導讀說明我們如何讓 AI 變得有幫助且無害，包括從收集人類偏好、訓練「教練模型（coach models）」到更新模型參數的整個流程。

請注意，這是 **Constitutional AI 論文方法的一個簡化版說明**。

Li-Lian Ang · 2024 · 10 min


### [Problems with Reinforcement Learning from Human Feedback (RLHF) for AI safety](https://blog.bluedot.org/p/rlhf-limitations-for-ai-safety/?utm_source=bluedot-impact&_gl=1*1kbnvyt*_gcl_au*MTczMzM0MjA5OC4xNzczMDcwNjIy)

這篇文章解釋了為什麼 RLHF 雖然是現代 AI 安全訓練的基礎，但仍然存在問題。它往往讓模型學會說出「人類想聽的話」，但不一定是真實的答案。此外，人類很難在訓練 AI 所需的巨大規模上提供高品質的回饋，因此需要其他安全技術來補充。

Sarah Hastings-Woodhouse · 2024 · 10 min


# 練習

## 理解題

以下問題應該可以只依靠上述核心資源回答。請在下方寫下你的答案。

1. 使用 RLHF 訓練大型語言模型的主要目標是什麼？
2. 描述 RLHF 流程中兩個「教練（coaches）」的工作。
3. 在實務上，人類很難提供一致的數值評分（例如將文本評分為 1 到 10）。因此我們通常如何收集人類回饋？又如何把這些回饋轉換成數值分數？
4. 在 GPT-2 的案例研究中，發生了什麼問題導致模型產生「極度不良的輸出（maximally bad output）」？


接著，請參考 [AWS 的流程圖](https://d2908q01vomqb2.cloudfront.net/f1f836cb4ea6efb2a0b1b99f41ad8b103eff4b59/2023/08/31/ML-14874_image001.jpg)並繼續回答 RLHF 的問題。

5. 第 1 步發生了什麼？
6. 除了人類專門撰寫用於微調 AI 模型的示範資料之外，第 1 步還可能使用哪些其他資料來進行微調？
7. 第 2 步發生了什麼？請詳細說明。
8. 最後，第 3 步發生了什麼？
9. 為什麼我們不只做第 1 步，而省略第 2 步和第 3 步？
10. 為什麼我們不只做第 2 步與第 3 步，而省略第 1 步？
11. 用你自己的話總結一個 **RLHF 的開放問題（open problem）**。
12. 用你自己的話總結一個 **RLHF 的根本問題（fundamental problem）**。

你可以[對照答案](https://docs.google.com/document/d/1yz3yfUowbYoOcEuMAc2T0xebkNFlBj8xBFLjgX7TsBA/edit?tab=t.0)來檢查你的回答。


# 用你自己的話解釋 RLHF

從一個 **基礎 LLM（base model）** 開始，說明如何使用 **RLHF** 訓練它，使其成為一個能夠遵循 **[Wikipedia Manual of Style](https://en.wikipedia.org/wiki/Wikipedia:Manual_of_Style)** 所有規則的有用助手。

請寫 **約 400–800 字**。你的回答應該包含：

- 使用 **監督式微調（Supervised Fine-Tuning）**，搭配擴增資料或人類示範
- 收集人類回饋（假設你可以接觸到 **100 位熟悉所有 Wikipedia 規則的專業編輯者**）
- 使用這些回饋來影響模型輸出的方式


# （Optional）實際操作 Base 模型與 RLHF 模型

有些模型（例如 **Llama 2 或 Gemma**）同時提供：

- **Base model**（RLHF 之前的模型權重）
- **Instruction-following model**（RLHF 之後的模型權重，通常稱為 *instruct model* 或 *chat model*）

你可以在自己的電腦上或在 **Google Colab** 中下載並運行這些模型，以觀察 RLHF 對模型行為的影響。

你很可能會發現：

> **Base model 很難讓它做你想要的事情**，因為它的唯一目標只是「完成文字」。

## 在電腦上運行

你可以在自己的電腦上運行這兩種模型。步驟如下：

1. 安裝 **[Jan](https://jan.ai/)**
2. 下載 **Gemma 2B [base model](https://huggingface.co/MaziyarPanahi/gemma-2b-GGUF/blob/main/gemma-2b.Q4_K_M.gguf)** 與 **i[nstruction-following model](https://huggingface.co/MaziyarPanahi/gemma-2b-it-GGUF/blob/main/gemma-2b-it.Q4_K_M.gguf)** 的 GGUF 格式  
   （這個格式包含模型的權重與偏置，以及執行模型所需的 metadata）
3. 在 Jan 中打開 **Hub**
4. 點擊 **Import Model** 並選擇你下載的 GGUF 檔案
5. 回到聊天介面，在右側下拉選單中選擇模型
6. 試著與模型對話，例如：
   - 「What are good things to do in London?」
   - 「What's your job?」

你也可以嘗試在 **model parameters** 中修改 prompt template。

---

## 在 Google Colab 中運行

你可以參考這個 [notebook](https://github.com/google/generative-ai-docs/blob/main/site/en/gemma/docs/core/pytorch_gemma.ipynb)，它展示了如何運行 **instruction-following（it）模型**。你也可以以此為基礎，嘗試運行 **base model**。

如果你有一個同時展示 **兩種模型運行方式** 的 Colab notebook，也可以提供給[課程團隊](https://bluedot.org/contact)，他們可能會把它加入資源列表中。



# 更多安全技術

研究人員正在開發不同的方法，以克服 **RLH(AI)F** 的一些限制。例如：

- **有效擴展回饋（Scaling feedback efficiently）**：我們如何為模型提供高品質且低成本的回饋？
- **監督超越人類能力的 AI（Supervising superhuman AI）**：當模型能力超過人類時，我們該如何評估它們？

如果缺乏可靠的監督，模型可能會發展出一些危險行為，例如 **逢迎（sycophancy）**（只說我們想聽的話）、**欺騙（deception）**（隱藏真正的推理過程），以及 **幻覺（hallucination）**（自信地陳述錯誤資訊）。


# 學習資源（約 25 分鐘）

### [An Approach to Technical AGI Safety and Security](https://deepmindsafetyresearch.medium.com/an-approach-to-technical-agi-safety-and-security-25928819fbc6?utm_source=bluedot-impact)

閱讀**Misalignment**及**Training an aligned model**

DeepMind Safety Research · 2025 · 5 min

### [Can we scale human feedback for complex AI tasks?](https://blog.bluedot.org/p/scalable-oversight-intro/?utm_source=bluedot-impact&_gl=1*p5yqva*_gcl_au*MTczMzM0MjA5OC4xNzczMDcwNjIy)

Adam Jones · 2024 · 10 min


---

### [Recommendations for Technical AI Safety Research Directions](https://blog.bluedot.org/p/scalable-oversight-intro/?utm_source=bluedot-impact&_gl=1*p5yqva*_gcl_au*MTczMzM0MjA5OC4xNzczMDcwNjIy)

閱讀 **Scalable oversight**

Anthropic Alignment Science Team · 2025 · 10 min


# 練習

## 評估一種安全技術

從 **optional resources** 中選擇 **一種技術**，進行更深入的研究。根據你對該技術的理解，請用**簡單的英文（不要使用專業術語）**回答以下問題：

- **Explain step-by-step**：逐步說明這個方法是如何運作來讓 AI 更安全的。 
- **Evaluate its robustness**：評估這個方法的可靠性與有效性。
- **Describe a failure mode**：描述一種可能的失敗情境，一個有動機且能力強的行為者可能如何繞過這個方法。

建議時間：

- **30 分鐘閱讀**
- **30 分鐘寫作**

```



```

# Optional
[What is deliberative alignment?](https://blog.bluedot.org/p/deliberative-alignment?utm_source=bluedot-impact&_gl=1*1hnojt4*_gcl_au*MTczMzM0MjA5OC4xNzczMDcwNjIy)
[Detecting and reducing scheming in AI models](https://openai.com/index/detecting-and-reducing-scheming-in-ai-models/?utm_source=bluedot-impact)

[What is AI debate, and can it make systems safer?](https://blog.bluedot.org/p/what-is-ai-debate-and-can-it-make-systems-safer?utm_source=bluedot-impact&_gl=1*1hnojt4*_gcl_au*MTczMzM0MjA5OC4xNzczMDcwNjIy)

[Empirical Progress on Debate](https://www.youtube.com/watch?v=QzumRZ9NjRw&utm_source=bluedot-impact)

[Debating with More Persuasive LLMs Leads to More Truthful Answers](https://arxiv.org/pdf/2402.06782?utm_source=bluedot-impact)

[On scalable oversight with weak LLMs judging strong LLMs](https://arxiv.org/pdf/2407.04622?utm_source=bluedot-impact)

[What is Weak-to-Strong Generalisation?](https://blog.bluedot.org/p/what-is-weak-to-strong-generalisation?utm_source=bluedot-impact&_gl=1*12zu97z*_gcl_au*MTczMzM0MjA5OC4xNzczMDcwNjIy)

[Weak-to-strong generalization: Eliciting Strong Capabilities With Weak Supervision](https://ar5iv.org/pdf/2312.09390.pdf?utm_source=bluedot-impact)