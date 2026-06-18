import './style.css'

const questions = [
  { id: 'adhd_1', category: 'adhd', text: 'Do you often have difficulty sustaining attention during tasks or activities?' },
  { id: 'adhd_2', category: 'adhd', text: "Do you often feel like you're not listening when someone speaks directly to you?" },
  { id: 'adhd_3', category: 'adhd', text: 'Do you often struggle to follow through on instructions and fail to finish tasks or duties?' },
  { id: 'adhd_4', category: 'adhd', text: 'Do you find it difficult to organize tasks, activities, or your personal belongings?' },
  { id: 'adhd_5', category: 'adhd', text: 'Do you often avoid or dislike tasks that require sustained mental effort, like long forms or reading?' },
  { id: 'adhd_6', category: 'adhd', text: 'Do you frequently lose things necessary for tasks and daily activities, like keys, phones, or glasses?' },
  { id: 'adhd_7', category: 'adhd', text: 'Are you easily distracted by unrelated thoughts or external stimuli?' },
  { id: 'adhd_8', category: 'adhd', text: 'Do you often fidget with your hands or feet, or squirm when you have to sit still?' },
  { id: 'adhd_9', category: 'adhd', text: 'Do you often feel restless or have an internal feeling of being driven by a motor?' },
  { id: 'adhd_10', category: 'adhd', text: "Do you tend to blurt out answers before a question has been fully asked, or finish other people's sentences?" },
  { id: 'adhd_11', category: 'adhd', text: 'Do you find it highly frustrating or difficult to wait your turn in lines or conversations?' },
  { id: 'asd_1', category: 'asdClassic', text: 'Do you find it difficult to understand the unwritten rules of social situations?' },
  { id: 'asd_2', category: 'asdClassic', text: 'Do you strongly prefer to do things the exact same way over and over again?' },
  { id: 'asd_4', category: 'asdClassic', text: 'Do you become very upset, anxious, or distressed by unexpected changes in your routine or plans?' },
  { id: 'asd_5', category: 'asdClassic', text: 'Do you have highly intense, specific interests that you spend a lot of time researching or talking about?' },
  { id: 'asd_6', category: 'asdClassic', text: 'Do you find making or maintaining eye contact uncomfortable or distracting when talking to someone?' },
  { id: 'asd_7', category: 'asdClassic', text: 'Do you tend to take things very literally and sometimes miss sarcasm, jokes, or hidden meanings?' },
  { id: 'asd_8', category: 'asdClassic', text: 'Do you easily feel overwhelmed by sensory input, such as loud noises, bright lights, or certain textures?' },
  { id: 'asd_9', category: 'asdClassic', text: 'Do you make repetitive physical movements, like rocking, tapping, or hand-flapping, to calm down or express excitement?' },
  { id: 'asd_10', category: 'asdClassic', text: 'Do you find small talk or casual, unstructured conversation to be exhausting or confusing?' },
  { id: 'mod_1', category: 'asdModern', text: 'Do you consciously study how other people interact so you can copy them and appear normal?' },
  { id: 'mod_2', category: 'asdModern', text: 'Do you often feel exhausted after social interactions because of the effort it takes to hide your natural behaviors?' },
  { id: 'mod_3', category: 'asdModern', text: 'Have you experienced periods where you lose skills you previously had, like speaking or organizing, due to prolonged stress?' },
  { id: 'mod_4', category: 'asdModern', text: 'When engaged in a task you care about, do you find it almost impossible to shift your attention to something else?' },
  { id: 'mod_5', category: 'asdModern', text: 'Do you experience a strong internal resistance or panic when someone places a demand or expectation on you?' },
  { id: 'mod_6', category: 'asdModern', text: "Do you physically feel other people's emotions or get easily overwhelmed by the vibe of a room?" },
  { id: 'mod_7', category: 'asdModern', text: 'Do you struggle to initiate tasks even when you desperately want or need to do them?' },
  { id: 'mod_8', category: 'asdModern', text: 'Do you need significant downtime in a dark or quiet space to recover from a typical day?' },
  { id: 'mod_9', category: 'asdModern', text: 'Do you prefer communicating via text rather than speaking because it allows you time to process and formulate responses?' },
  { id: 'mod_10', category: 'asdModern', text: 'Do you suppress the urge to move, fidget, or make sounds in public to avoid drawing attention to yourself?' },
  { id: 'mod_11', category: 'asdModern', text: 'Do you feel like you have multiple different personalities depending on which social group you are interacting with?' },
  { id: 'mod_13', category: 'asdModern', text: 'Do you mentally rehearse conversations before they happen to ensure you say the right things?' },
  { id: 'mod_15', category: 'asdModern', text: 'Does your tolerance for sensory input, like noise or light, drastically drop when you are stressed or tired?' },
  { id: 'mod_16', category: 'asdModern', text: 'When deeply engaged in a specific interest, do you often forget to eat, drink, or use the bathroom?' },
  { id: 'mod_17', category: 'asdModern', text: 'Do you get stuck in waiting mode when you have an appointment later in the day, unable to focus on anything else beforehand?' },
  { id: 'mod_20', category: 'asdModern', text: "Do you feel a profound, sometimes painful, sense of injustice when witnessing unfairness, even if it doesn't affect you directly?" },
  { id: 'mod_21', category: 'asdModern', text: 'Do you feel an intense need to be in absolute control of your own schedule and environment to feel safe?' },
  { id: 'mod_23', category: 'asdModern', text: 'Do you need to understand all the small, specific details of a plan or concept before you can understand the overall goal?' },
  { id: 'asq_1', category: 'asdAsq', text: 'Do you strongly prefer to do things on your own rather than with others?' },
  { id: 'asq_2', category: 'asdAsq', text: 'Do you frequently get so strongly absorbed in one thing that you lose sight of other things happening around you?' },
  { id: 'asq_3', category: 'asdAsq', text: 'Do you often notice small sounds when others do not?' },
  { id: 'asq_4', category: 'asdAsq', text: 'Do you usually notice details like car license plates, specific dates, or similar strings of information?' },
  { id: 'asq_6', category: 'asdAsq', text: 'Do you find yourself drawn more strongly to understanding things, objects, and systems rather than people?' },
  { id: 'asq_7', category: 'asdAsq', text: 'When you talk about your interests, does it often seem hard for others to get a word in edgeways?' },
  { id: 'asq_8', category: 'asdAsq', text: 'Are you fascinated by numbers, patterns, or categorizing specific types of information?' },
  { id: 'asq_9', category: 'asdAsq', text: "When reading a story or watching a movie, do you find it difficult to work out the characters' unspoken intentions or feelings?" },
  { id: 'asq_11', category: 'asdAsq', text: "When you talk on the phone, are you unsure when it's your turn to speak?" },
  { id: 'asq_12', category: 'asdAsq', text: 'Do you tend to notice details of a situation or object before you notice the big picture?' }
]

const options = [
  { label: 'Never', value: 0 },
  { label: 'Rarely', value: 1 },
  { label: 'Sometimes', value: 2 },
  { label: 'Often', value: 3 },
  { label: 'Very Often', value: 4 }
]

const categoryLabels = {
  adhd: 'ADHD Traits (Traditional)',
  asdClassic: 'Autism (Classic DSM-5)',
  asdModern: 'Autism (Modern/Internal)',
  asdAsq: 'Autism Quotient (ASQ)'
}

const categoryDescriptions = {
  adhd: 'Executive functioning, attention regulation, restlessness, and impulsive timing.',
  asdClassic: 'Traditional autism markers: social rules, routine rigidity, literalness, sensory load, and repetitive movements.',
  asdModern: 'Internalized autism markers: masking, burnout, demand avoidance, task inertia, sensory depletion, and recovery load.',
  asdAsq: 'AQ-style markers: systemizing, detail-focus, absorption, pattern attention, and social inference.'
}

const state = {
  currentIndex: 0,
  answers: Object.fromEntries(questions.map((question) => [question.id, null])),
  showingResults: false
}

function getLevel(percent) {
  if (percent < 35) return { text: 'Sub-Clinical / Low', className: 'low' }
  if (percent < 65) return { text: 'Moderate Traits', className: 'moderate' }
  return { text: 'High Likelihood', className: 'elevated' }
}

function emptyScores() {
  return Object.keys(categoryLabels).reduce((acc, category) => {
    acc[category] = { raw: 0, max: 0, percent: 0, level: getLevel(0) }
    return acc
  }, {})
}

function answeredCount() {
  return Object.values(state.answers).filter((value) => value !== null).length
}

function isCurrentAnswered() {
  return state.answers[questions[state.currentIndex].id] !== null
}

function calculateScores() {
  const scores = emptyScores()

  questions.forEach((question) => {
    scores[question.category].raw += Number(state.answers[question.id] ?? 0)
    scores[question.category].max += 4
  })

  Object.keys(scores).forEach((category) => {
    const score = scores[category]
    score.percent = Math.round((score.raw / score.max) * 100)
    score.level = getLevel(score.percent)
  })

  return scores
}

function generateProfile(scores) {
  const notes = []

  if (scores.asdModern.percent >= 65 && scores.asdClassic.percent < 50) {
    notes.push({
      title: 'High-Masking Autistic Profile',
      text: 'High Modern/Internal traits with lower Classic traits is the high-masking pattern: heavy internal load, active camouflage, externally managed presentation, and a higher risk of being missed by traditional screens.'
    })
  } else if (scores.asdClassic.percent >= 65 && scores.asdModern.percent >= 65) {
    notes.push({
      title: 'Classic & Internalized Autistic Profile',
      text: 'High scores across both classic and modern metrics indicate a broad autistic-neurotype pattern affecting both visible social navigation and internal regulation.'
    })
  }

  if (scores.adhd.percent >= 65) {
    notes.push({
      title: 'Prominent ADHD Profile',
      text: 'The ADHD cluster is strongly elevated: attention regulation, follow-through, organization, restlessness, and impulse timing. With elevated autism scores, this becomes an AuDHD-style friction profile.'
    })
  }

  if (scores.asdAsq.percent >= 65 && scores.asdClassic.percent < 50 && scores.asdModern.percent < 50) {
    notes.push({
      title: 'Systemizing Cognitive Style',
      text: 'The systemizing/detail pattern is dominant: strong pattern recognition, absorption, categorization, and object/system orientation without the same degree of distress signal.'
    })
  }

  if (scores.asdModern.percent < 35) {
    notes.push({ title: 'Low Internalized Autistic Traits', text: 'Masking, burnout, demand avoidance, and sensory-depletion traits are not meaningfully elevated.' })
  }
  if (scores.asdClassic.percent < 35) {
    notes.push({ title: 'Low Classic Autistic Traits', text: 'Traditional autistic markers are not meaningfully elevated.' })
  }
  if (scores.adhd.percent < 35) {
    notes.push({ title: 'Low ADHD Traits', text: 'Attention regulation and executive-function traits are not meaningfully elevated.' })
  }
  if (scores.asdAsq.percent < 35) {
    notes.push({ title: 'Low Systemizing Traits', text: 'Pattern-recognition and systemizing traits are not meaningfully elevated.' })
  }

  if (!notes.length) {
    notes.push({
      title: 'Moderate/Mixed Profile',
      text: 'Traits are present but do not strongly resolve into one dominant profile from this screening set alone.'
    })
  }

  return notes
}

function generateGuidance(scores) {
  const elevated = Object.values(scores).some((score) => score.percent >= 65)
  const moderate = Object.values(scores).some((score) => score.percent >= 35)

  if (elevated) {
    return {
      title: 'Formal Evaluation Priority: High',
      text: 'At least one trait cluster is clearly elevated. A formal evaluation is the right next step when the pattern is lifelong, cross-situational, and tied to impairment, burnout, accommodations, or repeated life friction.'
    }
  }

  if (moderate) {
    return {
      title: 'Formal Evaluation Priority: Conditional',
      text: 'Moderate scores can matter. Evaluation becomes more relevant when the traits are persistent, costly, or explain recurring friction in work, relationships, sensory tolerance, or daily execution.'
    }
  }

  return {
    title: 'Formal Evaluation Priority: Low',
    text: 'Scores do not strongly cluster into the ADHD or autism profiles represented by this screening tool.'
  }
}

function renderApp() {
  document.querySelector('#app').innerHTML = `
    <main class="app-shell">
      <header class="hero compact-hero">
        <p class="eyebrow">Screening tool</p>
        <h1>Neurodivergence Pre-Assessment</h1>
        <p class="lede">A direct self-report screener for ADHD traits, classic autism traits, internalized/high-masking autism traits, and AQ-style systemizing traits.</p>
        <div class="notice">
          <b>Use constraint:</b> This is a pre-assessment tool, not a formal diagnosis. Responses are processed locally in the browser and are not transmitted.
        </div>
      </header>

      <section id="assessment-stage" aria-label="Assessment"></section>
    </main>
  `

  if (state.showingResults) {
    renderResults()
  } else {
    renderQuestionScreen()
  }
}

function renderQuestionScreen() {
  const stage = document.querySelector('#assessment-stage')
  const question = questions[state.currentIndex]
  const progressPercent = Math.round((answeredCount() / questions.length) * 100)
  const selectedValue = state.answers[question.id]
  const isFirst = state.currentIndex === 0
  const isLast = state.currentIndex === questions.length - 1

  stage.innerHTML = `
    <div class="wizard-shell">
      <div class="wizard-progress" aria-label="Assessment progress">
        <div class="progress-copy">
          <span>Question ${state.currentIndex + 1} of ${questions.length}</span>
          <span>${answeredCount()} answered</span>
        </div>
        <div class="progress-track" aria-hidden="true"><span style="width:${progressPercent}%"></span></div>
      </div>

      <article class="wizard-card">
        <div class="question-meta">
          <span>${categoryLabels[question.category]}</span>
          <p>${categoryDescriptions[question.category]}</p>
        </div>

        <h2>${question.text}</h2>

        <div class="wizard-options" role="radiogroup" aria-label="Answer options">
          ${options.map((option) => `
            <button
              type="button"
              class="answer-option ${selectedValue === option.value ? 'selected' : ''}"
              data-value="${option.value}"
              aria-pressed="${selectedValue === option.value}"
            >
              <span>${option.label}</span>
              <small>${option.value}</small>
            </button>
          `).join('')}
        </div>

        <p class="answer-hint">${isCurrentAnswered() ? 'Answer saved.' : 'Choose an answer to continue.'}</p>
      </article>

      <div class="wizard-actions">
        <button type="button" class="ghost" id="back-btn" ${isFirst ? 'disabled' : ''}>Back</button>
        <button type="button" class="ghost" id="reset-btn">Reset</button>
        <button type="button" id="next-btn" ${!isCurrentAnswered() ? 'disabled' : ''}>${isLast ? 'Calculate Results' : 'Next'}</button>
      </div>
    </div>
  `

  document.querySelectorAll('.answer-option').forEach((button) => {
    button.addEventListener('click', () => {
      state.answers[question.id] = Number(button.dataset.value)
      renderQuestionScreen()
    })
  })

  document.querySelector('#back-btn').addEventListener('click', () => {
    if (state.currentIndex > 0) {
      state.currentIndex -= 1
      renderQuestionScreen()
    }
  })

  document.querySelector('#reset-btn').addEventListener('click', resetAssessment)

  document.querySelector('#next-btn').addEventListener('click', () => {
    if (!isCurrentAnswered()) return
    if (isLast) {
      state.showingResults = true
      renderResults()
    } else {
      state.currentIndex += 1
      renderQuestionScreen()
    }
  })
}

function renderResults() {
  const stage = document.querySelector('#assessment-stage')
  const scores = calculateScores()
  const profile = generateProfile(scores)
  const guidance = generateGuidance(scores)

  stage.innerHTML = `
    <div class="results-panel" role="status" aria-live="polite">
      <div class="results-header">
        <p class="eyebrow">Complete</p>
        <h2>Assessment Results</h2>
        <p class="result-disclaimer">Screening output only. Not a formal diagnosis or a replacement for clinician-administered assessment.</p>
      </div>

      <div class="score-grid">
        ${Object.entries(scores).map(([category, score]) => `
          <article class="score-card ${score.level.className}">
            <div class="score-topline">
              <h3>${categoryLabels[category]}</h3>
              <strong>${score.percent}%</strong>
            </div>
            <div class="bar" aria-hidden="true"><span style="width:${score.percent}%"></span></div>
            <p><b>${score.level.text}</b> · ${score.raw} / ${score.max}</p>
          </article>
        `).join('')}
      </div>

      <section class="result-section">
        <h3>Your Trait Profile</h3>
        <ul class="profile-list">
          ${profile.map((item) => `<li><b>${item.title}:</b> ${item.text}</li>`).join('')}
        </ul>
      </section>

      <section class="result-section guidance">
        <h3>${guidance.title}</h3>
        <p>${guidance.text}</p>
      </section>

      <div class="actions secondary-actions">
        <button type="button" id="copy-results">Copy results</button>
        <button type="button" id="print-results">Print / save PDF</button>
        <button type="button" class="ghost" id="edit-answers">Edit answers</button>
        <button type="button" class="ghost" id="start-over">Start over</button>
      </div>
    </div>
  `

  document.querySelector('#copy-results').addEventListener('click', () => copyResults(scores, guidance))
  document.querySelector('#print-results').addEventListener('click', () => window.print())
  document.querySelector('#edit-answers').addEventListener('click', () => {
    state.showingResults = false
    state.currentIndex = 0
    renderQuestionScreen()
  })
  document.querySelector('#start-over').addEventListener('click', resetAssessment)
  stage.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

async function copyResults(scores, guidance) {
  const lines = [
    'Neurodivergence pre-assessment results',
    '',
    ...Object.entries(scores).map(([category, score]) => `${categoryLabels[category]}: ${score.percent}% (${score.raw}/${score.max}) - ${score.level.text}`),
    '',
    `${guidance.title}: ${guidance.text}`
  ]

  try {
    await navigator.clipboard.writeText(lines.join('\n'))
    const button = document.querySelector('#copy-results')
    button.textContent = 'Copied'
    setTimeout(() => { button.textContent = 'Copy results' }, 1400)
  } catch {
    window.prompt('Copy results:', lines.join('\n'))
  }
}

function resetAssessment() {
  state.currentIndex = 0
  state.showingResults = false
  state.answers = Object.fromEntries(questions.map((question) => [question.id, null]))
  renderQuestionScreen()
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

renderApp()
