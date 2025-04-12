```markdown
## Warm-up - Explain Copilot main features
1. Chat -> Ctrl + Alt + I ask, edit, agent (available -> settings chat.agent.enabled)
	1. Show the chat.* settings.
	2. Inline chat -> Ctrl + I
	3. Inline comments
2. Review @ / #
3. FETCH -> 
	2. #fetch netcoreconf.com and summarize it for me. Where is the next event and who are the organizers?

---

## Agents - setup
1. Help me create an SPA with the latest stable version for vue and vite. Use the newest way npm create
	1. npm create vue@latest
2. @workspace #codebase
   /explain I am new in Vue 3 and vite, so please explain to me the main parts of this project, 
   dependencies, how to run it, projects structure, tooling configuration and so on. 
   Refer to the files in this project for explaining and to give examples.
3. #codebase how to launch the tests in playwright and vitest. 

---

## 1º Commit
1. What does conventional commits stands form and how does it work?
2. #codebase 
   Give me a commit definition for this project following conventional commits. 
   Consider what we have done so far. It is the initial scaffolding.
3. Copilot in the terminal
	1. gh copilot suggest "how do I push this to the remote repository?"

--- LOAD main Project

## First test fix - HelloWorld.spec.ts
1. Fix text failure

# (OPTIONAL if enough time) - Basic-easy Refactor 
1. I want you to extract the highlighted lines to a new component called AppHeader.vue and then reference it here. 
   Then, take into consideration the styles in #file:App.vue and decide If they need to be moved as well.

## Styling (AGENT)
1. #codebase change all vue components styling to lang="scss"

# CSS -> Edit styling Nightmareview
I want to center my div with the class nightmare, so all h1,h2 are centered both vertically and horizontally

# Utils, try to guess it (test -> refactor -> test)
1. /explain what does this function do with simple non-technical words
2. From liveTests.spec.ts
	1. /tests Generate unit tests for #file:whatAnUtils.ts
	    here. Try to cover the basic use-cases with 5 tests.
3. /edit this function so it is more simple and easier to understand


# Use of custom instructions (copilot-instructions)
1. Ctrl + , -> Settings -> instructions.
2. I do not know anything about Go, could you tell me the basics?
3. I want to reference a module in rust, so it reuses some functionalty, how can i do it?
4. (EDIT)
	1. I want to create a new component that will show a table with two columns. 
	The first column Id, and the second name. Suggest a name and a basic skeleton in Vue. 
	Place the new component in this folder: #folder:components

---- ---- ---- ----

# EXTRA EXTRA - Mermaid OR Security
1. #codebase can you create a mermaid diagram-like with the data that you know about this project

2. Evaluate this design from Microsoft Threat modelling tool and tell me key security aspects I should consider. 
Reference what you can interpret from the image #file:threat_model.jpg

---- ---- ---- ----

And now M365 Copilot!!

```