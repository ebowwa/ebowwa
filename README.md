<div align="center">

`📱 Apple Platforms` • `🤖 Edge AI` • `🔧 Connected Hardware` • `⚙️ Developer Infrastructure`

```
███████╗██████╗  ██████╗ ██╗    ██╗██╗    ██╗ █████╗     ██╗      █████╗ ██████╗ ███████╗
██╔════╝██╔══██╗██╔═══██╗██║    ██║██║    ██║██╔══██╗    ██║     ██╔══██╗██╔══██╗██╔════╝
█████╗  ██████╔╝██║   ██║██║ █╗ ██║██║ █╗ ██║███████║    ██║     ███████║██████╔╝███████╗
██╔══╝  ██╔══██╗██║   ██║██║███╗██║██║███╗██║██╔══██║    ██║     ██╔══██║██╔══██╗╚════██║
███████╗██████╔╝╚██████╔╝╚███╔███╔╝╚███╔███╔╝██║  ██║    ███████╗██║  ██║██████╔╝███████║
╚══════╝╚═════╝  ╚═════╝  ╚══╝╚══╝  ╚══╝╚══╝ ╚═╝  ╚═╝    ╚══════╝╚═╝  ╚═╝╚═════╝ ╚══════╝
```

**Applied systems engineer building products across native software, AI models, hardware, and infrastructure.**

[![GitHub followers](https://img.shields.io/github/followers/ebowwa?label=Follow&style=social)](https://github.com/ebowwa)
[![Personal Site](https://img.shields.io/badge/🌐_ebowwa.xyz-4285F4?style=flat-square)](https://ebowwa.xyz)
[![App Store](https://img.shields.io/badge/📱_App_Store-Published_Apps-0D96F6?style=flat-square)](https://apps.apple.com/developer/id1745844476)
[![Hugging Face](https://img.shields.io/badge/🤗_Hugging_Face-FFD21E?style=flat-square)](https://huggingface.co/ebowwa)
[![Ollama](https://img.shields.io/badge/🦙_Ollama-000000?style=flat-square)](https://ollama.com/ebowwa)
[![X](https://img.shields.io/badge/X-@simulationapi-000000?style=flat-square&logo=x&logoColor=white)](https://x.com/simulationapi)

</div>

I build systems that work outside the demo — native apps, on-device inference, camera and BLE hardware, model-training pipelines, and the services and infrastructure that connect them. Most projects start with a product or hardware capability and grow every layer needed to ship it for real.

## Current focus

- **On-device and edge AI:** quantization, local model runtimes, perception, tracking, and multimodal systems
- **Apple platforms:** Swift/SwiftUI products with the macOS automation, signing, and release engineering behind them
- **Wearables and alternative interfaces:** smart glasses, BLE, camera and audio relays, silent speech
- **Agent infrastructure:** composable tools, MCP servers, evaluation, orchestration, and machine-to-machine workflows

## Selected public work

| Area | Projects |
|---|---|
| Camera-enabled interfaces | [Transcription — Open-Alterego](https://github.com/ebowwa/Open-Alterego), [Robotic reasoning — cosmos-framework](https://github.com/ebowwa/cosmos-framework), [Human vitals — rPPG](https://github.com/ebowwa/rppg-vitalsigns) |
| Connected hardware | [BluetoothHID](https://github.com/ebowwa/BluetoothHID), [ESP32-S3 Camera Firmware](https://github.com/ebowwa/esp32s3-cam-firmware), [Pi BLE Keyboard](https://github.com/ebowwa/pi-ble-keyboard) |
| Developer and AI tooling | [xcode-mcp](https://github.com/ebowwa/xcode-mcp), [structured-prompts](https://github.com/ebowwa/structured-prompts) |

The larger product systems and internal platform monorepos are private. Older experiments get folded into archives, so what stays public is the short list above — the work that best represents how I build.

## Lab notebooks

Long-form engineering notebooks on gist — one debugging war per entry.

- [The lab notebooks — the index of indexes](https://gist.github.com/ebowwa/4a61f3c4035dd540c58615c96f2812b3) — master index of all five series, plus the ecosystem census of which repos feed which series.
- [Series 1 — A7 iOS 12.5.x](https://gist.github.com/ebowwa/9bfe970058959b09b8da675ad71e854f) — jailbreaking, infra, compute, kernel RE, and agents on a junked iPad mini 2; one device, five threads.
- [Series 2 — The ANE lab](https://gist.github.com/ebowwa/565142c77ffda0d3ae96d0175281d038) — the Apple Neural Engine: the engine, the lab, non-AI workloads, and models on the engine.
- [Series 3 — Developer-space patterns](https://gist.github.com/ebowwa/f1306779962c342bfbfd49caba03a576) — ordinal-layer architecture, the measurement-methods gauntlet, the eval-cost ledger, and reading macOS metrics cheaply.
- [Series 4 — Agents: the mind loop](https://gist.github.com/ebowwa/d279afaf219d35765399d876c23a184e) — the resident agent's mortality architecture: obituaries, resurrections, death-detection tripwires, the memory ledger, and the fleet that watches the loop.
- [Series 5 — Products](https://gist.github.com/ebowwa/c3aab014e92f116d937bff8572906aaa) — what the lab ships outward: a keyless web search + fetch toolkit for coding agents, built from the Mac's own headless Chrome.

## Shipped to the Apple App Store

### [CleanShots – Remove Photo Info](https://apps.apple.com/app/id6745844477)

Privacy-focused iOS media processing: metadata removal, watermarking, and fail-closed visual masking.

### [CaringMind](https://apps.apple.com/app/id6749468165)

An AI companion and audio-journaling product focused on personal advocacy, augmentation, and reflection.

### [SleepLoops](https://apps.apple.com/app/id6745059180)

A sleep-cycle utility built around 90-minute timing and practical wake-time planning.

All three ship through the same pipeline I own: native implementation, signing, CI, TestFlight, App Store Connect automation, localization, and post-release iteration.

## Research and hardware work

### [Camera heart rate, respiration, and emotion signals](https://github.com/ebowwa/rppg-vitalsigns)

Contactless physiological sensing from ordinary cameras — on phones and wearable devices.

<img width="400" alt="rPPG — camera heart-rate and vitals detection demo" src="https://github.com/user-attachments/assets/af5668ba-4d67-4fb7-badb-67d6eb8c03c2" />

### [Self-classifying edge devices](https://github.com/dako2/edaxshifu)

An earlier real-time self-classification framework and its hardware demonstration.

<img width="400" alt="EdaxShifu — edge device self-classification demo" src="https://github.com/user-attachments/assets/9c084302-298e-47a4-9e31-9d78e16e7c89" />

### [Open-Alterego](https://github.com/ebowwa/Open-Alterego)

Silent-speech and non-vocal communication research — visual speech recognition, personalization, and deployment on Apple devices.

## Published packages

### [ai-proxy-core](https://pypi.org/project/ai-proxy-core/)

One reusable core for multi-provider AI services — streaming, WebSockets, and provider-specific capabilities.

### [structured-prompts](https://pypi.org/project/structured-prompts/)

A small prompt-template registry for predictable, testable LLM interactions.

## Engineering approach

- Build the thinnest system that can be tested in the real environment.
- Keep hardware, model, application, and infrastructure boundaries replaceable.
- Automate repeated work: testing, deployment, signing, releases.
- Extract reusable packages once an interface has proven itself.
- Treat AI coding agents as multipliers — then verify the result with tests, device evidence, and operational checks.

## Tech stack

<div align="center">

### Core Languages
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![C++](https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white)
![Swift](https://img.shields.io/badge/Swift-FA7343?style=for-the-badge&logo=swift&logoColor=white)

### Mobile Development
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![iOS](https://img.shields.io/badge/iOS-000000?style=for-the-badge&logo=ios&logoColor=white)

### Web Technologies
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

</div>

## GitHub analytics

<div align="center">

<img width="400" alt="GitHub Stats" src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=ebowwa&theme=radical" />

<img width="400" alt="GitHub Streak" src="https://streak-stats.demolab.com/?user=ebowwa&theme=radical&hide_border=true" />

<img width="400" alt="Repos per language" src="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=ebowwa&theme=radical" />

<img width="400" alt="Most committed languages" src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=ebowwa&theme=radical" />

</div>

### Additional stats

<div align="center">

<img width="400" alt="Profile Details" src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=ebowwa&theme=radical" />

<img width="400" alt="Commit Time" src="https://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=ebowwa&theme=radical" />

</div>

---

<div align="center">

*Ship end-to-end. Verify on real systems. Extract what becomes reusable.*

<img src="https://komarev.com/ghpvc/?username=ebowwa&label=Profile%20views&color=0e75b6&style=flat" alt="Profile views" />

</div>
