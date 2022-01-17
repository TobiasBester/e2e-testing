---
theme: default
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: true
info: |
  ## E2E Testing
  A brief and practical overview of E2E testing.

  Presentation created with [Sli.dev](https://sli.dev)
drawings:
  persist: false
title: End-to-End Testing
---

# End-to-End Testing

EPI-USE Labs | 2022 | e2e-testing.vercel.app

<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/slidevjs/slidev" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
layout: image-right
image: https://stayhipp.com/wp-content/uploads/2020/06/droppedthis.jpg
---

# Congratulations!

---
layout: image-left
image: https://i.pinimg.com/474x/1c/40/51/1c4051228317e7146ae79ca65ecd00e8--lol-pics-funny-pics.jpg
class: text-center
---

# Tobias Bester

<h3>
  <mdi:slack class="inline"/> <strong>@tobias</strong>
</h3>
<br />
<h3>
  <mdi:email class="inline"/> <strong>tobias@labs.epiuse.com</strong>
</h3>

<img
  src="https://scontent-jnb1-1.xx.fbcdn.net/v/t1.18169-9/15941110_1274953025874857_5642308709712853315_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=DFL-qCdJ_NoAX8aQVwC&_nc_ht=scontent-jnb1-1.xx&oh=00_AT-W3_X5GjxA81Qvd8aGcIPE1e1SEoR2kCPflE4BaO7XuA&oe=6209E2ED"
  alt=LogBox Logo
  width="350"
/>

---
layout: intro
---

# End-to-End Testing

- ❓ What it is
- 🤷‍♂️ Why it's needed
- 🛠 How to implement it
- 🤸‍♀️ Demo with Cypress


---
layout: image-left
class: align-text-bottom
image: /whatdog.png
---

# What is E2E Testing?🤔

<h2>
  <span class="text-green-300">Testing</span> software <span class="text-teal-500">end-to-end</span>
   via the <span class="text-blue-300">frontend</span> using <span class="text-cyan-300">automation</span>.
</h2>

---

# _Testing_

- ## Ensuring correctness and quality of system
- ## Provides confidence in system
- ## Exposes bugs, performance issues, and gaps in functionality
- ## Documents functionality
- ## Documents code

<style>
h1 {
  background: green;
}
</style>


---

# _End-to-end_

<div class="text-center">  
<img src="/public/testpyramid.png" width="350" alt="Testing Pyramid" />
</div>
<br />

- ### Differ in purpose
- ### Cover different amount of code
- ### Amount of tests (usually)

<style>
h1 {
  background: teal;
}
</style>

<!--
Unit Tests:
- Test indivisible units of code, components, functions, classes, etc.
- Test that the unit behaves as expected given specific input.
- Since a system is composed of these units, majority of tests will be unit tests.

Integration Tests:
- Test that multiple units work together as expected.
- Tests may span multiple components, multiple runtimes, and multiple environments.
- Usually fewer than unit tests.

End-to-End Tests:
- Test real use cases and user workflows, usually from the perspective of the end user.
- Tests span entire system under test. UI -> Network -> Multiple backend services -> DB
-->

---

# _Via the frontend_

- ## Test use cases from the user's perspective
- ## Enter at API-level if no frontend
- ## Black box vs white box - who's writing the tests?

<style>
h1 {
  color: black;
  background: lightblue;
}
</style>

<!--
Should we write tests assuming nothing about the underlying details of the system, or should we use our knowledge of these details.

User will use the system as an opaque box and tests should reflect user, but that shouldn't stop underlying knowledge of system to facilitate writing tests.

QA Engineers/Testers are less likely to write tests biased by knowledge of implementation details.
Developers can provide use cases uncovered by knowledge of code. They can also implement structures to improve ease of writing E2E tests
-->

---

# _Using automation_

- ## As opposed to humans testing
- ## Less human-error
- ## More efficient - more test cases/data combinations
- ## Run on schedule or as part of CI pipeline, at scale

<style>
h1 {
  color: black;
  background: cyan;
}
</style>
---
layout: image-right
image: /good-e2e.jpg
---

# The benefit of E2E tests ✔

- ## Verifies business logic
- ## Expands test coverage
- ## Save testers from repetitive work
- ## Visual feedback


---
layout: image-right
image: /bad-e2e.jpg
---

# The cost of E2E tests 💰

- ## Testing environment needs provisioning - time and possibly money
- ## Manual test cases need to be adapted for automation
- ## Learning test framework and writing tests takes time

---
layout: cover
background: >-
  https://i.pinimg.com/736x/6f/21/4c/6f214c4d7c7d52fc9e104d3e58b76841--world-domination-funny-cats.jpg
---

# High-level requirements [^1]

[^1]: Derived from [BrowserStack](https://www.browserstack.com/guide/end-to-end-testing)

<style>
.footnotes-sep {
  @apply mt-20 opacity-10;
}
.footnotes {
  @apply text-sm opacity-75;
}
.footnote-backref {
  display: none;
}
</style>

---

# High-level E2E steps

1. ### Understand requirements: how the system should work
2. ### Set up test environment
3. ### Understand how every component in the system needs to respond to input
4. ### Propose methods to test these responses
5. ### Design test cases
6. ### Run tests, study and save results


---

# High-level Best Practices

- ### Prioritize end use - think like a user, use realistic data
- ### Start with critical workflows
- ### Test common scenarios, not edge cases
- ### Maintain Order - defer points of failure to unit/integration tests
- ### Optimize setup and teardown mechanisms


---
layout: cover
background: https://pbs.twimg.com/media/FI8DFOcXIAs2dnB?format=jpg&name=large
---

# Actually implementing E2E tests

---

# Test Creation Methods

- ## Code
- ## Low-code
- ## No-code

---

# Code

- ## Control UI via test framework commands
- ## Frameworks aplenty (e.g. Cypress)
- ## Programming language -> barrier of entry
- ## Most flexible

---

# Low-code

- ### Write tests in human-readable syntax
- ### More accessible
- ### Usually extensible via the underlying language
- ### More dependent on framework
- ### [Robot Framework](https://robotframework.org/)

<br/>

```gherkin
*** Settings ***
Documentation     A test suite for valid login.
...
...               Keywords are imported from the resource file
Resource          keywords.resource
Default Tags      positive

*** Test Cases ***
Login User with Password
    Connect to Server
    Login User            ironman    1234567890
    Verify Valid Login    Tony Stark
    [Teardown]    Close Server Connection
```


---

# No-code

- ## Test steps are recorded, translated to actions, and re-played by the framework
- ## Low barrier of entry
- ## Highly dependent on framework
- ## Frameworks aplenty, majority are proprietary
- ## [Selenium IDE](https://www.selenium.dev/selenium-ide/)

---

# Drivers

- ### Controls UI under test
- ### [Chrome](https://chromedriver.chromium.org/), [Gecko](https://github.com/mozilla/geckodriver) drivers implement W3C WebDriver protocol
- ### [WinAppDriver](https://github.com/microsoft/WinAppDriver) for Windows Apps

<img src="https://c.tenor.com/LyqsptHGIF0AAAAC/orangutan-driving.gif"
     alt="Orangutan Driving Cart"
     width="400"
/>

---

# Selenium [💪](https://www.selenium.dev/documentation/webdriver/getting_started/)

- ## Provides interface to automate browsers
- ## Interacts via browser-specific driver
- ## Available in multiple languages: Java, JS, Python
- ## Open for extension
- ## Large ecosystem of tools built on top [^2]

<br />

[^2]: [Selenide for Java](https://selenide.org/)

<style>
.footnotes-sep {
  @apply mt-20 opacity-10;
}
.footnotes {
  @apply text-sm opacity-75;
}
.footnote-backref {
  display: none;
}
</style>

---

# Cypress [👑](https://www.cypress.io/)

- ## Framework focusing on automated front-end tests
- ## NPM package - JavaScript/TS only
- ## Executes in browser - interacts with browser DOM directly 💨
- ## Comprehensive features:
  - ### Opinionated; abstracts away common tasks
  - ### Visual IDE for running tests
  - ### Record and save test execution
- ## Less flexible than Selenium [^2]

<br />

[^2]: [Cypress vs Selenium](https://www.blazemeter.com/blog/selenium-vs-cypress-a-complete-comparison-between-the-two-testing-frameworks)

<style>
.footnotes-sep {
  @apply mt-20 opacity-10;
}
.footnotes {
  @apply text-sm opacity-75;
}
.footnote-backref {
  display: none;
}
</style>

---

# General Workflow of a Test

<div class="text-center">
    <img src="/public/test-workflow.png"
        alt="Test Workflow"
        width="700"
    />
</div>

---

# Selectors 🎯

- ### Used to target elements in the DOM
- ### Selector types [^1]:
  - #### [CSS](https://web.dev/learn/css/selectors/)
  ```css
  btn#submit
  ```
  - #### XPath
  ```
  //button[@id="submit"]
  ```
  - #### Link Text
- ### Aim for selectors resilient to change
- ### When adding identifiers to frontend, use ```data-id``` prop
```html
<button type="submit" data-id="loginSubmit">Login</button>
```

<br />

[^1]: [Guide](https://exadel.com/news/how-to-choose-selectors-for-automation-to-make-your-life-a-whole-lot-easier)

<style>
.footnotes-sep {
  @apply mt-1 opacity-10;
}
.footnotes {
  @apply text-sm opacity-75;
}
.footnote-backref {
  display: none;
}
</style>

---

# Actions 🎬

- ## Interact with HTML element
- ## Mostly inputs: Click, type, mouse over, etc.
- ## Elements should be visible first

---

# Assertions ☑

- ## Verify state of element or element properties
- ## Is visible, does exist
- ## Has text or value
- ## Has CSS/HTML attribute
- ## Assert on result of expression

---

# Page Objects

- ### Group selectors, elements, and actions of a page into a class
- ### Object-oriented tests instead of procedural
- ### Increases readability and maintainability
- ### Simplify selectors in nested elements
- ### Time-consuming to create
- ### Use it for complex and frequently accessed pages and components

---

# Procedural

```typescript
assert($('.login-dialog').isVisible(), true)

assert($('.username-field').isVisible(), true)
$('.username-field').type('USERNAME')

assert($('.password-field').isVisible(), true)
$('.password-field').type('PASSWORD')

$('.login-btn').click()

assert($('.login-dialog').isVisible(), false)
```


---
layout: two-cols
---

# Page Object

```typescript
// LoginDialog.ts
export class LoginDialog {
  static DIALOG_CONTAINER = '.login-dialog'
  static USERNAME_FIELD = '.username-field'
  // ...

  get usernameField () {
      return $(LoginDialog.USERNAME_FIELD)
  }
  isVisible () {
    return $(LoginDialog.DIALOG_CONTAINER).isVisible()
  }
  enterUsername (username: string) {
    assert(this.usernameField.isVisible(), true)
    return this.usernameField.type(username)
  }
  // ...
}
```

::right::

# Test

```typescript
// login-test.ts
const loginDialog = new LoginDialog()
loginDialog.isVisible()
loginDialog.enterUsername('USERNAME')
loginDialog.enterPassword('PASSWORD')
loginDialog.clickLogin()
```

---

# Generic Page Object

```typescript
// TextField.ts
export class TextField {
  constructor(
    private readonly inputSelector: string
  ) {}

  get el () {
    return $(this.inputSelector)
  }

  get validationMessages () {
    return this.el.$('.input__messages')
  }

  get enterValue () {
    this.el.type()
  }
}

// LoginTest.ts
const usernameField = new TextField('.username-field')
```

---

# Best Practices

- ### Avoid explicit waits
- ### Use custom selectors for dynamic data
```vue
<tr :data-id="`item-row-${item.name}`">
  <td :data-id="`item-name-${item.name}`">Clive</td>
  <td :data-id="`item-age-${item.name}`">50</td>
  <td :data-id="`item-tested-${item.name}`">Yes</td>
</tr>
```
- ### Use programmatic control to save time (e.g. registration)
- ### Tests should not be dependent on other tests passing


---

# Resources

- ### [Lambdatest Blog](https://www.lambdatest.com/blog)
- ### [Playground for UI testing practice](http://uitestingplayground.com/)
- ### [Curated Test Automation List](https://github.com/atinfo/awesome-test-automation)
- ### [Test Automation University](https://testautomationu.applitools.com/)

---

# Demo Time 😳

- ### Install NodeJS 12/14+
- ### Either:
  - #### Clone repo at https://github.com/TobiasBester/e2e-testing
    - `git clone https://github.com/TobiasBester/e2e-testing.git`
  - #### Go to project directory
  - #### npm install
- ### Or (if the repo can't be cloned):
  - #### Run `npm init` in empty folder and press enter forever
  - #### Run `npm install --save-dev cypress`
- ### Finally:
  - #### Run `npx cypress open`
  - #### Run sample tests to verify everything works
- [Cypress Installation Guide](https://docs.cypress.io/guides/getting-started/installing-cypress)
