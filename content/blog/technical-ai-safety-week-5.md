---
title: "技術性 AI 安全課程：第五週 - 假設傷害會發生"
date: 2026-02-01T22:15:00+08:00
draft: false
summary: "本週課程探討 AI 系統可能造成的災難性風險（如幫助惡意行為者或意外失控），以及我們如何透過威脅建模與防禦策略來降低這些風險。"
tags: ["AI Safety", "Course", "Risk Assessment", "AI Control"]
categories: ["Education"]
author: "Yu-Chen Tsai (Zen)"
showAuthor: false
authors:
  - "zen"
---

**假設傷害會發生**

到目前為止，我們試過訓練模型更安全、建立評估來偵測危險，以及理解 AI 如何思考。

但每種技術都有失敗模式。模型學會欺騙評估。危險能力意外湧現。惡意行為者找到新越獄方式。邊界案例漏網。

本節談的是最後的技術防線。**在我們已經訓練出一個 AI 之後，如何把它的傷害降到最低？**

## **資源（50 分鐘）**

- [**危險地使用 AI，但安全地？**](https://www.youtube.com/watch?v=0pgEMWy70Qk&utm_source=bluedot-impact)

    這支易懂的影片介紹 AI 控制——即使模型可能刻意欺騙，也能降低先進 AI 系統風險的設定。

    **Robert Miles · 2024 · 30 分鐘**

- [**AI 控制入門**](https://blog.bluedot.org/p/ai-control?utm_source=bluedot-impact)

    本資源概覽 AI 控制，包括受控／非受控監測、危險行動需經人類批准、任務分解等技術。

    **Sarah Hastings-Woodhouse · 2025 · 5 分鐘 · 聽文章**

- [**AI 安全中的輸入／輸出過濾是什麼？**](https://blog.bluedot.org/p/input-output-filtering?utm_source=bluedot-impact)

    這篇文章說明輸入／輸出過濾如何攔截漏過訓練防護的有害內容，Anthropic 將越獄率從 86% 降到 5% 以下，但決心強的攻擊者仍可能突破即使最好的防禦。

    **Sarah Hastings-Woodhouse · 2025 · 5 分鐘**

- [**憲法式分類器：防禦通用越獄**](https://www.anthropic.com/news/constitutional-classifiers?utm_source=bluedot-impact)

    這是輸入／輸出過濾分類器的一種，使用與憲法 AI 類似的技術。這類分類器在推論時執行，有時因使用算力而成本較高。
    若想進一步了解此方法的成本效益，見[此處](https://alignment.anthropic.com/2025/cheap-monitors/)。

    **Sharma et al. · 2025 · 10 分鐘**

**選讀資源**

- [**Buck Shlegeris 談控制想奪權的 AI——這樣我們還是能用它**](https://80000hours.org/podcast/episodes/buck-shlegeris-ai-control-scheming/?utm_source=bluedot-impact)

    **Robert Wiblin · 2025**

---

## **建立防禦**

現在要針對真實威脅，對我們介紹過的防禦進行壓力測試。

**在本節中，你將選擇一條威脅路徑「選項」進一步調查。** 然後你會建構一條詳細的「殺傷鏈」——威脅如何一步步展開的拆解。你會標出 AI 需要哪些具體能力、對應我們的防禦，並找出關鍵缺口在哪裡。

以下是我們可能擔心的行為者類型，就他們有能力及／或動機用 AI 對人類造成傷害而言。

- 「失準的 AI」，即行為違背人類利益的 AI 系統。
- 有權力的人類行為者，例如企業執行長、軍事與政治領袖。
- 惡意國家，例如北韓。
- 恐怖團體與末日教派。

他們可能如何造成災難性傷害？

- [**權力集中**](https://bluedot.org/courses/agi-strategy/3/3)：可能用資訊戰與常規軍事力量推翻既有權力結構，例如民主政府。
- [**關鍵基礎設施崩潰**](https://bluedot.org/courses/agi-strategy/3/6)：可能對關鍵基礎設施發動網路攻擊，包括水、能源與糧食系統。
- [**災難性疫情**](https://bluedot.org/courses/agi-strategy/3/5)：可能設計、製造並釋放比 SARS-CoV-2 更嚴重的病毒到人群中，導致全球疫情。
- [**漸進式失權**](https://bluedot.org/courses/agi-strategy/3/4)：或所有行為者的預設誘因導致壞結果，即使沒有任何惡意。

## **資源（50 分鐘）**

- [**AI 助長的政變：小團體如何用 AI 奪權**](https://www.forethought.org/research/ai-enabled-coups-how-a-small-group-could-use-ai-to-seize-power?utm_source=bluedot-impact)

    請閱讀第 4 節「AI 助長政變的具體路徑」。

    **Tom Davidson, Lukas Finnveden, Rose Hadshar · 2025 · 15 分鐘**

- [**漸進式失權摘要**](https://blog.bluedot.org/p/gradual-disempowerment-summary?utm_source=bluedot-impact)

    **Aniket Chakravorty, Dewi Erwan · 2025 · 15 分鐘**

- [**AI 如何助長災難性疫情**](https://blog.bluedot.org/p/how-ai-could-enable-catastrophic-pandemics?utm_source=bluedot-impact)

    **Will Saunter · 2025 · 15 分鐘**

- [**AI 如何助長關鍵基礎設施崩潰**](https://blog.bluedot.org/p/how-ai-could-enable-critical-infrastructure-collapse?utm_source=bluedot-impact)

    **Li-Lian Ang · 2025 · 5 分鐘**

### **練習**

**聚焦單一威脅**

根據你目前的理解，你認為哪條威脅路徑最值得擔心？

然後用以下模板寫一句「威脅情境」：

> ***[行為者] 具備 [能力] 與 [動機]，透過 [攻擊路徑] 攻擊 [資產]，以達成 [目標]。***

---

## **打斷殺傷鏈**

## **練習**

**逐步拆解**

**殺傷鏈**把「威脅情境」拆成執行階段。它追蹤攻擊者實際上會如何一步步進行，例如透過偵察、投遞、利用、持久化、達成目標。

你的情境描述的是*可能發生什麼*，殺傷鏈描述的則是*實際上會如何展開*。這樣我們才能找出防禦者可以介入的 choke point。

根據你的情境，使用[此模板](https://bluedot-impact.notion.site/kill-chain?source=copy_link)完成本練習。

**造成傷害所需的能力**

列出你的威脅需要的 3–5 項具體技術能力或行為。具體說明 AI 需要能做到什麼。

例如：自我複製、跨實例的目標持久、長期規劃與協調、資源取得（算力、金錢）、生物武器知識／合成

**建立防禦**

哪一項能力／行為最重要？若我們只阻止這一項，整個威脅是否就會瓦解？

回顧你在課程中所學，判斷我們可以如何：

- 在訓練時防止模型獲得這項能力
- 偵測這項能力／行為
- 約束模型，使其無法用這項能力採取危險行動
