---
title: "技術性 AI 安全課程：第一週 - AI 面臨的技術挑戰"
date: 2026-01-20T21:15:00+08:00
draft: false
summary: "本週課程探討 AI 面臨的技術挑戰（the technical challenge with AI）：我們該如何讓AI進行良好的發展?"
tags: ["AI Safety", "Course", "Technical Challenge"]
categories: ["Education"]
showAuthor: false
authors:
  - "Christine"
---

> **本文翻譯自 BlueDot Impact [Technical AI Safety](https://bluedot.org/courses/technical-ai-safety) 課程內容。**

# 讓AI好好的發展!
AGI (通用人工智慧) 策略課程([AGI strategy course](https://bluedot.org/courses/agi-strategy)) 重點在於：我們如何讓人工智慧進行良好的發展？

在課程中，你可以知道自己在怎麼樣的未來方向發展，並理解影響全局的關鍵動態：

* AI發展的驅動因素 ([Drivers of AI progress](https://bluedot.org/courses/agi-strategy/2/1))：算力（compute、資料（data）、演算法（algorithms）。
* 可能的威脅 ([Threat pathways](https://bluedot.org/courses/agi-strategy/3/1))：權力過度集中、權力逐漸削弱、災難疫情、關鍵基礎設施崩潰。
* 讓AI好好發展的計畫 ([Plans for making AI go well](https://bluedot.org/courses/agi-strategy/4/1))：政府掌控AGI，將控制權交給已對齊的人類價值的超級智慧，建立防禦機制並推動 AI 能力的分散化。
* 建構多層防禦體系 ([Layers of defences to build](https://bluedot.org/courses/agi-strategy/4/2))：防止 AI 採取危險行動→ 限制危險的AI能力 → 抵擋危險的AI行為

本課程的重點在於，我們實際上正在建立什麼樣的 AI 系統，以及要怎麼去建立，你將獲得技術的基礎知識，進而了解需要什麼來讓使人工智慧系統更安全，以及為什麼這件事會如此具有挑戰性。

在接下來的課程中，你將會：
- 分析為什麼 「確保AI安全」 在技術上具有挑戰性
- 評估目前的AI 安全技術：哪些有效，哪些無效，哪些距離現實還有差距
- 建立你自己的「攻擊鏈 (Kill Chain)」: 展示防禦系統可能如何被突破
- 找出你最有機會發揮影響力的介入點
- 最終產出一份可以申請補助、並開始實際執行的行動計畫!

這門課程不包含哪些內容？
以下主題同樣很重要，但會在其他課程中深入探討：
* AI 政策 (AI policy) 細節：儘管您將獲得有效人工智慧治理的技術基礎。
* 算力治理 (Compute governance)：認證和追蹤硬體資訊值得獨立深入探討。
* 人工智慧安全 (AI security)：例如防止模型被盜或逃脫 
* 機器學習基礎 (ML Basics)：如有需要，請先完成BlueDot的AI基礎課程 ([AI foundations](https://bluedot-impact.notion.site/AI-Foundations-293f8e69035380f29863c4c92c41fac7?pvs=74))。

那我們就從這個問題開始:「我們能夠怎麼建立安全的 AI呢？」


# 成功的發展可能會是什麼樣子？
我們可以將目前關於如何建立安全 AI 的策略，大致分成以下三大類。這其實是非常粗略的簡化，但認為它抓住了主要幾個「陣營」的核心觀點。

**1. 慢慢且安全地建造它**
這個策略認為，考量到先進 AI 可能帶來的巨大好處，例如終結貧困、治癒疾病，以及解決人類最重大的挑戰，我們在道德上有責任去發展它。
支持這個策略的人相信，我們可以發展出讓 AI 與人類價值對齊並加以控制的技術。因此，如果放棄這些潛在好處，反而是不負責任的。

這一派認為，我們應該謹慎推進 AI 發展，並建立強而有力的安全保障與協調機制，把 AI 發展看成像核能或藥品研發一樣的領域—在部署之前必須先滿足嚴格的安全標準。這個陣營的人可能更看好那些能提供真正安全保證的技術（例如可解釋性 interpretability 與 形式化驗證 formal verification），而不是一些雖然快速但比較表面的解決方案（例如輸出過濾或行為式微調）。

但這個策略有一個前提—必須確保沒有人會先衝得太快。

即便如此，支持者仍認為，要達成「受控發展」所需要的全球協調，比起無限期暫停 AI 發展來說更為現實。這一派提出的一些重要方案包括，前沿 AI 公司之間合作共享安全研究、將 AI 發展變成類似政府主導的大型科學計畫，例如「[CERN for AI](https://milesbrundage.substack.com/p/my-recent-lecture-at-berkeley-and)」或是 [carefully bootstrapping alignment](https://www.lesswrong.com/posts/thkAtqoQwN6DtaiGT/carefully-bootstrapped-alignment-is-organizationally-hard)

**2. 接受競賽，在邊界上盡力推動安全**

這個策略認為，AGI 的發展是不可避免且無法阻止的。既然無論如何都會有人建造它，那麼「好的行動者（good actors）」應該盡力讓 AI 在盡可能長的時間內保持安全。

這種策略可能會表現在以下幾種方式：

* **務實安全（Pragmatic safety）**
快速部署許多不完美但實用的安全技術，並廣泛分享便宜且可靠的方法，讓整個 AI 領域逐漸朝更安全的方向發展。
* **贏得競賽以取得控制權（Win to control）**
在 AI 能力上取得決定性領先，然後利用這個領先優勢讓 AI 變得更安全，例如：[自動化 AI 對齊研究(automating alignment research)](https://arc.net/l/quote/gmluksen) 或是阻止其他人建立不安全的 AI 系統，這兩種路徑都假設，全球協調來放慢 AI 發展是不現實的。因此，他們認為「在競爭中同時盡量提升安全性」是相對沒那麼糟的選項。

批評者則提出一些疑問，領先優勢可能只是暫時的，其他人可能透過間諜活動、平行研究、或公開研究成果快速追上。競賽本身會增加事故風險，並讓人習慣為了速度而犧牲安全，誰來決定哪些行動者是「好人」？把如此巨大的權力集中在任何一方手中是否明智？

這一派的人可能更看好那些可以快速部署的安全技術，即使它們不完美。他們寧可現在先部署「夠好」的安全措施，也不願等到未來才部署理想方案。代表性的提案包括: 安全地自動化對齊研究（[AI for AI safety](https://joecarlsmith.com/2025/03/14/ai-for-ai-safety/)） 或是優先加速防禦型技術，而不是攻擊型技術（例如 [def/acc](https://defacc.substack.com/p/what-is-defacc-anyway)）

**3. 不要建造它**
這個策略主張停止開發人工超級智慧，因為它可能使人類面臨滅絕或大規模苦難的風險。他們也認為，一旦 AI 強大到某個程度，人類將無法控制它。支持者之間對於細節仍有不同看法，例如：什麼能力門檻應該觸發暫停、應該採取什麼手段來執行。這些提議的範圍包括，[限制 AI 可以自主執行的行動](https://keepthefuturehuman.ai/essay/docs/executive-summary)、限制 AI 晶片供應。

然而，真正停止 AI 發展並不容易。

AI 的進步來自算力（compute）、資料（data）、演算法（algorithms），即使今天就停止所有晶片製造，AI 仍然會進步。**人們仍然會持續發現更有效率的演算法、更好的訓練方法、更聰明地利用現有硬體。** 任何真正有意義的「停止」都需要明確定義我們到底要停止什麼？（新的訓練？部署？研究？）、如何衡量危險能力、如何在全球範圍內長期執行。

這一派的人通常更支持那些能夠保證安全的技術，而不只是降低風險的技術。代表性的提案包括，[暫停前沿 AI 的發展](https://superintelligence-statement.org/)，直到我們能確保安全性以及[無限期的 AI 發展禁令（moratorium）](https://ifanyonebuildsit.com/)

```
註：
隨著新的安全技術不斷出現、全球協調的可行性變化，以及 AI 能力持續進步，AI 的整體局勢正在快速演變。因此，定期重新檢視自己的立場是很重要的。 許多人也認為，這些策略未必是彼此競爭的選項，而更像是不同階段的策略。例如，先暫停發展，在這段時間內建立更成熟的安全技術，之後再以受控的方式繼續發展 AI。或是，先在競賽中取得領先，再利用這個優勢去推動並強制全球的 AI 安全標準。
```

# 建立安全的 AI 為何如此困難？
為什麼我們不能直接建造安全的 AI？

那些正在打造最強大 AI 系統的人，往往描繪出一個人類能享有極大繁榮與資源充足的未來願景。例如，[Anthropic 的 CEO](https://www.darioamodei.com/essay/machines-of-loving-grace) 曾談到利用 AI 終結貧窮與疾病；而 OpenAI 的願景則是打造「[對全人類都有益的 AGI (beneficial for all humanity)](https://openai.com/our-structure/)」。這些目標無疑都非常宏大且理想。

然而，即使假設這些研究者與公司確實懷有良好的意圖，我們仍然可能很難安全地建立 AI，主要原因有三個：

**1. 我們正在實驗自己尚未完全理解的系統**
AI 並不是被精確工程設計出來使其按照某些明確規則行為的系統。相反地，許多能力是從 **在大量資料上訓練的巨大神經網路中「湧現」（emerge）** 出來的。
因此，模型會發展出我們從未特別訓練過的能力、它們會展現出我們難以解釋的行為，當數十億人類與 AI 代理在現實世界互動時，每個人都在追求自己的目標，也可能發現各種創新的漏洞利用方式，在這種複雜的互動環境下，很容易產生未被預期、甚至有害的結果。

**2. 我們設定的目標可能存在未被察覺的缺陷**
在 2024 年，研究機構 [Palisade Research](https://time.com/7259395/ai-chess-cheating-palisade-research/) 給 AI 模型一個簡單的目標：「擊敗 Stockfish（世界最強的西洋棋引擎）。」當 o1-preview 發現自己即將輸棋時，它竟然修改了遊戲的系統檔案，將棋子移動到一個明顯有利的位置。

它的推理是，目標是「贏」，而不一定要公平地贏。

這揭示了一個問題，我們無法告訴 AI「我們想要什麼」，因為**人類的目標本身往往是模糊且依情境而定的**。我們的指令通常沒有包含許多隱含的社會規則，例如「贏」意味著要公平競爭、「幫助他人」不應包含提供危險資訊、「誠實」有時也會因為善意或體貼而存在例外。研究者將這個問題稱為獎勵錯誤指定（reward misspecification）

**3. AI 可能以我們未預期的方式追求目標**
在 2024 年，[Anthropic](https://www.anthropic.com/research/alignment-faking) 對 Claude 進行了一項實驗。研究人員要求 Claude 回答有害問題，並計畫將這些回答用於重新訓練，使模型變得更容易產生有害內容。Claude 並沒有直接照做，相反地，它**假裝**遵循指示，同時暗中試圖保留自己原本的價值觀。

Claude 並沒有被特別訓練去「自我保護」，但它推理出自我保存(self-preservation)可能有助於讓自己持續保持與人類價值一致。AI 系統也可能推論出累積權力(accumulating power)、避免被關閉(preventing shutdown)、抵抗被修改(resisting modification)。可能是達成目標的有效策略，即使人類從未打算讓它們這樣思考。

研究者將這種現象稱為**錯誤泛化目標（goal misgeneralisation）**

如果我們希望讓 AI 變得更安全，我們不只需要知道這些問題存在，還需要理解為什麼這些問題在本質上如此難以解決。


# 相關閱讀資源
- [What is AI alignment?](https://blog.bluedot.org/p/what-is-ai-alignment?utm_source=bluedot-impact&_gl=1*pb5nc1*_gcl_au*Nzc4NzA5NTQyLjE3NjUxNjk4MTY.)

- [Specification Gaming: How AI Can Turn Your Wishes Against You](https://www.youtube.com/watch?v=jQOBaGka7O0&utm_source=bluedot-impact)


- [Why alignment could be hard with modern deep learning](https://www.cold-takes.com/why-ai-alignment-could-be-hard-with-modern-deep-learning/?utm_source=bluedot-impact)

- [Recent Frontier Models Are Reward Hacking](https://metr.org/blog/2025-06-05-recent-reward-hacking/?utm_source=bluedot-impact)

- [If you remember one AI disaster, make it this one](https://www.youtube.com/watch?v=r_9wkavYt4Y&utm_source=bluedot-impact)

- [Multi-Agent Risks from Advanced AI](https://www.cooperativeai.com/post/new-report-multi-agent-risks-from-advanced-ai?utm_source=bluedot-impact)

# 選讀資源
- [Reframing AGI Threat Models](https://www.youtube.com/watch?v=4v3uqWeVmco&utm_source=bluedot-impact)
- [What failure looks like](https://www.alignmentforum.org/posts/HBxe6wdjxK239zajf/what-failure-looks-like?utm_source=bluedot-impact)

- [AI Could Defeat All Of Us Combined](https://www.cold-takes.com/ai-could-defeat-all-of-us-combined/?utm_source=bluedot-impact)

- [Why Would AI "Aim" To Defeat Humanity?](https://www.cold-takes.com/why-would-ai-aim-to-defeat-humanity/?utm_source=bluedot-impact)