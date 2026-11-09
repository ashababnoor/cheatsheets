---
title: "Prompt Engineering"
subtitle: "How to write clear prompts for LLMs: structure, examples, reasoning, output formats, and testing."
description: "Prompt engineering cheatsheet for large language models — prompt structure, few-shot examples, chain of thought, system prompts, structured output, and common pitfalls."
category: "Languages & Code"
icon: "sparkles"
---

## Core Principles

| Principle | What to do |
|-----------|------------|
| Be specific | Say exactly what you want, for whom, and in what form |
| Give context | Explain the goal and the audience, not only the task |
| Show, don't only tell | Add one or two examples of the output you want |
| Say what to do | "Write in plain prose" works better than "don't use bullets" |
| Break it down | Split a big task into steps, or into several prompts |
| Iterate | Test the prompt on real inputs, then refine it |

A good test: if a smart colleague with no background on your project could not follow the
prompt, a model will struggle too.

## Prompt Structure

A reliable order for a prompt:

```plaintext
1. Role / context      Who the model is and what the situation is
2. Task                What to do, in one clear instruction
3. Input               The data to work on, clearly separated
4. Constraints         Length, tone, things to include or avoid
5. Output format       The exact shape of the answer
6. Examples            One to three samples of input and output
```

```plaintext
You are a support agent for a payroll product.

Summarise the customer email below in two sentences, then label its urgency.

<email>
[paste the email here]
</email>

Rules:
- Use plain language.
- Urgency is one of: low, medium, high.

Respond as JSON: {"summary": "...", "urgency": "..."}
```

## Roles and System Prompts

| Message | Purpose |
|---------|---------|
| `system` | Sets long-lived behaviour: role, tone, rules, tools |
| `user` | The request or input for this turn |
| `assistant` | Earlier model replies (and prefilled starts) |

- Put stable rules in the `system` prompt, and per-request data in the `user` message.
- A short role ("You are a senior code reviewer") sets tone and focus. Keep it brief.
- State priorities when rules can conflict: "Accuracy comes before brevity."

## Use Delimiters

Separate instructions from data so the model does not mix them up. XML-style tags work
well, and they also help guard against prompt injection.

```plaintext
Summarise the document in <document> tags in three bullet points.

<document>
[paste the document here]
</document>
```

- Name tags after their content (`<email>`, `<code>`, `<policy>`).
- Refer to a tag by name in the instructions ("the text in `<policy>`").
- Triple backticks or `###` headings also work, as long as you use them consistently.

## Zero-Shot, One-Shot, Few-Shot

| Style | Examples given | Use when |
|-------|:--------------:|----------|
| Zero-shot | 0 | The task is common and the instructions are clear |
| One-shot | 1 | You need a specific format |
| Few-shot | 2 to 5 | The task is subtle, or the format is unusual |

```plaintext
Classify the sentiment as positive, negative, or neutral.

Text: "The battery lasts all day."         -> positive
Text: "It arrived on Tuesday."             -> neutral
Text: "The screen cracked within a week."  -> negative

Text: "Setup was quick, but support never replied."  ->
```

- Choose examples that cover the real range of inputs, including edge cases.
- Keep the format identical across examples.
- Do not make every example look the same, or the model will copy the pattern.

## Reasoning and Step-by-Step Thinking

For maths, logic, planning, and multi-step problems, let the model think before it answers.

| Technique | How |
|-----------|-----|
| Chain of thought | "Think through this step by step, then give the final answer." |
| Separate reasoning from answer | Ask for `<thinking>` and `<answer>` sections |
| Plan first | "List the steps you will take, then carry them out." |
| Self-check | "Review your answer for mistakes before replying." |
| Decompose | Run one prompt per sub-task, and feed results forward |

```plaintext
Work out the answer step by step inside <thinking> tags.
Then give only the final result inside <answer> tags.
```

Models with built-in extended thinking usually need less of this. Describe the goal and
let them reason, rather than scripting every step.

## Control the Output

| Goal | Prompt pattern |
|------|----------------|
| Fixed length | "Answer in at most 3 sentences." |
| Format | "Return a markdown table with columns: name, price." |
| Tone | "Write in a calm, direct tone for a non-technical reader." |
| Valid JSON | Give the schema, and an example, and say "Return only JSON." |
| Stay on topic | "If the question is not about billing, say you can only help with billing." |
| Admit gaps | "If the answer is not in the document, say so. Do not guess." |

```json
{
  "type": "object",
  "properties": {
    "summary": { "type": "string" },
    "urgency": { "enum": ["low", "medium", "high"] }
  },
  "required": ["summary", "urgency"]
}
```

Prefer your provider's structured-output or tool-calling feature over parsing free text.
It guarantees the shape.

## Sampling Parameters

| Parameter | Effect | Typical use |
|-----------|--------|-------------|
| `temperature` | Randomness. Low is focused, high is varied | `0` to `0.3` for extraction and code, higher for brainstorming |
| `top_p` | Samples from the smallest set of tokens that reach this probability | Change this or `temperature`, not both |
| `max_tokens` | Hard cap on output length | Prevent runaway replies and control cost |
| `stop` | Sequences that end generation | Stop at a delimiter |

## Working with Long Context

- Put long documents **before** the question, and the instruction at the end.
- Ask the model to quote the relevant passage first, then answer from the quotes.
- Label multiple documents with IDs and ask it to cite them.
- Trim what is not needed. More context is not always better.

## Grounding and Hallucinations

- Give the source text, and say "Answer only from the text below."
- Allow "I don't know" as a valid answer.
- Ask for citations or quotes, and verify them.
- Use retrieval (RAG) or tools for facts that change or are private.
- Keep a human check for high-stakes output.

## Tools and Agents

| Tip | Detail |
|-----|--------|
| Describe each tool clearly | Name, purpose, and when to use it and when not to |
| Define precise parameters | Types, allowed values, and one example each |
| Tell the model when to act | "Search first if you are not sure" or "Ask before deleting" |
| Handle errors | Return clear error text so the model can recover |
| Limit scope | Give the fewest tools and permissions the task needs |

## Prompt Injection

Untrusted text (web pages, emails, user files) can contain instructions that hijack the model.

- Wrap untrusted input in delimiters, and tell the model to treat it as data only.
- Do not give the model more permissions than the task needs.
- Require human approval for sensitive actions such as sending email or spending money.
- Validate the model's output before you act on it.

## Test and Iterate

1. Collect 10 to 50 real inputs, including hard and odd cases.
2. Write down what a good answer looks like for each.
3. Change **one** thing at a time, and re-run the whole set.
4. Track results (a spreadsheet is enough), and keep a version of every prompt.
5. Re-check when you change the model, since prompts do not always carry over.

## Common Mistakes

| Mistake | Fix |
|---------|-----|
| Vague request ("make it better") | Say what "better" means: shorter, clearer, more formal |
| Only negative rules ("don't be wordy") | State the target: "Use two short paragraphs" |
| Too many goals in one prompt | Split the task across prompts |
| Shouting (`ALWAYS`, `NEVER`) | Explain the reason; models follow clear context better than emphasis |
| No examples for a custom format | Add one or two samples |
| Testing on one input | Test on a varied set |
| Parsing free text | Use structured output |
