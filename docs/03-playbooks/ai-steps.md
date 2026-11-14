---
title: AI steps reference
description: Every AI step, with its settings and what it returns.
sidebar_position: 4
---

# AI steps reference

Every AI step in the step library, with the settings you fill in and the results it hands to the next step. For an overview of all step types, see [Steps you can use](./steps.md).

:::tip[Using results from an earlier step]
In any text field you can insert a result from an earlier step with a template, for example `{{ nodes.ask.json.email }}`.
:::

## Things every AI step shares

- **Model.** Every AI step has a model picker. Leave it empty to use the workspace default model. See [AI providers and your own keys](../06-apps-and-keys/ai-providers.md).
- **Branch results.** Steps that sort or judge something return a **Branch** value. Connect each possible value to its own next step, for example a different path for each category.
- **Credits.** AI steps use more credits than most steps. See [Credits and usage](../08-billing/credits.md).

:::note[Fields are labelled in the editor]
The setting names below are the labels you see in the step's settings panel. Settings marked optional can be left empty.
:::

## Ask AI

Send any prompt to an AI model and get the reply back. This is the open-ended step. For a recurring job, the more specific steps below are tuned for it and return ready-to-use fields.

**Settings**

| Setting | What it does |
|---|---|
| **Model** | Leave empty to use the workspace default model. |
| **Instructions** | How the AI should behave (the system prompt). Advanced. |
| **Prompt** | What to ask. Use templates to include data from earlier steps. |
| **Reply as** | Text, or a JSON object. Pick JSON to get the reply as fields later steps can use. Describe the fields you want in the prompt. Advanced. |

**Returns**

| Result | What it contains |
|---|---|
| **Reply** | The AI's reply as text. |
| **Reply as JSON** | The reply as fields. Only when Reply as is JSON object. |

## AI Answer with Sources

Answers a question using only your sources, cites them, and says so when the answer is not there.

**Settings**

| Setting | What it does |
|---|---|
| **Question** | Use templates to take it from an earlier step. |
| **Sources to use** | Optional. Text to answer from, such as a policy, a document or an earlier step's output. |
| **Search the knowledge base** | Also look for passages in your knowledge base. |
| **Knowledge collection** | Search only this collection. |
| **Most knowledge passages** | How many passages to use, from 1 to 10. |
| **Answer style** | For example short and friendly, or step by step. |

**Returns**

| Result | What it contains |
|---|---|
| **Answer** | The answer, or a plain statement that the sources do not contain it. |
| **Found** | True when the sources answer the question. |
| **Branch** | `answered` or `not_found`, so a connection can follow it. |
| **Sources** | The sources the answer relied on. |

## AI Classify

Sorts text into one of your categories and says how sure it is. Connect each category to its own next step.

**Settings**

| Setting | What it does |
|---|---|
| **Text to classify** | The email, ticket, message or document. |
| **Categories** | The labels to choose from. Use short, distinct names such as billing, bug, how-to. |
| **What each category means** | Optional. Explain the categories or give examples when the names alone are ambiguous. |
| **Allow "other"** | When nothing fits, return "other" instead of forcing a category. |

**Returns**

| Result | What it contains |
|---|---|
| **Category** | The category the text belongs to. |
| **Branch** | The same category, so a connection can follow it. |
| **Confidence** | How sure the AI is, from 0 to 1. |
| **Reason** | One sentence on why. |

## AI Extract

Pulls the fields you name, such as email or total, out of any text. Anything the text does not say comes back empty.

**Settings**

| Setting | What it does |
|---|---|
| **Text to read** | The email, invoice, form entry or document. |
| **Fields to extract** | The field name on the left (letters, numbers and underscores) and what it is on the right, for example `total` and the invoice total as a number. |

**Returns**

| Result | What it contains |
|---|---|
| **Extracted data** | All the fields together. Each field is also available on its own by name. |
| **Missing fields** | Fields the text did not contain. |

## AI Score

Rates text against your criteria, such as a lead or a resume, with a score, a verdict and the reasons.

**Settings**

| Setting | What it does |
|---|---|
| **What to score** | The lead, resume, ticket, draft or answer. |
| **Criteria** | What good looks like. List what matters, for example company size above 50, a decision-maker role, a stated budget. |
| **Top score** | The scale runs from 0 to this number. Default 10, from 2 to 100. |
| **Strong from (percent)** | A score at or above this share of the top score is strong. Default 70. |
| **Weak below (percent)** | A score below this share of the top score is weak. In between is moderate. Default 40. |

**Returns**

| Result | What it contains |
|---|---|
| **Score** | The score, from 0 to the top score. |
| **Top score** | The top of the scale. |
| **Percent** | The score as a share of the top score. |
| **Verdict** | `strong`, `moderate` or `weak`. |
| **Branch** | The same verdict, so a connection can follow it. |
| **Strengths** | What meets the criteria. |
| **Gaps** | What is missing or unclear. |

## AI Sentiment

Reads how a sender feels: positive, neutral, negative or mixed, with a score and the emotions behind it.

**Settings**

| Setting | What it does |
|---|---|
| **Text to read** | A review, ticket, email or message. |
| **About** | Optional. What the feeling should be judged about, for example our delivery service. |

**Returns**

| Result | What it contains |
|---|---|
| **Sentiment** | `positive`, `neutral`, `negative` or `mixed`. |
| **Branch** | The same value, so a connection can follow it. |
| **Score** | From -1 (very negative) to 1 (very positive). |
| **Emotions** | The main emotions in the text, such as frustration or delight. |
| **Reason** | One sentence on why. |

## AI Summarize

Summarizes long text, such as a document, thread or transcript, at the length and in the style you choose.

**Settings**

| Setting | What it does |
|---|---|
| **Text to summarize** | The document, thread, transcript or notes. |
| **Style** | Paragraphs, bullet points, executive summary, or decisions and action items. Default bullet points. |
| **Length** | Short, medium or long. Default medium. |
| **Focus on** | Optional. What matters most, for example risks, dates and money. |
| **Write in** | Leave empty to write in the language of the text. |

**Returns**

| Result | What it contains |
|---|---|
| **Summary** | The summary. |

## AI Rewrite

Rewrites text for a purpose: clearer, shorter, longer, more formal, friendlier, simpler, or just proofread.

**Settings**

| Setting | What it does |
|---|---|
| **Text to rewrite** | Use templates to take it from an earlier step. |
| **Goal** | What the rewrite should achieve. |
| **Audience** | Optional. Who will read it, for example enterprise buyers. |
| **Extra instructions** | Optional. Anything else to follow, such as brand voice or words to avoid. |

**Returns**

| Result | What it contains |
|---|---|
| **Rewritten text** | The rewritten text. |

## AI Translate

Translates text into another language, keeping its meaning, tone, formatting, names and placeholders.

**Settings**

| Setting | What it does |
|---|---|
| **Text to translate** | Use templates to take it from an earlier step. |
| **Translate into** | The language to translate to. |
| **Translate from** | Optional. Leave empty to detect the language. |
| **Tone** | Match the original, formal or friendly. Default match the original. |
| **Keep these terms** | Optional. Brand and product names, or terms with a fixed translation, one per line. |

**Returns**

| Result | What it contains |
|---|---|
| **Translation** | The translated text. |
| **Language** | The language it was translated into. |

## AI Compare

Compares two versions of a document, contract, policy or page and lists what changed and whether it is significant.

**Settings**

| Setting | What it does |
|---|---|
| **Original** | The earlier version, or the one to measure against. |
| **Revised** | The newer version. |
| **What matters** | Optional. What to pay most attention to, for example prices, dates and liability. |

**Returns**

| Result | What it contains |
|---|---|
| **Summary** | What changed, in a few sentences. |
| **Changes** | Each change: type (added, removed or changed), before, after and importance. |
| **Significance** | `none`, `minor` or `significant`. |
| **Branch** | `identical`, `minor` or `significant`, so a connection can follow it. |

## AI Moderate

Checks text against a content policy, such as abuse, personal data or spam, and says whether to let it through.

**Settings**

| Setting | What it does |
|---|---|
| **Text to check** | A message, comment, draft or document. |
| **Policy** | What is not allowed. Leave empty for the standard set: hate or harassment, threats or violence, sexual content, self-harm, illegal activity, personal data, spam or scams. |
| **Flag from** | Low and above, medium and above, or high only. Anything at or above this level counts as flagged. Default medium. |

**Returns**

| Result | What it contains |
|---|---|
| **Flagged** | True when the text breaks the policy at or above the level you set. |
| **Branch** | `flagged` or `clean`, so a connection can follow it. |
| **Severity** | `none`, `low`, `medium` or `high`. |
| **Categories** | The parts of the policy it breaks. |
| **Reason** | One sentence on why. |

## AI Read File

Reads a PDF or an image, such as an invoice or screenshot, and answers about it or pulls out the fields you name.

**Settings**

| Setting | What it does |
|---|---|
| **What to do** | What you want from the file, for example "Summarize this contract" or "What is the total?". Not needed when you list fields. |
| **Fields to extract** | Optional. Field name on the left (letters, numbers and underscores) and what it is on the right. Each field is returned on its own. |

**Returns**

| Result | What it contains |
|---|---|
| **Answer** | The model's reply about the file. |
| **Extracted data** | The fields you asked for. Each is also available on its own by name. |

## AI Generate Image

Creates an image from a description, such as a product shot, an illustration or a social graphic, and returns it as a file.

**Settings**

| Setting | What it does |
|---|---|
| **Describe the image** | Subject, setting, style and mood. |
| **Shape** | Square, landscape or portrait. Default square. |
| **Quality** | Standard or high. High takes longer and costs the provider more. Default standard. |

**Returns**

| Result | What it contains |
|---|---|
| **Image file** | The image as a file: filename, mime_type, size and content_base64. |
| **Size** | The file size in bytes. |

## AI Text to Speech

Reads text aloud and returns an audio file, for a spoken summary, a voice message or a narration.

**Settings**

| Setting | What it does |
|---|---|
| **Text to speak** | The text to read aloud. There is a maximum length. |
| **Voice** | Default, female or male. |
| **Delivery** | Optional. How it should sound, for example calm and warm. |

**Returns**

| Result | What it contains |
|---|---|
| **Audio file** | The audio as a file: filename, mime_type, size and content_base64. |
| **Size** | The file size in bytes. |

## AI Transcribe Audio

Turns an audio recording, such as a call, a voice note or a meeting, into text, with timestamped segments.

**Settings**

| Setting | What it does |
|---|---|
| **Language** | Optional. The spoken language as a code or name, for example en. Leave empty to detect it. |
| **Tell speakers apart** | Label who is speaking when the provider supports it. |

**Returns**

| Result | What it contains |
|---|---|
| **Transcript** | The full transcript. |
| **Segments** | The transcript in timed pieces, with the speaker when known. |

## AI Route to Agent

Chooses the best of your agents for a task from what each one is described as being for. Pass its ID to an Agent step.

**Settings**

| Setting | What it does |
|---|---|
| **Task** | The request to route. |
| **Choose from** | Optional. Limit the choice to these agent IDs. Leave empty to choose from every agent in the workspace. |

**Returns**

| Result | What it contains |
|---|---|
| **Agent ID** | The chosen agent. Use it in an Agent step. |
| **Agent name** | The chosen agent's name. |
| **Confidence** | How sure the AI is, from 0 to 1. |
| **Reason** | One sentence on why. |

## Agent

Sends a message to one of this workspace's agents, with its instructions, skills and tools, and returns its reply.

**Settings**

| Setting | What it does |
|---|---|
| **Agent** | Which agent to use. |
| **Message** | What to send the agent. Defaults to the run input's message. |
| **Continue conversation** | A conversation ID from an earlier Agent step, to keep its context. |

## Knowledge Save

Adds text to your knowledge base so agents and Knowledge Search can find it. Saving the same source again replaces it.

**Settings**

| Setting | What it does |
|---|---|
| **Text to save** | The document, answer or notes. |
| **Name** | What this is called, for example a title or ticket number. Saving the same name again replaces the earlier version. |
| **Collection** | Group it with related documents. |
| **Replace an earlier version** | Swap the text previously saved under this name instead of adding to it. |

**Returns**

| Result | What it contains |
|---|---|
| **Name** | The name it was saved under. |
| **Collection** | The collection it was saved in. |
| **Passages** | How many searchable passages it was split into. |

## Knowledge Search

Searches your knowledge base for the passages that best answer a question, with their sources, ready to hand to an AI step.

**Settings**

| Setting | What it does |
|---|---|
| **What to look for** | A question or keywords. |
| **Collection** | Optional. Search only this collection of the knowledge base. |
| **Most passages** | How many passages to return. Default 5, from 1 to 20. |

**Returns**

| Result | What it contains |
|---|---|
| **Passages** | The matches, best first: text, source, collection and score. |
| **Context** | The passages as one block of text to put in an AI prompt. Marked as outside content, so the AI treats it as data. |
| **Count** | How many passages matched. |
| **Found** | True when at least one passage matched. |
| **Branch** | `found` or `none`, so a connection can follow it. |

