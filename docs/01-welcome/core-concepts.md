---
title: Core concepts
description: How workspaces, playbooks, agents, apps and the Trail fit together.
sidebar_position: 3
---

# Core concepts

Agent1o1 has a handful of building blocks. This page shows how they fit together. For one-line definitions, see [Key terms](./key-terms.md).

## The big picture

<div className="a1-diagram" role="img" aria-label="Diagram: something starts a playbook or an agent, which use your apps, vault and knowledge, and every run is recorded in the Trail.">
  <div className="a1-dg-row">
    <div className="a1-dg-title">1. Something starts it</div>
    <div className="a1-dg-cells">
      <div className="a1-dg-cell"><b>Run</b><small>you press the button</small></div>
      <div className="a1-dg-cell"><b>Trigger</b><small>schedule, webhook, app event</small></div>
      <div className="a1-dg-cell"><b>Page</b><small>a visitor submits a form</small></div>
      <div className="a1-dg-cell"><b>API</b><small>your own code</small></div>
    </div>
  </div>
  <div className="a1-dg-arrow" aria-hidden="true">↓</div>
  <div className="a1-dg-row">
    <div className="a1-dg-title">2. Work gets done</div>
    <div className="a1-dg-cells two">
      <div className="a1-dg-cell hl"><b>Playbook</b><small>steps you set, the same way every time</small></div>
      <div className="a1-dg-cell hl"><b>Agent</b><small>an AI that decides the steps toward a goal</small></div>
    </div>
  </div>
  <div className="a1-dg-arrow" aria-hidden="true">↓ uses ↓</div>
  <div className="a1-dg-row">
    <div className="a1-dg-title">3. Your resources</div>
    <div className="a1-dg-cells">
      <div className="a1-dg-cell"><b>Apps</b><small>Slack, Gmail, Sheets…</small></div>
      <div className="a1-dg-cell"><b>Vault</b><small>secrets and keys</small></div>
      <div className="a1-dg-cell"><b>Knowledge</b><small>documents to search</small></div>
      <div className="a1-dg-cell"><b>Artifacts</b><small>files</small></div>
    </div>
  </div>
  <div className="a1-dg-arrow" aria-hidden="true">↓</div>
  <div className="a1-dg-row">
    <div className="a1-dg-title">4. You stay in control</div>
    <div className="a1-dg-cells">
      <div className="a1-dg-cell"><b>Approvals</b><small>a person says yes or no</small></div>
      <div className="a1-dg-cell"><b>Trail</b><small>every run, step by step</small></div>
      <div className="a1-dg-cell"><b>Credits</b><small>how much you use</small></div>
    </div>
  </div>
</div>

## Everything lives in a workspace

A **workspace** is your team's space. Playbooks, agents, apps, members and billing all belong to a workspace, and you can belong to several. Each has its own playbooks, apps, members, credits and plan. See [Team members and roles](../02-account-and-team/team-and-roles.md).

## Playbook or agent?

| | Playbook | Agent |
|---|---|---|
| **You decide** | Every step, in order | The goal, the instructions and the abilities |
| **Best for** | Work you can describe as steps, done the same way every time | Open-ended work that needs judgement |
| **Starts from** | A run, a trigger, a Page or the API | A chat, a playbook step, a trigger or the API |

You can combine them: give an agent a playbook as one of its abilities, or run an agent as a step in a playbook. See [What is a playbook](../03-playbooks/overview.md) and [Create an agent](../04-agents/overview.md).

## What a playbook or agent can use

- **[Apps](../06-apps-and-keys/apps.md)** are your connected accounts. Connect once, use everywhere.
- **[Vault](../06-apps-and-keys/vault.md)** keeps passwords and tokens encrypted, so you never paste them into a step.
- **[Knowledge](../04-agents/knowledge.md)** is your own content, searchable by meaning.
- **[Skills](../04-agents/skills.md)** are reusable guides an agent can pull in when relevant.
- **[Artifacts](../07-pages-and-files/artifacts.md)** are the files your work creates or reads.

## Keeping a person in the loop

An **[approval](../03-playbooks/approvals.md)** is a pause where a person must say yes or no before something continues. Agents also have an [autonomy setting](../04-agents/autonomy.md) that decides how much they may do without asking.

## Seeing what happened

Every run is recorded in the **[Trail](../03-playbooks/runs-and-trail.md)**: when it ran, whether it worked, each step's input and output, how long it took and how many [credits](../08-billing/credits.md) it used.

## What next

- [Quickstart](./quickstart.md)
- [Build a playbook](../03-playbooks/building-playbooks.md)
- [Create an agent](../04-agents/overview.md)
