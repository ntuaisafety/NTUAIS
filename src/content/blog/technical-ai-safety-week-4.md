---
title: "技術性 AI 安全課程：第四週 - AI 是怎麼思考的？"
date: 2026-01-25T22:15:00+08:00
draft: false
summary: "本週課程探討機械式可解釋性（Mechanistic Interpretability）：嘗試逆向工程 AI 模型以理解其內部運作，就像神經科學家研究大腦一樣。"
tags: ["AI Safety", "Course", "Mechanistic Interpretability"]
categories: ["Education"]
showAuthor: false
authors:
  - "zen"
---

> **本文翻譯自 BlueDot Impact [Technical AI Safety](https://bluedot.org/courses/technical-ai-safety) 課程內容。**

**AI 是怎麼思考的？**

我們一直試圖訓練 AI 使其更安全。我們建立了評估來偵測危險。但這些做法多半是經驗性的：嘗試不同技術、觀察哪些有效，再進一步探索那些有前景的方向。

這是處理複雜系統的一種方式。當 RLHF 意外地效果很好時，我們加倍投入並探索各種變體。就像早期醫學，醫生在還不了解為何有效之前，就發現某些療法有效。

**可解釋性**代表另一種互補的做法。它試圖理解 AI（更精確地說：神經網路）為何會以某種方式表現，然後用這份理解來設計更好的訓練與評估技術。

機械式可解釋性研究有兩大「陣營」：

- **基礎科學**：試圖完全逆向工程這些模型——理解每一層、每一個參數。可以想成像是逐神經元繪製人腦地圖。
- **務實派**：聚焦在特定行為。若模型產出有害內容，是哪部分在負責？像是診斷某個症狀，而不是理解整個人類生物學。

## 資源（35 分鐘）

- [**神經網路到底學到了什麼？探索 AI 模型的大腦**](https://www.youtube.com/watch?v=jGCvY4gNnA8&utm_source=bluedot-impact)

    以基礎科學取徑入門、聚焦理解影像模型的可及性介紹。介紹 Olah 等人論文中迴路與特徵（神經網路的建構單元）的概念，以及多義性（每個神經元代表不只一個概念）的概念。

    **Rational Animations · 2024 · 15 分鐘**

- [**機械式可解釋性入門**](https://blog.bluedot.org/p/introduction-to-mechanistic-interpretability?utm_source=bluedot-impact)

    從「迴路」觀點分析神經網路的概覽，以特徵與連接它們的迴路來解釋神經網路行為，並介紹理解模型的一些工具，如稀疏自編碼器與特徵導向。
    更技術性的深入內容見：[Zoom In: An Introduction to Circuits](https://distill.pub/2020/circuits/zoom-in/)

    **Sarah Hastings-Woodhouse · 2024 · 5 分鐘 · 聽文章**

- [**Neel Nanda 談解讀 AI 心智的競賽**](https://80000hours.org/podcast/episodes/neel-nanda-mechanistic-interpretability/?utm_source=bluedot-impact)

    **請閱讀「訪談精要」。**
    這是機械式可解釋性領域現況的概覽。更多關於機械式可解釋性有前景方向的細節，可參考 [Neel Nanda 的部落格](https://www.alignmentforum.org/posts/jP9KDyMkchuv6tHwm/how-to-become-a-mechanistic-interpretability-researcher#Interlude__What_s_New_In_Mechanistic_Interpretability_)。

    **Robert Wiblin · 2025 · 5 分鐘**

- [**對機械式 AI 可解釋性的誤導性追求**](https://ai-frontiers.org/articles/the-misguided-quest-for-mechanistic-ai-interpretability?utm_source=bluedot-impact)

    這篇文章主張，機械式可解釋性（透過將個別神經元對應到行為來理解 AI 的十年追求）從根本上是失敗的，因為神經網路是複雜系統，無數微弱互動產生無法化約成簡單機制的湧現行為。文中以稀疏自編碼器、特徵視覺化等知名技術一再失敗為據，建議我們應在更高抽象層次研究 AI，而非試圖逆向工程每一條迴路，挑戰了關於如何讓 AI 系統更安全的一項核心假設。

    **Dan Hendrycks and Laura Hiscott · 2025 · 10 分鐘**

### 選讀資源

- [**MoSSAIC: 機制之後的 AI 安全**](https://openreview.net/pdf?id=n7WYSJ35FU&utm_source=bluedot-impact)

    **Farr et al. · 2025**

- [**讓我們試著理解 AI 的單義性**](https://www.astralcodexten.com/p/god-help-us-lets-try-to-understand?utm_source=bluedot-impact)

    這篇部落格說明神經網路中疊加（superposition）的挑戰，以及人們如何嘗試用稀疏自編碼器（SAE）解決。這些主題的更技術性深入內容見：
    - [**疊加的玩具模型**](https://transformer-circuits.pub/2022/toy_model/index.html)
    - [**邁向單義性**](https://transformer-circuits.pub/2023/monosemantic-features/index.html)

    **Scott Alexander · 2023 · 25 分鐘**

- [**反對幾乎每一種可解釋性影響理論**](https://www.alignmentforum.org/posts/LNA8mubrByG7SFacm/against-almost-every-theory-of-impact-of-interpretability-1?utm_source=bluedot-impact#What_does_the_end_story_of_interpretability_look_like__That_s_not_clear_at_all_)

    對機械式可解釋性變革理論的深思批評，主張它對提升安全的影響可能不如普遍認為的那麼大。閱讀時可與前述文章對機械式可解釋性的樂觀理由對照。

    **Charbel-Raphael Segerie · 2023 · 20 分鐘**

- [**可解釋性無法可靠地發現具欺騙性的 AI**](https://www.lesswrong.com/posts/PwnadG4BFjaER3MGf/interpretability-will-not-reliably-find-deceptive-ai?utm_source=bluedot-impact)

    Google DeepMind 的機械式可解釋性領銜研究者 Neel Nanda 說明，儘管我們期待，可解釋性技術仍無法可靠地揪出具欺騙性的 AI——主張我們需要多種不完美的防禦，而非依賴單一「銀彈」解法。

    **Neel Nanda · 2025 · 10 分鐘**

- [**AGI 安全中機械式可解釋性的障礙**](https://www.youtube.com/watch?v=wKI9hmaIbpg&utm_source=bluedot-impact)

    Conjecture 執行長說明，將機械式可解釋性用於 AI 安全有兩大障礙：AGI 認知是互動的，需要對環境與認知／學習的模型才能理解；(多數) 機械式可解釋性會帶來能力提升而非監督，因為體制並未建立、也缺乏抵擋使用能力增益的誘因。

    **Connor Leahy · 2023 · 15 分鐘**

---

## 可解釋性的實務

本節你會概覽研究者用來理解模型的一些工具，並看幾個案例研究：我們如何把對模型的理解用在改進訓練技術與評估。

大致上，研究者把這份理解用在：

- **直接干預**（較遠大的目標）：像手術般修改模型：關掉暴力、改道欺騙、放大誠實。
- **間接應用**（當前現實）：用這些洞見改進其他安全技術。理解哪些訓練資料會產生暴力輸出，有助我們更好過濾；看清模型如何隱藏推理，有助我們設計更好的評估。

你會發現實驗很多。工具與技術會隨我們發現什麼、模型如何發展而流行或退流行。

## 資源（1 小時）

- [**探針分類器是什麼？能幫助我們理解 AI 模型內部發生什麼嗎？**](https://blog.bluedot.org/p/what-are-probing-classifiers?utm_source=bluedot-impact)

    **Sarah Hastings-Woodhouse · 2025 · 5 分鐘**

- [**思維鏈可監測性**](https://arxiv.org/pdf/2507.11473?utm_source=bluedot-impact)

    說明思維鏈如何用於理解模型，並論證我們為何應保持其忠實與可理解。

    **Korbak et al. · 2025 · 15 分鐘**

- [**失準的模型生物**](https://www.alignmentforum.org/posts/ChDH335ckdvpxXaXX/model-organisms-of-misalignment-the-case-for-a-new-pillar-of-1?utm_source=bluedot-impact)

    這篇文章介紹以模型生物來理解失準系統如何運作，以及現有安全技術對它們的效果。

    **Hubinger et al. · 2023 · 20 分鐘**

- [**幻覺探針**](https://www.hallucination-probes.com/?utm_source=bluedot-impact)

    示範我們如何用探針等工具的理解來改進模型評估。

    **Obeso et al. · 2025 · 5 分鐘**

- [**審計語言模型的隱藏目標**](https://www.lesswrong.com/posts/wSKPuBfgkkqfTpmWJ/auditing-language-models-for-hidden-objectives?utm_source=bluedot-impact)

    示範我們如何用稀疏自編碼器等可解釋性技術做對齊審計——調查模型是否具有不想要的目標。

    **Marks et al. · 2025 · 15 分鐘**

### 練習

#### 理解一項可解釋性技術

從資源（必讀或選讀）中選**一項**技術深入分析，然後用簡單英文（不要術語！）回答下列問題：

- **目標**：這項技術試圖揭露什麼？
- **機制**：這項技術一步步是怎麼運作的？
- **證據**：這項技術產生了哪些具體發現？
- **應用**：這些發現如何被用來改進訓練或評估？（若有）
- **穩健性**：這項技術的一項關鍵限制或失敗模式是什麼？

*建議閱讀 45 分鐘、撰寫 15 分鐘。*

### 更多選讀資源

- [**ARENA 課程：Transformer 可解釋性**](https://arena-chapter1-transformer-interp.streamlit.app/?utm_source=bluedot-impact)

    ARENA 課程的這部分適合技術背景較強的人。你可能需要先讀 ARENA 較早內容，尤其是 [第 0 章](https://arena-chapter0-fundamentals.streamlit.app/)，以設定環境並理解更多程式碼。這是難度較高的練習，即使對有經驗的 ML 工程師，我們預期也至少要一天。你可以在同梯、[#find-collaborators](https://aisafetyfundamentals.slack.com/archives/C0280PH510U) 或 [#discussion](https://aisafetyfundamentals.slack.com/archives/C025HB1LUE7) Slack 頻道找一起做的夥伴。

    **Callum McDougall · 2024**

- [**擴展單義性：從 Claude 3 Sonnet 擷取可解釋特徵**](https://transformer-circuits.pub/2024/scaling-monosemanticity/?utm_source=bluedot-impact)

    這篇長文探討如何擴展「邁向單義性」一文中的技術，並將其應用於 Claude 3 Sonnet。

    **Adly Templeton and Tom Conerly et al. · 2024**

- [**大型語言模型的生物學**](https://transformer-circuits.pub/2025/attribution-graphs/biology.html?utm_source=bluedot-impact)

    基礎科學取徑的範例。使用*歸因圖*作為工具，部分追蹤模型將特定輸入提示轉成輸出回應時所經的中間步驟鏈。

    **Lindsey et al. · 2025**

- [**思維錨點：哪些 LLM 推理步驟重要？**](https://arxiv.org/pdf/2506.19143?utm_source=bluedot-impact)

    基礎科學取徑的範例。此研究發現 LLM 推理中的某些句子（稱為思維錨點）對輸出的影響特別大。

    **Bogdan et al. · 2025**
