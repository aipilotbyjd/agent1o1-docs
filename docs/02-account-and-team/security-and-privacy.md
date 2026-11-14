---
title: Security and privacy
description: How Agent1o1 protects your account, your secrets and your data, and what is up to you.
sidebar_position: 4
---

# Security and privacy

This page describes the protections built into Agent1o1 and the controls you have. It covers what the product does, so you can decide how to set up your workspace.

## Protecting sign-in

- Sign in with email and password, Google, GitHub, or a one-time magic link.
- Turn on [two-factor authentication](./sign-in-and-security.md#two-factor-authentication) and keep your recovery codes safe.
- Too many wrong passwords in a row temporarily locks the account.
- Resetting your password signs you out everywhere. You can also sign out of all other devices when you change it.

## Protecting secrets and keys

- Connections to your apps, [Vault](../06-apps-and-keys/vault.md) secrets and AI provider keys are stored encrypted.
- Once saved, a value is never shown again, and secrets are hidden in run history.
- API keys are shown only once when you create them. You can give each key only the permissions it needs, set an expiry date, and revoke it at any time. See [API overview](../09-developers/api-overview.md).

:::warning[Never put secrets in step text]
Store them in the Vault and reference them. Text in steps, agent instructions and knowledge documents is not protected the way Vault secrets are.
:::

## Keeping workspaces separate

- Each workspace has its own playbooks, agents, apps, members, credits and plan.
- Access is controlled by [roles](./team-and-roles.md#roles): Owner, Admin, Editor, Member and Viewer.
- Admins can review who did what in the workspace through the activity log: sign-ins, and changes to members, apps and settings.

## Controlling what AI can do

- Agents and the Assistant follow an [autonomy setting](../04-agents/autonomy.md). **Read only** never changes anything, and **Ask** asks before every change.
- Admins can set a workspace policy that caps the highest autonomy mode any agent may use. The workspace policy always wins over an individual agent.
- Deleting always asks first, unless an admin explicitly lets Autopilot delete without asking.
- The Assistant's Smart Inbox writes drafts in your own mailbox. Nothing is sent for you.
- You can use your own AI provider account instead of ours. See [AI providers and your own keys](../06-apps-and-keys/ai-providers.md).

## Protecting what your playbooks call

- Webhook addresses contain a long secret code. Treat the address like a password, and **rotate** it if it leaks. The old address stops working at once. See [Webhooks](../09-developers/webhooks.md).
- Requests made by the **Call API** step go through a protected client that blocks requests to private and internal network addresses, and re-checks every redirect.
- You can require [review before publishing](../03-playbooks/publishing.md#review-before-publishing) so changes are approved before they go live.
- Public [Pages](../07-pages-and-files/pages.md) can be protected with a password or limited to signed-in members.

## What is up to you

| You | How |
|---|---|
| Choose roles carefully | Give people the lowest role that lets them do their job |
| Limit what agents can do | Give only the abilities needed, and lock important settings |
| Review connections | Remove apps you no longer use |
| Replace secrets when people leave | Edit the secret in the Vault |
| Decide what goes into knowledge | Don't add content you wouldn't want an agent to repeat |

:::info[Questions about data handling]
For details such as data retention, which providers process your data, or a data processing agreement, contact support from the help menu. They are not covered by this page.
:::

## Related

- [Sign in and account security](./sign-in-and-security.md)
- [Team members and roles](./team-and-roles.md)
- [Vault](../06-apps-and-keys/vault.md)
- [Autonomy and approvals](../04-agents/autonomy.md)
