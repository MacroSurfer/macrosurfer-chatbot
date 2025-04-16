# Macrosurfer Chat

<p align="center">
  <a href="https://chat.macrosurfer.com">
    <img alt="Macrosurfer Chat – AI agent for economic and financial research" src="https://chat.vercel.ai/opengraph-image.png" />
  </a>
</p>

<p align="center">
  <strong>LLM-powered AI research assistant for macroeconomic and fundamental analysis</strong><br/>
  Built on the Macrosurfer Scout data pipeline. Open source and customizable.
</p>

---

## 📌 Overview

**Macrosurfer Chat** is an open-source AI chatbot application that allows investors and researchers to interact with macroeconomic and fundamental financial data using natural language. It is designed to work seamlessly with the [Macrosurfer Scout](https://github.com/macrosurfer/scout) project's data ingestion pipeline, providing a fast and intuitive way to perform economic research, analyze corporate fundamentals, and gain insights without writing SQL or code.

A hosted trial portal is available at: [https://chat.macrosurfer.com](https://chat.macrosurfer.com)

---

## 🔍 Key Features

- 🧠 Natural language interface to your in-house macro/fundamental database
- 🔗 Integrated with **Macrosurfer Scout** for large-scale data ingestion
- 📊 Supports querying across economic indicators, company fundamentals, financial statements, etc.
- ⚙️ Built using **Next.js**, **Vercel AI SDK**, and **OpenAI-compatible** LLMs
- 🧩 Easily pluggable into your custom infrastructure
- 🧪 Run your own local or cloud-hosted version for private research

---

## ❓ Why Use Macrosurfer Chat?

Traditional economic research and fundamental analysis require navigating complex datasets or writing SQL queries. **Macrosurfer Chat** eliminates that friction by allowing analysts, PMs, or retail investors to simply *ask questions in plain English* — like:

- "What were the top drivers of CPI inflation in the last 6 months?"
- "Show me Apple’s quarterly revenue breakdown over the last 5 years"
- "List S&P 500 companies with declining gross margins and rising debt"

This makes it faster and more accessible for users to explore trends, validate hypotheses, and generate investment insights.

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- [Vercel CLI](https://vercel.com/docs/cli)
- OpenAI API key or compatible LLM provider
- Macrosurfer Scout data (or your own SQL warehouse)

### Installation

```bash
git clone https://github.com/macrosurfer/chat.git
cd chat
pnpm install
```

Running Locally

```bash
cp .env.example .env
# Add your environment variables to the .env file
pnpm dev
```
Your app should now be live at: http://localhost:3000

---

## 📚 Project Structure

* app/: Frontend routes and UI

* lib/: LLM interface and data agents

* data/: Example queries and schema integrations

* .env.example: Sample environment variables

---

## 🧑‍💻 Contributing
Contributions are welcome! Please fork the repo and open a pull request. Before submitting:

1. Format your code with prettier

2. Run pnpm lint to catch issues

3. Add a short description to your PR

For major changes or suggestions, open an issue first to discuss.

---

##  🪪 License
This project is licensed under the [MIT License](https://chatgpt.com/c/67ffc091-dc98-8010-99d7-14561bc1f467#:~:text=This%20project%20is%20licensed%20under%20the%20MIT%20License.).

---

## 🙌 Acknowledgements
Built with ❤️ by the Macrosurfer team using:

* Next.js

* Vercel AI SDK

* OpenAI (or your own LLM provider)

* shadcn/ui

* Tailwind CSS