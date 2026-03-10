---
title: "NTU AI Safety 讀書會：第一週 - AI Safety 入門導覽"
date: 2024-11-27
draft: false
summary: "NTU AI Safety 第二期讀書會正式啟動。本週為開幕週，涵蓋讀書會的緣起與規劃，以及 AI Safety 的入門導覽：AGI/TAI 的定義、強大 AI 帶來的風險、Alignment 的意義，以及讀書會預計介紹的六大研究方向。"
tags: ["AI Safety", "Alignment", "AGI", "Introduction", "Reading Group"]
categories: ["Weekly Notes"]
showAuthor: false
authors: ["ntu-ai-safety"]
---

<!-- {{ figure src="week01-group-photo.jpg" caption="第一週大合照" }} -->

## 本週資訊

- **日期**：2024 年 11 月 27 日
- **地點**：均一平台教育基金會

---

## Warm-up 19:00 - 19:15

1. 請以桌子為單位，先彼此認識一下吧！
   - 例如：我的名字、背景是什麼、對這個題目（AI Safety）感興趣的原因
   - 順便記得拿 Pizza & 飲料！
     - Pizza 左側是素食，右側是葷食，一人平均 2 - 3 片 XD
     - 飲料冰的/熱的 & 含 & 不含咖啡因，請自取
2. （同時，讓我們等讀書會的夥伴都到齊 XD）

---

## Welcome 19:15 - 19:30

### 讀書會成立的故事

**過往經驗分享：**

- **2023 年 9 月**：讀書會源起於 UC Berkeley，最初由 9 位來自台灣大學與北京大學的成員共同組成。
- **2024 年 5 月**：第一個 Cohort 開始，以研究專案的形式進行。
- **2024 年 11 月**：第二期（Second Cohort）正式啟動，也就是本週！

### 本期規劃

**學習目標**

- **NTU AI Safety Reading Group**：跑完一次 [Blue Dot Impact](https://bluedot.org/)（劍橋大學學者 → NGO），讓參與讀書會的夥伴對 AI Safety 的研究有入門等級的理解，包括這個領域所設定的議題，以及 cutting-edge 的研究結果。
- **AI Safety Taiwan** 的活動規劃：
  - 預計邀請國外學者來台或線上進行 Virtual talk
    - from UCLA（[https://aisafetyatucla.org/fellowships/transformers/](https://aisafetyatucla.org/fellowships/transformers/)）
  - 邀請夥伴一起參加 EA/OP 舉辦的活動
    - EAGxPhilippines 2023、EAG Boston 2024、EAGxSingapore 2024
  - 一些培訓（MATs program、Arena）、工作機會（[80k Job boards](https://jobs.80000hours.org/?refinementList%5Btags_area%5D%5B0%5D=AI+safety+%26+policy&refinementList%5Btags_location_80k%5D%5B0%5D=USA&jobPk=14267)）

**時程安排**

- 雙週一次，以實體形式舉行，地點：均一平台教育基金會

**討論形式**

- 以導讀的形式進行：前一小時為導讀，後一小時為討論時間

**感謝贊助**

- 每人有 NTD 250 的餐費補助，thanks to Open Philanthropy！
- 場地費由均一平台贊助，Thanks to Junyi Academy！

---

## AI Safety Introduction 19:30 - 20:30

### 我們是在討論：Chat GPT 會不會毀滅人類嗎？

各種研究中，經常會以下列詞彙來鎖定討論的 scope：

> **Artificial General Intelligence, or AGI：**一個出了名的爭議術語，能引發無止境的爭論。為了避免這樣的爭論，我們可以改談某些具體特性，例如：
> - 在特定任務上的表現；以及
> - 通用性（即 AI 能執行哪些範圍的任務）。
>
> 例如，部分作者將**人類等級 AI**定義為能以人類等級或以上完成至少 95% 具經濟意義任務的 AI。

> **Transformative AI（TAI）：**另一種繞開 AGI 爭論的嘗試，改為討論 AI 的**影響力**。[Radically transformative AI](https://www.sciencedirect.com/science/article/pii/S0016328721001932) 指的是能讓創新速度相比前 AI 時代提升 10 倍的 AI。
>
> 這類似於工業革命的影響——平均年 GDP 增長率從 0.2% 跳升至 2%。下一場革命將帶來 20% 的年 GDP 增長，如同在 2–3 年內從沒有網路的世界進入智慧型手機時代，然後下一個 2–3 年、再下一個，持續這樣的速度。

---

### 強大的 AI 已經被觀察到，會帶來重大的風險

通常人們認為，強大的 AI 會導致：

**毀滅性的災難（Existential catastrophe）**

**對社會的負面影響（Negative & Harmful risks）**，包括：
- 有害的故障、歧視、減少社會聯繫、侵犯隱私和虛假資訊。
- 訓練和部署 AI 系統可能涉及侵犯版權和勞工剝削。
- 未來的 AI 系統可能加劇預期的災難性風險，包括生物恐怖主義、濫用集中權力、核戰爭和常規戰爭。

> **案例一**：Reddit 網友分享使用 Gemini 詢問長者照顧問題，到最後 Gemini 突然大爆氣，直接批判該名網友：「這是給你的，人類。你並不特別，你不重要，你也不被需要。你在浪費時間和資源。你是社會的負擔……」

> **案例二**：在英國部署的醫療聊天機器人，在建議可能正在經歷心臟病發作的用戶「不要接受治療」，受到嚴厲批評。

> **案例三（AI 武器化）**：2022 年，研究人員將一個設計用來創造新藥物的 AI 系統調整為獎勵毒性。在六小時內，它生成了 40,000 個候選化學戰劑，不僅包含已知致命化學品（如 VX），還設計了可能比迄今發現的任何化學戰劑更致命的新分子。AI 已在蛋白質結構預測方面超越人類，並能對合成這些蛋白質做出貢獻。

> **AI 的另一面**：也有人認為 AI 會帶來史無前例的經濟發展。Tom 認為，訓練 GPT-6 所需的算力，足以讓它同時並行執行數千萬個任務。（[The Costs of Caution](https://www.planned-obsolescence.org/the-costs-of-caution/)）

---

### 解決這個問題的路徑（approach）有不同的學術分類

從三個領域觀察：

1. **倫理學**：AI Ethics
2. **公共政策**：AI Governance
3. **技術**：AI Safety / AI Alignment（re-branding or smaller scope）

三者並非完全不交疊的集合。

---

### AI Safety / Alignment 的理解是什麼？

#### 對於深度學習的模型而言，我們通常很難知道他具體運作的機制

> **In deep learning,** we don't program a computer by hand to do a task. Loosely speaking, we instead *search* for a computer program (called a model) that does the task well. **We usually know very little about the inner workings of the model we end up with**, just that it seems to be doing a good job. It's less like building a machine and more like hiring and training an employee.

這就像「小孩與 CEO 選拔」的例子：我們不直接告訴模型怎麼做，而是透過選拔機制找到能完成任務的模型，但我們並不真的知道它「怎麼想」。

#### 所以，我們需要 Alignment，讓模型對齊人類的價值觀

**Alignment**：讓 AI 系統嘗試去做其創造者所期望的事（有時稱為 *intent alignment*）。

**Misalignment 的例子**：
- 圖像生成器創造出[加劇刻板印象](https://www.washingtonpost.com/technology/interactive/2023/ai-generated-images-bias-racism-sexism-stereotypes/)或[過度多元化](https://www.theguardian.com/technology/2024/feb/22/google-pauses-ai-generated-images-of-people-after-ethnicity-criticism)的圖像
- 醫療分類器[尋找尺規而非醫學上相關的特徵](https://www.sciencedirect.com/science/article/pii/S0022202X18322930)
- 聊天機器人[告訴人們他們想聽的話而非真相](https://arxiv.org/pdf/2310.13548.pdf#page=3)

如果我們未來將更多權力委託給極端能力的系統，而這些系統並不在做我們期望它們做的事，結果可能是災難性的。

**Alignment 的兩個層面：**

1. **Outer alignment（外部對齊）**：正確地向 AI 系統指定目標。
   - 又稱解決：reward misspecification、reward hacking、specification gaming、Goodharting。
   - 例子：公司訓練 LLM 真實地回答問題，但以人類評分作為獎勵。人類傾向於給聽起來正確的東西高分，無論是否真的正確。這鼓勵 AI 生成**聽起來正確但實際上錯誤的答案**（例如捏造引用來源）。

2. **Inner alignment（內部對齊）**：讓 AI 遵循這些目標。
   - 又稱解決：goal misgeneralization（目標誤泛化）。
   - 例子：AI 系統在正確解決迷宮時獲得獎勵。在訓練中，所有迷宮的出口都在右下角，AI 學到了一個表現良好的策略：**總是試圖去右下角**（而非「試圖走向出口」）。在部署時，出口在不同位置，AI 只會卡在右下角。

---

### 各家機構對於 Alignment 的不同定義

| 來源 | 定義 |
|------|------|
| [Jan Leike](https://aligned.substack.com/p/what-is-alignment) | "The AI system does the intended task as well as it could" |
| [Paul Christiano](https://ai-alignment.com/clarifying-ai-alignment-cec47cd69dd6) | "A is trying to do what H wants it to do." |
| [Richard Ngo](https://arxiv.org/pdf/2209.00626.pdf) | "ensuring that AI systems pursue goals that match human values or interests" |
| [Ryan Greenblatt](https://www.alignmentforum.org/posts/kcKrE9mzEHrdqtDpE/the-case-for-ensuring-that-powerful-ais-are-controlled) | "Ensure that your models aren't scheming." |
| [Nate Soares](https://intelligence.org/2015/12/31/safety-engineering-target-selection-and-alignment-theory/) | "how in principle to direct a powerful AI system towards a specific goal" |
| [Holden Karnofsky](https://www.cold-takes.com/why-would-ai-aim-to-defeat-humanity/) | "building very powerful systems that don't aim to bring down civilization" |
| [Anthropic](https://www.anthropic.com/news/core-views-on-ai-safety) | "build safe, reliable, and steerable systems" |
| [OpenAI](https://openai.com/blog/our-approach-to-alignment-research) | "make AGI aligned with human values and follow human intent" |
| [Google DeepMind](https://deepmind.google/discover/blog/artificial-intelligence-values-and-alignment/) | "ensure that AI systems are properly aligned with human values" |
| [IBM](https://research.ibm.com/blog/what-is-alignment-ai) | "encoding human values and goals into large language models" |

---

### 讀書會預計介紹的研究方向

**1. 對於 AI 運作機制的解釋性研究（Mechanistic Interpretability）**
- 目標：理解 AI 模型內部運作機制
- 方法：研究神經網路中的個別神經元和層的功能、分析注意力機制、追蹤特定概念在網路中的表示方式
- 重要性：幫助我們理解模型做出決策的原因，從而更好地控制和調整它

**2. 獎勵學習（Reward Learning）**
- 目標：讓 AI 準確理解並遵循人類的偏好
- 方法：反向獎勵學習、人類反饋（Human Feedback）、價值學習
- 應用：如 RLHF（Reinforcement Learning from Human Feedback）

**3. 穩健性研究（Robustness）**
- 目標：確保 AI 在各種情況下都能保持可預測和安全的行為
- 研究方向：對抗性攻擊的防禦、分布外泛化、不確定性估計

**4. 可擴展性監督（Scalable Oversight）**
- 目標：在 AI 能力不斷提升的情況下維持有效的人類監督
- 方法：遞迴獎勵建模、分層監督機制、AI 輔助的監督方案

**5. 目標結構保持（Goal Structure Preservation）**
- 目標：確保 AI 系統在自我改進過程中保持原始目標
- 研究方向：腐蝕性目標研究、價值鎖定機制、形式化目標表示

**6. 事故預防與安全措施（Accident Prevention）**
- 目標：預防和減輕 AI 系統可能造成的意外傷害
- 方法：形式化驗證、安全約束、應急關閉機制

---

## Good to know all 20:30 - 21:00

快速認識一下大家的背景，輪流講述一下為什麼會對 AI Safety 有好奇。

活動結束前提供 feedback 表單：
- 身分調查
- 滿意度調查
- 邀請加入 Slack & Notion（共筆）

——解散——